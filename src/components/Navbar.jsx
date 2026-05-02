import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import myLogo from "../assets/myLogo.webp";

const Navbar = () => {
  const [active, setActive]   = useState("");
  const [toggle, setToggle]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef(null);

  /* Scroll-shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section via IntersectionObserver */
  useEffect(() => {
    const sections = navLinks.map(({ id }) => document.getElementById(id)).filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observerRef.current.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  /* Close mobile menu on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (toggle && !e.target.closest("[data-nav]")) setToggle(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [toggle]);

  return (
    <nav
      data-nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(2,11,24,0.93)] backdrop-blur-md border-b border-ai-cyan/10 shadow-[0_2px_24px_rgba(0,0,0,0.55)]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-ai-cyan/15 blur-sm group-hover:bg-ai-cyan/25 transition-all duration-300" />
            <img src={myLogo} alt="Shivang logo" fetchpriority="high" className="w-9 h-9 object-contain relative z-10" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white text-[17px] font-bold font-mono">Shivang</span>
            <span className="text-ai-cyan text-[10px] tracking-[3px] uppercase hidden sm:block font-mono">
              AI/ML · Full-Stack
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="list-none hidden sm:flex flex-row items-center gap-7">
          {navLinks.map((nav) => {
            const isActive = active === nav.id;
            return (
              <li key={nav.id} className="relative group">
                <a
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.id)}
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    isActive ? "text-ai-cyan" : "text-secondary hover:text-white"
                  }`}
                >
                  {nav.title}
                </a>
                <span
                  className={`absolute -bottom-1 left-0 h-[1.5px] rounded-full bg-ai-cyan transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            );
          })}

          <li>
            <a
              href="#contact"
              onClick={() => setActive("contact")}
              className="ml-2 px-4 py-2 rounded-lg border border-ai-cyan/40 text-ai-cyan text-[13px] font-semibold font-mono hover:bg-ai-cyan/10 hover:border-ai-cyan/70 transition-all duration-200"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            data-nav
            onClick={() => setToggle((v) => !v)}
            className="w-9 h-9 flex flex-col justify-center items-center gap-[5px]"
            aria-label="Toggle menu"
            aria-expanded={toggle}
          >
            <span className={`w-5 h-[2px] bg-ai-cyan rounded-full transition-all duration-300 origin-center ${toggle ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-5 h-[2px] bg-ai-cyan rounded-full transition-all duration-300 ${toggle ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`w-5 h-[2px] bg-ai-cyan rounded-full transition-all duration-300 origin-center ${toggle ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>

          {/* Dropdown */}
          <div
            data-nav
            className={`absolute top-[68px] right-4 min-w-[200px] z-10 transition-all duration-250 ${
              toggle ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <div className="bg-[#040e1d] border border-ai-cyan/15 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.7)]">
              <ul className="flex flex-col gap-1">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <a
                      href={`#${nav.id}`}
                      onClick={() => { setToggle(false); setActive(nav.id); }}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-200 ${
                        active === nav.id
                          ? "text-ai-cyan bg-ai-cyan/10"
                          : "text-secondary hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="text-ai-cyan text-[10px] font-mono">&gt;</span>
                      {nav.title}
                    </a>
                  </li>
                ))}
                <li className="mt-2 pt-2 border-t border-ai-cyan/10">
                  <a
                    href="#contact"
                    onClick={() => { setToggle(false); setActive("contact"); }}
                    className="block text-center px-3 py-2 rounded-lg bg-ai-cyan/10 border border-ai-cyan/30 text-ai-cyan text-[13px] font-semibold font-mono hover:bg-ai-cyan/18 transition-all duration-200"
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
