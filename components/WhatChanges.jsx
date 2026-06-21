"use client";

import Reveal from "./Reveal";

export default function WhatChanges() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-10 text-center">05 — What changes</p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <Reveal delay={0.05}>
            <figure className="glass rounded-3xl p-8 sm:p-10">
              <figcaption className="eyebrow mb-4 !tracking-[0.2em] text-haze">
                Before Menoxis
              </figcaption>
              <blockquote className="font-display text-2xl leading-snug text-white/80 sm:text-3xl">
                &ldquo;I think someone already solved this.&rdquo;
              </blockquote>
            </figure>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex items-center justify-center py-2 md:py-0">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className="text-violet-soft md:rotate-0"
                fill="none"
              >
                <path
                  d="M10 24h24m0 0l-9-9m9 9l-9 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <figure
              className="rounded-3xl p-8 sm:p-10"
              style={{
                background:
                  "linear-gradient(160deg, rgba(124,58,237,0.3), rgba(11,7,24,0.55))",
                border: "1px solid rgba(168,85,247,0.45)",
              }}
            >
              <figcaption className="eyebrow mb-4 !tracking-[0.2em] text-violet-soft">
                After Menoxis
              </figcaption>
              <blockquote className="font-display text-2xl leading-snug text-white sm:text-3xl">
                &ldquo;Here&apos;s the document, meeting, decision, owner, and
                next action.&rdquo;
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
