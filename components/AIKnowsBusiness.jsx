"use client";

import Reveal from "./Reveal";

const KNOWS = [
  "projects",
  "customers",
  "processes",
  "meetings",
  "expertise",
  "history",
  "policies",
  "goals",
  "decisions",
];

export default function AIKnowsBusiness() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-6">08 — Context is everything</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tightest sm:text-5xl md:text-6xl">
            Most AI knows the internet.
            <br />
            <span className="text-gradient">Menoxis knows your company.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-lg text-haze">It understands your:</p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-3">
          {KNOWS.map((k, i) => (
            <Reveal key={k} delay={0.08 + i * 0.05}>
              <span
                data-cursor="hover"
                className="glass inline-block rounded-full px-6 py-3 font-display text-lg font-medium text-white transition-transform duration-300 hover:scale-105 sm:text-xl"
              >
                {k}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 max-w-xl text-lg text-haze">
            This distinction is{" "}
            <span className="font-medium text-violet-soft">critical.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
