import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { SKILLS } from "@/data/projects";

const PILLAR_ICONS = ["🎯", "📈", "🤖", "⚡"];

export default function Skills() {
  return (
    <section id="skills" className="section section-soft">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="07"
            label="4-Pillar Competencies"
            title="A structured toolkit spanning strategy, data & applied AI."
            description="Capabilities engineered to bridge problem discovery, SQL-driven analytics, and production AI execution."
          />
        </Reveal>

        <div className="skills-matrix-grid">
          {SKILLS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 70}>
              <div className="skill-pillar-card">
                <div className="skill-pillar-header">
                  <div className="skill-pillar-icon" aria-hidden="true">
                    {PILLAR_ICONS[index % PILLAR_ICONS.length]}
                  </div>
                  <div className="skill-pillar-title-group">
                    <h3>{pillar.title}</h3>
                    <p>{pillar.tagline}</p>
                  </div>
                </div>

                <div className="skill-items-list">
                  {pillar.items.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
