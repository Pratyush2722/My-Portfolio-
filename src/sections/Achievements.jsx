const achievements = [
  {
    value: "300+",
    label: "DSA problems solved",
  },
  {
    value: "Docker",
    label: "Essentials certified",
  },
  {
    value: "7.77",
    label: "CGPA at NIT Rourkela",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-10">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-300">
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
            A track record of consistency and growth.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              className="animated-card-shell glass rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:border-pink-400/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-semibold text-white">{achievement.value}</div>
              <p className="mt-2 text-sm text-slate-300">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
