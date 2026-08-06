import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Pratyush2722/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/pratyush-sourav/", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-center text-sm text-slate-400 md:flex-row md:text-left">
        <p>Built with React, Tailwind CSS, and a lot of coffee ☕</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="rounded-full border border-white/10 bg-white/5 p-2 transition-all hover:border-cyan-400/30 hover:text-cyan-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
