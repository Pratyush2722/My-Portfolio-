const experiences = [
  {
    period: "May 2024 — Jul 2024",
    role: "Project Intern",
    company: "Fractal Analytics",
    description:
      "Built React-based UI components, contributed to LangChain/OpenAI workflow integration, and developed GenAI prototype features in a fast-paced product environment.",
    technologies: ["React", "LangChain", "OpenAI", "GenAI", "UI Components"],
  },
  {
    period: "Present",
    role: "Final-Year Student",
    company: "NIT Rourkela",
    description:
      "Pursuing a B.Tech degree while building full-stack applications, solving 300+ DSA problems, and strengthening core CS fundamentals in systems, databases, and algorithms.",
    technologies: ["DSA", "Algorithms", "DBMS", "System Design"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden py-24 sm:py-28">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-300">
            Experience
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Building experience that translates into product impact.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((exp, idx) => (
            <div
              key={exp.role}
              className="animated-card-shell glass rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="mb-3 text-sm font-medium text-cyan-300">{exp.period}</div>
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="mt-1 text-slate-300">{exp.company}</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">{exp.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
