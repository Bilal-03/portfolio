import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const PRINCIPLES = [
  {
    number: "01",
    title: "Start with the core problem",
    description:
      "Understand the customer pain point, the operational constraints, and what is currently breaking before proposing features or interfaces.",
  },
  {
    number: "02",
    title: "Ground decisions in empirical data",
    description:
      "Turn assumptions into measurable telemetry, cohort indices, and SQL queries to distinguish true signal from intuition.",
  },
  {
    number: "03",
    title: "Prototype & ship with AI leverage",
    description:
      "Use modern full-stack tools and AI to turn product concepts into working, testable software within days instead of weeks.",
  },
];

export default function Positioning() {
  return (
    <section id="positioning" className="section section-soft">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="03"
            label="Product Philosophy"
            title="High-leverage work starts before the interface."
            description="I focus on why a product must exist, who it empowers, what unit economics support it, and what telemetry proves its value."
          />
        </Reveal>

        <div className="positioning-grid">
          {PRINCIPLES.map((principle, index) => (
            <Reveal key={principle.number} delay={index * 80}>
              <div className="positioning-card">
                <span className="positioning-number">{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
