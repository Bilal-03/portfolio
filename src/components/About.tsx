import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { EDUCATION, CERTIFICATIONS } from "@/data/projects";

const QUICK_FACTS = [
  {
    label: "Education",
    value: "B.Tech in CS (AI & ML)",
    sub: "Vellore Institute of Technology (VIT)",
  },
  {
    label: "Hands-on Work",
    value: "Founder @ Handovr & PM",
    sub: "0-to-1 marketplace & operations",
  },
  {
    label: "Focus Areas",
    value: "Product · Analytics · AI",
    sub: "PRDs, SQL telemetry, and LLMs",
  },
  {
    label: "Status",
    value: "Open to Opportunities",
    sub: "PM, Analytics & Applied AI roles",
  },
];

export default function About() {
  const primaryEdu = EDUCATION[0];

  return (
    <section id="about" className="section section-soft">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="03"
            label="Background"
            title="Building at the intersection of product, data & AI."
            description="Bridging customer pain points, data-driven unit economics, and production engineering reality."
          />
        </Reveal>

        <div className="about-grid mt-10">
          <Reveal delay={80}>
            <div className="about-copy space-y-4 text-slate-300 leading-relaxed">
              <p>
                My background in <strong>Computer Science (AI & Machine Learning)</strong> from{" "}
                <strong>{primaryEdu?.institution || "Vellore Institute of Technology"}</strong> provides the empirical depth to build data systems, predictive models, and LLM pipelines directly — while my product mindset keeps the focus squarely on <strong>user pain points, unit economics, and tangible business outcomes</strong>.
              </p>
              <p>
                From launching <strong>Handovr</strong> (a 0-to-1 verified C2C electronics marketplace) and managing enterprise document workflows, to modeling 30,000+ restaurant listings and architecting document OCR pipelines, I specialize in taking ambiguous challenges from zero to a reliable, evidence-backed product.
              </p>
            </div>
          </Reveal>

          {/* Scannable Quick Facts Grid */}
          <Reveal delay={120}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {QUICK_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="p-4 rounded-xl border border-white/10 bg-white/[0.02]"
                >
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                    {fact.label}
                  </span>
                  <div className="font-semibold text-white mt-1 text-sm">{fact.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{fact.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Credentials Pills */}
        <Reveal delay={160}>
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mr-2">
              Accreditations:
            </span>
            {CERTIFICATIONS.map((cert) => (
              <span
                key={cert}
                className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
              >
                ✓ {cert}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
