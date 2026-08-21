import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const STEPS = [
  ["Understand", "Users / business"],
  ["Analyse", "Data / research"],
  ["Prioritise", "Impact / effort"],
  ["Design", "Flows / requirements"],
  ["Build", "AI-assisted execution"],
  ["Measure", "Metrics / iteration"],
];

export default function HowIWork() {
  return (
    <section id="approach" className="section section-soft">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="03"
            label="My approach"
            title="From uncertainty to something useful."
            description="A lightweight loop for moving from a real problem to a product that can learn from what people do next."
          />
        </Reveal>

        <div className="workflow-grid">
          {STEPS.map(([title, description], index) => (
            <Reveal key={title} delay={index * 60}>
              <div className="workflow-step">
                <span className="workflow-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                {index < STEPS.length - 1 && <span className="workflow-arrow" aria-hidden="true">→</span>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
