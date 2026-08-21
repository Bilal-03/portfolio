import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { PROFILE } from "@/data/projects";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-folio hero-folio-top" aria-hidden="true">
        <span>01</span>
        <span>Portfolio / 2026</span>
      </div>

      <div className="site-container hero-inner">
        <div className="hero-layout">
          <div className="hero-copy">
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

          <Reveal delay={120} className="hero-portrait-reveal">
            <div className="hero-portrait-area">
              <div className="portrait-note portrait-note-top" aria-hidden="true">
                <span>01 / Profile</span>
                <span>India</span>
              </div>

              <div className="portrait-frame">
                <div className="portrait-frame-accent" aria-hidden="true" />
                <Image
                  src="/profile.jpg"
                  alt="Bilal Choudhary"
                  fill
                  priority
                  sizes="(max-width: 680px) 82vw, (max-width: 980px) 42vw, 390px"
                  className="hero-portrait"
                />
                <div className="portrait-caption">
                  <span>Bilal Choudhary</span>
                  <span>Product / Data / AI</span>
                </div>
              </div>

              <div className="portrait-note portrait-note-bottom" aria-hidden="true">
                <span>Curious by default</span>
                <span className="portrait-note-line" />
                <span>Useful by design</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
