export function CircuitBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-40" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <g
          stroke="currentColor"
          className="text-primary/40"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M-20 120 H220 L300 200 H520 L580 140 H900 L980 220 H1220" />
          <path d="M-20 320 H160 L240 400 H460 L540 340 H820 L900 420 H1220" />
          <path d="M-20 520 H300 L380 440 H640 L720 500 H1220" />
          <path d="M120 -20 V120 M700 -20 V140 M1040 220 V620 M420 400 V620" />
        </g>
        <g
          stroke="currentColor"
          className="animate-trace text-mint/70"
          strokeWidth="2.5"
          strokeDasharray="60 340"
          strokeLinecap="round"
          fill="none"
        >
          <path d="M-20 120 H220 L300 200 H520 L580 140 H900 L980 220 H1220" />
          <path d="M-20 320 H160 L240 400 H460 L540 340 H820 L900 420 H1220" />
        </g>
        <g className="fill-primary/60">
          <circle cx="300" cy="200" r="5" />
          <circle cx="580" cy="140" r="5" />
          <circle cx="980" cy="220" r="5" />
          <circle cx="240" cy="400" r="5" />
          <circle cx="720" cy="500" r="5" />
        </g>
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_10%,var(--color-navy)_78%)]" />
    </div>
  );
}
