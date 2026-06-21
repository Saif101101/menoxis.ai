"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const CAPS = [
  { name: "Knowledge", desc: "Every document, connected." },
  { name: "Memory", desc: "Nothing gets forgotten." },
  { name: "Reasoning", desc: "AI that thinks in context." },
  { name: "Decisions", desc: "Traceable to their source." },
  { name: "Search", desc: "Answers, not links." },
  { name: "Automation", desc: "Work that runs itself." },
  { name: "Agents", desc: "Grounded in your org." },
  { name: "Context", desc: "It knows your company." },
];

function CapCard({ cap, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: 0.04 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      data-cursor="hover"
      className="group glass flex min-h-[150px] flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet/50 hover:shadow-[0_20px_60px_-20px_rgba(168,85,247,0.6)]"
    >
      <div>
        <h3 className="font-display text-xl font-semibold text-white">
          {cap.name}
        </h3>
        <p className="mt-1 text-sm text-haze">{cap.desc}</p>
      </div>
    </motion.div>
  );
}

function CoreCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative col-span-2 flex min-h-[150px] items-center justify-center overflow-hidden rounded-2xl p-6 text-center md:col-span-1"
      style={{
        background:
          "linear-gradient(160deg, rgba(124,58,237,0.45), rgba(11,7,24,0.5))",
        border: "1px solid rgba(168,85,247,0.5)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-pulse-core"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.55), transparent 65%)",
        }}
      />
      <span className="relative font-display text-lg font-bold leading-tight text-white">
        Menoxis
        <br />
        Intelligence Core
      </span>
    </motion.div>
  );
}

export default function IntelligenceLayer() {
  return (
    <section id="platform" className="section-pad relative">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-6 text-center">06 — The intelligence layer</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-bold leading-tight tracking-tightest sm:text-5xl md:text-6xl">
            Not eight products.
            <br />
            <span className="text-gradient">One brain, eight capabilities.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mt-14">
            {/* ambient glow centered on the core */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
              style={{
                background:
                  "radial-gradient(circle, rgba(124,58,237,0.3), transparent 70%)",
              }}
            />

            {/* 3x3 hub: core sits in the center cell */}
            <div className="relative grid grid-cols-2 gap-4 md:grid-cols-3">
              {CAPS.slice(0, 3).map((cap, i) => (
                <CapCard key={cap.name} cap={cap} i={i} />
              ))}
              <CapCard cap={CAPS[3]} i={3} />
              <CoreCard />
              {CAPS.slice(4).map((cap, i) => (
                <CapCard key={cap.name} cap={cap} i={4 + i} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
