"use client";

const AnoAICore = () => {
  return (
    <div
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none animate-gradient-shift"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 20% 40%, rgba(196,149,106,0.08) 0%, transparent 70%),
          radial-gradient(ellipse 60% 40% at 80% 60%, rgba(107,142,123,0.06) 0%, transparent 70%),
          radial-gradient(ellipse 50% 80% at 50% 50%, rgba(212,175,122,0.04) 0%, transparent 70%),
          #0C0E12
        `,
      }}
      aria-hidden="true"
    />
  );
};

export default AnoAICore;
