import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const CAPABILITIES = [
  {
    number: "01",
    title: "Product Thinking",
    description: "User problems → requirements → features → experiences.",
    detail: "I turn vague needs into clear product questions, flows and priorities.",
  },
  {
    number: "02",
    title: "Data & Analytics",
    description: "Data exploration → insights → metrics → decisions.",
    detail: "I use funnels, KPIs and operational signals to understand what deserves attention.",
  },
  {
    number: "03",
    title: "Business Systems",
    description: "Workflows → processes → automation → improvement.",
    detail: "I make the invisible steps in business work easier to see and improve.",
  },
  {
    number: "04",
    title: "Applied AI",
    description: "Use AI where it meaningfully improves a product.",
    detail: "I prototype retrieval, extraction and automation around a real user or business need.",
  },
];

export default function WhatIBring() {
  return (
    <section id="capabilities" className="section">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="04"
            label="What I bring"
            title="A product lens with enough technical depth to execute."
          />
        </Reveal>

        <div className="capability-grid">
          {CAPABILITIES.map((capability, index) => (
            <Reveal key={capability.number} delay={index * 70}>
              <article className="capability-card">
                <span className="capability-number">{capability.number}</span>
                <h3>{capability.title}</h3>
                <p className="capability-description">{capability.description}</p>
                <p className="capability-detail">{capability.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
