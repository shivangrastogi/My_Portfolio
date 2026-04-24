import { BallCanvas } from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

import { useInView } from "react-intersection-observer";

const BallSlot = ({ icon }) => {
  const { ref, inView } = useInView({
    rootMargin: "50px 0px",
  });

  return (
    <div ref={ref} className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-32 lg:h-32 flex-shrink-0">
      {inView && <BallCanvas icon={icon} />}
    </div>
  );
};

const Tech = () => {
  const row1 = technologies.slice(0, 7);
  const row2 = technologies.slice(7, 13);
  const row3 = technologies.slice(13);

  return (
    <div className="w-full">
      <div className="text-center mb-10 sm:mb-14">
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </div>

      {/* Mobile & Tablet Layout (Flexible Wrap) */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:hidden">
        {technologies.map((t) => (
          <BallSlot key={t.name} icon={t.icon} />
        ))}
      </div>

      {/* Desktop Layout (7, 6, 1) */}
      <div className="hidden lg:flex flex-col items-center gap-10">
        <div className="flex flex-nowrap justify-center gap-7">
          {row1.map((t) => (
            <BallSlot key={t.name} icon={t.icon} />
          ))}
        </div>
        <div className="flex flex-nowrap justify-center gap-7">
          {row2.map((t) => (
            <BallSlot key={t.name} icon={t.icon} />
          ))}
        </div>
        <div className="flex justify-center">
          {row3.map((t) => (
            <BallSlot key={t.name} icon={t.icon} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default SectionWrapper(Tech, "");
