import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import useIsMobile from "./hooks/useIsMobile";
import NeuralBackground from "./NeuralBackground";

const OrbitalVisual = () => (
  <div className="w-full h-full flex items-center justify-center relative select-none pointer-events-none overflow-hidden">
    {/* Pulsing rings */}
    {[80, 130, 180, 230].map((size, i) => (
      <div
        key={i}
        className="absolute rounded-full border border-ai-cyan/10"
        style={{
          width: size,
          height: size,
          animation: `glowPulse ${3 + i}s ease-in-out infinite`,
          animationDelay: `${i * 0.7}s`,
        }}
      />
    ))}

    {/* Center node */}
    <div className="absolute w-16 h-16 rounded-full border-2 border-ai-cyan/50 flex items-center justify-center z-10 animate-glow-pulse bg-[#060f1e]">
      <div className="w-9 h-9 rounded-full bg-ai-cyan/15 border border-ai-cyan/40 flex items-center justify-center">
        <span className="text-[20px]">✉</span>
      </div>
    </div>

    {/* Rotating orbit 1 */}
    <div
      className="absolute flex items-start justify-center"
      style={{ width: 130, height: 130, animation: "spin 8s linear infinite" }}
    >
      <div className="w-3 h-3 rounded-full bg-ai-cyan shadow-glow-cyan" style={{ marginTop: "-6px" }} />
    </div>

    {/* Rotating orbit 2 */}
    <div
      className="absolute flex items-start justify-center"
      style={{ width: 180, height: 180, animation: "spin 14s linear infinite reverse" }}
    >
      <div className="w-2.5 h-2.5 rounded-full bg-ai-purple-light" style={{ marginTop: "-5px" }} />
    </div>

    {/* Rotating orbit 3 */}
    <div
      className="absolute flex items-start justify-center"
      style={{ width: 230, height: 230, animation: "spin 20s linear infinite" }}
    >
      <div className="w-2 h-2 rounded-full bg-ai-green" style={{ marginTop: "-4px" }} />
    </div>

    {/* Info cards */}
    <div className="absolute top-[8%] right-[5%] bg-[#060f1e] border border-ai-cyan/20 rounded-lg px-3 py-2 text-left">
      <p className="text-ai-cyan text-[9px] font-mono font-bold tracking-wider">RESPONSE TIME</p>
      <p className="text-white text-[12px] font-bold mt-0.5">&lt; 24 hours</p>
    </div>
    <div className="absolute bottom-[10%] left-[5%] bg-[#060f1e] border border-ai-purple/20 rounded-lg px-3 py-2">
      <p className="text-ai-purple-light text-[9px] font-mono font-bold tracking-wider">OPEN TO</p>
      <p className="text-white text-[12px] font-bold mt-0.5">Freelance / Full-time</p>
    </div>
    <div className="absolute bottom-[35%] right-[4%] bg-[#060f1e] border border-ai-green/20 rounded-lg px-3 py-2">
      <p className="text-ai-green text-[9px] font-mono font-bold tracking-wider">LOCATION</p>
      <p className="text-white text-[12px] font-bold mt-0.5">Remote / India</p>
    </div>
  </div>
);

const Modal = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 backdrop-blur-sm">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="bg-[#060f1e] p-8 rounded-2xl max-w-md w-full mx-4 text-center border border-ai-cyan/25 shadow-glow-cyan"
    >
      <div className="text-4xl mb-4">{message.startsWith("✅") ? "✅" : "⚠️"}</div>
      <p className="text-white text-[15px] mb-6 leading-relaxed">{message.replace(/^[✅⚠️]\s*/, "")}</p>
      <button
        onClick={onClose}
        className="px-6 py-2.5 rounded-lg bg-ai-cyan text-primary font-bold text-[14px] hover:opacity-90 transition-opacity"
      >
        Close
      </button>
    </motion.div>
  </div>
);

const Contact = () => {
  const isMobile = useIsMobile();
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Shivang Rastogi",
          from_email: form.email,
          to_email: "shivangrastogi73@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setModalMessage("✅ Your message has been sent successfully! I will get back to you soon.");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setLoading(false);
          setModalMessage("⚠️ Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="relative">
      {modalMessage && (
        <Modal message={modalMessage} onClose={() => setModalMessage("")} />
      )}

      <div className={`flex lg:flex-row flex-col gap-6 overflow-hidden`}>
        {/* Form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="lg:flex-[0.6] w-full"
        >
          <div className="bg-[#060f1e] border border-ai-cyan/12 rounded-2xl p-6 sm:p-8">
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-white text-[14px] font-semibold tracking-wide">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="ai-input"
                  required
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-white text-[14px] font-semibold tracking-wide">Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="ai-input"
                  required
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-white text-[14px] font-semibold tracking-wide">Message</span>
                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="ai-input resize-none"
                  required
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className={`mt-2 w-fit flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-[14px] transition-all duration-200 ${
                  loading
                    ? "bg-ai-cyan/30 text-ai-cyan/60 cursor-not-allowed"
                    : "bg-ai-cyan text-primary hover:opacity-90 hover:shadow-glow-cyan"
                }`}
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-ai-cyan/40 border-t-ai-cyan rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>Send Message →</>
                )}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Right side visual */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className={`lg:flex-[0.4] ${isMobile ? "h-[300px]" : "min-h-[500px]"} relative rounded-2xl overflow-hidden border border-ai-cyan/8 bg-[#060f1e]`}
        >
          <NeuralBackground nodeCount={25} opacity={0.3} />
          <OrbitalVisual />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
