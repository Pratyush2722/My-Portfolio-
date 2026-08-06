import { Download } from "lucide-react";

export const AnimatedBorderButton = ({ children, href, download, ...props }) => {
  const Component = href ? "a" : "button";
  return (
    <Component
      href={href}
      download={download}
      className="relative bg-transparent border border-white/15 text-slate-100 hover:border-cyan-400/50 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border"
      {...props}
    >
      <svg
        className="absolute left-0 top-0 h-full w-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="url(#button-gradient)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
        <defs>
          <linearGradient id="button-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
};
