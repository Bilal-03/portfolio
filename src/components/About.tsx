import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { EDUCATION, CERTIFICATIONS } from "@/data/projects";

export default function About() {
  const primaryEdu = EDUCATION[0];

  return (
    <section id="about" className="section section-soft">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="04"
            label="Background"
            title="Product Mindset. Engineering Rigor."
            description="Bridging customer pain points, data-driven unit economics, and production engineering reality."
          />
        </Reveal>

        {/* Two-Column Editorial Split (No heavy boxy containers) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mt-12 border-t border-white/10 pt-10">
          
          {/* Left Column (7 cols): Personal Story & Product Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <Reveal delay={60}>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                  Philosophy & Approach
                </span>

                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-5 tracking-tight">
                  Engineering products grounded in empirical evidence rather than intuition.
                </h3>

                <div className="space-y-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
                  <p>
                    My foundation in <strong className="text-zinc-200">Computer Science (AI & Machine Learning)</strong> from{" "}
                    <strong className="text-zinc-200">{primaryEdu?.institution || "Vellore Institute of Technology"}</strong> gives me the technical fluency to architect data pipelines, predictive models, and LLM applications directly — while my product instincts keep the focus squarely on <strong className="text-zinc-200">user friction, unit economics, and business outcomes</strong>.
                  </p>
                  <p>
                    From conceptualizing and launching <strong className="text-zinc-200">Handovr</strong> (a 0-to-1 verified electronics marketplace with escrow mechanics) to modeling 30,000+ restaurant listings and building enterprise AP invoice OCR engines, I thrive on bringing structure to ambiguous operational problems and shipping software that users trust.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  <span>0-to-1 Discovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  <span>Empirical SQL Telemetry</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  <span>Production AI Systems</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column (5 cols): Education & Verified Credentials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Reveal delay={120}>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                  Academic Foundation
                </span>

                {/* University Degree */}
                <div className="pb-6 mb-6 border-b border-white/10">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
                    <span>{primaryEdu.period}</span>
                    <span>{primaryEdu.location}</span>
                  </div>
                  <h4 className="text-base font-semibold text-white mb-1">
                    {primaryEdu.institution}
                  </h4>
                  <p className="text-xs text-zinc-300 font-medium mb-2">
                    {primaryEdu.qualification}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {primaryEdu.details}
                  </p>
                </div>

                {/* Verified Accreditations */}
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                    Certifications & Training
                  </span>
                  <div className="space-y-2.5">
                    {CERTIFICATIONS.map((cert) => (
                      <div
                        key={cert}
                        className="flex items-start gap-2 text-xs text-zinc-300"
                      >
                        <span className="text-zinc-500 font-mono">▸</span>
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Availability:</span>
                <span className="text-emerald-400 font-medium">Open to PM, Analytics & AI roles</span>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
