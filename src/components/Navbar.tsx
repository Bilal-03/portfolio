"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[var(--color-background)]/85 backdrop-blur-xl border-b border-[var(--color-border)]"
            : "py-5 md:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          <a
            href="#hero"
            className="font-mono text-xs font-medium tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-accent-bright)] transition-colors"
          >
            bilal<span className="text-[var(--color-accent)]">_</span>dev
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors duration-300 rounded-lg hover:bg-white/[0.03]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] font-semibold px-4 py-2 rounded-lg bg-[var(--color-accent)] text-[#06120e] hover:bg-[var(--color-accent-bright)] transition-all duration-300"
            >
              Resume ↗
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative flex flex-col items-center justify-center gap-[5px] w-8 h-8"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-[var(--color-text-primary)] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-[var(--color-text-primary)] transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-[var(--color-text-primary)] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[var(--color-background)]/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-2 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="text-3xl font-semibold tracking-tight text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors py-2"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 text-sm font-mono text-[var(--color-accent)] border border-[var(--color-accent)]/30 px-6 py-3 rounded-lg"
            >
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
