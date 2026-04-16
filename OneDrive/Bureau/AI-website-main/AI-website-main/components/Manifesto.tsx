"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="relative px-6 py-28 md:py-40">
      {/* amplified mesh */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-0 h-[120%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[48px]"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, rgba(100,181,255,0.4), transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(10,132,255,0.25), transparent 60%), linear-gradient(135deg, rgba(255,255,255,0.6), rgba(247,249,252,0.8))",
          filter: "blur(40px)",
        }}
      />
      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <span
          aria-hidden
          className="italic-display block text-[120px] leading-none text-azure/20"
        >
          &ldquo;
        </span>
        <p className="italic-display mt-[-40px] text-[clamp(36px,5vw,64px)] leading-[1.15] text-ink">
          In the age of infinite content,{" "}
          <span className="text-azure">taste</span> is the only moat.
        </p>
        <footer className="mt-10 flex items-center justify-center gap-3 text-[13px] font-medium tracking-wide text-ink/60">
          <span className="inline-block h-px w-10 bg-ink/30" />
          Level Up Agency
          <span className="inline-block h-px w-10 bg-ink/30" />
        </footer>
      </motion.blockquote>
    </section>
  );
}
