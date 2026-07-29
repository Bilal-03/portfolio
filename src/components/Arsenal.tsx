"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const TOOL_CATEGORIES = [
  {
    label: "Languages",
    tools: ["Java", "Python", "C/C++", "JavaScript", "TypeScript"],
  },
  {
    label: "Frameworks",
    tools: ["React.js", "Next.js", "Flask", "Tailwind CSS", "HTML/CSS"],
  },
  {
    label: "AI & ML",
    tools: ["TensorFlow", "Keras", "PyTorch", "OpenCV", "spaCy", "YOLO"],
  },
  {
    label: "Infrastructure",
    tools: ["Supabase", "PostgreSQL", "SQL", "Docker", "Git/GitHub"],
  },
];

export default function Arsenal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((node, i) => {
            (node as HTMLElement).style.transitionDelay = `${i * 60}ms`;
            node.classList.add("is-visible");
          });
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="stack" className="relative py-24 md:py-36 px-6 md:px-12 lg:px-20">
      <div className="section-divider max-w-6xl mx-auto mb-24 md:mb-36" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-14 md:mb-16">
          <SectionHeader index="02" label="Stack" title="Tools &" highlight="Tech" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TOOL_CATEGORIES.map((category) => (
            <div key={category.label} className="reveal p-5 md:p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] transition-colors">
              <div className="flex items-center gap-3 mb-5"><span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" /><h3 className="text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--color-text-tertiary)]">
                {category.label}
              </h3></div>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-md border border-white/[0.06] bg-black/10 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-bright)] hover:border-[var(--color-border-hover)] transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
