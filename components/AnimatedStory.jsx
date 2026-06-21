"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { TOOLS } from "@/lib/data";

const CX = 500;
const CY = 380;
const RX = 360;
const RY = 248;

function buildNodes() {
  return TOOLS.map((label, i) => {
    const angle = (i * (360 / TOOLS.length) - 90) * (Math.PI / 180);
    const x = CX + RX * Math.cos(angle);
    const y = CY + RY * Math.sin(angle);

    // gentle curved path from tool -> core
    const mx = (x + CX) / 2;
    const my = (y + CY) / 2;
    const dx = CX - x;
    const dy = CY - y;
    const len = Math.hypot(dx, dy) || 1;
    const sign = i % 2 === 0 ? 1 : -1;
    const cxp = mx + (-dy / len) * 46 * sign;
    const cyp = my + (dx / len) * 46 * sign;
    const path = `M ${x} ${y} Q ${cxp} ${cyp} ${CX} ${CY}`;

    return { label, x, y, path, id: `flow-${i}`, delay: (i * 0.35).toFixed(2) };
  });
}

const NODES = buildNodes();

export default function AnimatedStory() {
  return (
    <section id="story" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-6 text-center">03 — Everything connects</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-bold leading-tight tracking-tightest sm:text-5xl md:text-6xl">
            Every system you run, flowing into{" "}
            <span className="text-gradient">one living network.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-10"
          >
            <svg
              viewBox="0 0 1000 760"
              className="h-auto w-full"
              role="img"
              aria-label="Diagram of enterprise tools flowing into the Menoxis intelligence core"
            >
              <defs>
                <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f3e8ff" />
                  <stop offset="40%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#6d28d9" />
                </radialGradient>
                <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(168,85,247,0.5)" />
                  <stop offset="100%" stopColor="rgba(168,85,247,0)" />
                </radialGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(216,180,254,0.15)" />
                  <stop offset="100%" stopColor="rgba(168,85,247,0.7)" />
                </linearGradient>
              </defs>

              {/* connection paths */}
              {NODES.map((n) => (
                <path
                  key={n.id}
                  id={n.id}
                  d={n.path}
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="1.4"
                  strokeOpacity="0.7"
                />
              ))}

              {/* flowing particles toward the core */}
              {NODES.map((n) => (
                <g key={`p-${n.id}`}>
                  <circle r="3.4" fill="#e9d5ff">
                    <animateMotion
                      dur="2.6s"
                      begin={`${n.delay}s`}
                      repeatCount="indefinite"
                      keyPoints="0;1"
                      keyTimes="0;1"
                      calcMode="linear"
                    >
                      <mpath href={`#${n.id}`} />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.15;0.8;1"
                      dur="2.6s"
                      begin={`${n.delay}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="2.2" fill="#c084fc">
                    <animateMotion
                      dur="2.6s"
                      begin={`${(parseFloat(n.delay) + 1.3).toFixed(2)}s`}
                      repeatCount="indefinite"
                    >
                      <mpath href={`#${n.id}`} />
                    </animateMotion>
                  </circle>
                </g>
              ))}

              {/* tool chips */}
              {NODES.map((n) => (
                <g key={`c-${n.id}`}>
                  <rect
                    x={n.x - 78}
                    y={n.y - 22}
                    width="156"
                    height="44"
                    rx="22"
                    fill="rgba(18,12,36,0.92)"
                    stroke="rgba(168,85,247,0.4)"
                    strokeWidth="1.2"
                  />
                  <circle cx={n.x - 56} cy={n.y} r="4" fill="#c084fc" />
                  <text
                    x={n.x + 6}
                    y={n.y + 5}
                    textAnchor="middle"
                    fontFamily="var(--font-body), sans-serif"
                    fontSize="17"
                    fill="#ece6ff"
                  >
                    {n.label}
                  </text>
                </g>
              ))}

              {/* core */}
              <circle cx={CX} cy={CY} r="120" fill="url(#haloGrad)">
                <animate
                  attributeName="r"
                  values="115;135;115"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx={CX}
                cy={CY}
                r="70"
                fill="none"
                stroke="rgba(216,180,254,0.35)"
                strokeWidth="1"
              >
                <animate
                  attributeName="r"
                  values="62;82;62"
                  dur="4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  values="0.5;0;0.5"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={CX} cy={CY} r="52" fill="url(#coreGrad)" />
              <circle
                cx={CX}
                cy={CY}
                r="52"
                fill="none"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1"
              />
              <text
                x={CX}
                y={CY + 5}
                textAnchor="middle"
                fontFamily="var(--font-display), sans-serif"
                fontSize="18"
                fontWeight="700"
                fill="#1a0b2e"
              >
                Menoxis
              </text>
            </svg>
          </motion.div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xl text-white sm:text-2xl">
            That network becomes Menoxis. Then{" "}
            <span className="text-violet-soft">
              AI begins reasoning across everything.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
