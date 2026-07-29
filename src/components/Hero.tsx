"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden"
    >
      <div className="technical-grid absolute inset-0 pointer-events-none" />
      {/* Ambient glow */}
      <div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(29,158,117,0.17) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12 lg:px-20 pt-32 pb-24">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Top bar */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-14 md:mb-20">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-bright)] opacity-60 animate-ping" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-bright)]" /></span>
            <span className="text-[11px] font-mono tracking-[0.18em] uppercase text-[var(--color-accent-bright)]">
              Open to opportunities
            </span>
            <div className="hero-line h-px flex-1 max-w-[120px] bg-[var(--color-border)]" />
            <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
              India · Software engineer
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(3rem,10vw,7.5rem)] font-semibold tracking-[-0.045em] leading-[0.92] mb-8"
          >
            <span className="block text-[var(--color-text-primary)]">Building with</span>
            <span className="block text-[var(--color-accent-bright)]">intent.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl lg:text-2xl text-[var(--color-text-secondary)] font-light leading-relaxed max-w-2xl mb-12"
          >
            I&apos;m Bilal Choudhary — a full-stack engineer who turns complex workflows into reliable software and useful AI-powered products.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-20">
            <a
              href="#work"
              className="group inline-flex items-center gap-2.5 bg-[var(--color-accent)] text-black px-6 py-3 rounded-lg text-sm font-semibold tracking-wide hover:brightness-110 transition-all duration-300 active:scale-[0.98]"
            >
              View Projects
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
              className="inline-flex items-center gap-2.5 border border-[var(--color-border)] text-[var(--color-text-secondary)] px-6 py-3 rounded-lg text-sm font-medium hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-300"
            >
              Resume
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 max-w-3xl border border-[var(--color-border)] rounded-xl bg-[var(--color-surface)]/75 backdrop-blur-sm overflow-hidden">
            {[['Focus', 'Full-stack systems'], ['Speciality', 'AI automation'], ['Based in', 'India / Remote']].map(([label, value], index) => (
              <div key={label} className={`px-5 py-4 ${index !== 2 ? 'sm:border-r border-[var(--color-border)]' : ''} ${index !== 0 ? 'border-t sm:border-t-0 border-[var(--color-border)]' : ''}`}>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-tertiary)] mb-1.5">{label}</p>
                <p className="text-sm text-[var(--color-text-primary)]">{value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-6 md:left-12 lg:left-20 flex items-center gap-3"
      >
        <div className="w-px h-12 bg-gradient-to-b from-[var(--color-accent)] to-transparent" />
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] [writing-mode:vertical-lr]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
