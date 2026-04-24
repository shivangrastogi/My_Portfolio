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
    <div ref={ref} className="w-[90px] h-[90px] sm:w-32 sm:h-32 flex-shrink-0">
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

      <div className="flex flex-col items-center gap-8 sm:gap-10">
        <div className="flex flex-wrap justify-center gap-5 sm:gap-7">
          {row1.map((t) => (
            <BallSlot key={t.name} icon={t.icon} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-5 sm:gap-7">
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
