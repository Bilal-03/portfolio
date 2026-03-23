import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Services from "@/components/Services";
import Arsenal from "@/components/Arsenal";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen font-sans text-white">
      <Navbar />
      
      <div className="relative">
        <ScrollyCanvas totalFrames={192} folder="/sequence" />
        <Overlay />
      </div>

      <div className="relative z-20 bg-[#121212]">
        <Services />
        <Arsenal />
        <Projects />
        <About />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
