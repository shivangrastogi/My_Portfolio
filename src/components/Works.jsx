import React from "react";
import { motion } from "framer-motion";
import useIsMobile from "./hooks/useIsMobile";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const TAG_STYLES = {
  "blue-text-gradient": "text-ai-cyan border-ai-cyan/30 bg-ai-cyan/5",
  "green-text-gradient": "text-ai-green border-ai-green/30 bg-ai-green/5",
  "pink-text-gradient": "text-ai-purple-light border-ai-purple/30 bg-ai-purple/5",
  "orange-text-gradient": "text-orange-400 border-orange-400/30 bg-orange-400/5",
};

const FeaturedCard = ({ name, description, tags, image, source_code_link }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0, 0.7)}
    onClick={() => window.open(source_code_link, "_blank")}
    className="w-full relative border border-ai-cyan/25 rounded-2xl overflow-hidden group transition-all duration-300 hover:border-ai-cyan/50 hover:shadow-glow-cyan cursor-pointer"
  >
    {/* Featured badge */}
    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-ai-cyan/15 border border-ai-cyan/40 backdrop-blur-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-ai-cyan animate-glow-pulse" />
      <span className="text-ai-cyan text-[11px] font-mono font-bold tracking-wider">FEATURED PROJECT</span>
    </div>

    {/* GitHub link */}
    <button
      onClick={() => window.open(source_code_link, "_blank")}
      className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 border border-ai-cyan/30 flex items-center justify-center backdrop-blur-sm hover:bg-ai-cyan/20 hover:border-ai-cyan/60 transition-all"
    >
      <img src={github} alt="github" className="w-5 h-5 object-contain" />
    </button>

    <div className="flex flex-col lg:flex-row">
      {/* Image */}
      <div className="lg:w-[55%] h-[240px] lg:h-auto relative overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#020b18] hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020b18] to-transparent lg:hidden" />
      </div>

      {/* Content */}
      <div className="lg:w-[45%] p-6 lg:p-8 flex flex-col justify-center bg-[#060f1e]">
        <p className="text-ai-cyan font-mono text-[11px] tracking-[3px] uppercase mb-2">AI Voice Assistant</p>
        <h3 className="text-white font-black text-[26px] sm:text-[30px] leading-tight mb-4">{name}</h3>
        <p className="text-secondary text-[14px] leading-relaxed mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border ${TAG_STYLES[tag.color] || "text-white border-white/20"}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => (
  <motion.div
    variants={fadeIn("up", "spring", (index - 1) * 0.15, 0.6)}
    onClick={() => window.open(source_code_link, "_blank")}
    className="w-full sm:w-[360px] flex flex-col border border-white/6 rounded-2xl overflow-hidden group transition-all duration-300 hover:border-ai-purple/40 hover:shadow-glow-purple bg-[#060f1e] cursor-pointer"
  >
    <div className="relative h-[200px] overflow-hidden">
      <img
        src={image}
        alt={name}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e] via-transparent to-transparent" />
      <button
        onClick={() => window.open(source_code_link, "_blank")}
        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-ai-purple/30 hover:border-ai-purple/60 transition-all backdrop-blur-sm"
      >
        <img src={github} alt="github" className="w-4 h-4 object-contain" />
      </button>
    </div>

    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-white font-bold text-[18px] leading-tight mb-2">{name}</h3>
      <p className="text-secondary text-[13px] leading-relaxed flex-1">{description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${TAG_STYLES[tag.color] || "text-white border-white/20"}`}
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Works = () => {
  const isMobile = useIsMobile();
  const [featured, ...rest] = projects;

  const CardWrapper = ({ project, index }) => {
    if (isMobile) {
      const isFirst = index === 0;
      return (
        <div
          onClick={() => window.open(project.source_code_link, "_blank")}
          className={`cursor-pointer ${isFirst ? "w-full border border-ai-cyan/25 rounded-2xl overflow-hidden bg-[#060f1e]" : "w-full border border-white/6 rounded-2xl overflow-hidden bg-[#060f1e]"}`}
        >
          {isFirst && (
            <div className="flex items-center gap-1.5 px-4 py-2 bg-ai-cyan/8 border-b border-ai-cyan/15">
              <span className="w-1.5 h-1.5 rounded-full bg-ai-cyan animate-glow-pulse" />
              <span className="text-ai-cyan text-[10px] font-mono font-bold tracking-wider">FEATURED PROJECT</span>
            </div>
          )}
          <div className="relative h-[200px] overflow-hidden">
            <img src={project.image} alt={project.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e] via-transparent to-transparent" />
            <button
              onClick={() => window.open(project.source_code_link, "_blank")}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center backdrop-blur-sm"
            >
              <img src={github} alt="github" className="w-4 h-4 object-contain" />
            </button>
          </div>
          <div className="p-5">
            <h3 className="text-white font-bold text-[18px] mb-2">{project.name}</h3>
            <p className="text-secondary text-[13px] leading-relaxed mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${TAG_STYLES[tag.color] || "text-white border-white/20"}`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-relaxed"
      >
        From AI voice assistants to production health-tech platforms — every project is built to solve
        a <span className="text-ai-cyan font-medium">real problem</span> and ship at production quality.
      </motion.p>

      {/* Mobile layout */}
      {isMobile ? (
        <div className="mt-10 flex flex-col gap-6">
          {projects.map((project, index) => (
            <CardWrapper key={index} project={project} index={index} />
          ))}
        </div>
      ) : (
        <>
          {/* Desktop: Featured card */}
          <div className="mt-12">
            <FeaturedCard {...featured} />
          </div>

          {/* Desktop: Other projects */}
          <div className="mt-8 flex flex-wrap gap-6 justify-start">
            {rest.map((project, index) => (
              <ProjectCard key={index} index={index + 1} {...project} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
