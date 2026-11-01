import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { SKILLS } from "@/data/projects";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="03"
            label="Competencies"
            title="Toolkit & Capabilities."
            description="Engineered to bridge customer discovery, empirical SQL analytics, and production AI delivery."
          />
        </Reveal>

        {/* Compact Domain Lists */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-white/10 pt-10">
          {SKILLS.map((domain, index) => (
            <Reveal key={domain.title} delay={index * 50}>
              <div className="flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs text-zinc-500">
                    0{index + 1}
                  </span>
                  <span className="text-zinc-600">/</span>
                  <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    {domain.title}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 mb-4">
                  {domain.tagline}
                </p>

                <div className="flex flex-wrap gap-2">
                  {domain.items.map((item) => (
                    <span
                      key={item}
                      className="tag-pill text-xs py-1 px-2.5 text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
