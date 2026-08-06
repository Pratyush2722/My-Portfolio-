import { Github, Linkedin, Mail, Send } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "souravpratyush1@gmail.com",
    href: "mailto:souravpratyush1@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "/in/pratyush-sourav",
    href: "https://www.linkedin.com/in/pratyush-sourav/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@Pratyush2722",
    href: "https://github.com/Pratyush2722/",
    icon: Github,
  },
  {
    label: "LeetCode",
    value: "@Praty2722",
    href: "https://leetcode.com/u/Praty2722/",
    icon: Send,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Let’s talk about building something meaningful.
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="animated-card-shell glass rounded-3xl border border-white/10 p-8">
            <p className="text-slate-300">
              Open to full-time Software Engineer opportunities and collaborative projects.
            </p>
            <div className="mt-6 space-y-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-violet-500/15 p-2 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">{item.label}</div>
                        <div className="text-sm font-medium text-white">{item.value}</div>
                      </div>
                    </div>
                    <Send className="h-4 w-4 text-slate-400" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="animated-card-shell glass rounded-3xl border border-white/10 p-8">
            <h3 className="text-xl font-semibold text-white">Available for opportunities</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              I’m currently interested in roles involving full-stack development, AI product engineering, and collaborative product delivery. If you’re hiring or building something ambitious, I’d love to connect.
            </p>
            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm text-cyan-100">
              Preferred locations: Remote / Hybrid • India-based opportunities welcome
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
