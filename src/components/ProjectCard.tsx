import Link from "next/link";
import ProjectMedia from "@/components/ui/ProjectMedia";
import type { CaseStudy } from "@/data/projects";

interface ProjectCardProps {
  project: CaseStudy;
  index: number;
}

const ExternalIcon = () => (
  <svg className="external-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="project-card" data-project-index={projectNumber}>
      <div className="project-card-header">
        <span className="project-card-index">{projectNumber}</span>
        <span className="project-card-kind">Case study</span>
      </div>

      <ProjectMedia
        poster={project.poster}
        alt={`${project.title} home page interface`}
      />

      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <div className="project-card-title-row">
          <h3 className="project-card-title">
            <Link href={`/work/${project.slug}`}>{project.title}</Link>
          </h3>
          <span className="project-card-title-mark" aria-hidden="true">↗</span>
        </div>

        <p className="project-card-summary">{project.summary}</p>

        <div className="tag-list" aria-label={`${project.title} themes`}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-card-actions">
          <Link href={`/work/${project.slug}`} className="button button-dark">
            Case Study <ExternalIcon />
          </Link>
          <div className="project-secondary-actions">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-link">
                Live Demo <ExternalIcon />
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-link text-link-muted">
                GitHub <ExternalIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
