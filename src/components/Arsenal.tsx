"use client";

import React from "react";
import { motion } from "framer-motion";

const TOOL_CATEGORIES = [
  {
    label: "Languages",
    tools: ["Java", "Python", "C/C++", "JavaScript", "TypeScript"],
  },
  {
    label: "Frameworks & Libraries",
    tools: ["React.js", "Next.js", "Flask", "Tailwind CSS", "HTML/CSS"],
  },
  {
    label: "AI & Machine Learning",
    tools: ["TensorFlow", "Keras", "PyTorch", "OpenCV", "spaCy", "YOLO"],
  },
  {
    label: "Infrastructure & Tools",
    tools: ["Supabase", "PostgreSQL", "SQL", "Docker", "Git/GitHub"],
  },
];

export default function Arsenal() {
  return (
    <section className="relative bg-[#0a0a0b] text-white py-20 md:py-28 px-6 md:px-12 lg:px-24 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase text-white/35 font-medium mb-3 block">
            Technologies & Tools
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em]">
            Arsenal
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {TOOL_CATEGORIES.map((category, cIdx) => (
            <motion.div
              key={cIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: cIdx * 0.1, duration: 0.5 }}
            >
              <h3 className="text-[11px] tracking-[0.2em] uppercase text-white/30 font-medium mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.tools.map((tool, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: cIdx * 0.1 + idx * 0.04, duration: 0.4 }}
                    className="px-4 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cursor-default group"
                  >
                    <span className="text-sm font-medium text-white/60 group-hover:text-white/80 transition-colors">
                      {tool}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
