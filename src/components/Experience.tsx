"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const EXPERIENCES = [
  {
    title: "Project Coordinator (Intern)",
    company: "Digital Data Solutions",
    location: "On-site",
    period: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Coordinating end-to-end scanning and digitisation projects, ensuring quality control and timely delivery of large-scale document processing initiatives.",
      "Managing project timelines, resource allocation, and cross-functional team coordination to optimise turnaround times for digitisation tasks.",
      "Driving process improvement initiatives and stakeholder communication in a company that leads in scanning and digitisation services.",
    ],
  },
  {
    title: "SDE Intern",
    company: "Techpanion Solutions",
    location: "Remote",
    period: "Jun 2024 – Jul 2024",
    current: false,
    bullets: [
      "Built AI-powered invoice extraction microservice using Python, Flask, OpenCV, Tesseract OCR, spaCy achieving 84% accuracy on diverse invoice formats.",
      "Designed 4-stage processing pipeline (preprocessing, OCR, NER-based extraction, validation) with 4s processing time per document.",
      "Extracted critical fields using hybrid approach combining regex patterns and custom-trained Named Entity Recognition models.",
    ],
  },
  {
    title: "Software Development Intern",
    company: "ICtrlBiz Consulting",
    location: "Noida, India",
    period: "Aug 2023 – Dec 2023",
    current: false,
    bullets: [
      "Developed a CRM and Lead Management System using React.js, Supabase, PostgreSQL, Tailwind CSS with drag-and-drop pipeline managing 500+ leads.",
      "Implemented secure multi-user authentication, real-time analytics dashboard, and meeting scheduler achieving 95+ Lighthouse score.",
      "Built responsive UI with advanced filtering, CSV export, and automated workflow features improving team efficiency by 40%.",
    ],
  },
];

export default function Experience() {
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
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 md:py-36 px-6 md:px-12 lg:px-20"
    >
      <div className="section-divider max-w-6xl mx-auto mb-24 md:mb-36" />

      <div className="max-w-3xl mx-auto">
        <div className="reveal">
          <SectionHeader
            index="05"
            label="Career"
            title="Work"
            highlight="Experience"
            align="center"
          />
        </div>

        <div className="relative mt-4">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-border)]" />

          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="reveal relative pl-8 pb-10 last:pb-0">
              <div
                className={`absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-[var(--color-background)] ${
                  exp.current
                    ? "bg-[var(--color-accent)] shadow-[0_0_16px_rgba(29,158,117,0.45)]"
                    : "bg-[var(--color-surface-elevated)]"
                }`}
              />

              <div className="p-5 md:p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-tertiary)] font-mono">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 self-start text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-md border ${
                      exp.current
                        ? "bg-[var(--color-accent-muted)] border-[var(--color-accent)]/25 text-[var(--color-accent)]"
                        : "bg-white/[0.02] border-[var(--color-border)] text-[var(--color-text-tertiary)]"
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex gap-3 text-sm text-[var(--color-text-secondary)] font-light leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-[var(--color-accent)]/50 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
