import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(6, 15, 30, 0.95)",
        border: "1px solid rgba(0, 212, 255, 0.15)",
        borderRadius: "16px",
        boxShadow: "0 0 20px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,212,255,0.05)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(0, 212, 255, 0.2)" }}
      date={
        <span className="text-ai-cyan font-mono text-[13px] tracking-wider">
          {experience.date}
        </span>
      }
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 0 3px rgba(0, 212, 255, 0.25), 0 0 15px rgba(0,212,255,0.15)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="object-contain max-w-[80%] max-h-[80%]"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[20px] font-bold">{experience.title}</h3>
        <div className="flex flex-wrap justify-between items-center gap-2 mt-1">
          <p className="text-ai-cyan text-[14px] font-semibold font-mono" style={{ margin: 0 }}>
            {experience.company_name}
          </p>
          {experience.location && (
            <p className="text-secondary text-[12px] font-mono italic">
              📍 {experience.location}
            </p>
          )}
        </div>
      </div>

      <ul className="mt-5 space-y-2.5">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[#c8d6e5] text-[13px] pl-4 tracking-wide leading-relaxed relative before:content-['▸'] before:absolute before:left-0 before:text-ai-cyan"
          >
            <ReactMarkdown>{point}</ReactMarkdown>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
      </motion.div>

      <div className="mt-16 flex flex-col">
        {/* animate={false} disables the timeline's own scroll triggers that cause jitter */}
        <VerticalTimeline animate={false} lineColor="rgba(0, 212, 255, 0.25)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
