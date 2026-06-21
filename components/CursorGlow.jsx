"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Soft trailing glow lags behind; the dot is near-instant.
  const glowX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const glowY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 700, damping: 40 });
  const dotY = useSpring(y, { stiffness: 700, damping: 40 });

  useEffect(() => {
    const fine =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target;
      const interactive =
        el.closest("a, button, [data-cursor='hover'], input, textarea");
      setHovering(Boolean(interactive));
    };

    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ translateX: glowX, translateY: glowY }}
        className="pointer-events-none fixed left-0 top-0 z-[60]"
      >
        <motion.div
          animate={{ scale: hovering ? 1.7 : 1, opacity: hovering ? 0.55 : 0.38 }}
          transition={{ duration: 0.3 }}
          className="-ml-[160px] -mt-[160px] h-[320px] w-[320px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.45) 0%, rgba(124,58,237,0.18) 35%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </motion.div>

      <motion.div
        aria-hidden
        style={{ translateX: dotX, translateY: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[61]"
      >
        <motion.div
          animate={{
            width: hovering ? 44 : 10,
            height: hovering ? 44 : 10,
            borderWidth: hovering ? 1.5 : 0,
            backgroundColor: hovering
              ? "rgba(216,180,254,0)"
              : "rgba(240,227,255,0.95)",
          }}
          transition={{ duration: 0.2 }}
          className="-ml-[5px] -mt-[5px] rounded-full border-violet-bright"
          style={{ boxShadow: "0 0 14px rgba(216,180,254,0.7)" }}
        />
      </motion.div>
    </>
  );
}
