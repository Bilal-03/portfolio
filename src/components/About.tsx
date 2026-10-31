import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { EDUCATION, CERTIFICATIONS } from "@/data/projects";

export default function About() {
  const primaryEdu = EDUCATION[0];

  return (
    <section id="about" className="section">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="03"
            label="Background"
            title="Product Mindset. Engineering Rigor."
            description="Bridging customer pain points, data-driven unit economics, and production engineering reality."
          />
        </Reveal>

        {/* Split Two-Card Bento (55% / 45%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          
          {/* Card 1: Story & Technical Foundation (55% = 7 cols) */}
          <div className="lg:col-span-7">
            <Reveal delay={60}>
              <div className="bento-card p-6 sm:p-8 border border-white/10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                      My Story & Approach
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="text-xs text-slate-400 font-mono">End-to-End Ownership</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">
                    Engineering products grounded in evidence rather than intuition.
                  </h3>

                  <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                    <p>
                      My foundation in <strong>Computer Science (AI & Machine Learning)</strong> from{" "}
                      <strong>{primaryEdu?.institution || "Vellore Institute of Technology"}</strong> gives me the technical fluency to architect data pipelines, predictive models, and LLM applications directly — while my product instincts keep the focus squarely on <strong>user friction, unit economics, and business outcomes</strong>.
                    </p>
                    <p>
                      From conceptualizing and launching <strong>Handovr</strong> (a 0-to-1 verified electronics marketplace with escrow mechanics) to modeling 30,000+ restaurant listings and building enterprise AP invoice OCR engines, I thrive on bringing structure to ambiguous operational problems and shipping software that users trust.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>0-to-1 Product Discovery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span>Empirical SQL Telemetry</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Production AI Systems</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Card 2: Education & Verified Credentials (45% = 5 cols) */}
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="bento-card p-6 sm:p-8 border border-white/10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                      Education & Credentials
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="text-xs text-slate-400 font-mono">Academic Foundation</span>
                  </div>

                  {/* University Degree */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                      <span>{primaryEdu.period}</span>
                      <span>{primaryEdu.location}</span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-0.5">
                      {primaryEdu.institution}
                    </h4>
                    <p className="text-xs font-medium text-indigo-300 mb-2">
                      {primaryEdu.qualification}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {primaryEdu.details}
                    </p>
                  </div>

                  {/* Verified Accreditations */}
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                      Specialized Accreditations:
                    </span>
                    <div className="space-y-2">
                      {CERTIFICATIONS.map((cert) => (
                        <div
                          key={cert}
                          className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-300"
                        >
                          <span className="text-indigo-400 font-mono">✓</span>
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Current Status:</span>
                  <span className="text-emerald-400 font-medium">Open to Full-Time & Roles</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
