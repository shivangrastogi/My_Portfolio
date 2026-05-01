/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#020b18",
        secondary: "#8892a4",
        tertiary: "#0a1628",
        "ai-cyan": "#00d4ff",
        "ai-cyan-dim": "#0096b4",
        "ai-purple": "#7c3aed",
        "ai-purple-light": "#a855f7",
        "ai-green": "#10b981",
        "ai-card": "#0a1628",
        "black-100": "#0a1628",
        "black-200": "#060f1e",
        "white-100": "#e8f4f8",
      },
      boxShadow: {
        card: "0 0 30px rgba(0, 212, 255, 0.08), 0 4px 32px rgba(0, 0, 0, 0.5)",
        "glow-cyan": "0 0 15px rgba(0, 212, 255, 0.4), 0 0 30px rgba(0, 212, 255, 0.12)",
        "glow-purple": "0 0 15px rgba(124, 58, 237, 0.4), 0 0 30px rgba(124, 58, 237, 0.12)",
        "glow-green": "0 0 15px rgba(16, 185, 129, 0.4), 0 0 30px rgba(16, 185, 129, 0.12)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
