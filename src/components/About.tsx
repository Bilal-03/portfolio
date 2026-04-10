"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: "3", label: "Internships" },
  { value: "7.5", label: "BTech CGPA" },
  { value: "10+", label: "Projects Built" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0a0a0b] text-white py-20 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-16">
        {/* Left — Header + Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] mb-8">
            About <span className="text-white/35">Me</span>
          </h2>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-8 p-5 md:p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
            {STATS.map((stat, idx) => (
              <React.Fragment key={idx}>
                <div className="text-center">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold tracking-tight text-white/90"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-white/30 mt-1.5 font-medium">
                    {stat.label}
                  </p>
                </div>
                {idx < STATS.length - 1 && (
                  <div className="w-px h-10 bg-white/[0.06]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Right — Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-3 flex flex-col justify-center"
        >
          <div className="space-y-5 text-white/45 leading-[1.8] font-light text-[15px] md:text-base">
            <p>
              I am an aspiring Software Engineer and Computer Science graduate from Vellore Institute of Technology. However, I am not just into designing applications—I am a tech enthusiast and tech savvy with a strong foundation in both software engineering and business logic.
            </p>
            <p>
              My technical expertise spans Python, Java, React, and Next.js, frequently culminating in AI microservices and full-stack platforms. Yet, my interests do not stop at the codebase.
            </p>
            <p>
              Beyond academia and coding, I have a deep knowledge of business and product management. I am eager to work and contribute in these fields, bridging the gap between an engineering challenge and strategic product vision.
            </p>
            <p>
              A constant learner, I aim to merge data-driven insights with beautiful UX, taking on any challenge in the tech orbit.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
