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
      className="glass glass-hover glass-chromatic flex min-h-[360px] flex-col justify-between p-6 md:min-h-[440px] md:p-10"
    >
      <div>
        <div className="mb-6 flex items-start justify-between md:mb-8">
          <GlassIcon variant={variant} />
          <span className="eyebrow mt-2">
            0{index + 1} / 04
          </span>
        </div>
        <h3 className="display text-[26px] leading-tight text-ink sm:text-[32px] md:text-[38px]">
          {title}
        </h3>
        <p className="italic-display mt-2 text-[14px] text-ink/60 md:text-[15px]">
          {tagline}
        </p>
        <ul className="mt-5 space-y-2.5 md:mt-6">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 text-[13px] leading-snug text-ink/75 md:text-[14px]"
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
        className="group mt-6 flex items-center justify-between gap-3 overflow-hidden rounded-full border border-white/70 px-4 py-3 text-[13px] font-semibold text-ink transition-all md:mt-8 md:px-6 md:py-3.5 md:text-[14px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(100,181,255,0.18))",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.9), 0 4px 14px -4px rgba(10,132,255,0.25)",
        }}
      >
        <span className="relative z-10">Work with us on your brand</span>
        <span
          aria-hidden
          className="relative z-10 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-azure text-white transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </a>
    </motion.article>
  );
}
