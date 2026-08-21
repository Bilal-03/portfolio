import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { SKILLS } from "@/data/projects";

export default function Skills() {
  return (
    <section id="skills" className="section section-soft">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="08"
            label="Skills"
            title="The tools support the thinking."
            description="A focused set of product, analytics, applied AI and technical capabilities — without turning the page into a logo wall."
          />
        </Reveal>

        <div className="skills-grid">
          {SKILLS.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <article className="skill-group">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
