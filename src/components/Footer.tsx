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
    <footer id="contact" className="section border-t border-white/10 pt-16 pb-12">
      <div className="site-container">
        
        {/* Contact Bento Box */}
        <div className="bento-card p-8 sm:p-12 border border-white/10 relative overflow-hidden mb-12">
          {/* Subtle ambient glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Get in Touch</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Let&apos;s build high-leverage products together.
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
                Open to full-time roles in Product Management, Product Analytics, and Applied AI Engineering. Reach out directly or connect on professional platforms.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="button button-accent button-large inline-flex items-center gap-2"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <span className="text-emerald-300">✓</span>
                      <span>Copied: {PROFILE.email}</span>
                    </>
                  ) : (
                    <>
                      <span>📋</span>
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
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Metadata & Social Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 pt-4">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-medium">Bilal Choudhary</span>
            <span>·</span>
            <span>Product · Analytics · Applied AI</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalIcon />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors inline-flex items-center gap-1"
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
