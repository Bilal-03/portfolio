"use client";

import React, { useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 py-4 md:py-6 px-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
        <div className="font-bold text-xl tracking-tight hidden md:block"></div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase text-white/70">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors cursor-pointer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full border border-white/20 text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
            Resume
          </a>
        </div>
      </nav>

      {/* Mobile Hamburger/Close Button — outside nav so it stays above the menu overlay */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden fixed top-4 right-6 flex flex-col items-center justify-center gap-[5px] w-8 h-8"
        style={{ zIndex: 60 }}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {/* Mobile Full-Screen Menu — outside nav to avoid mix-blend-difference */}
      <div
        className={`fixed inset-0 bg-[#121212] backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 55, isolation: "isolate" }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-bold tracking-tight text-white hover:text-white/80 transition-colors uppercase"
          >
            {link.label}
          </a>
        ))}
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-8 py-3 rounded-full border border-white/30 text-sm font-semibold tracking-widest uppercase text-white hover:bg-white hover:text-black transition-all"
        >
          Resume
        </a>
      </div>
    </>
  );
}
