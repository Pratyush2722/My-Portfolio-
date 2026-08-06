import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Delivery",
    description: "Building polished frontends and dependable backends that ship with confidence.",
  },
  {
    icon: Rocket,
    title: "GenAI Systems",
    description: "Designing AI workflows, LLM integrations, and prototypes with real product value.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Comfortable working across product, engineering, and fast-moving startup environments.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Combining DSA rigor with practical engineering to solve complex product challenges.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-28">
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                About Me
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              I build products that feel modern, fast, and thoughtful.
            </h2>

            <div className="space-y-4 text-slate-300">
              <p>
                I’m Pratyush Sourav, a final-year B.Tech student at NIT Rourkela focused on crafting scalable web applications and GenAI experiences.
              </p>
              <p>
                My work spans React, Node.js, Next.js, and AI tooling such as LangChain, OpenAI, Ollama, and Groq — with an emphasis on clean architecture and strong UX.
              </p>
              <p>
                I enjoy turning ideas into practical software, whether that means shipping a full-stack platform or turning an AI prototype into a usable workflow.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="animated-card-shell glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
