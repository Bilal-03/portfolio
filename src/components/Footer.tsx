import Reveal from "@/components/ui/Reveal";
import { PROFILE } from "@/data/projects";

const ExternalIcon = () => (
  <svg className="external-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" className="contact-section">
      <div className="site-container">
        <Reveal>
          <div className="contact-panel">
            <div className="contact-monogram" aria-hidden="true">BC</div>
            <div className="contact-copy">
              <p className="eyebrow">10 — Contact</p>
              <h2>Let&apos;s build something useful.</h2>
              <p>
                I&apos;m interested in opportunities across product, analytics, AI-enabled products and business technology.
              </p>
            </div>
            <a href={`mailto:${PROFILE.email}`} className="button button-dark button-large">
              Start a conversation <ExternalIcon />
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="contact-links">
            <a href={`mailto:${PROFILE.email}`} className="contact-link-card">
              <span className="eyebrow">Email</span>
              <span>{PROFILE.email}</span>
              <ExternalIcon />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="contact-link-card">
              <span className="eyebrow">LinkedIn</span>
              <span>linkedin.com/in/bilal2012</span>
              <ExternalIcon />
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="contact-link-card">
              <span className="eyebrow">GitHub</span>
              <span>github.com/Bilal-03</span>
              <ExternalIcon />
            </a>
            <a href={PROFILE.resume} target="_blank" rel="noreferrer" className="contact-link-card">
              <span className="eyebrow">Resume</span>
              <span>View the latest PDF</span>
              <ExternalIcon />
            </a>
          </div>
        </Reveal>

        <div className="footer-bottom">
          <span>Bilal Choudhary / Product · Data · Applied AI</span>
          <span>© {new Date().getFullYear()} Bilal Choudhary</span>
        </div>
      </div>
    </footer>
  );
}
