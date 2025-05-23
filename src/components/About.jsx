import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import useIsMobile from "./hooks/useIsMobile";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {

  const isMobile = useIsMobile();

  return (
    // <>
    //   <motion.div variants={textVariant()}>
    //     <p className={styles.sectionSubText}>Introduction</p>
    //     <h2 className={styles.sectionHeadText}>Overview.</h2>
    //   </motion.div>

    //   <motion.p
    //     variants={fadeIn("", "", 0.1, 1)}
    //     className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    //   >
    //     I'm Shivang Rastogi, a passionate full-stack developer skilled in Java,
    //     React, Node.js, and SQL. I specialize in building robust web
    //     applications and intuitive interfaces. With hands-on experience in
    //     project development and problem-solving, I'm eager to collaborate and
    //     transform your ideas into reality.
    //   </motion.p>

    //   <div className="mt-20 flex flex-wrap gap-10">
    //     {services.map((service, index) => (
    //       <ServiceCard key={service.title} index={index} {...service} />
    //     ))}
    //   </div>
    // </>
    <>
      {isMobile ? (
        <div>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </div>
      ) : (
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
      )}

      {isMobile ? (
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          I'm Shivang Rastogi...
        </p>
      ) : (
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm Shivang Rastogi...
        </motion.p>
      )}

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) =>
          isMobile ? (
            <div className="xs:w-[250px] w-full" key={index}>
              <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                  <img src={service.icon} className="w-16 h-16 object-contain" />
                  <h3 className="text-white text-[20px] font-bold text-center">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ) : (
            <ServiceCard key={service.title} index={index} {...service} />
          )
        )}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
