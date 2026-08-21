"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PROFILE } from "@/data/projects";

const NAV_LINKS = [
  { label: "Home", section: "hero" },
  { label: "Work", section: "work" },
  { label: "About", section: "about" },
  { label: "Experience", section: "experience" },
  { label: "Skills", section: "skills" },
  { label: "Contact", section: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] }
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
      <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
        <div className="site-container nav-inner">
          <Link href={sectionHref("hero")} className="brand" onClick={() => setMenuOpen(false)}>
            bilal<span>_</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.section}
                href={sectionHref(link.section)}
                className={activeSection === link.section ? "nav-link nav-link-active" : "nav-link"}
                aria-current={activeSection === link.section ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href={PROFILE.resume} target="_blank" rel="noreferrer" className="button button-accent nav-resume">
            Resume <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.section}
              href={sectionHref(link.section)}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className={activeSection === link.section ? "mobile-nav-link mobile-nav-link-active" : "mobile-nav-link"}
            >
              {link.label}
            </a>
          ))}
          <a href={PROFILE.resume} target="_blank" rel="noreferrer" tabIndex={menuOpen ? 0 : -1} className="mobile-nav-resume" onClick={() => setMenuOpen(false)}>
            Download Resume ↗
          </a>
        </nav>
      </div>
    </>
  );
}
