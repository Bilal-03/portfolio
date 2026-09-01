import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import Projects from "@/components/Projects";
import Positioning from "@/components/Positioning";
import HowIWork from "@/components/HowIWork";
import WhatIBring from "@/components/WhatIBring";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ImpactMetrics />
        <Projects />
        <Positioning />
        <HowIWork />
        <WhatIBring />
        <Experience />
        <Skills />
        <About />
        <Education />
        <Footer />
      </main>
    </>
  );
}
