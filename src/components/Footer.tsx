"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { PROFILE } from "@/data/projects";

const ExternalIcon = () => (
  <svg
    className="external-icon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="site-container">
        <div className="footer-inner">
          <Reveal>
            <div className="footer-main-row">
              <div>
                <span className="eyebrow">Let&apos;s Connect</span>
                <h2 className="footer-cta-title">Ready to build something useful?</h2>
                <p className="footer-cta-desc">
                  Open to Product Management, Product Analytics, and Strategy & Operations opportunities. Reach out directly or explore my work on GitHub.
                </p>
              </div>

              <div className="footer-actions">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="copy-email-btn"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <span className="text-emerald-400">✓</span> Copied to clipboard!
                    </>
                  ) : (
                    <>
                      <span>📋</span> Copy Email
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PROFILE.email}`}
                  className="button button-primary button-large"
                >
                  Send an Email <ExternalIcon />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="positioning-grid">
              <a
                href={`mailto:${PROFILE.email}`}
                className="positioning-card hover:border-emerald-500/40"
              >
                <span className="positioning-number">Email</span>
                <h3 className="text-base break-all">{PROFILE.email}</h3>
                <p className="text-xs text-slate-400">Direct inbox for opportunities</p>
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="positioning-card hover:border-cyan-500/40"
              >
                <span className="positioning-number">LinkedIn</span>
                <h3 className="text-base">in/bilal2012 ↗</h3>
                <p className="text-xs text-slate-400">Professional network & recommendations</p>
              </a>

              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="positioning-card hover:border-indigo-500/40"
              >
                <span className="positioning-number">GitHub</span>
                <h3 className="text-base">github.com/Bilal-03 ↗</h3>
                <p className="text-xs text-slate-400">Open source code, SQL & repositories</p>
              </a>
            </div>
          </Reveal>

          <div className="footer-bottom-row">
            <span>Bilal Choudhary · Product Management · Data Analytics · Applied AI</span>
            <span>© {new Date().getFullYear()} Bilal Choudhary</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
