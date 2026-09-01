"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { PROFILE, ROLE_PERSPECTIVES } from "@/data/projects";

export default function Hero() {
  const [activeRole, setActiveRole] = useState<"pm" | "analytics" | "ai">("pm");

  const currentPerspective =
    ROLE_PERSPECTIVES.find((p) => p.id === activeRole) || ROLE_PERSPECTIVES[0];

  return (
    <section id="hero" className="hero-section">
      <div className="site-container">
        <div className="hero-grid">
          {/* Left Column: Copy & Interactive Role Perspective */}
          <div className="hero-copy">
            <Reveal>
              <div className="hero-kicker">
                <span className="status-dot" aria-hidden="true" />
                <span>{PROFILE.eyebrow}</span>
                <span className="hero-kicker-divider" aria-hidden="true" />
                <span>{PROFILE.location}</span>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="hero-title">
                I turn problems & data into{" "}
                <span className="hero-title-highlight">useful products.</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <div className="role-switcher-container">
                <span className="role-switcher-label">View My Profile Perspective:</span>
                <div className="role-switcher-pills" role="tablist" aria-label="Role perspectives">
                  {ROLE_PERSPECTIVES.map((role) => (
                    <button
                      key={role.id}
                      type="button"
                      role="tab"
                      aria-selected={activeRole === role.id}
                      className={`role-pill-btn ${activeRole === role.id ? "active" : ""}`}
                      onClick={() => setActiveRole(role.id)}
                    >
                      <span className="role-pill-dot" aria-hidden="true" />
                      {role.label}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="perspective-card" key={currentPerspective.id}>
                <div className="perspective-header">
                  <span className="perspective-badge">{currentPerspective.badge}</span>
                </div>
                <h2 className="perspective-headline">{currentPerspective.headline}</h2>
                <p className="perspective-desc">{currentPerspective.description}</p>
                <div className="perspective-highlights">
                  {currentPerspective.highlights.map((highlight) => (
                    <span key={highlight} className="perspective-highlight-pill">
                      ✓ {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="hero-actions">
                <Link href="#work" className="button button-primary button-large">
                  Explore Case Studies <span aria-hidden="true">↓</span>
                </Link>
                <a
                  href={PROFILE.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-outline button-large"
                >
                  Download Resume <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="button button-outline button-large"
                >
                  Get in Touch <span aria-hidden="true">✉</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Visual Portrait & Floating Metric Badges */}
          <Reveal delay={140} className="hero-visual">
            <div className="portrait-container">
              <Image
                src="/profile.jpg"
                alt={PROFILE.name}
                fill
                priority
                sizes="(max-width: 680px) 85vw, (max-width: 1024px) 45vw, 380px"
                className="hero-portrait-img"
              />
              <div className="portrait-overlay-bottom">
                <span className="portrait-name">{PROFILE.name}</span>
                <span className="portrait-tagline">Product · Analytics · Applied AI</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
