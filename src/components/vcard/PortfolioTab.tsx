"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES, CaseStudy } from "@/data/projects";

type CategoryFilter = "all" | "product" | "ai" | "analytics";

const FILTERS: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "product", label: "Marketplaces & 0-to-1" },
  { id: "ai", label: "Applied AI" },
  { id: "analytics", label: "Analytics & Telemetry" },
];

const EyeIcon = () => (
  <svg className="w-5 h-5 text-[#ffdb70]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export default function PortfolioTab() {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>("all");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const filteredProjects: CaseStudy[] =
    selectedFilter === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((p) => p.primaryCategory === selectedFilter);

  const activeFilterLabel =
    FILTERS.find((f) => f.id === selectedFilter)?.label || "All Projects";

  return (
    <article className="animate-vcard-fade">
      {/* Header */}
      <header className="mb-6">
        <h2 className="vcard-article-title">Portfolio</h2>
      </header>

      {/* Filter Tabs (Desktop) */}
      <div className="hidden sm:flex items-center gap-6 mb-8 text-xs font-medium border-b border-[#383838] pb-3">
        {FILTERS.map((filter) => {
          const isActive = selectedFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`transition-colors cursor-pointer ${
                isActive ? "text-[#ffdb70] font-semibold" : "text-zinc-400 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Filter Dropdown (Mobile) */}
      <div className="sm:hidden relative mb-6">
        <button
          type="button"
          onClick={() => setIsSelectOpen(!isSelectOpen)}
          className="w-full bg-[#202022] border border-[#383838] rounded-xl px-4 py-2.5 flex items-center justify-between text-xs text-zinc-200"
        >
          <span>{activeFilterLabel}</span>
          <ChevronDownIcon />
        </button>

        {isSelectOpen && (
          <ul className="absolute top-full left-0 right-0 mt-1.5 bg-[#202022] border border-[#383838] rounded-xl shadow-xl z-20 overflow-hidden py-1">
            {FILTERS.map((filter) => (
              <li key={filter.id}>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedFilter(filter.id);
                    setIsSelectOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-xs transition-colors ${
                    selectedFilter === filter.id
                      ? "text-[#ffdb70] bg-zinc-800/60 font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/40"
                  }`}
                >
                  {filter.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.slug} className="group">
            <Link
              href={`/work/${project.slug}`}
              className="block vcard-content-card !p-0 overflow-hidden rounded-2xl group cursor-pointer"
            >
              {/* Media Container with Zoom & Eye Icon */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <Image
                  src={project.poster}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Eye Overlay Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-11 h-11 rounded-xl bg-zinc-900/90 border border-[#383838] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <EyeIcon />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#1e1e1f]/90 backdrop-blur-md border border-[#383838] text-[10px] text-zinc-300 font-mono px-2 py-0.5 rounded-md">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <h3 className="text-white text-sm font-semibold group-hover:text-[#ffdb70] transition-colors truncate">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-xs mt-1 line-clamp-2 font-light">
                  {project.summary}
                </p>

                {/* Highlight Metric / Year */}
                <div className="mt-3 pt-3 border-t border-[#383838] flex items-center justify-between text-[11px]">
                  <span className="text-[#ffdb70] font-mono font-medium">
                    {project.keyMetricHighlight?.value || project.category}
                  </span>
                  <span className="text-zinc-500 font-mono">{project.year}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </article>
  );
}
