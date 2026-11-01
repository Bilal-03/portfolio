"use client";

import Image from "next/image";
import Link from "next/link";

const INSIGHTS = [
  { slug: "handovr", title: "Designing trust for a 0-to-1 marketplace", category: "Product discovery", image: "/project-previews/handovr-home.png", summary: "How interviews, verification, escrow, and funnel telemetry turned buyer distrust into a shippable marketplace flow." },
  { slug: "netflix-strategy", title: "Modeling retention before shipping a feature", category: "Product strategy", image: "/project-previews/netflix-strategy-preview.svg", summary: "A product teardown using metric hierarchies, guardrails, and explicit assumptions to frame a modeled retention opportunity." },
  { slug: "productlens", title: "Making text-to-SQL safe enough to use", category: "Applied analytics", image: "/project-previews/productlens-home.png", summary: "Why AST validation, semantic catalogs, and evidence-backed decision cards matter for governed analytics copilots." },
  { slug: "bizguide-ai", title: "Grounding multi-agent systems in evidence", category: "Applied AI", image: "/project-previews/bizguide-ai-home.png", summary: "A practical look at routing, source previews, and citation checks for compliance guidance." },
];

export default function BlogTab() {
  return <article className="vcard-article animate-vcard-fade">
    <header><h2 className="vcard-article-title">Insights</h2></header>
    <div className="vcard-insight-list">{INSIGHTS.map((item) => <Link key={item.slug} href={`/work/${item.slug}`} className="vcard-insight-card"><div className="vcard-insight-image"><Image src={item.image} alt={item.title} fill unoptimized={item.image.endsWith(".svg")} sizes="(max-width: 768px) 100vw, 50vw" /></div><div className="vcard-insight-content"><span>{item.category}</span><h3>{item.title}</h3><p>{item.summary}</p><strong>Read case study →</strong></div></Link>)}</div>
  </article>;
}
