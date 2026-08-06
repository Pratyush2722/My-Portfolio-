import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Github, Linkedin, Download, Sparkles } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const quickPills = ["NIT Rourkela", "300+ DSA Problems", "Fractal Analytics Intern"];

export const Hero = () => {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.24),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.2),transparent_35%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pb-20 pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 shadow-lg shadow-cyan-500/10 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Software Developer • Full-Stack • AI/LLM Enthusiast
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Pratyush Sourav
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Final-year B.Tech student at NIT Rourkela with experience in full-stack development, GenAI applications, and scalable web systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {quickPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/Sriman%20Pratyush%20CV.pdf" size="lg">
                View Resume <ArrowRight className="h-5 w-5" />
              </Button>
              <AnimatedBorderButton href="https://github.com/Pratyush2722/" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" />
                View GitHub
              </AnimatedBorderButton>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm text-slate-400">Connect:</span>
              {[
                { icon: Github, href: "https://github.com/Pratyush2722/", title: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/pratyush-sourav/", title: "LinkedIn" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.title}
                    className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-200"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="relative flex justify-center animate-fade-in animation-delay-300">
            <div className="relative mx-auto max-w-[18rem] rounded-[2rem] border border-white/10 bg-slate-900/50 p-2 shadow-[0_30px_90px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:max-w-[20rem]">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20" />
              <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/70">
                <img
                  src="/profile-photo.jpg"
                  alt="Pratyush Sourav"
                  className="h-[320px] w-full object-contain bg-slate-950 sm:h-[380px]"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-center text-sm text-cyan-100 backdrop-blur">
                Available for full-time opportunities
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a href="#about" className="flex flex-col items-center gap-2 text-slate-400 transition-colors hover:text-cyan-300">
          <span className="text-xs uppercase tracking-[0.35em]">Scroll</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
