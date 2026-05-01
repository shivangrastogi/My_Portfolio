import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  /* Duplicate list for seamless loop — the CSS animation translates -50% */
  const items = [...technologies, ...technologies];

  return (
    <div className="w-full">
      <motion.div variants={textVariant()} className="text-center mb-12">
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="marquee-wrapper relative overflow-hidden">
        {/* Edge fades */}
        <div
          className="pointer-events-none absolute left-0 inset-y-0 w-20 sm:w-32 z-10"
          style={{ background: "linear-gradient(to right, #020b18, transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 inset-y-0 w-20 sm:w-32 z-10"
          style={{ background: "linear-gradient(to left, #020b18, transparent)" }}
        />

        <div className="marquee-track flex items-center gap-10 sm:gap-14 md:gap-16 py-6">
          {items.map((skill, i) => (
            <img
              key={`${skill.name}-${i}`}
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
    </div>
  );
};

export default SectionWrapper(Tech, "");
