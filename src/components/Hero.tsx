"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { PROFILE, ROLE_PERSPECTIVES } from "@/data/projects";

const ArrowDownIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

export default function Hero() {
  const [activeRole, setActiveRole] = useState<"pm" | "analytics" | "ai">("pm");

  const currentPerspective =
    ROLE_PERSPECTIVES.find((p) => p.id === activeRole) || ROLE_PERSPECTIVES[0];

  return (
    <section id="hero" className="section pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="site-container">
        {/* 60/40 Split Bento Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (60%): Headline, Value Prop & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-6">
                <span className="status-dot" aria-hidden="true" />
                <span className="text-xs font-mono text-slate-300">Available for PM, Analytics & Applied AI</span>
                <span className="text-xs text-slate-500">·</span>
                <span className="text-xs text-slate-400">India</span>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
                Turning ambiguous problems into{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-300 bg-clip-text text-transparent">
                  high-impact products.</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mb-8">
                Product builder with computer science depth in AI & Machine Learning. I bridge customer discovery, advanced SQL telemetry, and production AI execution to ship products that matter.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="#work" className="button button-accent button-large">
                  <span>Explore Selected Work</span>
                  <ArrowDownIcon />
                </Link>
                <a
                  href={PROFILE.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-outline button-large"
                >
                  <span>Download Resume</span>
                  <ExternalIcon />
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="button button-outline button-large"
                >
                  <span>Get in Touch</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column (40%): Interactive Bento Perspective Card */}
          <div className="lg:col-span-5">
            <Reveal delay={140}>
              <div className="bento-card p-6 md:p-7 border border-white/10 shadow-2xl relative">
                {/* Subtle top ambient glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Lens Perspective
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {currentPerspective.badge}
                  </span>
                </div>

                {/* Perspective Switcher Tabs */}
                <div
                  className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/5 mb-6"
                  role="tablist"
                  aria-label="Profile perspective switcher"
                >
                  {ROLE_PERSPECTIVES.map((role) => (
                    <button
                      key={role.id}
                      type="button"
                      role="tab"
                      aria-selected={activeRole === role.id}
                      onClick={() => setActiveRole(role.id)}
                      className={`text-xs font-medium py-2 px-2 rounded-lg transition-all ${
                        activeRole === role.id
                          ? "bg-white/10 text-white shadow-sm font-semibold border border-white/10"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {role.label}
                    </button>
                  ))}
                </div>

                {/* Perspective Detail */}
                <div className="space-y-4">
                  <h3 className="text-base font-semibold text-white leading-snug">
                    {currentPerspective.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {currentPerspective.description}
                  </p>

                  <div className="pt-2 flex flex-col gap-2">
                    {currentPerspective.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <span className="text-indigo-400 font-mono mt-0.5">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Miniature Spotlight Pill */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-slate-400">Flagship System:</span>
                    <strong className="text-white font-medium">Handovr</strong>
                  </div>
                  <Link
                    href="/work/handovr"
                    className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1"
                  >
                    <span>Read Flow</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
