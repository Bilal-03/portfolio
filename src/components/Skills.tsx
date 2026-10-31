import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { SKILLS } from "@/data/projects";

const PILLAR_ICONS = ["🎯", "📈", "🤖", "⚡"];

const PILLAR_HIGHLIGHTS = [
  "Outcome-Oriented PRDs & GTM",
  "Advanced SQL (CTEs, Partitions)",
  "Multi-Agent RAG & Doc OCR",
  "Python, Next.js & Supabase",
];

export default function Skills() {
  return (
    <section id="skills" className="section section-soft">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="02"
            label="Technical Competencies"
            title="4-Pillar Toolkit."
            description="Engineered to bridge customer discovery, empirical SQL analytics, and production AI delivery."
          />
        </Reveal>

        {/* 2x2 Bento Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {SKILLS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 60}>
              <div className="bento-card p-6 sm:p-7 border border-white/10 flex flex-col justify-between h-full hover:border-indigo-500/40 transition-all duration-300">
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-lg">
                        {PILLAR_ICONS[index % PILLAR_ICONS.length]}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {pillar.title}
                        </h3>
                        <p className="text-xs font-mono text-slate-400 mt-0.5">
                          {pillar.tagline}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-indigo-400 font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 whitespace-nowrap">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 mt-5 mb-6">
                    {pillar.items.map((skill) => (
                      <span key={skill} className="tag-pill text-xs py-1 px-2.5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Highlight */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Specialization:</span>
                  <span className="font-medium text-indigo-300 font-mono">
                    {PILLAR_HIGHLIGHTS[index % PILLAR_HIGHLIGHTS.length]}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
