"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative px-6 py-20 md:px-12 md:py-32 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
        className="glass glass-chromatic relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center overflow-hidden p-10 text-center md:p-20"
      >
        {/* Huge watermark logo */}
        <div
          aria-hidden
          className="absolute -right-20 -top-20 opacity-[0.06] md:-right-10 md:-top-10"
        >
          <Logo variant="mark" className="h-[420px] w-[420px]" />
        </div>

        {/* blurred azure glow */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -z-0 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(10,132,255,0.25), transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <p className="eyebrow relative z-10 mb-6 flex items-center gap-3">
          <span className="inline-block h-[6px] w-[6px] rounded-full bg-azure" />
          Let&rsquo;s build something unforgettable
        </p>
        <h2 className="display relative z-10 text-[clamp(48px,8vw,120px)] text-ink">
          Ready to{" "}
          <span className="italic-display text-azure">level up</span>?
        </h2>
        <p className="relative z-10 mt-8 max-w-xl text-[17px] leading-relaxed text-ink/70">
          Tell us about your brand. Within three business days, we&rsquo;ll send back a detailed plan — what we&rsquo;d make, why it fits, and how we&rsquo;d start. — at no cost, no obligation.
        </p>

        <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://calendly.com/habibboulila22/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-azure inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold"
          >
            Start Your Project
            <span aria-hidden>→</span>
          </a>
          <a
            href="mailto:abderrahmen@levelupagence.com"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-4 text-[14px] font-medium text-ink/70 transition-colors hover:text-ink"
          >
            <span className="relative">
              abderrahmen@levelupagence.com
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-300 group-hover:scale-x-100" />
            </span>
          </a>
        </div>

        {/* Trust strip */}
        <div className="relative z-10 mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/40">
          <span className="flex items-center gap-2">
            <span aria-hidden className="text-azure/60">✦</span>
            24-hour first draft
          </span>
          <span className="flex items-center gap-2">
            <span aria-hidden className="text-azure/60">✦</span>
            Human director on every project
          </span>
          <span className="flex items-center gap-2">
            <span aria-hidden className="text-azure/60">✦</span>
            Unlimited revisions
          </span>
        </div>
      </motion.div>
    </section>
  );
}
