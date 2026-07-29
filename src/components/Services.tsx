"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const SERVICES_DATA = [
  {
    num: "01",
    title: "Software Engineering",
    description:
      "Designing scalable frontend architectures, robust APIs, and end-to-end full stack solutions tailored to business requirements.",
    tags: ["React", "Next.js", "Node.js", "System Design"],
  },
  {
    num: "02",
    title: "Product & Business Strategy",
    description:
      "Bridging the gap between technical execution and strategic product goals. I understand the business side of tech and love contributing to product vision.",
    tags: ["Product Management", "Strategy", "User Analytics"],
  },
  {
    num: "03",
    title: "AI Integration & Data",
    description:
      "Building intelligent systems with OpenCV, spaCy, and custom ML pipelines, transforming manual data processing into automated microservices.",
    tags: ["Python", "TensorFlow", "Computer Vision", "NLP"],
  },
  {
    num: "04",
    title: "Versatile Tech Enthusiast",
    description:
      "Not bound by a single domain. From beautiful UI/UX to cloud infrastructure, I am a tech-savvy problem solver ready to tackle any challenge.",
    tags: ["UI/UX", "Cloud Architecture", "Rapid Prototyping"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((node, i) => {
            (node as HTMLElement).style.transitionDelay = `${i * 80}ms`;
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
      id="services"
      className="relative py-24 md:py-36 px-6 md:px-12 lg:px-20"
    >
      <div className="section-divider max-w-6xl mx-auto mb-24 md:mb-36" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start reveal">
            <SectionHeader
              index="01"
              label="Capabilities"
              title="What I"
              highlight="Do"
              description="Deep technical expertise paired with a strong product mindset — not just a developer, but a tech enthusiast who understands business and design."
            />
          </div>

          <div className="lg:col-span-8 flex flex-col gap-3">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.num}
                className="reveal group card-glow p-6 md:p-7 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] transition-all duration-500"
              >
                <div className="flex gap-5 md:gap-6">
                  <span className="text-[11px] font-mono text-[var(--color-accent)] pt-1 shrink-0">
                    {service.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] mb-2 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-[15px] text-[var(--color-text-secondary)] font-light leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-[var(--color-text-tertiary)] border border-white/[0.05]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
