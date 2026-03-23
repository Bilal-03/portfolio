import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#121212] text-white py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Professional <span className="text-white/40">Experience</span>
          </h2>
          <p className="text-xs tracking-widest uppercase text-white/40 font-semibold border border-white/10 rounded-full px-4 py-2 mx-auto w-max bg-[#1a1a1a]">
            My Career Journey
          </p>
        </div>

        <div className="space-y-12 w-full border-l border-white/10 ml-4 md:ml-0 pl-8 md:pl-12 relative">
          {/* Experience Item 1 */}
          <div className="w-full relative py-8 px-10 rounded-3xl bg-[#1a1a1a] border border-white/5 shadow-2xl">
            <span className="absolute -left-[54px] md:-left-[70px] top-12 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#121212] flex items-center justify-center">
               <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
            </span>
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
              <div>
                <h3 className="text-3xl font-bold tracking-tight mb-2">SDE Intern</h3>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-sm text-white/60 font-medium">
                  <span className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-white/10 grid place-items-center">🏢</span> Techpanion Solutions</span>
                  <span className="hidden md:block w-1 h-1 rounded-full bg-white/20"></span>
                  <span className="flex items-center gap-2">📍 Remote</span>
                </div>
              </div>
              <div className="shrink-0 bg-white/10 px-4 py-2 rounded-full border border-white/10 text-xs font-semibold tracking-widest uppercase h-max flex items-center gap-2">
                 Jun 2024 - July 2024
              </div>
            </div>

            <ul className="space-y-4 text-white/70 leading-relaxed font-light text-sm md:text-base pl-2 list-disc ml-4">
              <li>
                Built AI-powered invoice extraction microservice using Python, Flask, OpenCV, Tesseract OCR, spaCy achieving 84% accuracy on diverse invoice formats.
              </li>
              <li>
                Designed 4-stage processing pipeline (preprocessing, OCR, NER-based extraction, validation) with 4s processing time per document.
              </li>
              <li>
                Extracted critical fields (invoice numbers, vendor names, dates, amounts) using hybrid approach combining regex patterns and custom-trained Named Entity Recognition models.
              </li>
            </ul>
          </div>

          {/* Experience Item 2 */}
          <div className="w-full relative py-8 px-10 rounded-3xl bg-[#1a1a1a] border border-white/5 shadow-2xl">
            <span className="absolute -left-[54px] md:-left-[70px] top-12 w-4 h-4 rounded-full bg-white/20 border-4 border-[#121212]"></span>
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
              <div>
                <h3 className="text-3xl font-bold tracking-tight mb-2">Software Development Intern</h3>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-sm text-white/60 font-medium">
                  <span className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-white/10 grid place-items-center">🏢</span> ICtrlBiz Consulting</span>
                  <span className="hidden md:block w-1 h-1 rounded-full bg-white/20"></span>
                  <span className="flex items-center gap-2">📍 Noida, India</span>
                </div>
              </div>
              <div className="shrink-0 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-xs font-semibold tracking-widest uppercase h-max flex items-center gap-2 text-white/60">
                 Aug 2023 - Dec 2023
              </div>
            </div>

            <ul className="space-y-4 text-white/70 leading-relaxed font-light text-sm md:text-base pl-2 list-disc ml-4">
              <li>
                Developed a CRM and Lead Management System using React.js, Supabase, PostgreSQL, Tailwind CSS with drag-and-drop pipeline managing 500+ leads.
              </li>
              <li>
                Implemented secure multi-user authentication, real-time analytics dashboard, and meeting scheduler achieving 95+ Lighthouse score.
              </li>
              <li>
                Built responsive UI with advanced filtering, CSV export, and automated workflow features improving team efficiency by 40%.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
