"use client";

import Logo from "./Logo";
import { NAV_LINKS, FOUNDERS } from "@/lib/data";

export default function Footer({ onRequestDemo }) {
  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-violet/15 px-6 pt-16 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-haze">
              The intelligence layer for modern organizations. One living brain
              that helps your company think, decide, and execute better.
            </p>
            <button onClick={onRequestDemo} className="btn-primary mt-6 text-sm">
              Request Demo
            </button>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="eyebrow mb-4">Explore</p>
              <ul className="space-y-3">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => go(e, l.href)}
                      className="text-sm text-haze transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Founders</p>
              <ul className="space-y-3">
                {FOUNDERS.map((name, i) => (
                  <li key={i} className="text-sm text-white">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-haze sm:flex-row">
          <p>© {new Date().getFullYear()} Menoxis. All rights reserved.</p>
          <p>Built to give organizations a brain.</p>
        </div>
      </div>
    </footer>
  );
}
