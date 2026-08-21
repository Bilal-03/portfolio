import Link from "next/link";
import DemoPlayback from "@/components/ui/DemoPlayback";
import type { CaseStudy } from "@/data/projects";

interface ProjectCardProps {
  project: CaseStudy;
  index: number;
  featured?: boolean;
}

const ExternalIcon = () => (
  <svg className="external-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <article className={`project-card ${featured ? "project-card-featured" : ""}`} data-project-index={projectNumber}>
      <div className="project-card-header">
        <span className="project-card-index">{projectNumber}</span>
        <span className="project-card-kind">{featured ? "Featured project" : "Case study"}</span>
      </div>

      <DemoPlayback
        id={project.slug}
        poster={project.poster}
        previewVideo={project.previewVideo}
        alt={`${project.title} product preview`}
        mediaFit={project.mediaFit}
        className={featured ? "project-media-featured" : ""}
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
