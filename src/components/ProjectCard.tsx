"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import type { CaseStudy } from "@/data/projects";

interface ProjectCardProps {
  project: CaseStudy;
  index: number;
}

const ExternalIcon = () => (
  <svg
    className="external-icon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const projectNumber = String(index + 1).padStart(2, "0");

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="project-card"
      data-project-index={projectNumber}
    >
      <div className="project-card-header">
        <span className="project-card-index">{projectNumber} / 11</span>
        <span className="project-card-kind">{project.categoryLabel}</span>
      </div>

      <div className="project-media-frame relative">
        <Image
          src={project.poster}
          alt={`${project.title} interface preview`}
          fill
          sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 600px"
          className="project-poster-img"
        />
        {project.keyMetricHighlight && (
          <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-black/80 border border-white/10 text-right backdrop-blur-md">
            <span className="block text-xs font-semibold text-emerald-400 font-mono">
              {project.keyMetricHighlight.value}
            </span>
            <span className="block text-[9px] text-zinc-400 font-mono uppercase tracking-wider">
              {project.keyMetricHighlight.label}
            </span>
          </div>
        )}
      </div>

      <div className="project-card-body">
        <div className="project-meta-row">
          <span className="project-category-badge">{project.category}</span>
          <span>{project.year}</span>
        </div>

        <div className="project-card-title-row">
          <h3 className="project-card-title">
            <Link href={`/work/${project.slug}`}>{project.title}</Link>
          </h3>
          <span className="project-card-arrow" aria-hidden="true">
            ↗
          </span>
        </div>

        <p className="project-card-summary">{project.summary}</p>

        <div className="tag-list" aria-label={`${project.title} tags`}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-card-actions">
          <Link href={`/work/${project.slug}`} className="button button-primary button-small">
            Read Case Study <ExternalIcon />
          </Link>
          <div className="project-secondary-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Live Demo <ExternalIcon />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-link text-link-muted"
              >
                GitHub <ExternalIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
