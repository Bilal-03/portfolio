import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const PRINCIPLES = [
  ["How I think", "Start with the problem."],
  ["How I decide", "Use users + data."],
  ["How I execute", "Prototype quickly with technology and AI."],
];

export default function About() {
  return (
    <section id="about" className="section section-soft">
      <div className="site-container">
        <div className="about-grid">
          <Reveal>
            <div className="about-intro">
              <div className="about-identity-stamp" aria-label="Bilal Choudhary, Product, Data and Applied AI">
                <span className="about-identity-initials" aria-hidden="true">BC</span>
                <span className="about-identity-details">
                  <strong>Bilal Choudhary</strong>
                  <small>Product / Data / Applied AI</small>
                </span>
              </div>
              <SectionHeader
                index="07"
                label="About me"
                title="Curious about why products should exist."
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="about-copy">
              <p className="about-lead">
                I enjoy understanding who a product helps, what should be built and what the data tells us after it ships.
              </p>
              <p>
                My background in computer science and AI gives me enough technical depth to prototype ideas myself, while my product and business-systems work keeps the focus on users, workflows and outcomes.
              </p>
              <p>
                I am most interested in teams where curiosity, ownership and practical execution matter — especially around product, analytics, AI-enabled products and business technology.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="principles-card-grid">
          {PRINCIPLES.map(([title, statement], index) => (
            <Reveal key={title} delay={index * 70}>
              <div className="principles-card">
                <span className="eyebrow">{title}</span>
                <p>{statement}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="about-signature" aria-hidden="true">
          <span>Bilal / 2026</span>
          <span>Curiosity, clarity, useful things.</span>
        </div>
      </div>
    </section>
  );
}
