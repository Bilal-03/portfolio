"use client";

import { useState } from "react";
import { PROFILE } from "@/data/projects";

const ArrowIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M7 7h10v10" />
  </svg>
);

export default function ContactTab() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  };

  return (
    <article className="vcard-article vcard-contact animate-vcard-fade">
      <header>
        <h2 className="vcard-article-title">Contact</h2>
      </header>

      <section className="vcard-contact-intro" aria-labelledby="contact-invitation">
        <h3 id="contact-invitation">Let’s build something meaningful.</h3>
        <p>Have a role, a product challenge, or an idea to explore? I’d love to hear from you.</p>
        <span className="vcard-contact-availability">
          <span className="vcard-contact-status-dot" aria-hidden="true" />
          {PROFILE.availability}
        </span>
      </section>

      <section className="vcard-contact-email-card" aria-labelledby="contact-email-heading">
        <span className="vcard-contact-mail-icon" aria-hidden="true">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
          </svg>
        </span>
        <div className="vcard-contact-email-content">
          <h3 id="contact-email-heading">Start a conversation</h3>
          <a className="vcard-contact-email-address" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <div className="vcard-contact-actions">
            <a className="vcard-contact-button vcard-contact-button-primary" href={`mailto:${PROFILE.email}`}>
              Email me <ArrowIcon />
            </a>
            <button className="vcard-contact-button vcard-contact-button-secondary" type="button" onClick={copyEmail}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                <rect x="8" y="8" width="12" height="12" rx="2" />
                <path strokeLinecap="round" d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" />
              </svg>
              {copyStatus === "copied" ? "Copied" : "Copy email"}
            </button>
          </div>
          <p className="vcard-contact-copy-status" role="status" aria-atomic="true">
            {copyStatus === "copied" && "Email address copied to clipboard."}
            {copyStatus === "error" && "Couldn’t copy—select the email address above."}
          </p>
        </div>
      </section>

      <div className="vcard-contact-options">
        <section className="vcard-contact-option" aria-labelledby="contact-hiring">
          <h3 id="contact-hiring">Hiring?</h3>
          <p>Let’s discuss Technical PM, AI Product, and Analytics opportunities.</p>
          <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer">View résumé <ArrowIcon /></a>
        </section>
        <section className="vcard-contact-option" aria-labelledby="contact-collaboration">
          <h3 id="contact-collaboration">Want to collaborate?</h3>
          <p>Let’s connect around product strategy, applied AI, and analytics.</p>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowIcon /></a>
        </section>
      </div>

      <p className="vcard-contact-location">{PROFILE.location} <span aria-hidden="true">·</span> IST (UTC+5:30)</p>
    </article>
  );
}
