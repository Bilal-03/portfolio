"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[#0a0a0b] text-white py-20 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/[0.04] overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.03em] mb-6">
            Let&apos;s Work{" "}
            <span className="text-white/70">Together</span>
          </h2>
          <p className="text-base md:text-lg text-white/40 mb-10 md:mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            I am a versatile tech enthusiast eager to solve meaningful problems—whether that is engineering robust software, shaping product management processes, or tackling strategic business challenges.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:bilal2512@gmail.com"
              className="group inline-flex items-center gap-3 bg-white text-black px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Send a Message
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-white/15 text-white/70 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-white/5 hover:border-white/25 transition-all duration-300"
            >
              Download CV
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 max-w-7xl mx-auto mt-20 md:mt-32 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between text-[11px] text-white/25 font-medium tracking-[0.15em] uppercase gap-4">
        <p>Software Engineer · Product · Tech Enthusiast</p>
        <p>© 2026 Bilal Choudhary</p>
      </div>
    </footer>
  );
}
