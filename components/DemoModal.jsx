"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function DemoModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setStatus("idle");
      setError("");
    }
  }, [open]);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async () => {
    if (!form.name.trim() || !form.email.trim()) {
      setError("Please add your name and a work email.");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/demo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        "We couldn't send that. Check that the backend server is running, then try again."
      );
    }
  };

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
          <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-md" />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl border border-violet/30 bg-ink-800/95 p-8 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Request a demo"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 text-haze transition-colors hover:text-white"
            >
              ✕
            </button>

            {status === "success" ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-violet/20 text-2xl">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  Request received.
                </h3>
                <p className="mt-3 text-haze">
                  Thanks, {form.name.split(" ")[0] || "there"}. The team will
                  reach out at {form.email} shortly.
                </p>
                <button onClick={onClose} className="btn-ghost mt-7">
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold tracking-tightest text-white">
                  Request a demo
                </h3>
                <p className="mt-2 text-sm text-haze">
                  See the Company Brain reason across your stack.
                </p>

                <div className="mt-6 space-y-4">
                  <Field
                    label="Full name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Jane Doe"
                  />
                  <Field
                    label="Work email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="jane@company.com"
                  />
                  <Field
                    label="Company"
                    value={form.company}
                    onChange={update("company")}
                    placeholder="Company Inc."
                  />
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-haze">
                      What would you like to solve?
                    </label>
                    <textarea
                      value={form.message}
                      onChange={update("message")}
                      rows={3}
                      placeholder="A few words on your stack and goals…"
                      className="w-full resize-none rounded-xl border border-violet/20 bg-ink-900/80 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-haze/50 focus:border-violet/60"
                    />
                  </div>
                </div>

                {error && (
                  <p className="mt-4 text-sm text-magenta">{error}</p>
                )}

                <button
                  onClick={submit}
                  disabled={status === "sending"}
                  className="btn-primary mt-6 w-full disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Request Demo"}
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, type = "text", value, onChange, placeholder }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-haze">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-violet/20 bg-ink-900/80 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-haze/50 focus:border-violet/60"
      />
    </div>
  );
}
