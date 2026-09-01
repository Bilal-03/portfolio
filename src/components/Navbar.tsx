"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { PROFILE } from "@/data/projects";

const NAV_LINKS = [
  { label: "Overview", section: "hero" },
  { label: "Selected Work", section: "work" },
  { label: "Philosophy", section: "positioning" },
  { label: "Experience", section: "experience" },
  { label: "Competencies", section: "skills" },
  { label: "About", section: "about" },
];

function subscribeTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getThemeSnapshot(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
  return saved || "dark";
}

function getServerThemeSnapshot(): "dark" | "light" {
  return "dark";
}

const emptySubscribe = () => () => {};

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.dispatchEvent(new Event("storage"));
  };

  useEffect(() => {
    const sections = NAV_LINKS.map(({ section }) => document.getElementById(section)).filter(
      (section): section is HTMLElement => Boolean(section)
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const sectionHref = (section: string) => (pathname === "/" ? `#${section}` : `/#${section}`);

  return (
    <>
      <header className="navbar-wrapper">
        <div className="navbar-container">
          <Link href={sectionHref("hero")} className="navbar-logo" onClick={() => setMenuOpen(false)}>
            <span className="navbar-logo-badge">BC</span>
            <span>Bilal Choudhary</span>
          </Link>

          <nav className="navbar-nav" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.section}
                href={sectionHref(link.section)}
                className={`nav-link ${activeSection === link.section ? "active" : ""}`}
                aria-current={activeSection === link.section ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            {mounted && (
              <button
                type="button"
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  // Sun icon
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  // Moon icon
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
            )}

            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noreferrer"
              className="button button-primary button-small"
            >
              Resume <span aria-hidden="true">↗</span>
            </a>

            <button
              type="button"
              className="theme-toggle-btn md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-center p-6"
          style={{
            background: "var(--bg-glass)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          <div className="flex flex-col gap-5 text-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.section}
                href={sectionHref(link.section)}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-bold transition-colors ${
                  activeSection === link.section ? "text-emerald-400" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6 flex flex-col gap-3 max-w-xs mx-auto w-full">
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noreferrer"
                className="button button-primary button-large w-full"
                onClick={() => setMenuOpen(false)}
              >
                Download Resume ↗
              </a>
              <button
                type="button"
                className="button button-outline button-large w-full"
                onClick={() => setMenuOpen(false)}
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
