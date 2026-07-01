const particles = [
  { left: "8%", top: "12%", size: 5, delay: "0s", duration: "18s" },
  { left: "18%", top: "28%", size: 3, delay: "2s", duration: "15s" },
  { left: "28%", top: "8%", size: 4, delay: "1s", duration: "16s" },
  { left: "34%", top: "42%", size: 2, delay: "4s", duration: "14s" },
  { left: "46%", top: "18%", size: 4, delay: "0.5s", duration: "17s" },
  { left: "56%", top: "35%", size: 3, delay: "3s", duration: "19s" },
  { left: "64%", top: "10%", size: 5, delay: "1.5s", duration: "15s" },
  { left: "72%", top: "24%", size: 2, delay: "6s", duration: "20s" },
  { left: "82%", top: "14%", size: 4, delay: "2.6s", duration: "16s" },
  { left: "88%", top: "40%", size: 3, delay: "5s", duration: "18s" },
  { left: "14%", top: "62%", size: 2, delay: "1.2s", duration: "17s" },
  { left: "24%", top: "74%", size: 4, delay: "3.5s", duration: "16s" },
  { left: "38%", top: "82%", size: 3, delay: "0.8s", duration: "20s" },
  { left: "52%", top: "68%", size: 2, delay: "4.4s", duration: "14s" },
  { left: "66%", top: "84%", size: 5, delay: "2.8s", duration: "18s" },
  { left: "78%", top: "72%", size: 3, delay: "5.5s", duration: "17s" },
  { left: "86%", top: "58%", size: 2, delay: "1.6s", duration: "16s" },
  { left: "92%", top: "88%", size: 4, delay: "4.8s", duration: "19s" },
];

export function AmbientParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),transparent_18%,transparent_82%,rgba(255,255,255,0.02))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(139,92,246,0.16),transparent_24%),radial-gradient(circle_at_50%_78%,rgba(20,184,166,0.10),transparent_24%)]" />
      <div className="absolute left-[10%] top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="absolute right-[8%] top-[18%] h-[22rem] w-[22rem] rounded-full bg-violet-500/10 blur-[150px]" />
      <div className="absolute bottom-[12%] left-[30%] h-[18rem] w-[18rem] rounded-full bg-sky-500/8 blur-[130px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_54%,rgba(3,4,6,0.24)_100%)]" />

      <div className="absolute inset-0 hidden md:block">
        {particles.map((particle, index) => (
          <span
            key={`${particle.left}-${particle.top}`}
            className="ambient-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              opacity: index % 3 === 0 ? 0.7 : 0.45,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-55">
        <div className="ambient-beam left-[14%] top-10 h-[28rem] w-px" />
        <div className="ambient-beam left-1/2 top-[14%] h-[24rem] w-px" />
        <div className="ambient-beam right-[18%] top-[32%] h-[20rem] w-px" />
      </div>
    </div>
  );
}
