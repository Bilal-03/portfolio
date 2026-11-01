"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { PROFILE } from "@/data/projects";

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
  return (
    <section id="hero" className="section pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="site-container">
        <div className="max-w-3xl">
          {/* Availability Pill */}
          <Reveal>
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-8">
              <span className="status-dot" aria-hidden="true" />
              <span className="text-xs font-mono text-zinc-300">
                Available for Technical PM & AI Product Roles
              </span>
              <span className="text-xs text-zinc-600">·</span>
              <span className="text-xs text-zinc-400">India</span>
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal delay={60}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.14] mb-7">
              Turning ambiguous problems into{" "}
              <span className="text-zinc-400">high-impact products.</span>
            </h1>
          </Reveal>

          {/* Subheading / Bio */}
          <Reveal delay={120}>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mb-10">
              Technical product manager with computer science depth in AI & Machine Learning.
              I bridge 0-to-1 customer discovery, advanced SQL telemetry, and production AI execution
              to ship products that solve real friction.
            </p>
          </Reveal>

          {/* Action CTAs */}
          <Reveal delay={180}>
            <div className="flex flex-wrap items-center gap-3 mb-14">
              <Link href="#work" className="button button-primary button-large">
                <span>View Selected Work</span>
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
                className="text-xs font-mono text-zinc-400 hover:text-white transition-colors ml-2 py-2"
              >
                Get in touch →
              </a>
            </div>
          </Reveal>

          {/* Subtle Proof-of-Work Strip */}
          <Reveal delay={240}>
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
              <div>
                <span className="block font-mono text-zinc-500 mb-1 uppercase tracking-wider text-[11px]">
                  0-to-1 Venture
                </span>
                <span className="text-zinc-300 font-medium">Founder @ Handovr</span>
                <span className="block text-zinc-500 text-[11px] mt-0.5">Verified P2P Marketplace</span>
              </div>
              <div>
                <span className="block font-mono text-zinc-500 mb-1 uppercase tracking-wider text-[11px]">
                  Track Focus
                </span>
                <span className="text-zinc-300 font-medium">Technical PM & AI Product</span>
                <span className="block text-zinc-500 text-[11px] mt-0.5">Discovery · SQL Telemetry · AI</span>
              </div>
              <div>
                <span className="block font-mono text-zinc-500 mb-1 uppercase tracking-wider text-[11px]">
                  Foundation
                </span>
                <span className="text-zinc-300 font-medium">B.Tech CS (AI/ML)</span>
                <span className="block text-zinc-500 text-[11px] mt-0.5">Vellore Inst. of Technology</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
