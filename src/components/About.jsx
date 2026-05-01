import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const SERVICE_DATA = [
  {
    title: "AI / ML Engineering",
    description: "Building production-grade ML pipelines, training deep learning models, and deploying AI solutions that solve real problems.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="24" cy="24" r="4" fill="#00d4ff" />
        <circle cx="8" cy="12" r="3" fill="#7c3aed" />
        <circle cx="40" cy="12" r="3" fill="#7c3aed" />
        <circle cx="8" cy="36" r="3" fill="#7c3aed" />
        <circle cx="40" cy="36" r="3" fill="#7c3aed" />
        <circle cx="24" cy="6" r="3" fill="#10b981" />
        <circle cx="24" cy="42" r="3" fill="#10b981" />
        <line x1="24" y1="20" x2="11" y2="13" stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="24" y1="20" x2="37" y2="13" stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="24" y1="28" x2="11" y2="35" stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="24" y1="28" x2="37" y2="35" stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="24" y1="20" x2="24" y2="9" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="24" y1="28" x2="24" y2="39" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" />
      </svg>
    ),
    color: "cyan",
    tag: "Primary",
  },
  {
    title: "Computer Vision",
    description: "Designing CNN architectures for real-time image recognition, emotion detection, and gesture-based interfaces with OpenCV.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <ellipse cx="24" cy="24" rx="20" ry="10" stroke="#7c3aed" strokeWidth="2" />
        <circle cx="24" cy="24" r="7" fill="none" stroke="#00d4ff" strokeWidth="2" />
        <circle cx="24" cy="24" r="3" fill="#00d4ff" />
        <circle cx="22" cy="22" r="1" fill="white" opacity="0.8" />
        <line x1="4" y1="24" x2="10" y2="24" stroke="#10b981" strokeWidth="1.5" />
        <line x1="38" y1="24" x2="44" y2="24" stroke="#10b981" strokeWidth="1.5" />
      </svg>
    ),
    color: "purple",
    tag: "Specialization",
  },
  {
    title: "Intelligent Automation",
    description: "Creating AI-powered automation tools like A.E.R.I.S that integrate NLP, system-level commands, and real-time data processing.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="14" y="10" width="20" height="24" rx="4" stroke="#00d4ff" strokeWidth="2" />
        <circle cx="24" cy="16" r="3" fill="#10b981" />
        <rect x="19" y="22" width="10" height="2" rx="1" fill="#7c3aed" opacity="0.8" />
        <rect x="19" y="26" width="7" height="2" rx="1" fill="#7c3aed" opacity="0.5" />
        <path d="M20 34 L20 38 M28 34 L28 38" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 38 L31 38" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="12" r="4" fill="none" stroke="#10b981" strokeWidth="1.5" />
        <path d="M34 12 L35.5 13.5 L38 10.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "green",
    tag: "Flagship",
  },
  {
    title: "Full-Stack & Shopify",
    description: "Building CRM systems, data pipelines, and Shopify stores at SehatUP — React, Firebase, Node.js, and end-to-end product delivery.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="4" y="8" width="40" height="26" rx="3" stroke="#00d4ff" strokeWidth="2" />
        <path d="M17 22 L13 26 L17 30" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M31 22 L35 26 L31 30" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 19 L22 33" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        <line x1="18" y1="40" x2="30" y2="40" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="34" x2="24" y2="40" stroke="#00d4ff" strokeWidth="2" />
      </svg>
    ),
    color: "cyan",
    tag: "Current Role",
  },
];

const colorMap = {
  cyan: {
    border: "border-ai-cyan/20 hover:border-ai-cyan/50",
    bg: "bg-ai-cyan/5",
    tag: "bg-ai-cyan/10 text-ai-cyan border-ai-cyan/30",
    glow: "hover:shadow-glow-cyan",
  },
  purple: {
    border: "border-ai-purple/20 hover:border-ai-purple-light/50",
    bg: "bg-ai-purple/5",
    tag: "bg-ai-purple/10 text-ai-purple-light border-ai-purple/30",
    glow: "hover:shadow-glow-purple",
  },
  green: {
    border: "border-ai-green/20 hover:border-ai-green/50",
    bg: "bg-ai-green/5",
    tag: "bg-ai-green/10 text-ai-green border-ai-green/30",
    glow: "hover:shadow-glow-green",
  },
};

const ServiceCard = ({ index, title, description, icon, color, tag }) => {
  const c = colorMap[color] || colorMap.cyan;
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      className={`relative border ${c.border} ${c.bg} ${c.glow} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 cursor-default group`}
    >
      {/* Tag */}
      <span className={`absolute top-4 right-4 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${c.tag}`}>
        {tag}
      </span>

      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="text-white font-bold text-[18px] leading-tight">{title}</h3>
      <p className="text-secondary text-[13px] leading-relaxed">{description}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[32px]"
      >
        I'm a <span className="text-ai-cyan font-semibold">Full-Stack & AI/ML Engineer</span> currently building production CRM systems and data pipelines at{" "}
        <span className="text-ai-purple-light font-semibold">SehatUP</span> using React, Firebase &amp; Shopify.
        Alongside, I specialize in Deep Learning &amp; Computer Vision — creator of{" "}
        <span className="text-ai-cyan font-semibold">A.E.R.I.S</span> (AI laptop assistant with NLP &amp; gesture control)
        and <span className="text-ai-purple-light font-semibold">AuraPulse</span> (CNN emotion engine, 85% accuracy).
        I bridge the gap between intelligent systems and scalable web products.
      </motion.p>

      {/* Highlight chips */}
      <motion.div
        variants={fadeIn("", "", 0.2, 0.8)}
        className="mt-6 flex flex-wrap gap-2"
      >
        {["Python", "TensorFlow", "OpenCV", "React", "Firebase", "Shopify", "NLP", "CNNs"].map((chip) => (
          <span key={chip} className="skill-chip text-[12px]">{chip}</span>
        ))}
      </motion.div>

      {/* Service cards */}
      <div className="mt-14 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICE_DATA.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
