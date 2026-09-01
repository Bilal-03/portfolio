import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { EXPERIENCE } from "@/data/projects";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="06"
            label="Work Experience"
            title="Translating business ambiguity into structured systems."
            description="Track record across product management, startup building (0-to-1 marketplace), enterprise AI automation, and business operations."
          />
        </Reveal>

        <div className="experience-timeline">
          {EXPERIENCE.map((exp, index) => (
            <Reveal key={`${exp.company}-${exp.title}`} delay={index * 80}>
              <div className="experience-card">
                <div className="experience-meta">
                  <span className="experience-period">{exp.period}</span>
                  <span className="experience-badge">{exp.badge}</span>
                  <div className="experience-company">{exp.company}</div>
                  <div className="experience-location">{exp.location}</div>
                </div>

                <div className="experience-content">
                  <h3 className="experience-title">{exp.title}</h3>
                  <ul className="experience-bullets">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
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
