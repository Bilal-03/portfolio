"use client";

import Image from "next/image";
import Link from "next/link";
import { EDUCATION } from "@/data/projects";
import { TestimonialItem } from "./TestimonialModal";

interface AboutTabProps { onSelectTestimonial: (item: TestimonialItem) => void; }

const SERVICES = [
  { title: "0-to-1 Product Strategy", icon: "/vcard/icons/icon-design.svg", description: "Framing ambiguous user problems, conducting customer discovery interviews, and engineering verified marketplace flows from scratch." },
  { title: "Applied AI & ML Systems", icon: "/vcard/icons/icon-dev.svg", description: "Architecting high-accuracy OCR pipelines, governed multi-agent workflows, and production LLM evaluations with human review." },
  { title: "Product Analytics & SQL Telemetry", icon: "/vcard/icons/icon-photo.svg", description: "Replacing vanity metrics with decision-grade SQL models, opportunity indices, and funnel drop-off analytics." },
  { title: "Full-Stack Prototyping", icon: "/vcard/icons/icon-app.svg", description: "Shipping type-safe web applications using Next.js, React, Python, PostgreSQL, and modern cloud primitives." },
];

const HIGHLIGHTS: TestimonialItem[] = [
  { id: "handovr", name: "Handovr discovery", title: "40+ interviews · 0-to-1 marketplace", avatar: "/vcard/avatars/avatar-1.png", date: "Buyer readiness +38%", text: "Led discovery across Delhi NCR and translated buyer distrust into a 16-point hardware verification and escrow flow. Funnel telemetry reduced negotiation drop-offs by 28%.", href: "/work/handovr" },
  { id: "productlens", name: "ProductLens investigations", title: "Governed analytics copilot", avatar: "/vcard/avatars/avatar-2.png", date: "100% AST validation", text: "Designed semantic catalog specs and deterministic text-to-SQL guardrails so non-technical stakeholders could complete metric investigations 3x faster.", href: "/work/productlens" },
  { id: "bizguide-ai", name: "BizGuide AI grounding", title: "Multi-agent compliance workspace", avatar: "/vcard/avatars/avatar-3.png", date: "92% citation groundedness", text: "Routed regulatory questions to specialist agents and paired PDF previews with source evidence to keep guidance grounded for Indian businesses.", href: "/work/bizguide-ai" },
  { id: "karobarkit", name: "KarobarKit utilities", title: "Privacy-first operational toolkit", avatar: "/vcard/avatars/avatar-4.png", date: "82 India-focused tools", text: "Built a local-first registry of calculators and document utilities with sub-100ms calculations, PDF/QR exports, and client-side data privacy.", href: "/work/karobarkit" },
];

const TECH_STACK = ["Next.js", "React 19", "TypeScript", "Python", "PostgreSQL", "Supabase", "FastAPI", "Pandas", "DuckDB", "Pinecone", "Tailwind CSS", "Docker"];

export default function AboutTab({ onSelectTestimonial }: AboutTabProps) {
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
        <h3 className="vcard-section-title">Project Highlights</h3>
        <div className="vcard-highlight-list">{HIGHLIGHTS.map((item) => <button key={item.id} type="button" className="vcard-highlight-card" onClick={() => onSelectTestimonial(item)}><span className="vcard-highlight-avatar"><Image src={item.avatar} alt="" fill sizes="60px" /></span><span className="vcard-highlight-body"><strong>{item.name}</strong><small>{item.title}</small><span>“{item.text}”</span><em>Open highlight →</em></span></button>)}</div>
      </section>
      <section className="vcard-section">
        <h3 className="vcard-section-title">Tools &amp; Technologies</h3>
        <div className="vcard-tools-strip">{TECH_STACK.map((tool) => <Link key={tool} href="/?tab=resume" className="vcard-tool-pill">{tool}</Link>)}</div>
      </section>
    </article>
  );
}
