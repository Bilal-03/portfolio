"use client";

import { useEffect, useRef } from "react";

const SOCIALS = [
  {
    label: "Email",
    href: "mailto:bilal2512@gmail.com",
    value: "bilal2512@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/Bilal-03",
    value: "@Bilal-03",
  },
];

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((node, i) => {
            (node as HTMLElement).style.transitionDelay = `${i * 100}ms`;
            node.classList.add("is-visible");
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-36 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="section-divider max-w-6xl mx-auto mb-24 md:mb-32" />

      <div className="relative max-w-6xl mx-auto">
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(29,158,117,0.11) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="reveal text-center mb-16 md:mb-20">
          <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-[var(--color-accent)] mb-6">
            06 — Contact
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.05] text-[var(--color-text-primary)] mb-6">
            Let&apos;s build
            <br />
            <span className="text-[var(--color-accent-bright)]">something useful.</span>
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed max-w-lg mx-auto">
            Open to engineering roles, product collaborations, and meaningful
            challenges across tech and business.
          </p>
        </div>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="mailto:bilal2512@gmail.com"
            className="group inline-flex items-center gap-2.5 bg-[var(--color-accent)] text-black px-7 py-3.5 rounded-lg text-sm font-semibold hover:brightness-110 transition-all duration-300 active:scale-[0.98]"
          >
            Send a Message
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 border border-[var(--color-border)] text-[var(--color-text-secondary)] px-7 py-3.5 rounded-lg text-sm font-medium hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-20">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="group p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] transition-all duration-300 text-center"
            >
              <p className="text-[10px] font-mono tracking-[0.15em] uppercase text-[var(--color-text-tertiary)] mb-1">
                {social.label}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors">
                {social.value}
              </p>
            </a>
          ))}
        </div>

        <div className="reveal flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--color-border)] text-[11px] font-mono text-[var(--color-text-tertiary)] tracking-wider uppercase">
          <p>Software Engineer · Product · Tech Enthusiast</p>
          <p>© 2026 Bilal Choudhary</p>
        </div>
      </div>
    </footer>
  );
}
