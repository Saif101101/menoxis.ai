"use client";

import Reveal from "./Reveal";

const FAILURES = [
  "Knowledge disappears.",
  "Employees repeat work.",
  "Teams lose context.",
  "Leaders decide without history.",
  "AI has nothing to reason over.",
];

export default function WhyItMatters() {
  return (
    <section id="why" className="section-pad relative">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-6">07 — Why it matters</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-4xl font-display text-3xl font-bold leading-tight tracking-tightest sm:text-4xl md:text-5xl">
            Companies don&apos;t fail because they lack information. They fail
            because they cannot turn information into{" "}
            <span className="text-gradient-violet">
              organizational intelligence.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {FAILURES.map((f, i) => (
            <Reveal key={f} delay={0.08 + i * 0.06}>
              <div className="flex items-start gap-3 border-t border-violet/12 py-6 pr-4">
                <span className="mt-1 font-mono text-xs text-violet-soft">
                  0{i + 1}
                </span>
                <span className="text-lg text-haze">{f}</span>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.4}>
            <div className="flex items-center border-t border-violet/12 py-6">
              <span className="font-display text-2xl font-semibold text-gradient">
                Menoxis changes that.
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
