import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const PILLARS = [
  { title: "Product Mindset", text: "Start with user pain points, define measurable goals, and prioritize outcomes." },
  { title: "Data Rigor", text: "Use SQL, cohorts, and metrics to find truth rather than relying on intuition." },
  { title: "AI Execution", text: "Leverage AI and modern development tools to build, test, and ship rapidly." },
];

export default function About() {
  return (
    <section id="about" className="section section-soft">
      <div className="site-container">
        <div className="about-grid">
          <Reveal>
            <div>
              <SectionHeader
                index="08"
                label="About Me"
                title="Curious about why products should exist."
                description="I bridge the gap between business strategy, user behavior, and engineering reality."
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="about-copy">
              <p>
                My background in <strong>Computer Science (AI & Machine Learning)</strong> gives me enough technical depth to prototype and deploy data systems directly, while my product management and startup experience keeps the focus squarely on <strong>user pain points, unit economics, and business outcomes</strong>.
              </p>
              <p>
                Whether it is building a 0-to-1 trust-centric marketplace like <strong>Handovr</strong>, modeling 30k+ listings with an empirical <strong>Market Opportunity Index</strong>, or building <strong>RAG and document intelligence engines</strong>, I thrive at the intersection of product thinking, analytics, and applied AI.
              </p>
              <p>
                I am currently open to <strong>Product Management, Product Analytics, and Strategy & Operations</strong> roles.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="positioning-grid" style={{ marginTop: "40px" }}>
          {PILLARS.map((p, index) => (
            <Reveal key={p.title} delay={index * 70}>
              <div className="positioning-card">
                <span className="positioning-number">0{index + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
