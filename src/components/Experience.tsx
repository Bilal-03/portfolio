import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { EXPERIENCE } from "@/data/projects";

export default function Experience() {
  return (
    <section id="experience" className="section section-soft">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="02"
            label="Track Record"
            title="Work Experience."
            description="Track record across product management, startup building (0-to-1 marketplace), enterprise AI automation, and business operations."
          />
        </Reveal>

        {/* Clean Editorial Timeline Rows */}
        <div className="mt-12 space-y-10">
          {EXPERIENCE.map((exp, index) => (
            <Reveal key={`${exp.company}-${exp.title}`} delay={index * 60}>
              <div className="border-t border-white/10 pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                
                {/* Left Column (Period & Company) */}
                <div className="md:col-span-4 flex flex-col justify-start">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono text-zinc-400">
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {exp.company}
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">
                    {exp.location}
                  </p>
                </div>

                {/* Right Column (Role & Bullets) */}
                <div className="md:col-span-8">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <h4 className="text-lg font-medium text-white">
                      {exp.title}
                    </h4>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs font-mono text-zinc-400">
                      {exp.badge}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm text-zinc-400 leading-relaxed">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span className="text-zinc-600 font-mono mt-1 text-xs">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
