"use client";

import { motion } from "framer-motion";
import NeuralBackground from "./NeuralBackground";

export default function Hero({ onRequestDemo, onWatch }) {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      <NeuralBackground className="absolute inset-0 h-full w-full opacity-70" />

      {/* central core glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 animate-pulse-core"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(124,58,237,0.12) 38%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet/25 bg-ink-800/50 px-4 py-1.5 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-violet-soft" />
          <span className="eyebrow !tracking-[0.25em] text-violet-soft">
            The Company Brain
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="font-display text-[2.6rem] font-bold leading-[1.02] tracking-tightest sm:text-6xl md:text-7xl lg:text-[5.4rem]"
        >
          Your company doesn&apos;t need
          <br className="hidden sm:block" /> another AI tool.
          <br />
          <span className="text-gradient">It needs a brain.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-haze md:text-lg"
        >
          Every company has documents, meetings, chats, emails, SOPs, CRMs, and
          dozens of enterprise apps. Menoxis connects them into one living
          intelligence system that understands your business, remembers
          everything, and helps your organization think, decide, and execute
          better.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button onClick={onRequestDemo} className="btn-primary w-full sm:w-auto">
            Request Demo
          </button>
          <button onClick={onWatch} className="btn-ghost w-full sm:w-auto">
            <PlayIcon /> Watch 2-Min Overview
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-violet/30 p-1">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-violet-soft"
          />
        </div>
      </motion.div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 8.5l5 3.5-5 3.5V8.5z" fill="currentColor" />
    </svg>
  );
}
