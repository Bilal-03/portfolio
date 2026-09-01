import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const CAPABILITIES = [
  {
    number: "01",
    title: "Product Strategy & 0-to-1",
    description: "User pain → PRD specifications → Trust mechanics → Shipped MVP.",
    detail:
      "Experienced in end-to-end product development, from mapping transaction friction to building escrow and verification flows (Handovr).",
  },
  {
    number: "02",
    title: "Marketplace & Decision Analytics",
    description: "Multi-cohort SQL → Opportunity Indexing → Unit Economics → Strategy.",
    detail:
      "Extracting actionable signals from 30k+ listings, modeling feature adoption flywheels, and publishing C-level product strategy memos.",
  },
  {
    number: "03",
    title: "Applied AI & Document Intelligence",
    description: "Multi-Agent RAG → Optical Extraction → Predictive ML Simulators.",
    detail:
      "Engineering production LLM workflows, AP invoice OCR pipelines, and Scikit-Learn launch engines grounded in empirical evidence.",
  },
  {
    number: "04",
    title: "Full-Stack Rapid Prototyping",
    description: "Python / FastAPI / Streamlit / React / Next.js / PostgreSQL.",
    detail:
      "Deep technical competence to architect, test, and deploy functional software directly, accelerating team velocity.",
  },
];

export default function WhatIBring() {
  return (
    <section id="capabilities" className="section section-soft">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="05"
            label="Core Strengths"
            title="Product strategy with data rigor and builder capability."
            description="The intersection of user empathy, analytical depth, and technical execution."
          />
        </Reveal>

        <div className="positioning-grid">
          {CAPABILITIES.map((cap, index) => (
            <Reveal key={cap.number} delay={index * 80}>
              <article className="positioning-card">
                <span className="positioning-number">{cap.number}</span>
                <h3>{cap.title}</h3>
                <p className="text-emerald-400 font-mono text-xs uppercase tracking-wider">{cap.description}</p>
                <p>{cap.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
