import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { db } from "../firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";

const FeedbackCard = ({ index, testimonial, name, designation, company }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.6)}
    className="ai-card-border rounded-2xl p-6 flex flex-col justify-between min-h-[240px] group"
  >
    <div>
      <span className="text-ai-cyan text-[42px] leading-none font-black opacity-60">"</span>
      <p className="text-[#c8d6e5] text-[14px] sm:text-[15px] leading-relaxed mt-1">{testimonial}</p>
    </div>

    <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-ai-cyan/15 border border-ai-cyan/30 flex items-center justify-center flex-shrink-0">
        <span className="text-ai-cyan text-[13px] font-bold font-mono">
          {name.charAt(0).toUpperCase()}
        </span>
      </div>
      <div>
        <p className="text-white font-semibold text-[14px]">
          <span className="text-ai-cyan">@</span> {name}
        </p>
        <p className="text-secondary text-[11px] mt-0.5 font-mono">
          {designation} · {company}
        </p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const feedbacksRef = collection(db, "feedbacks");
        const q = query(
          feedbacksRef,
          where("approved", "==", true),
          orderBy("createdAt", "desc")
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
    <div className="relative overflow-hidden rounded-2xl">
      {/* Header */}
      <div className="bg-[#060f1e] border border-ai-cyan/10 rounded-2xl px-6 sm:px-8 py-10 mb-6">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.2, 0.8)}
          className="mt-4 text-secondary text-[14px] max-w-xl leading-relaxed"
        >
          Real feedback from people I've worked with — internship supervisors, mentors, and collaborators.
        </motion.p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {testimonials.length === 0 ? (
          <div className="col-span-full flex flex-col items-center py-12 gap-4">
            <div className="w-12 h-12 rounded-full border border-ai-cyan/20 flex items-center justify-center">
              <span className="text-ai-cyan text-xl">⋯</span>
            </div>
            <p className="text-secondary text-[14px] font-mono">No testimonials yet.</p>
          </div>
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
