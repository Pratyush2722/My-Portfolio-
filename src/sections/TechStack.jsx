import { Code2, Database, Layers, Sparkles, Workflow } from "lucide-react";

const techGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: Layers,
    items: ["React", "Next.js", "Tailwind CSS", "Vite", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: Workflow,
    items: ["Node.js", "Express", "FastAPI", "REST APIs", "Auth"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    title: "AI / Tools",
    icon: Sparkles,
    items: ["LangChain", "OpenAI", "Ollama", "Groq", "Docker"],
  },
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(7,89,133,0.16),transparent_35%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Tools & Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
            Built for shipping fast, reliable products.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {techGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="animated-card-shell glass rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="rounded-xl bg-violet-500/15 p-2 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
