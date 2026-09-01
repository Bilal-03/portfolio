"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS, type PrimaryCategory } from "@/data/projects";

type FilterTab = "all" | PrimaryCategory;

const FILTER_TABS: { id: FilterTab; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "analytics", label: "Marketplace & Decision Analytics" },
  { id: "product", label: "0-to-1 Products & Workflows" },
  { id: "ai", label: "Applied AI & Intelligent Systems" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "all") return true;
    return project.primaryCategory === activeFilter;
  });

  return (
    <section id="work" className="section section-work">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="02"
            label="Selected work"
            title="Products, decision engines & applied AI systems."
            description="Explore the problem framing, architecture, and empirical evidence behind 10 shipped systems spanning 0-to-1 marketplaces, SQL intelligence suites, and predictive engines."
          />
        </Reveal>

        {/* Filter Navigation Bar */}
        <Reveal delay={80}>
          <div className="project-filter-bar" role="tablist" aria-label="Project category filters">
            <div className="project-filter-tabs">
              {FILTER_TABS.map((tab) => {
                const count = PROJECTS.filter((p) => {
                  if (tab.id === "all") return true;
                  return p.primaryCategory === tab.id;
                }).length;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeFilter === tab.id}
                    className={`filter-tab-btn ${activeFilter === tab.id ? "active" : ""}`}
                    onClick={() => setActiveFilter(tab.id)}
                  >
                    <span>{tab.label}</span>
                    <span className="filter-count-badge">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 4) * 60}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
