"use client";

import { useEffect, useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((node, i) => {
            (node as HTMLElement).style.transitionDelay = `${i * 100}ms`;
            node.classList.add("is-visible");
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const [featured, ...rest] = PROJECTS;

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative py-24 md:py-36 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          <SectionHeader
            index="03"
            label="Portfolio"
            title="Selected"
            highlight="Works"
            description="Selected products built from the interface down to the architecture. Hover to preview each experience."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          <div className="reveal lg:row-span-2">
            <ProjectCard project={featured} featured />
          </div>

          {rest.map((project, index) => (
            <div
              key={project.title}
              className={`reveal ${
                rest.length % 2 === 1 && index === rest.length - 1
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
