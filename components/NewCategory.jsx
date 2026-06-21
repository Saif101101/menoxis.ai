"use client";

import Reveal from "./Reveal";

const NOT = [
  "Not another search engine.",
  "Not another chatbot.",
  "Not another knowledge base.",
  "Not another AI copilot.",
];

export default function NewCategory() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="eyebrow mb-6">02 — A new category</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl font-bold tracking-tightest sm:text-6xl md:text-7xl">
            Meet the <span className="text-gradient">Company Brain.</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-3">
          {NOT.map((t, i) => (
            <Reveal key={t} delay={0.1 + i * 0.07}>
              <p className="relative text-xl text-haze/70 sm:text-2xl">
                <span className="relative">
                  {t}
                  <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-violet/50" />
                </span>
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-14 max-w-3xl text-xl leading-relaxed text-white sm:text-2xl">
            A Company Brain continuously learns how your organization works. It
            connects{" "}
            <span className="text-violet-soft">
              people, knowledge, decisions, workflows, systems, and AI
            </span>{" "}
            into one living intelligence layer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
