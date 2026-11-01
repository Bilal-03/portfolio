"use client";

import { SKILLS } from "@/data/projects";

export default function SkillsTab() {
  return <article className="vcard-article animate-vcard-fade">
    <header><h2 className="vcard-article-title">Skills</h2></header>
    <section className="vcard-section">
      <h3 className="vcard-section-title">Technical Expertise</h3>
      <div className="vcard-skills-grid">{SKILLS.map((group) => <div key={group.title} className="vcard-skill-card"><h4>{group.title}</h4><p>{group.tagline}</p><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
    </section>
  </article>;
}
