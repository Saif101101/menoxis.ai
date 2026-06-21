"use client";

import Reveal from "./Reveal";

const RELATIONS = [
  ["Documents", "don't know which", "meetings created them."],
  ["Meetings", "don't know which", "decisions they produced."],
  ["Decisions", "don't know which", "customers they affect."],
];

export default function Challenge() {
  return (
    <section id="brain" className="section-pad relative">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-6">01 — The problem</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tightest sm:text-5xl md:text-6xl">
            Software stores information.
            <br />
            <span className="text-gradient-violet">
              A company brain understands it.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-haze">
            People don&apos;t lose information because they don&apos;t have
            enough software. They lose it because software doesn&apos;t
            understand relationships.
          </p>
        </Reveal>

        <div className="mt-14 space-y-px">
          {RELATIONS.map(([a, mid, b], i) => (
            <Reveal key={a} delay={0.12 + i * 0.08}>
              <div className="group flex flex-col gap-1 border-t border-violet/12 py-6 transition-colors hover:border-violet/35 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="font-display text-2xl font-semibold text-white sm:w-48 sm:text-3xl">
                  {a}
                </span>
                <span className="text-base text-haze">
                  {mid}{" "}
                  <span className="font-medium text-violet-soft">{b}</span>
                </span>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-violet/12" />
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 grid gap-2 text-2xl font-display font-semibold sm:text-3xl md:grid-cols-[auto_auto_auto] md:items-center md:gap-6">
            <span className="text-white">Employees know these connections.</span>
            <span className="text-haze">Software doesn&apos;t.</span>
            <span className="text-gradient">Until now.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
