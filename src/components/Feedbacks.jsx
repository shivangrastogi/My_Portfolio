import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { db } from "../firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";

// Feedback Card Component
const FeedbackCard = ({ index, testimonial, name, designation, company }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-6 sm:p-8 md:p-10 rounded-3xl border border-gray-700 flex flex-col justify-between min-h-[280px] md:min-h-[320px]"
  >
    <div>
      <p className="text-white font-black text-[36px] sm:text-[40px] md:text-[48px]">"</p>
      <p className="text-white tracking-wider text-[16px] sm:text-[17px] md:text-[18px] mt-2">{testimonial}</p>
    </div>

    {/* Bottom section */}
    <div className="mt-5 flex flex-col">
      <p className="text-white font-medium text-[14px] sm:text-[15px] md:text-[16px]">
        <span className="blue-text-gradient">@</span> {name}
      </p>
      <p className="mt-1 text-secondary text-[11px] sm:text-[12px] md:text-[12px]">
        {designation} of {company}
      </p>
    </div>
  </motion.div>
);

// Main Feedbacks Component
const Feedbacks = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const feedbacksRef = collection(db, "feedbacks");
        const q = query(
          feedbacksRef,
          where("approved", "==", true),
          orderBy("createdAt", "desc") // newest first
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      {/* Grid container for consistent bottom alignment */}
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7 auto-rows-fr`}
      >
        {testimonials.length === 0 ? (
          <p className="text-white text-center w-full">No testimonials yet.</p>
        ) : (
          testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.id} index={index} {...testimonial} />
          ))
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
