import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import useIsMobile from "./hooks/useIsMobile";

const FADE_LEFT  = "linear-gradient(to right, #020b18, transparent)";
const FADE_RIGHT = "linear-gradient(to left,  #020b18, transparent)";

const MarqueeRow = ({ items, reverse = false, duration }) => (
  <div className="marquee-wrapper relative overflow-hidden">
    <div className="pointer-events-none absolute left-0 inset-y-0 w-12 sm:w-20 z-10" style={{ background: FADE_LEFT }} />
    <div className="pointer-events-none absolute right-0 inset-y-0 w-12 sm:w-20 z-10" style={{ background: FADE_RIGHT }} />
    <div
      className={`${reverse ? "marquee-track-reverse" : "marquee-track"} flex items-center gap-8 sm:gap-10 md:gap-16 py-4 sm:py-6`}
      style={duration ? { animationDuration: duration } : undefined}
    >
      {items.map((skill, i) => (
        <img
          key={`${reverse ? "r" : "f"}-${skill.name}-${i}`}
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

const Tech = () => {
  const isMobile = useIsMobile();

  const half = Math.ceil(technologies.length / 2);
  const row1items = [...technologies.slice(0, half), ...technologies.slice(0, half)];
  const row2items = [...technologies.slice(half),  ...technologies.slice(half)];
  const allItems  = [...technologies, ...technologies];

  return (
    <div className="w-full">
      <motion.div variants={textVariant()} className="text-center mb-8 sm:mb-12">
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
        {isMobile && (
          <p className="mt-2 text-secondary/70 text-[11px] font-mono tracking-[2px] uppercase">
            ← drag to explore →
          </p>
        )}
      </motion.div>

      {isMobile ? (
        <div className="flex flex-col gap-4">
          <MarqueeRow items={row1items} reverse={false} duration="22s" />
          <MarqueeRow items={row2items} reverse={true}  duration="30s" />
        </div>
      ) : (
        <MarqueeRow items={allItems} />
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
