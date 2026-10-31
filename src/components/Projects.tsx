"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { FEATURED_PROJECTS } from "@/data/projects";

const ArrowRightIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default function Projects() {
  return (
    <section id="work" className="section section-work">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="01"
            label="Selected Work"
            title="Featured products, analytics & AI systems."
            description="A curated preview of 4 representative systems spanning empirical marketplace analytics, multi-agent AI, fintech utilities, and 0-to-1 marketplace mechanics."
          />
        </Reveal>

        {/* Featured 4 Projects Grid */}
        <div className="project-grid">
          {FEATURED_PROJECTS.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 4) * 60}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        {/* Explore all projects CTA banner */}
        <Reveal delay={120}>
          <div className="mt-12 p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Looking for more case studies?
              </h3>
              <p className="text-sm text-slate-400 max-w-xl">
                Explore the complete collection of 10 shipped systems including invoice OCR pipelines, sales CRM systems, and business intelligence studios.
              </p>
            </div>
            <Link
              href="/projects"
              className="button button-primary button-large shrink-0 inline-flex items-center gap-2"
            >
              <span>View All 10 Projects</span>
              <ArrowRightIcon />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
