import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#121212] text-white py-16 md:py-32 px-4 md:px-12 lg:px-24 border-t border-white/5 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 md:mb-8">
          Let&apos;s Work <span className="text-white/80">Together</span>
        </h2>
        <p className="text-base md:text-2xl text-white/60 mb-8 md:mb-12 leading-relaxed font-light">
          I am a versatile tech enthusiast eager to solve meaningful problems. I am a person who can do any tech work if given a chance and right guidance—whether that is engineering robust software, shaping product management processes, or tackling strategic business challenges.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="mailto:bilal2512@gmail.com" className="group rounded-full bg-white text-black px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-4 hover:bg-white/90 transition-all hover:scale-105">
            <span>✉️ Send a Message</span>
            <span className="text-black/50 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          
          <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="group rounded-full bg-transparent border border-white/20 text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-all">
            📄 Download CV
          </a>
        </div>
      </div>

      <div className="w-full mt-16 md:mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 font-medium tracking-widest uppercase gap-4">
        <p>Software Engineer • Product • Tech Enthusiast</p>
        <p className="mt-4 md:mt-0">© 2026 Bilal Choudhary. All rights reserved.</p>
      </div>
    </footer>
  );
}
