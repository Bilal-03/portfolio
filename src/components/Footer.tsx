"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { PROFILE } from "@/data/projects";

const ExternalIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
    <footer id="contact" className="section border-t border-white/10 pt-20 pb-14">
      <div className="site-container">
        
        {/* Quiet Editorial CTA */}
        <div className="max-w-2xl mb-16">
          <Reveal>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                Get in Touch
              </span>

              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
                Let&apos;s build high-leverage products together.
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
                Open to full-time roles in Product Management, Product Analytics, and Applied AI Engineering.
                Reach out directly via email or connect on LinkedIn and GitHub.
              </p>

              {/* Direct Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="button button-primary button-large inline-flex items-center gap-2"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <span className="text-emerald-400">✓</span>
                      <span>Copied: {PROFILE.email}</span>
                    </>
                  ) : (
                    <>
                      <span>Copy Email ({PROFILE.email})</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PROFILE.email}`}
                  className="button button-outline button-large inline-flex items-center gap-1.5"
                >
                  <span>Send Direct Email</span>
                  <ExternalIcon />
                </a>

                <a
                  href={PROFILE.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-outline button-large inline-flex items-center gap-1.5"
                >
                  <span>Resume PDF</span>
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Metadata & Social Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-zinc-300 font-medium">Bilal Choudhary</span>
            <span>·</span>
            <span>Product · Analytics · Applied AI</span>
            <span>·</span>
            <span>India</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalIcon />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <ExternalIcon />
            </a>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
