import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { PROFILE } from "@/data/projects";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-accent hero-accent-one" aria-hidden="true" />
      <div className="hero-accent hero-accent-two" aria-hidden="true" />

      <div className="site-container hero-inner">
        <Reveal>
          <div className="hero-kicker">
            <span className="status-dot" aria-hidden="true" />
            <span>{PROFILE.eyebrow}</span>
            <span className="hero-kicker-divider" aria-hidden="true" />
            <span className="hero-kicker-location">{PROFILE.location}</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="hero-title">
            I turn problems
            <br />
            <span>and data into useful products.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="hero-description">{PROFILE.subheadline}</p>
        </Reveal>

        <Reveal delay={240}>
          <div className="hero-actions">
            <Link href="#work" className="button button-dark button-large">
              View my work <span aria-hidden="true">↗</span>
            </Link>
            <a href={PROFILE.resume} target="_blank" rel="noreferrer" className="button button-outline button-large">
              Download resume <span aria-hidden="true">↓</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="identity-strip" aria-label="Professional focus">
            <span>Product thinking</span>
            <span aria-hidden="true">×</span>
            <span>Data analytics</span>
            <span aria-hidden="true">×</span>
            <span>AI</span>
            <span aria-hidden="true">×</span>
            <span>Business</span>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="hero-footnote">
            <span>{PROFILE.availability}</span>
            <span className="hero-footnote-line" aria-hidden="true" />
            <span>From understanding the problem to shipping the solution</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
