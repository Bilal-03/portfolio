"use client";

import DemoPlayback from "@/components/ui/DemoPlayback";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ExternalIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] hover:-translate-y-1 transition-all duration-500 ${
        featured ? "lg:row-span-2" : ""
      }`}
    >
      <DemoPlayback
        poster={project.image}
        alt={project.title}
        className={featured ? "aspect-[16/11]" : "aspect-[16/10]"}
      />

      <div className={`p-5 md:p-6 ${featured ? "md:p-8" : ""}`}>
        <div className="flex items-center justify-between gap-4 mb-3">
          <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-[var(--color-text-tertiary)]">
            {project.category}
          </span>
          <span className="text-[10px] font-mono px-2 py-1 rounded-md bg-[var(--color-accent-muted)] text-[var(--color-accent-bright)]">{project.year}</span>
        </div>

        <h3
          className={`font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] group-hover:text-white transition-colors duration-300 mb-2 ${
            featured ? "text-xl md:text-2xl" : "text-lg md:text-xl"
          }`}
        >
          {project.title}
        </h3>

        <p className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-[var(--color-text-tertiary)] border border-white/[0.05]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between gap-4 pt-1">
            <span className="text-[11px] font-mono text-[var(--color-accent-bright)]">↗ {project.outcome}</span>
            <div className="flex gap-3 text-[11px] font-medium">
              {project.source && <a href={project.source} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-bright)] transition-colors">Source</a>}
              <a href={project.link} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="inline-flex items-center gap-1 text-[var(--color-text-primary)] hover:text-[var(--color-accent-bright)] transition-colors">Visit <ExternalIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
