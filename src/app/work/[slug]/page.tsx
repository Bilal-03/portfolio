import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import CaseStudyFrame from "@/components/vcard/CaseStudyFrame";
import { CASE_STUDIES, PROFILE } from "@/data/projects";

interface Props { params: Promise<{ slug: string }> }
export function generateStaticParams() { return CASE_STUDIES.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = CASE_STUDIES.find((item) => item.slug === slug);
  return project ? { title: `${project.title} — Case Study | ${PROFILE.name}`, description: project.summary } : {};
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <article className="case-study-section-card"><div className="case-study-section-heading"><span>{number}</span><h2>{title}</h2></div>{children}</article>;
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = CASE_STUDIES.find((item) => item.slug === slug);
  if (!project) notFound();
  return <CaseStudyFrame><div className="case-study-content"><Link href="/?tab=projects" className="case-study-back">← Back to Projects</Link><header className="case-study-hero"><div><p className="case-study-eyebrow">{project.category}</p><h1>{project.title}</h1>{project.keyMetricHighlight && <p className="case-study-metric"><strong>{project.keyMetricHighlight.value}</strong> · {project.keyMetricHighlight.label}</p>}<p className="case-study-summary">{project.summary}</p><div className="case-study-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo ↗</a>}{project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">GitHub ↗</a>}</div></div><div className="case-study-media-frame"><Image src={project.poster} alt={`${project.title} preview`} fill unoptimized={project.poster.endsWith(".svg")} priority sizes="(max-width: 900px) 100vw, 700px" /></div></header><div className="case-study-content-layout"><aside className="case-study-sidebar" aria-label="Case study summary"><dl><div><dt>Project</dt><dd>{project.title}</dd></div><div><dt>Year</dt><dd>{project.year}</dd></div><div><dt>Domain</dt><dd>{project.category}</dd></div><div><dt>Core themes</dt><dd>{project.tags.join(" · ")}</dd></div></dl></aside><div className="case-study-sections-container"><Reveal><Section number="01" title="The Problem"><p>{project.problem}</p></Section></Reveal><Reveal><Section number="02" title="Target Users"><p>{project.users}</p></Section></Reveal><Reveal><Section number="03" title="Product Goal"><p>{project.goal}</p></Section></Reveal><Reveal><Section number="04" title="Research & Key Assumptions"><ul>{project.assumptions.map((item) => <li key={item}>{item}</li>)}</ul></Section></Reveal><Reveal><Section number="05" title="Product & System Decisions"><ul>{project.decisions.map((item) => <li key={item}>{item}</li>)}</ul></Section></Reveal><Reveal><Section number="06" title="User Journey & Decision Flow"><div className="case-study-grid">{project.flow.map((item, index) => <div key={item}><strong>0{index + 1}</strong><span>{item}</span></div>)}</div></Section></Reveal><Reveal><Section number="07" title="Measurement Plan & Success Metrics"><div className="case-study-grid">{project.measurementPlan.map((item) => <div key={item}>✓ {item}</div>)}</div></Section></Reveal><Reveal><Section number="08" title="The Solution"><p>{project.solution}</p></Section></Reveal><Reveal><Section number="09" title="Technical Implementation"><p>Architecture and technology choices engineered to serve the product requirements:</p><div className="case-study-pills">{project.technicalNotes.map((item) => <span key={item}>{item}</span>)}</div></Section></Reveal><Reveal><Section number="10" title="Future Improvements & Roadmap"><ul>{project.improvements.map((item) => <li key={item}>{item}</li>)}</ul></Section></Reveal></div></div></div></CaseStudyFrame>;
}
