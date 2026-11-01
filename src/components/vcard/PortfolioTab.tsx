"use client";

import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES, CaseStudy } from "@/data/projects";
import { useMemo, useState } from "react";

type CategoryFilter = "all" | "product" | "ai" | "analytics";
const FILTERS: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All" }, { id: "product", label: "Product" }, { id: "ai", label: "Applied AI" }, { id: "analytics", label: "Analytics" },
];
const ORDER = ["handovr", "netflix-strategy", "productlens", "bizguide-ai", "karobarkit", "zomato-restaurant-intelligence", "finassist", "dinescope-marketplace-intelligence", "ai-business-analytics-studio", "crm-pro", "invoice-intelligence"];

export default function PortfolioTab() {
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [open, setOpen] = useState(false);
  const projects = useMemo(() => ORDER.map((slug) => CASE_STUDIES.find((project) => project.slug === slug)).filter((project): project is CaseStudy => Boolean(project)).filter((project) => filter === "all" || project.primaryCategory === filter), [filter]);
  const label = FILTERS.find((item) => item.id === filter)?.label;
  return <article className="vcard-article animate-vcard-fade">
    <header><h2 className="vcard-article-title">Projects</h2></header>
    <div className="vcard-filter-mobile"><button type="button" onClick={() => setOpen(!open)} aria-expanded={open}>{label}<span>⌄</span></button>{open && <div>{FILTERS.map((item) => <button key={item.id} type="button" onClick={() => { setFilter(item.id); setOpen(false); }}>{item.label}</button>)}</div>}</div>
    <div className="vcard-filter-desktop" role="tablist" aria-label="Project filters">{FILTERS.map((item) => <button key={item.id} type="button" role="tab" aria-selected={filter === item.id} onClick={() => setFilter(item.id)} className={filter === item.id ? "active" : ""}>{item.label}</button>)}</div>
    <div className="vcard-project-list">{projects.map((project) => <Link key={project.slug} href={`/work/${project.slug}`} className="vcard-project-card"><div className="vcard-project-image"><Image src={project.poster} alt={project.title} fill unoptimized={project.poster.endsWith(".svg")} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" /><span className="vcard-project-eye" aria-hidden="true">⌕</span></div><h3>{project.title}</h3><p>{project.categoryLabel}</p></Link>)}</div>
  </article>;
}
