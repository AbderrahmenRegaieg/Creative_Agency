"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="relative px-5 py-20 md:px-12 md:py-40">
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
          className="italic-display block text-[72px] leading-none text-azure/20 md:text-[120px]"
        >
          &ldquo;
        </span>
        <p className="italic-display mt-[-24px] text-[clamp(28px,5vw,64px)] leading-[1.2] text-ink md:mt-[-40px] md:leading-[1.15]">
          In the age of infinite content,{" "}
          <span className="text-azure">taste</span> is the only moat.
        </p>
        <footer className="mt-8 flex items-center justify-center gap-3 text-[12px] font-medium tracking-wide text-ink/60 md:mt-10 md:text-[13px]">
          <span className="inline-block h-px w-8 bg-ink/30 md:w-10" />
          Level Up Agency
          <span className="inline-block h-px w-8 bg-ink/30 md:w-10" />
        </footer>
      </motion.blockquote>
    </section>
  );
}
