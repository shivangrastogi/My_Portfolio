import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import NeuralBackground from "./NeuralBackground";
import useIsMobile from "./hooks/useIsMobile";

const ROLES = [
  "AI / ML Engineer",
  "Full-Stack Developer",
  "Shopify Developer",
  "Computer Vision Engineer",
];

/* Typewriter that never glitches at the boundary */
const TypeWriter = () => {
  const [idx,  setIdx]  = useState(0);
  const [txt,  setTxt]  = useState("");
  const [del,  setDel]  = useState(false);
  const [wait, setWait] = useState(false);

  useEffect(() => {
    if (wait) return;
    const word  = ROLES[idx];
    const delay = del ? 35 : 85;

    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, txt.length + 1);
        setTxt(next);
        if (next === word) {
          setWait(true);
          setTimeout(() => { setWait(false); setDel(true); }, 1800);
        }
      } else {
        const next = word.slice(0, txt.length - 1);
        setTxt(next);
        if (next === "") {
          setDel(false);
          setIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, delay);

    return () => clearTimeout(t);
  }, [txt, del, idx, wait]);

  return (
    <span className="text-ai-cyan font-mono">
      {txt}
      <span className="animate-blink ml-0.5 font-light">▋</span>
    </span>
  );
};

/* Availability badge — pulsing green dot */
const StatusBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ai-green/30 bg-ai-green/8 w-fit">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ai-green opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-ai-green" />
    </span>
    <span className="text-ai-green text-[11px] font-mono font-bold tracking-wider">OPEN TO OPPORTUNITIES</span>
  </div>
);

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-primary">
      {/* Neural network canvas */}
      <NeuralBackground nodeCount={isMobile ? 30 : 50} opacity={0.38} />

      {/* Subtle grid */}
      <div className="absolute inset-0 ai-grid-bg pointer-events-none" />

      {/* Ambient blobs */}
      <div
        className="orb animate-float-orb w-[500px] h-[500px] top-[-150px] right-[-120px]"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)" }}
      />
      <div
        className="orb animate-float-orb w-[350px] h-[350px] bottom-[0px] left-[-100px]"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)", animationDelay: "5s" }}
      />

      {/* ── Content ── */}
      <div className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>

        {/* Accent line */}
        <div className="flex flex-col items-center mt-5 flex-shrink-0">
          <div className="w-4 h-4 rounded-full bg-ai-cyan shadow-glow-cyan animate-glow-pulse" />
          <div
            className="w-[2px] sm:h-80 h-40 mt-1"
            style={{ background: "linear-gradient(to bottom, #00d4ff 0%, rgba(0,212,255,0.1) 70%, transparent 100%)" }}
          />
        </div>

        {/* Text */}
        <div className="mt-4 sm:mt-5 flex-1 min-w-0">

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4 }}
          >
            <StatusBadge />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="mt-3 text-ai-cyan font-mono text-[12px] sm:text-[13px] tracking-[4px] uppercase"
          >
            &gt;_ Building intelligent systems
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.55 }}
            className={`${styles.heroHeadText} mt-1`}
          >
            Hi, I'm{" "}
            <span className="ai-gradient-text">Shivang</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={`${styles.heroSubText} mt-2 min-h-[44px] sm:min-h-[50px]`}
          >
            <TypeWriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-4 text-secondary text-[14px] sm:text-[15px] max-w-lg leading-relaxed"
          >
            Creator of <span className="text-ai-cyan font-semibold">A.E.R.I.S</span> AI assistant &amp; currently building
            production CRM &amp; data pipelines at{" "}
            <span className="text-ai-purple-light font-semibold">SehatUP</span>.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-7 flex gap-5 sm:gap-9 flex-wrap"
          >
            {[
              { value: "3+",  label: "AI Projects"   },
              { value: "85%", label: "CNN Accuracy"  },
              { value: "2+",  label: "Years Coding"  },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center relative">
                <p className="text-ai-cyan font-black text-[28px] sm:text-[38px] leading-none font-mono">{s.value}</p>
                <p className="text-secondary text-[10px] sm:text-[11px] mt-1 uppercase tracking-[2px]">{s.label}</p>
                {i < 2 && (
                  <div className="absolute right-[-10px] sm:right-[-18px] top-1 h-9 w-px bg-gradient-to-b from-transparent via-ai-cyan/25 to-transparent" />
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA buttons — always shown */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.88, duration: 0.45 }}
            className="mt-7 flex gap-3 flex-wrap"
          >
            <a
              href="#work"
              className="px-5 py-2.5 rounded-lg text-[13px] font-semibold text-primary bg-ai-cyan hover:opacity-90 active:scale-95 transition-all duration-150 shadow-glow-cyan"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg text-[13px] font-semibold text-ai-cyan border border-ai-cyan/40 hover:border-ai-cyan/75 hover:bg-ai-cyan/8 active:scale-95 transition-all duration-150"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* 3D model — desktop only */}
      {!isMobile && <ComputersCanvas />}

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-8 bottom-28 w-full flex justify-center items-center pointer-events-none">
        <a href="#about" aria-label="Scroll to About section" className="pointer-events-auto">
          <div className="w-[30px] h-[54px] rounded-3xl border-2 border-ai-cyan/45 flex justify-center items-start p-2 hover:border-ai-cyan/80 transition-colors shadow-glow-cyan">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-ai-cyan"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
