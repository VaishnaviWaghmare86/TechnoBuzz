"use client";

export function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/50 shadow-[0_0_22px_rgba(34,211,238,.8)]"
          style={{
            left: `${(index * 47) % 100}%`,
            top: `${(index * 31) % 92}%`,
            animation: `float ${6 + (index % 5)}s ease-in-out infinite`,
            animationDelay: `${index * 0.35}s`
          }}
        />
      ))}
    </div>
  );
}
