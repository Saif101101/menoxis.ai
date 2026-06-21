"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoModal({ open, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-ink-950/85 backdrop-blur-md" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-violet/30 bg-ink-800"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/70 text-haze hover:text-white"
            >
              ✕
            </button>
            {/* Drop in your real video: replace this block with an <iframe> or
                <video> element pointing at your 2-minute overview. */}
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(168,85,247,0.7), transparent 70%)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="font-display text-lg text-white">
                2-Minute Overview
              </p>
              <p className="max-w-sm text-sm text-haze">
                Add your video URL in <code>VideoModal.jsx</code> to play it
                here.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
