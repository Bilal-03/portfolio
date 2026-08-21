import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { EXPERIENCE } from "@/data/projects";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="site-container narrow-container">
        <Reveal>
          <SectionHeader
            index="06"
            label="Experience"
            title="Work shaped by products and operations."
            description="Roles where I translated business needs into clearer workflows, useful products and better ways of working."
          />
        </Reveal>

        <div className="experience-list">
          {EXPERIENCE.map((experience, index) => (
            <Reveal key={`${experience.company}-${experience.title}`} delay={index * 60}>
              <article className={`experience-item ${experience.current ? "experience-item-current" : ""}`}>
                <div className="experience-marker" aria-hidden="true">
                  <span className="experience-index">0{index + 1}</span>
                  <span className={experience.current ? "experience-marker-dot is-current" : "experience-marker-dot"} />
                </div>
                <div className="experience-content">
                  <div className="experience-heading">
                    <div>
                      <div className="experience-role-topline">
                        <p className="eyebrow">{experience.company}</p>
                        <span className="experience-status">{experience.current ? "Current focus" : "Earlier experience"}</span>
                      </div>
                      <h3>{experience.title}</h3>
                    </div>
                    <div className="experience-meta">
                      <span>{experience.period}</span>
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  <ul>
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
