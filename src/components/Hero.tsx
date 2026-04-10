"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ background: "#0a0a0b" }}
    >
      {/* Grid background */}
      <div className="hero-grid absolute inset-0 z-0" />

      {/* Gradient orbs */}
      <div
        className="hero-gradient-orb"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          top: "10%",
          left: "-5%",
          animationDelay: "0s",
        }}
      />
      <div
        className="hero-gradient-orb"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)",
          bottom: "10%",
          right: "-5%",
          animationDelay: "4s",
        }}
      />
      <div
        className="hero-gradient-orb"
        style={{
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animationDelay: "2s",
        }}
      />

      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 z-[1] pointer-events-none" />

      {/* Content — only initial page load animation, no scroll-based */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Tag */}
        <motion.div variants={fadeUp}>
          <span className="inline-block text-[11px] tracking-[0.25em] uppercase font-medium text-white/40 border border-white/10 rounded-full px-5 py-2 mb-8 bg-white/[0.02]">
            Software Engineer · Tech Enthusiast
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.04em] leading-[0.9] mb-6"
        >
          <span className="bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent">
            Bilal
          </span>
          <span className="text-[var(--color-accent)]">.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Building scalable software, intelligent systems,
          <br className="hidden sm:block" /> and beautiful digital experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 bg-white text-black px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            View Work
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-white/15 text-white/80 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-white/5 hover:border-white/25 transition-all duration-300"
          >
            Resume
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/25 font-medium">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-white/40"
          />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 z-[2] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0a0a0b)" }}
      />
    </section>
  );
}
