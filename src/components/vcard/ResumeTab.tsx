"use client";

import { EDUCATION, EXPERIENCE, PROFILE, SKILLS } from "@/data/projects";

const BriefcaseIcon = () => <span aria-hidden="true">▣</span>;
const BookIcon = () => <span aria-hidden="true">▤</span>;

export default function ResumeTab() {
  return <article className="vcard-article animate-vcard-fade">
    <header className="vcard-resume-header"><h2 className="vcard-article-title">Resume</h2><a className="vcard-download" href={PROFILE.resume} target="_blank" rel="noreferrer">Download Resume PDF</a></header>
    <section className="vcard-resume-section"><div className="vcard-resume-heading"><span className="vcard-icon-box"><BriefcaseIcon /></span><h3>Experience</h3></div><ol className="vcard-timeline-list">{EXPERIENCE.map((item) => <li key={`${item.company}-${item.period}`} className="vcard-timeline-item"><h4>{item.title}</h4><div className="vcard-timeline-meta"><strong>{item.company}</strong><span>{item.location}</span><time>{item.period}</time></div><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></li>)}</ol></section>
    <section className="vcard-resume-section"><div className="vcard-resume-heading"><span className="vcard-icon-box"><BookIcon /></span><h3>Education</h3></div><ol className="vcard-timeline-list">{EDUCATION.map((item) => <li key={item.institution} className="vcard-timeline-item"><h4>{item.institution}</h4><div className="vcard-timeline-meta"><strong>{item.qualification}</strong><time>{item.period}</time></div><p>{item.details}</p></li>)}</ol></section>
    <section className="vcard-resume-section"><h3 className="vcard-section-title">Skills &amp; Technical Expertise</h3><div className="vcard-skills-grid">{SKILLS.map((group) => <div key={group.title} className="vcard-skill-card"><h4>{group.title}</h4><p>{group.tagline}</p><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></section>
  </article>;
}
