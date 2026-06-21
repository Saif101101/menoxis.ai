"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function TheFuture({ onRequestDemo }) {
  return (
    <section id="future" className="relative overflow-hidden px-6 py-32 md:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 animate-pulse-core"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 62%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow mb-8">09 — Where this is heading</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tightest sm:text-6xl md:text-7xl">
            Every company will have a{" "}
            <span className="text-gradient">digital workforce.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-haze md:text-xl">
            Before AI can execute work, it must understand the organization. The
            Company Brain becomes the intelligence layer every AI agent depends
            on. That&apos;s where Menoxis is heading.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <motion.div
            className="mx-auto mt-12 max-w-xl rounded-3xl p-10"
            style={{
              background:
                "linear-gradient(160deg, rgba(124,58,237,0.25), rgba(11,7,24,0.5))",
              border: "1px solid rgba(168,85,247,0.4)",
            }}
          >
            <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Menoxis builds the intelligence layer for modern organizations.
            </p>
            <button onClick={onRequestDemo} className="btn-primary mt-8">
              Request Demo
            </button>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
