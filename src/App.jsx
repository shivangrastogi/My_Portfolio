import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Hero       = lazy(() => import("./components/Hero"));
const About      = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech       = lazy(() => import("./components/Tech"));
const Works      = lazy(() => import("./components/Works"));
const Feedbacks  = lazy(() => import("./components/Feedbacks"));
const Contact    = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const FeedbackForm = lazy(() => import("./components/FeedbackForm"));
const ThankYouPage = lazy(() => import("./components/ThankYouPage"));
const AdminLogin     = lazy(() => import("./admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./admin/AdminDashboard"));

const Divider = () => <div className="section-divider mx-auto my-2" />;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="flex flex-col justify-center items-center h-screen bg-primary gap-4">
          <div className="w-12 h-12 border-2 border-ai-cyan/30 border-t-ai-cyan rounded-full animate-spin" />
          <p className="text-ai-cyan font-mono text-[13px] tracking-[4px] uppercase">Initializing AI...</p>
        </div>
      }>
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative z-0 bg-primary">
                {/* Hero — full bleed */}
                <div>
                  <Navbar />
                  <Hero />
                </div>

                {/* Content sections */}
                <About />
                <Divider />
                <Experience />
                <Divider />
                <Tech />
                <Divider />
                <Works />
                <Divider />
                <Feedbacks />
                <Divider />

                {/* Contact + stars */}
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>

                <Footer />
                <ScrollToTop />
              </div>
            }
          />
          <Route path="/feedback"          element={<FeedbackForm />} />
          <Route path="/thank-you"         element={<ThankYouPage />} />
          <Route path="/admin/login"       element={<AdminLogin />} />
          <Route path="/admin/dashboard"   element={<AdminDashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
