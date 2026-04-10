"use client";

import React from "react";
import { motion } from "framer-motion";

const PROJECT_DATA = [
  {
    title: "CRM — Lead Management",
    category: "React.js · Supabase · Tailwind",
    description: "Full-stack CRM with drag-and-drop pipeline, real-time analytics, and multi-user auth managing 500+ leads.",
    image: "/crm-web.png",
    link: "https://github.com/Bilal-03/crm",
  },
  {
    title: "FinAssist — Virtual Finance",
    category: "Python · Flask · JavaScript",
    description: "AI-powered financial assistant with intelligent budgeting, expense tracking, and automated reporting.",
    image: "/finassist-web.png",
    link: "https://vfa-9tbs.onrender.com",
  },
  {
    title: "Handovr — Phone Marketplace",
    category: "Next.js · React · Supabase",
    description: "Full-featured used phone marketplace with listing management, search, and secure transaction flow.",
    image: "/handovr-web.png",
    link: "https://handovr.in",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative bg-[#0a0a0b] text-white py-20 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em]">
            Selected <span className="text-white/35">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECT_DATA.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }}
              className="group flex flex-col rounded-2xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[16/10] w-full overflow-hidden relative bg-[#0f0f11]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.03] opacity-70 group-hover:opacity-100"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/5 transition-colors duration-500" />
              </div>

              {/* Info */}
              <div className="p-6 md:p-7 flex flex-col gap-2.5 flex-1">
                <span className="text-[11px] tracking-[0.15em] uppercase text-white/35 font-medium">
                  {project.category}
                </span>
                <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white/85 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto pt-4 flex items-center gap-2 text-[12px] font-medium text-white/30 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  <span>View Project</span>
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
