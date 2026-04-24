import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const FeedbackForm = lazy(() => import("./components/FeedbackForm"));
const ThankYouPage = lazy(() => import("./components/ThankYouPage"));

import CanvasLoader from "./components/Loader";

// Admin pages
const AdminLogin = lazy(() => import("./admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./admin/AdminDashboard"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="flex flex-col justify-center items-center h-screen bg-primary text-white">
          <div className='w-10 h-10 border-4 border-t-purple-500 border-purple-200 rounded-full animate-spin mb-4' />
          <p className="text-xl font-bold tracking-widest">LOADING PORTFOLIO...</p>
        </div>
      }>
        <Routes>
          {/* Public portfolio */}
          <Route
            path="/"
            element={
              <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar />
                  <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
              </div>
            }
          />
          {/* Private feedback form link */}
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/thank-you" element={<ThankYouPage />} />

          {/* Admin Panel */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
