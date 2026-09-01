import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/ui/Reveal";
import { CASE_STUDIES, PROFILE } from "@/data/projects";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CASE_STUDIES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = CASE_STUDIES.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} — Case Study | ${PROFILE.name}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Case Study | ${PROFILE.name}`,
      description: project.summary,
      images: [project.poster],
      type: "article",
    },
  };
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

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <article className="case-study-section-card">
      <div className="case-study-section-heading">
        <span className="case-study-section-number">{number}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </article>
  );
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = CASE_STUDIES.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="case-study-main">
        <header className="case-study-hero">
          <div className="site-container">
            <Link href="/#work" className="case-study-back">
              ← Back to selected work
            </Link>

            <div className="case-study-hero-grid">
              <Reveal>
                <div>
                  <p className="eyebrow">{project.category}</p>
                  <h1 className="case-study-title">{project.title}</h1>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div>
                  <p className="case-study-summary">{project.summary}</p>
                  <div className="case-study-hero-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="button button-primary button-large"
                      >
                        Live Demo <ExternalIcon />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="button button-outline button-large"
                      >
                        GitHub <ExternalIcon />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <div className="case-study-media-frame">
                <Image
                  src={project.poster}
                  alt={`${project.title} dashboard interface preview`}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="project-poster-img"
                />
              </div>
            </Reveal>
          </div>
        </header>

        <div className="site-container case-study-content-layout">
          <aside className="case-study-sidebar" aria-label="Case study summary">
            <dl>
              <div>
                <dt>Project</dt>
                <dd>{project.title}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>Domain</dt>
                <dd>{project.category}</dd>
              </div>
              <div>
                <dt>Core Themes</dt>
                <dd>{project.tags.join(" · ")}</dd>
              </div>
            </dl>
          </aside>

          <div className="case-study-sections-container">
            <Reveal>
              <Section number="01" title="The Problem">
                <p>{project.problem}</p>
              </Section>
            </Reveal>

            <Reveal>
              <Section number="02" title="Target Users">
                <p>{project.users}</p>
              </Section>
            </Reveal>

            <Reveal>
              <Section number="03" title="Product Goal">
                <p>{project.goal}</p>
              </Section>
            </Reveal>

            <Reveal>
              <Section number="04" title="Research & Key Assumptions">
                <ul className="case-study-list">
                  {project.assumptions.map((assumption) => (
                    <li key={assumption}>{assumption}</li>
                  ))}
                </ul>
              </Section>
            </Reveal>

            <Reveal>
              <Section number="05" title="Product & System Decisions">
                <ul className="case-study-list">
                  {project.decisions.map((decision) => (
                    <li key={decision}>{decision}</li>
                  ))}
                </ul>
              </Section>
            </Reveal>

            <Reveal>
              <Section number="06" title="User Journey & Decision Flow">
                <div className="flow-grid">
                  {project.flow.map((step, index) => (
                    <div key={step} className="flow-step-box">
                      <span>0{index + 1}</span>
                      <div>{step}</div>
                    </div>
                  ))}
                </div>
              </Section>
            </Reveal>

            <Reveal>
              <Section number="07" title="Measurement Plan & Success Metrics">
                <div className="measurement-grid">
                  {project.measurementPlan.map((metric) => (
                    <div key={metric} className="measurement-box">
                      ✓ {metric}
                    </div>
                  ))}
                </div>
              </Section>
            </Reveal>

            <Reveal>
              <Section number="08" title="The Solution">
                <p>{project.solution}</p>
              </Section>
            </Reveal>

            <Reveal>
              <Section number="09" title="Technical Implementation">
                <p>Architecture and technology choices engineered to serve the product requirements:</p>
                <div className="technical-notes-pills">
                  {project.technicalNotes.map((note) => (
                    <span key={note} className="tech-pill">
                      {note}
                    </span>
                  ))}
                </div>
              </Section>
            </Reveal>

            <Reveal>
              <Section number="10" title="Future Improvements & Roadmap">
                <ul className="case-study-list">
                  {project.improvements.map((improvement) => (
                    <li key={improvement}>{improvement}</li>
                  ))}
                </ul>
              </Section>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}
