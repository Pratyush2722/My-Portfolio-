import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { TechStack } from "@/sections/TechStack";
import { Achievements } from "@/sections/Achievements";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { PremiumBackground } from "./components/PremiumBackground";
import { ArrowUp } from "lucide-react";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0B1020] text-slate-100">
      <PremiumBackground />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>

      <a
        href="#top"
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-slate-900/70 text-white shadow-lg shadow-cyan-500/20 backdrop-blur transition-transform hover:-translate-y-1"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </a>

      <Footer />
    </div>
  );
}

export default App;
