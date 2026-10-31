"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { CASE_STUDIES } from "@/data/projects";

const ExternalIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default function Projects() {
  const flagship = CASE_STUDIES.find((p) => p.slug === "handovr");
  const secondaryProjects = [
    CASE_STUDIES.find((p) => p.slug === "zomato-restaurant-intelligence"),
    CASE_STUDIES.find((p) => p.slug === "bizguide-ai"),
    CASE_STUDIES.find((p) => p.slug === "finassist"),
  ].filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section id="work" className="section">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="01"
            label="Featured Systems"
            title="Selected Case Studies."
            description="A curated preview of 4 representative systems spanning 0-to-1 marketplace mechanics, empirical analytics, and production AI."
          />
        </Reveal>

        {/* Asymmetric Bento Grid */}
        <div className="space-y-6 mt-8">
          
          {/* 1. Large Wide Flagship Bento Card (Handovr) */}
          {flagship && (
            <Reveal delay={60}>
              <div className="bento-card border border-white/10 group p-6 sm:p-8 hover:border-indigo-500/40 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Media (7 cols) */}
                  <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-slate-900/60 shadow-xl">
                    <Image
                      src={flagship.poster}
                      alt={`${flagship.title} interface`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      priority
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/90 text-white backdrop-blur-md shadow-sm">
                        Flagship 0-to-1 Build
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-black/70 text-slate-300 border border-white/10 backdrop-blur-md">
                        {flagship.year}
                      </span>
                    </div>
                  </div>

                  {/* Right Details (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                          {flagship.categoryLabel}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span className="text-xs text-slate-400">{flagship.category}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                        <Link href={`/work/${flagship.slug}`} className="hover:text-indigo-300 transition-colors">
                          {flagship.title}
                        </Link>
                      </h3>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                        {flagship.summary}
                      </p>

                      <div className="space-y-2 mb-6 text-xs sm:text-sm text-slate-400">
                        <div className="flex items-start gap-2">
                          <span className="text-indigo-400 font-mono">▸</span>
                          <span>16-point hardware verification workflow & condition validation</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-indigo-400 font-mono">▸</span>
                          <span>Escrow transaction handling with doorstep handover coordination</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {flagship.tags.map((tag) => (
                          <span key={tag} className="tag-pill tag-pill-highlight">
                            {tag}
                          </span>
                        ))}
                        {flagship.technicalNotes.slice(0, 3).map((tech) => (
                          <span key={tech} className="tag-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <Link
                        href={`/work/${flagship.slug}`}
                        className="button button-accent button-small inline-flex items-center gap-1.5"
                      >
                        <span>Read Case Study</span>
                        <ArrowRightIcon />
                      </Link>
                      {flagship.liveUrl && (
                        <a
                          href={flagship.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="button button-outline button-small inline-flex items-center gap-1.5"
                        >
                          <span>Live Site</span>
                          <ExternalIcon />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </Reveal>
          )}

          {/* 2. Three Balanced Bento Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryProjects.map((project, index) => (
              <Reveal key={project.slug} delay={100 + index * 60}>
                <div className="bento-card border border-white/10 flex flex-col justify-between h-full group p-5 sm:p-6 hover:border-indigo-500/40 transition-all duration-300">
                  <div>
                    {/* Media Frame */}
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-slate-900/60 mb-5">
                      <Image
                        src={project.poster}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[11px] font-mono bg-black/80 text-slate-300 border border-white/10">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-slate-400 mb-1.5 flex items-center justify-between">
                      <span className="text-indigo-400 font-medium">{project.primaryCategory.toUpperCase()}</span>
                      <span>{project.year}</span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-indigo-300 transition-colors">
                      <Link href={`/work/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="tag-pill text-[11px] py-0.5 px-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={`/work/${project.slug}`}
                      className="text-xs font-medium text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
                    >
                      <span>Case Study</span>
                      <ArrowRightIcon />
                    </Link>

                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1"
                        >
                          <span>Live</span>
                          <ExternalIcon />
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-slate-500 hover:text-slate-300"
                        >
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

        </div>

        {/* Explore all projects CTA banner */}
        <Reveal delay={200}>
          <div className="mt-12 p-7 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                Explore All 10 Shipped Case Studies
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                Browse complete investigations including invoice OCR document pipelines, sales CRM systems, and AI business analytics studios.
              </p>
            </div>
            <Link
              href="/projects"
              className="button button-primary button-large shrink-0 inline-flex items-center gap-2"
            >
              <span>View Full Directory (10)</span>
              <ArrowRightIcon />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
