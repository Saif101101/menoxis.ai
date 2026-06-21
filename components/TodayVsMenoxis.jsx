"use client";

import Reveal from "./Reveal";

const TODAY = [
  "Information everywhere.",
  "Knowledge disconnected.",
  "AI has no context.",
];

const WITH = [
  "Knowledge connected.",
  "Memory preserved.",
  "Decisions explained.",
  "Work automated.",
];

export default function TodayVsMenoxis() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-6">04 — The shift</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl font-bold tracking-tightest sm:text-5xl md:text-6xl">
            How companies think today.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.08}>
            <div className="glass h-full rounded-3xl p-8 sm:p-10">
              <div className="mb-7 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-haze">
                  ✕
                </span>
                <h3 className="font-display text-lg font-semibold text-haze">
                  Today&apos;s organization
                </h3>
              </div>
              <ul className="space-y-5">
                {TODAY.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-4 text-2xl font-display text-white/80 sm:text-3xl"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-haze/60" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div
              className="relative h-full overflow-hidden rounded-3xl p-8 sm:p-10"
              style={{
                background:
                  "linear-gradient(160deg, rgba(124,58,237,0.28), rgba(11,7,24,0.6))",
                border: "1px solid rgba(168,85,247,0.4)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-60"
                style={{
                  background:
                    "radial-gradient(circle, rgba(168,85,247,0.6), transparent 70%)",
                }}
              />
              <div className="mb-7 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet text-white">
                  ✓
                </span>
                <h3 className="font-display text-lg font-semibold text-white">
                  With Menoxis
                </h3>
              </div>
              <ul className="space-y-5">
                {WITH.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-4 text-2xl font-display sm:text-3xl"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-soft" />
                    <span className="text-gradient">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
