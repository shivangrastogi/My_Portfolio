import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import useIsMobile from "./hooks/useIsMobile";

const FADE_LEFT  = "linear-gradient(to right, #020b18, transparent)";
const FADE_RIGHT = "linear-gradient(to left,  #020b18, transparent)";

/* ── Desktop: pure CSS transform marquee (no changes) ── */
const DesktopMarquee = ({ items }) => (
  <div className="marquee-wrapper relative overflow-hidden">
    <div className="pointer-events-none absolute left-0 inset-y-0 w-20 sm:w-32 z-10" style={{ background: FADE_LEFT }} />
    <div className="pointer-events-none absolute right-0 inset-y-0 w-20 sm:w-32 z-10" style={{ background: FADE_RIGHT }} />
    <div className="marquee-track flex items-center gap-10 sm:gap-14 md:gap-16 py-6">
      {items.map((skill, i) => (
        <img
          key={`d-${skill.name}-${i}`}
          src={skill.icon}
          alt={skill.name}
          title={skill.name}
          loading="lazy"
          draggable={false}
          className="marquee-item flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain opacity-75 select-none"
        />
      ))}
    </div>
  </div>
);

/*
 * Mobile row: CSS animation handles smooth scroll.
 * Touch drag pauses animation, reads current translateX via DOMMatrix,
 * then on touchend sets a negative animation-delay so it resumes
 * from exactly where the user released — no jump, infinite loop.
 */
const MobileMarqueeRow = ({ items, reverse = false, duration = "22s" }) => {
  const wrapperRef = useRef(null);
  const trackRef   = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track   = trackRef.current;
    if (!wrapper || !track) return;

    let startX         = 0;
    let startTranslate = 0;
    let dragging       = false;

    const getCurrentX = () => {
      const t = window.getComputedStyle(track).transform;
      if (!t || t === "none") return 0;
      return new DOMMatrix(t).m41;
    };

    const wrap = (x) => {
      const half = track.scrollWidth / 2;
      if (x > 0)     return x - half;
      if (x < -half) return x + half;
      return x;
    };

    const onTouchStart = (e) => {
      startX         = e.touches[0].clientX;
      startTranslate = getCurrentX();
      track.style.animationPlayState = "paused";
      dragging = true;
    };

    const onTouchMove = (e) => {
      if (!dragging) return;
      const dx = e.touches[0].clientX - startX;
      track.style.transform = `translate3d(${wrap(startTranslate + dx)}px, 0, 0)`;
    };

    const onTouchEnd = () => {
      if (!dragging) return;
      dragging = false;

      const half     = track.scrollWidth / 2;
      const normX    = wrap(getCurrentX());
      const dur      = parseFloat(duration); // seconds

      /* map current position → animation progress → negative delay */
      const progress = reverse
        ? (normX + half) / half          // reverse: -half→0  maps to 0→1
        : Math.abs(normX) / half;        // forward:  0→-half maps to 0→1

      const delay = -(Math.max(0, Math.min(1, progress)) * dur);

      track.style.transform         = "";
      track.style.animationDelay    = `${delay}s`;
      track.style.animationPlayState = "running";
    };

    wrapper.addEventListener("touchstart",  onTouchStart, { passive: true });
    wrapper.addEventListener("touchmove",   onTouchMove,  { passive: true });
    wrapper.addEventListener("touchend",    onTouchEnd,   { passive: true });
    wrapper.addEventListener("touchcancel", onTouchEnd,   { passive: true });

    return () => {
      wrapper.removeEventListener("touchstart",  onTouchStart);
      wrapper.removeEventListener("touchmove",   onTouchMove);
      wrapper.removeEventListener("touchend",    onTouchEnd);
      wrapper.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [reverse, duration]);

  return (
    <div ref={wrapperRef} className="marquee-wrapper relative overflow-hidden cursor-grab active:cursor-grabbing">
      <div className="pointer-events-none absolute left-0 inset-y-0 w-12 z-10" style={{ background: FADE_LEFT }} />
      <div className="pointer-events-none absolute right-0 inset-y-0 w-12 z-10" style={{ background: FADE_RIGHT }} />
      <div
        ref={trackRef}
        className={`${reverse ? "marquee-track-reverse" : "marquee-track"} flex items-center gap-8 py-4`}
        style={{ animationDuration: duration }}
      >
        {items.map((skill, i) => (
          <img
            key={`m-${reverse ? "r" : "f"}-${skill.name}-${i}`}
            src={skill.icon}
            alt={skill.name}
            title={skill.name}
            loading="lazy"
            draggable={false}
            className="marquee-item flex-shrink-0 w-14 h-14 object-contain opacity-75 select-none"
          />
        ))}
      </div>
    </div>
  );
};

const Tech = () => {
  const isMobile = useIsMobile();

  const half = Math.ceil(technologies.length / 2);
  const row1 = [...technologies.slice(0, half), ...technologies.slice(0, half)];
  const row2 = [...technologies.slice(half),    ...technologies.slice(half)];
  const all  = [...technologies, ...technologies];

  return (
    <div className="w-full">
      <motion.div variants={textVariant()} className="text-center mb-8 sm:mb-12">
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
        {isMobile && (
          <p className="mt-2 text-secondary/60 text-[11px] font-mono tracking-[2px] uppercase">
            ← drag to explore →
          </p>
        )}
      </motion.div>

      {isMobile ? (
        <div className="flex flex-col gap-5">
          <MobileMarqueeRow items={row1} reverse={false} duration="22s" />
          <MobileMarqueeRow items={row2} reverse={true}  duration="30s" />
        </div>
      ) : (
        <DesktopMarquee items={all} />
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
