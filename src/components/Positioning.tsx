import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const PRINCIPLES = [
  {
    title: "Start with the problem",
    description: "Understand the user, the business context and what is currently getting in the way.",
  },
  {
    title: "Use users + data",
    description: "Turn assumptions into questions, signals and decisions that can be measured over time.",
  },
  {
    title: "Prototype quickly",
    description: "Use technology and AI-assisted execution to make the product idea tangible early.",
  },
];

export default function Positioning() {
  return (
    <section id="positioning" className="section section-soft">
      <div className="site-container">
        <div className="positioning-grid">
          <Reveal>
            <SectionHeader
              index="01"
              label="How I think"
              title="Useful work starts before the interface."
              description="I am interested in why a product should exist, who it helps, what should be built and what the data tells us — not only how it gets implemented."
            />
          </Reveal>

          <div className="principle-list">
            {PRINCIPLES.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 80}>
                <div className="principle-row">
                  <span className="principle-number">0{index + 1}</span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
