"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const STATS = [
  { value: "3", label: "Internships" },
  { value: "84%", label: "OCR accuracy" },
  { value: "10+", label: "Projects Built" },
];

export default function About() {
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
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-36 px-6 md:px-12 lg:px-20"
    >
      <div className="section-divider max-w-6xl mx-auto mb-24 md:mb-36" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="reveal">
            <SectionHeader index="04" label="Profile" title="About" highlight="Me" />

            <div className="grid grid-cols-3 gap-4 mt-8">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 md:p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-center"
                >
                  <p className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-mono tracking-[0.12em] uppercase text-[var(--color-text-tertiary)] mt-1.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal flex flex-col justify-center">
            <div className="space-y-5 text-[var(--color-text-secondary)] leading-[1.85] font-light text-[15px] md:text-base">
              <p>
                I&apos;m a Computer Science graduate from Vellore Institute of Technology who enjoys making difficult systems feel straightforward to use. My work sits at the intersection of engineering, automation, and product thinking.
              </p>
              <p>
                From full-stack platforms to AI-powered document processing, I care about the details that make software dependable: clear interfaces, pragmatic architecture, and measurable results.
              </p>
              <p>
                I bring the same curiosity to product decisions as I do to the codebase — asking what will create the most value, then building it with care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
