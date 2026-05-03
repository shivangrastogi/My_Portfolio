import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import useIsMobile from "./hooks/useIsMobile";

const FADE_LEFT  = "linear-gradient(to right, #020b18, transparent)";
const FADE_RIGHT = "linear-gradient(to left,  #020b18, transparent)";

/* ── Desktop: pure CSS transform marquee ── */
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

/* ── Mobile: scrollLeft-based auto-scroll so touch drag works natively ── */
const MobileMarqueeRow = ({ items, speed }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let animId;
    let prev = null;
    let touching = false;

    const onTouchStart  = () => { touching = true; };
    const onTouchEnd    = () => { touching = false; };
    const onTouchCancel = () => { touching = false; };

    const tick = (ts) => {
      if (!touching) {
        const dt = prev != null ? Math.min(ts - prev, 32) : 16;
        el.scrollLeft += speed * dt;
        /* seamless loop: second half is a duplicate of the first */
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      prev = ts;
      animId = requestAnimationFrame(tick);
    };

    el.addEventListener("touchstart",  onTouchStart,  { passive: true });
    el.addEventListener("touchend",    onTouchEnd,    { passive: true });
    el.addEventListener("touchcancel", onTouchCancel, { passive: true });
    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener("touchstart",  onTouchStart);
      el.removeEventListener("touchend",    onTouchEnd);
      el.removeEventListener("touchcancel", onTouchCancel);
    };
  }, [speed]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-0 inset-y-0 w-10 z-10" style={{ background: FADE_LEFT }} />
      <div className="pointer-events-none absolute right-0 inset-y-0 w-10 z-10" style={{ background: FADE_RIGHT }} />
      <div
        ref={ref}
        className="overflow-x-scroll scrollbar-hide"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex items-center gap-8 py-4 px-2" style={{ width: "max-content" }}>
          {items.map((skill, i) => (
            <img
              key={`m-${skill.name}-${i}`}
              src={skill.icon}
              alt={skill.name}
              title={skill.name}
              loading="lazy"
              draggable={false}
              className="flex-shrink-0 w-14 h-14 object-contain opacity-80 select-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Tech = () => {
  const isMobile = useIsMobile();

  const half = Math.ceil(technologies.length / 2);
  /* duplicate each row's items for the seamless loop */
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
          {/* Row 1 — faster */}
          <MobileMarqueeRow items={row1} speed={0.045} />
          {/* Row 2 — slower (async feel) */}
          <MobileMarqueeRow items={row2} speed={0.028} />
        </div>
      ) : (
        <DesktopMarquee items={all} />
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
