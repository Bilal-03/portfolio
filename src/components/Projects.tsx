"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { FEATURED_PROJECTS } from "@/data/projects";

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
  return (
    <section id="work" className="section">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="01"
            label="Selected Work"
            title="Featured Systems."
            description="A curated portfolio of 6 representative systems spanning 0-to-1 marketplace discovery, multi-agent AI, and empirical data modeling."
          />
        </Reveal>

        {/* Stacked 3-Pillar Executive Showcases */}
        <div className="mt-12 space-y-16 md:space-y-24">
          {FEATURED_PROJECTS.map((project, index) => {
            const isReverse = index % 2 === 1;
            const metric = project.keyMetricHighlight;
            const bullets = project.impactBullets || project.decisions.slice(0, 3);

            return (
              <Reveal key={project.slug} delay={index * 50}>
                <article className="border-t border-white/10 pt-10 md:pt-14">
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReverse ? "lg:grid-flow-dense" : ""}`}>
                    
                    {/* Media Frame (7 cols) */}
                    <div className={`lg:col-span-7 ${isReverse ? "lg:col-start-6" : ""}`}>
                      <Link
                        href={`/work/${project.slug}`}
                        className="group block relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-zinc-900/60 transition-all duration-300 hover:border-white/25"
                      >
                        <Image
                          src={project.poster}
                          alt={`${project.title} interface preview`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 680px"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          priority={index === 0}
                        />
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-black/75 text-zinc-300 border border-white/10 backdrop-blur-md">
                            {project.categoryLabel}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-black/60 text-zinc-400 backdrop-blur-md">
                            {project.year}
                          </span>
                        </div>

                        {metric && (
                          <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/85 border border-white/15 backdrop-blur-md text-right">
                            <span className="block text-sm font-semibold text-emerald-400 font-mono">
                              {metric.value}
                            </span>
                            <span className="block text-[10px] text-zinc-400 font-mono uppercase tracking-wider">
                              {metric.label}
                            </span>
                          </div>
                        )}
                      </Link>
                    </div>

                    {/* Content Details (5 cols) */}
                    <div className={`lg:col-span-5 flex flex-col justify-between ${isReverse ? "lg:col-start-1" : ""}`}>
                      <div>
                        {/* Eyebrow Category */}
                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
                          <span className="uppercase tracking-wider font-medium text-zinc-300">
                            {project.primaryCategory.toUpperCase()}
                          </span>
                          <span>·</span>
                          <span>{project.category}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-2">
                          <Link href={`/work/${project.slug}`} className="hover:text-zinc-300 transition-colors">
                            {project.title}
                          </Link>
                        </h3>

                        {/* One-Sentence Elevator Hook */}
                        <p className="text-sm text-zinc-300 font-medium mb-5 leading-relaxed">
                          {project.summary}
                        </p>

                        {/* 3-Pillar Executive Summary (Problem, Solution, Impact) */}
                        <div className="space-y-3.5 mb-6 text-xs sm:text-sm">
                          {/* Problem Pillar */}
                          {project.executiveProblem && (
                            <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3">
                              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400/90 block mb-1">
                                Problem & Friction
                              </span>
                              <p className="text-zinc-400 leading-relaxed text-xs">
                                {project.executiveProblem}
                              </p>
                            </div>
                          )}

                          {/* Shipped Solution Pillar */}
                          {project.executiveSolution && (
                            <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3">
                              <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400/90 block mb-1">
                                Shipped Product & Architecture
                              </span>
                              <p className="text-zinc-400 leading-relaxed text-xs">
                                {project.executiveSolution}
                              </p>
                            </div>
                          )}

                          {/* Quantified Impact Bullets */}
                          <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400/90 block mb-1.5">
                              Measured Outcomes & Impact
                            </span>
                            <ul className="space-y-1.5">
                              {bullets.map((bullet) => (
                                <li key={bullet} className="flex items-start gap-2 text-xs text-zinc-300 leading-snug">
                                  <span className="text-emerald-400 font-mono shrink-0">✓</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Tech Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="tag-pill text-[11px]">
                              {tag}
                            </span>
                          ))}
                          {project.technicalNotes.slice(0, 2).map((tech) => (
                            <span key={tech} className="tag-pill text-[11px] text-zinc-500">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                        <Link
                          href={`/work/${project.slug}`}
                          className="text-xs font-semibold text-white hover:text-zinc-300 inline-flex items-center gap-1.5 transition-colors"
                        >
                          <span>Read 10-Part Case Study</span>
                          <ArrowRightIcon />
                        </Link>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-zinc-400 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                          >
                            <span>Live Site</span>
                            <ExternalIcon />
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                          >
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>

                    </div>

                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Directory Link Footer */}
        <Reveal delay={200}>
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-medium text-white">
                Looking for more case studies?
              </p>
              <p className="text-xs text-zinc-400">
                Explore the complete index of 11 shipped products, analytics suites, and AI engines.
              </p>
            </div>
            <Link
              href="/projects"
              className="button button-outline button-small inline-flex items-center gap-2 shrink-0"
            >
              <span>View All 11 Projects</span>
              <ArrowRightIcon />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
