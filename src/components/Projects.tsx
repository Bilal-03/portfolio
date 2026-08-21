import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { CASE_STUDIES } from "@/data/projects";

export default function Projects() {
  const featured = CASE_STUDIES.filter((project) => project.featured);
  const selected = CASE_STUDIES.filter((project) => !project.featured);

  return (
    <section id="work" className="section section-work">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="02"
            label="Selected work"
            title="Products with a point of view."
            description="I use product thinking, data and applied AI to turn messy workflows into clearer experiences. Explore the decisions behind each one."
          />
        </Reveal>

        <div className="project-grid project-grid-featured">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <ProjectCard project={project} featured={index === 0} />
            </Reveal>
          ))}
        </div>

        <div className="work-subheading">
          <span>More work</span>
          <span className="work-subheading-line" aria-hidden="true" />
        </div>

        <div className="project-grid">
          {selected.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
