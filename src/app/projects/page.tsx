"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "all") return true;
    return project.primaryCategory === activeFilter;
  });

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 min-h-screen">
        <section className="section section-work">
          <div className="site-container">
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-[#ffdb70] hover:underline transition-colors"
              >
                <span>← Back to Portfolio</span>
              </Link>
            </div>

            <Reveal>
              <SectionHeader
                index="All"
                label="Case Study Archive"
                title="All Shipped Projects & Systems."
                description="Explore problem framing, architectures, and empirical evidence behind all 11 systems spanning 0-to-1 marketplaces, SQL intelligence suites, OCR automation, and predictive engines."
              />
            </Reveal>

            {/* Filter Navigation Bar */}
            <Reveal delay={80}>
              <div
                className="project-filter-bar mt-8"
                role="tablist"
                aria-label="Project category filters"
              >
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
            <div className="project-grid mt-10">
              {filteredProjects.map((project, index) => (
                <Reveal key={project.slug} delay={(index % 4) * 60}>
                  <ProjectCard project={project} index={index} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
