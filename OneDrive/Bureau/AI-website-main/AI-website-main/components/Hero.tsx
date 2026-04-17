"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

const headlineWords = [
  { text: "We", italic: false },
  { text: "don't", italic: false },
  { text: "make", italic: false },
  { text: "content.", italic: false, break: true },
  { text: "We", italic: false },
  { text: "manufacture", italic: true, color: "azure" },
  { text: "attention.", italic: false },
];

const thumbs = [
  {
    label: "MONSTER ENERGY — AD",
    tag: "COMMERCIAL",
    rotate: -6,
    x: -8,
    y: 0,
    video: "/hf_20260415_135925_eee800f9-fac0-4e44-b4f4-bf717c350cb4.mp4",
    duration: "00:12",
  },
  {
    label: "ANGELICA — CREATOR AVATAR",
    tag: "AVATAR",
    rotate: 2,
    x: 32,
    y: 40,
    video: "/UGC_content/ai_ugc_1.mp4",
    duration: "00:14",
  },
  {
    label: "WHITE WOLF — SCENE 01",
    tag: "FILM",
    rotate: -3,
    x: 4,
    y: 100,
    video: "/full_video_wolf.mp4",
    duration: "00:19",
  },
];

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center px-5 pt-24 pb-24 md:px-12 md:pt-32 md:pb-16 lg:px-20 lg:pb-0"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left column */}
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="eyebrow mb-5 flex items-center gap-3"
          >
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-azure" />
            AI Creative Studio — Est. 2025
          </motion.p>

          <h1 className="display text-[clamp(42px,7vw,104px)] text-ink">
            {headlineWords.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-baseline">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.2 + i * 0.07,
                    duration: 0.8,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className={`inline-block pr-[0.22em] ${
                    w.italic ? "italic-display" : ""
                  } ${w.color === "azure" ? "text-azure" : ""}`}
                >
                  {w.text}
                </motion.span>
                {w.break && <br />}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 max-w-[520px] text-[15px] leading-[1.55] text-ink/70 md:text-[17px]"
          >
            Level Up Agency engineers cinematic AI video, living avatars, and
            always-on UGC for founders and brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="glass glass-hover glass-chromatic inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-ink md:px-6 md:py-3"
            >
              See the Work
            </a>
            <a
              href="https://calendly.com/habibboulila22/30min"
              className="btn-azure inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold md:px-6 md:py-3"
            >
              Book a Discovery Call
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>

          {/* Mobile-only video strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            className="mt-8 flex gap-3 overflow-x-auto pb-2 lg:hidden"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
          >
            {thumbs.map((t, i) => (
              <div key={i} className="glass shrink-0 w-[180px] p-2.5 sm:w-[200px]">
                <div className="relative h-24 w-full overflow-hidden rounded-[14px] bg-ink/10 sm:h-28">
                  <video
                    src={asset(t.video)}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span className="absolute bottom-1.5 right-1.5 rounded-full bg-black/40 px-1.5 py-0.5 text-[9px] font-medium text-white/90 backdrop-blur-md">
                    {t.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between px-1 pt-2 pb-0.5">
                  <span className="eyebrow text-[8px]">{t.tag}</span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-8 flex items-center gap-4 text-ink/50 md:mt-14"
          >
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-porcelain"
                  style={{
                    background: [
                      "linear-gradient(135deg,#64B5FF,#0A84FF)",
                      "linear-gradient(135deg,#c9e4ff,#64B5FF)",
                      "linear-gradient(135deg,#1a1f3a,#0A84FF)",
                      "linear-gradient(135deg,#ffcce0,#64B5FF)",
                    ][i],
                  }}
                />
              ))}
            </div>
            <div className="text-xs leading-tight">
              <div className="font-semibold text-ink">
                30+ authentic-feeling UGC variations
              </div>
              <div>per month, per product</div>
            </div>
          </motion.div>
        </div>

        {/* Right column: floating glass thumbs — desktop only */}
        <div className="relative hidden h-[520px] lg:col-span-5 lg:block">
          {thumbs.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotate: t.rotate, x: 0 }}
              animate={{
                opacity: 1,
                y: mouse.y * (10 - i * 2),
                rotate: t.rotate,
                x: mouse.x * (14 - i * 3),
              }}
              style={{
                top: t.y,
                left: t.x + 60,
              }}
              transition={{
                opacity: { delay: 0.5 + i * 0.12, duration: 0.9 },
                rotate: { delay: 0.5 + i * 0.12, duration: 0.9 },
                x: { type: "spring", stiffness: 80, damping: 20, mass: 1 },
                y: { type: "spring", stiffness: 80, damping: 20, mass: 1 },
              }}
              className="glass glass-hover absolute w-[280px] p-3"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-[18px] bg-ink/10">
                <video
                  src={asset(t.video)}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute bottom-2 right-2 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-medium text-white/90 backdrop-blur-md">
                  {t.duration}
                </span>
                <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 backdrop-blur-md ring-1 ring-white/50">
                  <svg
                    viewBox="0 0 12 14"
                    width="14"
                    className="translate-x-[1px] fill-white"
                  >
                    <path d="M0 0 L12 7 L0 14 Z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between px-2 pb-1 pt-3">
                <span className="eyebrow text-[9px]">{t.tag}</span>
                <span className="text-[11px] font-medium text-ink/70">
                  {t.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-0 w-full overflow-hidden md:bottom-8"
      >
        <div className="marquee-track text-[11px] font-medium tracking-wide text-ink/30 md:text-[13px]">
          {Array.from({ length: 2 }).flatMap((_, r) =>
            [
              "MONSTER ENERGY",
              "ANGELICA QUEEN",
              "WHITE WOLF",
              "MIKASSA THE WITCH",
              "SUNSCREEN SPF",
              "BLUBERRY FLAVEUR",
              "LEVEL UP AGENCY",
              "AI CREATIVE STUDIO",
            ].map((b, i) => (
              <span
                key={`${r}-${i}`}
                className="flex items-center gap-10 whitespace-nowrap md:gap-16"
              >
                {b}
                <span className="inline-block h-1 w-1 rounded-full bg-ink/20" />
              </span>
            ))
          )}
        </div>
      </motion.div>
    </section>
  );
}
