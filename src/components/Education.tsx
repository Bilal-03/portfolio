import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { CERTIFICATIONS, EDUCATION } from "@/data/projects";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="site-container">
        <Reveal>
          <SectionHeader index="09" label="Background" title="Education & certifications." />
        </Reveal>

        <div className="education-grid">
          <div>
            {EDUCATION.map((item) => (
              <Reveal key={item.institution}>
                <article className="education-card">
                  <div>
                    <p className="eyebrow">Education</p>
                    <h3>{item.institution}</h3>
                    <p>{item.qualification}</p>
                  </div>
                  <div className="education-meta">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <article className="certifications-card">
              <p className="eyebrow">Selected certifications</p>
              <ul>
                {CERTIFICATIONS.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
