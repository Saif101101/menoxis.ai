"use client";

export function LogoMark({ size = 34, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id="lm-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0e3ff" />
          <stop offset="45%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7c3aed" />
        </radialGradient>
        <linearGradient id="lm-ring" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#d8b4fe" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      {/* outer nodes */}
      {[
        [24, 5],
        [42, 16],
        [42, 33],
        [24, 44],
        [6, 33],
        [6, 16],
      ].map(([x, y], i) => (
        <g key={i}>
          <line
            x1="24"
            y1="24"
            x2={x}
            y2={y}
            stroke="url(#lm-ring)"
            strokeWidth="1.2"
            strokeOpacity="0.55"
          />
          <circle cx={x} cy={y} r="3" fill="url(#lm-ring)" />
        </g>
      ))}
      {/* core */}
      <circle cx="24" cy="24" r="8.5" fill="url(#lm-core)" />
      <circle cx="24" cy="24" r="8.5" fill="none" stroke="#f0e3ff" strokeOpacity="0.5" strokeWidth="0.8" />
    </svg>
  );
}

export default function Logo({ size = 34, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      <span className="font-display text-xl font-bold tracking-tightest text-white">
        Menoxis
      </span>
    </span>
  );
}
