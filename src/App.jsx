import { BrowserRouter } from "react-router-dom";
import useIsMobile from "./components/hooks/useIsMobile";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const isMobile = useIsMobile()
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          {!isMobile && <StarsCanvas />}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
