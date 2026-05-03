import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
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

const VideoModal = ({ src, poster, onClose }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close hint */}
        <div className="flex justify-end mb-2 pr-1">
          <button
            onClick={onClose}
            aria-label="Close video"
            className="flex items-center gap-2 text-white/60 hover:text-white text-[12px] font-mono transition-colors"
          >
            <span>ESC to close</span>
            <span className="w-6 h-6 rounded border border-white/30 flex items-center justify-center text-[11px] hover:border-white/60">✕</span>
          </button>
        </div>

        {/* Video container */}
        <div className="rounded-xl overflow-hidden border border-ai-cyan/25">
          <video
            src={src}
            poster={poster}
            controls
            autoPlay
            loop
            playsInline
            controlsList="nodownload"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            className="w-full block bg-black"
            style={{ display: "block", maxHeight: "80vh" }}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

const PlayOverlay = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Watch demo video"
    className="absolute inset-0 flex items-center justify-center group/play bg-black/25 hover:bg-black/15 transition-colors duration-200"
  >
    <div className="w-[60px] h-[60px] rounded-full bg-black/65 border-2 border-ai-cyan/70 flex items-center justify-center backdrop-blur-sm shadow-[0_0_24px_rgba(0,212,255,0.45)] group-hover/play:scale-110 group-hover/play:border-ai-cyan group-hover/play:bg-ai-cyan/25 transition-all duration-200">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-ai-cyan ml-0.5">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </button>
);

const FeaturedCard = ({ name, description, tags, image, source_code_link, video, onPlayVideo }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0, 0.7)}
    onClick={() => window.open(source_code_link, "_blank", "noopener,noreferrer")}
    className="w-full relative border border-ai-cyan/25 rounded-2xl overflow-hidden group transition-all duration-300 hover:border-ai-cyan/50 hover:shadow-glow-cyan cursor-pointer"
  >
    {/* Featured badge */}
    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-ai-cyan/15 border border-ai-cyan/40 backdrop-blur-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-ai-cyan animate-glow-pulse" />
      <span className="text-ai-cyan text-[11px] font-mono font-bold tracking-wider">FEATURED PROJECT</span>
    </div>

    {/* GitHub link */}
    <button
      onClick={(e) => { e.stopPropagation(); window.open(source_code_link, "_blank", "noopener,noreferrer"); }}
      aria-label={`View ${name} on GitHub`}
      className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 border border-ai-cyan/30 flex items-center justify-center backdrop-blur-sm hover:bg-ai-cyan/20 hover:border-ai-cyan/60 transition-all"
    >
      <img src={github} alt="" className="w-5 h-5 object-contain" />
    </button>

    <div className="flex flex-col lg:flex-row">
      {/* Image / video thumbnail */}
      <div className="lg:w-[55%] h-[240px] lg:h-auto relative overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {video && (
          <PlayOverlay onClick={(e) => { e.stopPropagation(); onPlayVideo(); }} />
        )}
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
    onClick={() => window.open(source_code_link, "_blank", "noopener,noreferrer")}
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
        onClick={(e) => { e.stopPropagation(); window.open(source_code_link, "_blank", "noopener,noreferrer"); }}
        aria-label={`View ${name} on GitHub`}
        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-ai-purple/30 hover:border-ai-purple/60 transition-all backdrop-blur-sm"
      >
        <img src={github} alt="" className="w-4 h-4 object-contain" />
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

const MobileCard = ({ project, index, onPlayVideo }) => {
  const isFirst = index === 0;
  return (
    <div
      onClick={() => window.open(project.source_code_link, "_blank", "noopener,noreferrer")}
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
        {onPlayVideo && (
          <PlayOverlay onClick={(e) => { e.stopPropagation(); onPlayVideo(); }} />
        )}
        <button
          onClick={(e) => { e.stopPropagation(); window.open(project.source_code_link, "_blank", "noopener,noreferrer"); }}
          aria-label={`View ${project.name} on GitHub`}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center backdrop-blur-sm"
        >
          <img src={github} alt="" className="w-4 h-4 object-contain" />
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
};

const Works = () => {
  const isMobile = useIsMobile();
  const [activeVideo, setActiveVideo] = useState(null);
  const [featured, ...rest] = projects;

  const openVideo = (project) => setActiveVideo({ src: project.video, poster: project.image });

  return (
    <>
      {activeVideo && (
        <VideoModal
          src={activeVideo.src}
          poster={activeVideo.poster}
          onClose={() => setActiveVideo(null)}
        />
      )}

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
            <MobileCard
              key={index}
              project={project}
              index={index}
              onPlayVideo={project.video ? () => openVideo(project) : null}
            />
          ))}
        </div>
      ) : (
        <>
          {/* Desktop: Featured card */}
          <div className="mt-12">
            <FeaturedCard
              {...featured}
              onPlayVideo={featured.video ? () => openVideo(featured) : null}
            />
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
