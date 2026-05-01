import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => (
  <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-4 text-center">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-6"
    >
      <p className="text-ai-cyan font-mono text-[13px] tracking-[4px] uppercase">&gt;_ 404 not found</p>

      <h1 className="text-white font-black text-[60px] sm:text-[80px] leading-none">
        4<span className="text-ai-cyan">0</span>4
      </h1>

      <p className="text-secondary text-[15px] max-w-sm leading-relaxed">
        This page doesn't exist. It may have been moved or the URL is incorrect.
      </p>

      <Link
        to="/"
        className="mt-2 px-6 py-3 rounded-xl bg-ai-cyan text-primary font-bold text-[14px] hover:opacity-90 active:scale-95 transition-all duration-150 shadow-glow-cyan"
      >
        ← Back to Home
      </Link>
    </motion.div>
  </div>
);

export default NotFound;
