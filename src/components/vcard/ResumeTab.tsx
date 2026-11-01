"use client";

import { EDUCATION, EXPERIENCE, SKILLS, CERTIFICATIONS, PROFILE } from "@/data/projects";

const BookIcon = () => (
  <svg className="w-5 h-5 text-[#ffdb70]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-5 h-5 text-[#ffdb70]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const SKILL_METRICS = [
  { name: "Product Strategy & 0-to-1 Discovery", percentage: 95 },
  { name: "SQL Telemetry & Funnel Modeling", percentage: 92 },
  { name: "Applied AI, RAG & LLM Orchestration", percentage: 88 },
  { name: "Full-Stack Architecture (Next.js / Python)", percentage: 85 },
  { name: "Marketplace Unit Economics & Escrow Flow", percentage: 90 },
];

export default function ResumeTab() {
  return (
    <article className="animate-vcard-fade">
      {/* Header with Quick Action */}
      <header className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h2 className="vcard-article-title">Resume</h2>

        <a
          href={PROFILE.resume}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ffdb70] to-[#f3ba2f] text-[#121212] font-semibold text-xs shadow-md hover:brightness-105 active:scale-95 transition-all"
        >
          <DownloadIcon />
          <span>Download Resume PDF</span>
        </a>
      </header>

      {/* Experience Timeline */}
      <section className="mb-10">
        <div className="flex items-center gap-3.5 mb-6">
          <div className="vcard-icon-box">
            <BriefcaseIcon />
          </div>
          <h3 className="text-white text-lg font-semibold tracking-tight">Experience</h3>
        </div>

        <ol className="vcard-timeline-list">
          {EXPERIENCE.map((exp, idx) => (
            <li key={idx} className="vcard-timeline-item">
              <h4 className="text-white text-sm font-semibold tracking-tight">{exp.title}</h4>
              <div className="flex flex-wrap items-center gap-2 text-xs my-1">
                <span className="text-[#ffdb70] font-medium">{exp.company}</span>
                <span className="text-zinc-400">•</span>
                <span className="text-zinc-400">{exp.location}</span>
                <span className="text-zinc-400">•</span>
                <span className="text-zinc-300 font-mono text-[11px]">{exp.period}</span>
              </div>

              <ul className="mt-2 space-y-1.5 text-xs text-zinc-300 leading-relaxed font-light list-disc list-inside">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-zinc-300">
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Education Timeline */}
      <section className="mb-10">
        <div className="flex items-center gap-3.5 mb-6">
          <div className="vcard-icon-box">
            <BookIcon />
          </div>
          <h3 className="text-white text-lg font-semibold tracking-tight">Education</h3>
        </div>

        <ol className="vcard-timeline-list">
          {EDUCATION.map((edu, idx) => (
            <li key={idx} className="vcard-timeline-item">
              <h4 className="text-white text-sm font-semibold tracking-tight">
                {edu.institution}
              </h4>
              <div className="flex flex-wrap items-center gap-2 text-xs my-1">
                <span className="text-[#ffdb70] font-medium">{edu.qualification}</span>
                <span className="text-zinc-400">•</span>
                <span className="text-zinc-300 font-mono text-[11px]">{edu.period}</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-light mt-1.5">
                {edu.details}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Skill Progress Bars */}
      <section className="mb-10">
        <h3 className="text-white text-lg font-semibold tracking-tight mb-5">
          Competency Fills
        </h3>

        <div className="vcard-content-card space-y-4">
          {SKILL_METRICS.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-[#ffdb70] font-mono text-[11px]">{skill.percentage}%</span>
              </div>
              <div className="vcard-skill-progress-bg">
                <div
                  className="vcard-skill-progress-fill"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categorized Skills Grid */}
      <section className="mb-10">
        <h3 className="text-white text-lg font-semibold tracking-tight mb-5">
          Skills & Technical Expertise
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILLS.map((grp) => (
            <div key={grp.title} className="vcard-content-card">
              <h4 className="text-white text-sm font-semibold mb-1">{grp.title}</h4>
              <p className="text-[11px] text-zinc-400 mb-3">{grp.tagline}</p>
              <div className="flex flex-wrap gap-1.5">
                {grp.items.map((item) => (
                  <span
                    key={item}
                    className="bg-[#202022] border border-[#383838] text-zinc-300 text-[11px] px-2.5 py-1 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h3 className="text-white text-lg font-semibold tracking-tight mb-4">
          Certifications & Accreditations
        </h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {CERTIFICATIONS.map((cert, idx) => (
            <li
              key={idx}
              className="bg-[#202022] border border-[#383838] rounded-xl px-3.5 py-2.5 text-xs text-zinc-300 flex items-center gap-2.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffdb70] shrink-0" />
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
