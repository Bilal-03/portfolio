"use client";

import { useState } from "react";
import Image from "next/image";
import { PROFILE } from "@/data/projects";

// Clean SVG icons matching the vCard design
const MailIcon = () => (
  <svg className="w-4 h-4 text-[#ffdb70]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4 text-[#ffdb70]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const StatusIcon = () => (
  <svg className="w-4 h-4 text-[#ffdb70]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-4 h-4 text-[#ffdb70]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const ChevronDownIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`w-4 h-4 text-[#ffdb70] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="vcard-container p-5 xl:p-8 xl:sticky xl:top-12 self-start w-full xl:w-[285px] shrink-0 transition-all duration-300">
      {/* Top Profile Header */}
      <div className="flex xl:flex-col items-center gap-4 xl:gap-5 relative">
        {/* Avatar Box */}
        <div className="relative w-20 h-20 xl:w-36 xl:h-36 rounded-2xl xl:rounded-3xl overflow-hidden bg-[#2b2b2c] p-1 border border-[#383838] shadow-lg shrink-0">
          <Image
            src="/profile.jpg"
            alt={PROFILE.name}
            fill
            sizes="(max-width: 1250px) 80px, 150px"
            className="object-cover rounded-[14px] xl:rounded-[22px]"
            priority
          />
        </div>

        {/* Name & Badge */}
        <div className="flex-1 xl:text-center min-w-0">
          <h1 className="text-white text-lg xl:text-xl font-semibold tracking-tight truncate mb-1.5" title={PROFILE.name}>
            {PROFILE.name}
          </h1>

          <div className="inline-block bg-[#2b2b2c] border border-[#383838] text-zinc-300 text-[11px] font-normal px-3 py-1 rounded-lg tracking-wide">
            Product & AI Systems
          </div>
        </div>

        {/* Mobile Accordion Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden absolute -top-5 -right-5 bg-gradient-to-br from-zinc-700/60 to-zinc-900 border-l border-b border-[#383838] text-xs text-[#ffdb70] px-3.5 py-2 rounded-bl-xl rounded-tr-[19px] flex items-center gap-1.5 shadow-md active:scale-95 transition-transform"
          aria-label="Toggle contact details"
        >
          <span className="text-[11px] font-medium hidden sm:inline">Show Contacts</span>
          <ChevronDownIcon open={isOpen} />
        </button>
      </div>

      {/* Collapsible Contacts & Socials */}
      <div className={`mt-5 pt-5 border-t border-[#383838] ${isOpen ? "block" : "hidden xl:block"} transition-all duration-300`}>
        {/* Contacts List */}
        <ul className="space-y-4 text-xs">
          {/* Email */}
          <li className="flex items-center gap-3.5">
            <div className="vcard-icon-box">
              <MailIcon />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-medium">Email</span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-zinc-200 hover:text-[#ffdb70] transition-colors truncate block font-normal"
                title={PROFILE.email}
              >
                {PROFILE.email}
              </a>
            </div>
          </li>

          {/* Location */}
          <li className="flex items-center gap-3.5">
            <div className="vcard-icon-box">
              <LocationIcon />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-medium">Location</span>
              <address className="not-italic text-zinc-200 truncate block font-normal">
                {PROFILE.location}
              </address>
            </div>
          </li>

          {/* Availability / Status */}
          <li className="flex items-center gap-3.5">
            <div className="vcard-icon-box">
              <StatusIcon />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-medium">Focus</span>
              <span className="text-zinc-200 truncate block font-normal" title={PROFILE.availability}>
                Technical PM & AI
              </span>
            </div>
          </li>

          {/* Resume */}
          <li className="flex items-center gap-3.5">
            <div className="vcard-icon-box">
              <DocumentIcon />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-medium">Curriculum Vitae</span>
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-200 hover:text-[#ffdb70] transition-colors truncate flex items-center gap-1 font-normal"
              >
                Download Resume PDF
              </a>
            </div>
          </li>
        </ul>

        {/* Separator */}
        <div className="h-px bg-[#383838] my-5" />

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 text-zinc-400">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:text-[#ffdb70] hover:bg-zinc-800/60 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:text-[#ffdb70] hover:bg-zinc-800/60 transition-colors"
            aria-label="GitHub Profile"
          >
            <GitHubIcon />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="p-2 rounded-lg hover:text-[#ffdb70] hover:bg-zinc-800/60 transition-colors"
            aria-label="Email Bilal"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </aside>
  );
}
