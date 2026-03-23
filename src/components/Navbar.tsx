import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-12 flex justify-between items-center mix-blend-difference text-white">
      <div className="font-bold text-xl tracking-tight hidden md:block"></div>
      
      <ul className="flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase text-white/70">
        <li><a href="#services" className="hover:text-white transition-colors cursor-pointer">Services</a></li>
        <li><a href="#work" className="hover:text-white transition-colors cursor-pointer">Work</a></li>
        <li><a href="#about" className="hover:text-white transition-colors cursor-pointer">About</a></li>
        <li><a href="#experience" className="hover:text-white transition-colors cursor-pointer">Experience</a></li>
        <li><a href="#contact" className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
      </ul>

      <div className="flex items-center space-x-4">
        <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full border border-white/20 text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
          Resume
        </a>
      </div>
    </nav>
  );
}
