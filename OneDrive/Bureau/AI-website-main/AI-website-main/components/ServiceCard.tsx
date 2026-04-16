"use client";

import { motion } from "framer-motion";
import GlassIcon from "./GlassIcon";

type Variant = "ad" | "avatar" | "film" | "ugc";

type Props = {
  index: number;
  variant: Variant;
  title: string;
  tagline: string;
  features: string[];
};

export default function ServiceCard({
  index,
  variant,
  title,
  tagline,
  features,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      className="glass glass-hover glass-chromatic flex min-h-[440px] flex-col justify-between p-8 md:p-10"
    >
      <div>
        <div className="mb-8 flex items-start justify-between">
          <GlassIcon variant={variant} />
          <span className="eyebrow mt-2">
            0{index + 1} / 04
          </span>
        </div>
        <h3 className="display text-[32px] leading-tight text-ink md:text-[38px]">
          {title}
        </h3>
        <p className="italic-display mt-2 text-[15px] text-ink/60">
          {tagline}
        </p>
        <ul className="mt-6 space-y-2.5">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 text-[14px] leading-snug text-ink/75"
            >
              <span className="mt-[3px] text-azure" aria-hidden>
                ✦
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="group mt-8 flex items-center justify-between gap-4 overflow-hidden rounded-full border border-white/70 px-6 py-3.5 text-[14px] font-semibold text-ink transition-all"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(100,181,255,0.18))",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.9), 0 4px 14px -4px rgba(10,132,255,0.25)",
        }}
      >
        <span className="relative z-10">
          Work with us on your brand
        </span>
        <span
          aria-hidden
          className="relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-azure text-white transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </a>
    </motion.article>
  );
}
