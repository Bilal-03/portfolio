"use client";

import Image from "next/image";
import Link from "next/link";
import { EDUCATION } from "@/data/projects";

const SERVICES = [
  { title: "0-to-1 Product Strategy", icon: "/vcard/icons/icon-design.svg", description: "Framing ambiguous user problems, conducting customer discovery interviews, and engineering verified marketplace flows from scratch." },
  { title: "Applied AI & ML Systems", icon: "/vcard/icons/icon-dev.svg", description: "Architecting high-accuracy OCR pipelines, governed multi-agent workflows, and production LLM evaluations with human review." },
  { title: "Product Analytics & SQL Telemetry", icon: "/vcard/icons/icon-photo.svg", description: "Replacing vanity metrics with decision-grade SQL models, opportunity indices, and funnel drop-off analytics." },
  { title: "Full-Stack Prototyping", icon: "/vcard/icons/icon-app.svg", description: "Shipping type-safe web applications using Next.js, React, Python, PostgreSQL, and modern cloud primitives." },
];

const TECH_STACK = ["Next.js", "React 19", "TypeScript", "Python", "PostgreSQL", "Supabase", "FastAPI", "Pandas", "DuckDB", "Pinecone", "Tailwind CSS", "Docker"];

export default function AboutTab() {
  const education = EDUCATION[0];
  return (
    <article className="vcard-article animate-vcard-fade">
      <header><h2 className="vcard-article-title">About Me</h2></header>
      <section className="vcard-about-text">
        <p>I am a <strong>Technical Product Manager</strong> with a computer science foundation in <strong>AI &amp; Machine Learning</strong> from <strong>{education?.institution}</strong>. I connect customer pain points, data-driven unit economics, and production engineering reality.</p>
        <p>My work turns ambiguous operational systems into useful products: from launching <strong>Handovr</strong>, a verified electronics marketplace with escrow mechanics, to building governed AI workflows and decision-grade analytics that teams can trust.</p>
      </section>
      <section className="vcard-section">
        <h3 className="vcard-section-title">What I&apos;m Doing</h3>
        <div className="vcard-service-list">{SERVICES.map((service) => <div key={service.title} className="vcard-service-card"><div className="vcard-service-icon"><Image src={service.icon} alt="" width={40} height={40} /></div><div><h4>{service.title}</h4><p>{service.description}</p></div></div>)}</div>
      </section>
      <section className="vcard-section">
        <h3 className="vcard-section-title">Education</h3>
        {education && <div className="vcard-education-card"><div><h4>{education.institution}</h4><p>{education.qualification}</p></div><span>{education.location}</span><small>{education.period}</small></div>}
      </section>
      <section className="vcard-section">
        <h3 className="vcard-section-title">Tools &amp; Technologies</h3>
        <div className="vcard-tools-strip">{TECH_STACK.map((tool) => <Link key={tool} href="/?tab=experience" className="vcard-tool-pill">{tool}</Link>)}</div>
      </section>
    </article>
  );
}
