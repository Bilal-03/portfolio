"use client";

import React from "react";
import { motion } from "framer-motion";

const SERVICES_DATA = [
  {
    num: "01",
    title: "Software Engineering",
    description:
      "Designing scalable frontend architectures, robust APIs, and end-to-end full stack solutions tailored to business requirements.",
    tags: ["React", "Next.js", "Node.js", "System Design"],
  },
  {
    num: "02",
    title: "Product & Business Strategy",
    description:
      "Bridging the gap between technical execution and strategic product goals. I understand the business side of tech and love contributing to product vision.",
    tags: ["Product Management", "Strategy", "User Analytics"],
  },
  {
    num: "03",
    title: "AI Integration & Data",
    description:
      "Building intelligent systems with OpenCV, spaCy, and custom ML pipelines, transforming manual data processing into automated microservices.",
    tags: ["Python", "TensorFlow", "Computer Vision", "NLP"],
  },
  {
    num: "04",
    title: "Versatile Tech Enthusiast",
    description:
      "Not bound by a single domain. From beautiful UI/UX to cloud infrastructure, I am a tech-savvy problem solver ready to tackle any challenge.",
    tags: ["UI/UX", "Cloud Architecture", "Rapid Prototyping"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#0a0a0b] text-white py-20 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:w-1/3 flex flex-col items-start md:sticky md:top-32 md:self-start"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase text-white/35 font-medium border border-white/8 rounded-full px-4 py-1.5 mb-6 bg-white/[0.02]">
            Core Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] mb-6 leading-[1.05]">
            What <span className="text-white/40">I Do</span>
          </h2>
          <p className="text-white/45 text-base md:text-lg font-light leading-relaxed">
            I blend deep technical expertise with a strong product mindset. Not just a developer—a tech enthusiast who understands business, product, and intelligent design.
          </p>
        </motion.div>

        {/* Right Column — Cards */}
        <div className="md:w-2/3 flex flex-col gap-4">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group relative p-6 md:p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-500 flex flex-col md:flex-row gap-4 md:gap-6 items-start"
            >
              {/* Number */}
              <span className="text-white/15 font-mono text-sm tracking-widest font-bold pt-0.5 group-hover:text-[var(--color-accent)] transition-colors duration-500 shrink-0">
                {service.num}
              </span>

              <div className="flex flex-col gap-3">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/45 leading-relaxed font-light text-[15px] max-w-2xl">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] tracking-wider uppercase px-3 py-1 rounded-full bg-white/[0.04] text-white/40 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
