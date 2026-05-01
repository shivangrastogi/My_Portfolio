import myLogo from "../assets/myLogo.png";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/shivangrastogi",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shivangrastogi",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:shivangrastogi73@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const NAV = ["About", "Work", "Contact"];

const Footer = () => (
  <footer className="relative bg-[#010712] overflow-hidden">
    {/* Top glow line */}
    <div className="w-full h-px bg-gradient-to-r from-transparent via-ai-cyan/25 to-transparent" />

    {/* Background grid */}
    <div className="absolute inset-0 ai-grid-bg opacity-30 pointer-events-none" />

    {/* Faint radial glow behind CTA */}
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse at top, rgba(0,212,255,0.06) 0%, transparent 70%)" }}
    />

    <div className="relative max-w-5xl mx-auto px-4 sm:px-8 pt-16 pb-10 flex flex-col items-center gap-10">

      {/* ── Big CTA headline ── */}
      <div className="text-center">
        <p className="text-ai-cyan font-mono text-[12px] tracking-[4px] uppercase mb-3">
          &gt;_ Let's connect
        </p>
        <h2 className="text-white font-black text-[28px] sm:text-[38px] md:text-[46px] leading-tight">
          Have a project in mind?
        </h2>
        <p className="mt-3 text-secondary text-[14px] sm:text-[15px] max-w-md mx-auto leading-relaxed">
          Whether it's an AI system, a full-stack product, or a Shopify store —
          I'm open to opportunities and collaborations.
        </p>
        <a
          href="mailto:shivangrastogi73@gmail.com"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ai-cyan text-primary font-bold text-[14px] hover:opacity-90 active:scale-95 transition-all duration-150 shadow-glow-cyan"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          shivangrastogi73@gmail.com
        </a>
      </div>

      {/* ── Divider ── */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* ── Social icons ── */}
      <div className="flex items-center gap-4">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-11 h-11 rounded-xl border border-ai-cyan/18 bg-ai-cyan/5 flex items-center justify-center text-secondary hover:text-ai-cyan hover:border-ai-cyan/50 hover:bg-ai-cyan/10 hover:shadow-glow-cyan transition-all duration-200"
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-white/5">
        {/* Logo + name */}
        <div className="flex items-center gap-2.5">
          <img src={myLogo} alt="logo" className="w-7 h-7 object-contain opacity-80" />
          <span className="text-secondary text-[13px] font-mono">
            Shivang Rastogi
          </span>
        </div>

        {/* Quick links */}
        <nav className="flex gap-5">
          {NAV.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              className="text-secondary hover:text-ai-cyan text-[12px] font-mono transition-colors duration-200"
            >
              {n}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-secondary/50 text-[11px] font-mono">
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
