import { Button } from "@/components/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#tech-stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.href.slice(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const top = element.offsetTop - 120;
        return window.scrollY >= top && window.scrollY < element.offsetTop + element.offsetHeight;
      });

      setActiveSection(current || "home");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`animated-card-shell fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a href="#top" className="flex items-center">
          <img
            src="/logo.png"
            alt="SPS Logo"
            className="h-10 w-10 rounded-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </a>

        <div className="hidden md:flex items-center gap-1">
          <div className="animated-card-shell glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  href={link.href}
                  key={link.href}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive ? "bg-white/10 text-white" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="hidden md:block">
          <Button size="sm" href="#contact">
            Contact Me <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <button
          className="rounded-full p-2 text-white md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 text-lg text-slate-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <Button onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};
