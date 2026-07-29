import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Arsenal from "@/components/Arsenal";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[var(--color-background)] min-h-screen text-[var(--color-foreground)]">
      <Navbar />
      <Hero />
      <Services />
      <Arsenal />
      <Projects />
      <About />
      <Experience />
      <Footer />
    </main>
  );
}
