import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import Projects from "@/components/Projects";
import HowIWork from "@/components/HowIWork";
import WhatIBring from "@/components/WhatIBring";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Positioning />
        <Projects />
        <HowIWork />
        <WhatIBring />
        <Experience />
        <About />
        <Skills />
        <Education />
        <Footer />
      </main>
    </>
  );
}
