"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We sit with your brand, your audience, and your numbers before a single frame gets made.",
    badge: "Week 1",
  },
  {
    n: "02",
    title: "Direct",
    body: "A human director writes the script, designs the shots, and sets the visual language. AI renders it — we art-direct it.",
    badge: "Week 1–2",
  },
  {
    n: "03",
    title: "Generate",
    body: "Our pipeline produces, grades, and sound-designs every cut. Revisions land in hours.",
    badge: "Week 2",
  },
  {
    n: "04",
    title: "Deploy",
    body: "We ship platform-native variants, track performance, and iterate on what the algorithm rewards.",
    badge: "Week 3+",
  },
];

export default function ProcessRail() {
  return (
    <section id="process" className="relative px-6 py-28 md:px-12 md:py-40 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="inline-block h-[6px] w-[6px] rounded-full bg-azure" />
              How it works
            </p>
            <h2 className="display text-[clamp(40px,5.5vw,72px)] text-ink">
              The Level Up{" "}
              <span className="italic-display text-azure">Method.</span>
            </h2>
          </div>
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-medium text-ink/70">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
            12–24 hour turnaround on every revision
          </div>
        </div>

        {/* connector line */}
        <div className="relative">
          <svg
            aria-hidden
            className="pointer-events-none absolute left-0 top-[88px] hidden h-4 w-full md:block"
            viewBox="0 0 1200 16"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="line" x1="0" x2="1">
                <stop offset="0%" stopColor="rgba(10,132,255,0)" />
                <stop offset="20%" stopColor="rgba(10,132,255,0.5)" />
                <stop offset="80%" stopColor="rgba(100,181,255,0.7)" />
                <stop offset="100%" stopColor="rgba(10,132,255,0)" />
              </linearGradient>
            </defs>
            <path
              d="M0 8 L1200 8"
              stroke="url(#line)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
          </svg>

          <div className="snap-rail -mx-6 flex gap-5 overflow-x-auto px-6 md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="glass glass-hover relative min-w-[280px] shrink-0 p-7 md:min-w-0"
              >
                {/* dot on connector */}
                <span
                  aria-hidden
                  className="absolute -top-[6px] left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-white ring-2 ring-azure md:block"
                />
                <div className="italic-display mb-6 text-[72px] leading-none text-azure">
                  {s.n}
                </div>
                <h3 className="mb-2 text-[22px] font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-ink/65">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
