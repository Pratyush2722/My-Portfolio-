export const PremiumBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0B1020]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.16),transparent_35%),radial-gradient(circle_at_center,rgba(236,72,153,0.12),transparent_40%)]" />

      <div className="absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-[#7C3AED] opacity-25 blur-[140px] mix-blend-screen animate-[float_24s_ease-in-out_infinite]" />
      <div className="absolute bottom-[8%] right-[5%] h-80 w-80 rounded-full bg-[#06B6D4] opacity-24 blur-[150px] mix-blend-screen animate-[float_28s_ease-in-out_infinite]" />
      <div className="absolute left-[20%] top-[35%] h-64 w-64 rounded-full bg-[#EC4899] opacity-22 blur-[140px] mix-blend-screen animate-[float_26s_ease-in-out_infinite]" />

      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),transparent_35%,rgba(255,255,255,0.02))]" />
    </div>
  );
};
