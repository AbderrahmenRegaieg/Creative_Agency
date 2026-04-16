"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "./Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 120], [1, 0.96]);
  const shadow = useTransform(
    scrollY,
    [0, 120],
    [
      "0 20px 60px -20px rgba(10,26,58,0.25), 0 2px 8px -2px rgba(10,26,58,0.1)",
      "0 28px 70px -20px rgba(10,26,58,0.35), 0 6px 14px -4px rgba(10,26,58,0.18)",
    ]
  );
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Services");

  return (
    <>
      {/* Desktop */}
      <motion.nav
        style={{ scale, boxShadow: shadow }}
        className="glass fixed left-1/2 top-5 z-50 hidden w-[min(720px,calc(100%-2.5rem))] -translate-x-1/2 items-center justify-between px-3 py-2 md:flex"
      >
        <a href="#top" className="pl-3">
          <Logo />
        </a>
        <ul className="flex items-center gap-1">
          {links.map((l) => (
            <li key={l.label} className="relative">
              <a
                href={l.href}
                onClick={() => setActive(l.label)}
                className={`relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === l.label ? "text-ink" : "text-ink/60 hover:text-ink"
                }`}
              >
                {l.label}
              </a>
              {active === l.label && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_12px_-4px_rgba(10,26,58,0.15)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="btn-azure inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold"
        >
          Start a Project
          <span aria-hidden>→</span>
        </a>
      </motion.nav>

      {/* Mobile */}
      <nav className="glass fixed left-1/2 top-4 z-50 flex w-[calc(100%-1.5rem)] -translate-x-1/2 items-center justify-between px-3 py-2 md:hidden">
        <a href="#top" className="pl-2">
          <Logo />
        </a>
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full"
        >
          <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden>
            <motion.path
              d="M1 1 H17"
              stroke="#0A1A3A"
              strokeWidth="1.8"
              strokeLinecap="round"
              animate={open ? { d: "M2 10 L16 2" } : { d: "M1 1 H17" }}
            />
            <motion.path
              d="M1 6 H17"
              stroke="#0A1A3A"
              strokeWidth="1.8"
              strokeLinecap="round"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.path
              d="M1 11 H17"
              stroke="#0A1A3A"
              strokeWidth="1.8"
              strokeLinecap="round"
              animate={open ? { d: "M2 2 L16 10" } : { d: "M1 11 H17" }}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div
          className="absolute inset-0 bg-porcelain/70 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />
        <motion.div
          initial={false}
          animate={{ y: open ? 0 : -40, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="glass absolute left-1/2 top-24 w-[calc(100%-2rem)] -translate-x-1/2 p-6"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l, i) => (
              <motion.li
                key={l.label}
                initial={false}
                animate={{
                  opacity: open ? 1 : 0,
                  y: open ? 0 : 10,
                }}
                transition={{ delay: open ? 0.05 * i : 0 }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-4 text-2xl italic-display text-ink transition hover:bg-white/50"
                >
                  {l.label}
                </a>
              </motion.li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-azure mt-4 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
          >
            Start a Project <span aria-hidden>→</span>
          </a>
        </motion.div>
      </motion.div>
    </>
  );
}
