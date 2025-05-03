import React, { useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-8">
      {technologies.map((technology) => (
        <div key={technology.name} className="w-24 h-24 sm:w-28 sm:h-28">
          {isMobile ? (
            <div className="w-full h-full rounded-full bg-white shadow-md flex items-center justify-center">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-10 h-10 object-contain"
              />
            </div>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");






// import React, { useEffect, useState } from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 800px)");
//     setIsMobile(mediaQuery.matches);

//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <div className="flex flex-row flex-wrap justify-center gap-10">
//       {technologies.map((technology) => (
//         <div className="w-28 h-28" key={technology.name}>
//           {isMobile ? (
//             <img
//               src={technology.icon}
//               alt={technology.name}
//               className="w-full h-full object-contain"
//             />
//           ) : (
//             <BallCanvas icon={technology.icon} />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");



// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");
