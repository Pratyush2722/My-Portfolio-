import { useState } from "react";
import { ArrowUpRight, Github, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "LinguaGenie X",
    description:
      "AI-powered multilingual translator with speech, PDF, and text translation.",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "Groq LLM", "MongoDB"],
    live: "https://vercel.com/pratyush-souravs-projects/lingua-genie-x",
    github: "https://github.com/Pratyush2722/LinguaGenie-X",
  },
  {
    title: "MemZero",
    description:
      "Memory-aware chatbot using local LLMs and vector search.",
    image: "/projects/project1.png",
    tags: ["LangChain", "Ollama", "FAISS", "Node.js"],
    live: "https://memzero.vercel.app/",
    github: "https://github.com/Pratyush2722/MemZero-Memory-Aware-Chatbot",
  },
  {
    title: "AstraVault",
    description:
      "A modern library management platform featuring analytics dashboards, book and member management, issue/return workflows, reports, settings, and a premium dark glassmorphism interface.",
    image: "/projects/project3.png",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Prisma"],
    live: "https://library-management-3f9o.vercel.app/dashboard",
    github: "https://github.com/Pratyush2722/Library_Management",
  },
  {
    title: "Developer Portfolio",
    description:
      "A modern portfolio website showcasing my projects, technical skills, experience, and achievements with a premium dark glassmorphism interface built using Next.js and Tailwind CSS.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Framer Motion"],
    live: "https://pratyushportfolio-8226.vercel.app/",
    github: "https://github.com/Pratyush2722/My-Portfolio-",
  },
];

export const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const featuredProjects = projects.slice(0, 3);
  const moreProjects = projects.slice(3);

  const renderProjectCard = (project, idx) => ( 
  <div key={project.title} className="animated-card-shell group glass overflow-hidden rounded-3xl border border-white/10 transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: `${(idx + 1) * 100}ms` }} >
      <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:h-[220px] md:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.18),transparent_35%)]" />
        <div className="absolute left-4 top-4 h-16 w-16 rounded-full bg-cyan-400/20 blur-2xl" />
        <div className="absolute bottom-4 right-4 h-20 w-20 rounded-full bg-violet-500/20 blur-2xl" />

        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-slate-950/70 shadow-[0_20px_60px_rgba(2,6,23,0.45)]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-contain rounded-lg transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 transition-all hover:bg-cyan-400/20"
          >
            Live Demo <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition-all hover:border-pink-400/20 hover:text-pink-200"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Selected work for modern product teams.
          </p>
        </div>

        {/* Featured projects */}
        <div className="grid gap-8 lg:grid-cols-3">
          {featuredProjects.map((project, idx) =>
            renderProjectCard(project, idx)
          )}
        </div>

        {/* See more button */}
        {moreProjects.length > 0 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition-all hover:border-cyan-400/20 hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              {showMore ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  See More Projects <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}

        {/* More projects */}
        {showMore && moreProjects.length > 0 && (
          <div className="mt-10 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="grid gap-8 lg:grid-cols-3">
              {moreProjects.map((project, idx) =>
                renderProjectCard(project, idx + 3)
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};