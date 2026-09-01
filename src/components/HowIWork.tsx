import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const STEPS = [
  {
    step: "01",
    title: "Discover & Frame",
    subtitle: "User pain & root cause",
    description: "Map customer journeys, identify bottlenecks, and define the core problem.",
  },
  {
    step: "02",
    title: "Data Exploration",
    subtitle: "SQL, cohorts & indices",
    description: "Analyze baseline metrics, segment behavioral cohorts, and size opportunity.",
  },
  {
    step: "03",
    title: "PRD & Prioritize",
    subtitle: "RICE & unit economics",
    description: "Scope MVP requirements, align trade-offs, and design trust/verification flows.",
  },
  {
    step: "04",
    title: "Build & Measure",
    subtitle: "Applied AI & telemetry",
    description: "Deploy working software, instrument funnels, and iterate from feedback.",
  },
];

export default function HowIWork() {
  return (
    <section id="approach" className="section">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            index="04"
            label="Product Lifecycle"
            title="A structured loop from ambiguity to shipped product."
            description="How I move from an underspecified business challenge to an evidence-backed, working solution."
          />
        </Reveal>

        <div className="lifecycle-grid">
          {STEPS.map((item, index) => (
            <Reveal key={item.step} delay={index * 70}>
              <div className="lifecycle-card">
                <span className="lifecycle-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p className="font-semibold text-emerald-400 text-xs tracking-wider uppercase">{item.subtitle}</p>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
