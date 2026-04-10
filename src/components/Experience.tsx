"use client";

import React from "react";

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
      "Extracted critical fields (invoice numbers, vendor names, dates, amounts) using hybrid approach combining regex patterns and custom-trained Named Entity Recognition models.",
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
  return (
    <section
      id="experience"
      className="relative bg-[#0a0a0b] text-white py-20 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] mb-5">
            Professional <span className="text-white/35">Experience</span>
          </h2>
          <span className="inline-block text-[11px] tracking-[0.2em] uppercase text-white/35 font-medium border border-white/8 rounded-full px-5 py-2 bg-white/[0.02]">
            My Career Journey
          </span>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-10 border-l border-white/[0.06]">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className={`relative pb-12 ${idx === EXPERIENCES.length - 1 ? "pb-0" : ""}`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-[calc(1.5rem+5px)] md:-left-[calc(2.5rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#0a0a0b] ${
                  exp.current
                    ? "bg-[var(--color-accent)] shadow-[0_0_12px_rgba(99,102,241,0.4)]"
                    : "bg-white/20"
                }`}
              />

              {/* Card */}
              <div className="p-5 md:p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-500">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2 text-white/90">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-sm text-white/40 font-medium">
                      <span>{exp.company}</span>
                      <span className="hidden sm:block w-1 h-1 rounded-full bg-white/15" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 text-[11px] tracking-[0.15em] uppercase font-medium px-4 py-1.5 rounded-full border ${
                      exp.current
                        ? "bg-[var(--color-accent-muted)] border-[var(--color-accent)]/20 text-[var(--color-accent)]"
                        : "bg-white/[0.03] border-white/[0.06] text-white/35"
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 text-white/40 leading-relaxed font-light text-[14px] md:text-[15px]">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-white/20 shrink-0" />
                      <span>{bullet}</span>
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
