import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { CERTIFICATIONS, EDUCATION } from "@/data/projects";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="09"
            label="Background"
            title="Education & Credentials"
            description="Formal foundation in Artificial Intelligence, Machine Learning, and Software Engineering."
          />
        </Reveal>

        <div className="skills-matrix-grid">
          {EDUCATION.map((item) => (
            <Reveal key={item.institution}>
              <article className="skill-pillar-card">
                <div className="skill-pillar-header">
                  <div className="skill-pillar-icon" aria-hidden="true">
                    🎓
                  </div>
                  <div className="skill-pillar-title-group">
                    <h3>{item.institution}</h3>
                    <p className="font-semibold text-emerald-400">{item.qualification}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span>{item.period}</span>
                  <span>·</span>
                  <span>{item.location}</span>
                </div>
                {item.details && <p className="text-sm text-slate-300">{item.details}</p>}
              </article>
            </Reveal>
          ))}

          <Reveal delay={100}>
            <article className="skill-pillar-card">
              <div className="skill-pillar-header">
                <div className="skill-pillar-icon" aria-hidden="true">
                  📜
                </div>
                <div className="skill-pillar-title-group">
                  <h3>Professional Certifications</h3>
                  <p>Specialized coursework & hands-on accreditations</p>
                </div>
              </div>
              <div className="skill-items-list">
                {CERTIFICATIONS.map((cert) => (
                  <span key={cert} className="skill-badge">
                    {cert}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
