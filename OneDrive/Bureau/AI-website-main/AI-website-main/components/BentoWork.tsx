"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  chip: string;
  span: string;
  gradient: string;
  duration: string;
  video?: string;
  videoPosition?: string;
};

const projects: Project[] = [
  {
    title: "Monster Energey Drink — Ad Campaign",
    chip: "Commercial",
    span: "md:col-span-2 md:row-span-2",
    gradient:
      "linear-gradient(135deg,#0a84ff 0%,#64b5ff 40%,#c9e4ff 80%,#ffffff 100%)",
    duration: "00:12",
    video: "/hf_20260415_135925_eee800f9-fac0-4e44-b4f4-bf717c350cb4.mp4",
  },
  {
    title: "Angelica Queen — Creator Avatar",
    chip: "Avatar",
    span: "",
    gradient: "linear-gradient(135deg,#1a1f3a 0%,#2d4580 50%,#64b5ff 100%)",
    duration: "00:14",
      video:"/UGC_content/ai_ugc_1.mp4"
  },
  {
    title: "White Wolf — Scene 01",
    chip: "Film",
    span: "",
    gradient: "linear-gradient(135deg,#3a1a5a 0%,#0a84ff 50%,#ffcce0 100%)",
    duration: "00:19",
      video:"/full_video_wolf.mp4"
  },
  {
    title: "Sunscreen SPF Product — UGC Content",
    chip: "UGC",
    span: "md:col-span-2",
    gradient:
      "linear-gradient(135deg,#ffb8d9 0%,#64b5ff 50%,#0a84ff 100%)",
    duration: "00:13",
      video:"/UGC_content/its_that_easy.mp4",
      videoPosition: "50% 25%"
  },
  {
    title: "Bluberry Flaveur Drink — Launch Reel",
    chip: "Commercial",
    span: "",
    gradient: "linear-gradient(135deg,#0a1a3a 0%,#0a84ff 70%,#c9e4ff 100%)",
    duration: "00:12",
      video:"/boga.mp4"
  },
  {
    title: "Mikassa The Witch — Anime Scene",
    chip: "Film",
    span: "",
    gradient: "linear-gradient(135deg,#1a3a6a 0%,#64b5ff 50%,#f7f9fc 100%)",
    duration: "00:15",
      video:"/anime.mp4"
  },
];

export default function BentoWork() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section id="work" className="relative px-6 py-28 md:px-12 md:py-40 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4 flex items-center gap-3">
                <span className="inline-block h-[6px] w-[6px] rounded-full bg-azure" />
                Selected work
              </p>
              <h2 className="display text-[clamp(40px,5.5vw,72px)] text-ink">
                Proof lives{" "}
                <span className="italic-display text-azure">in the frame.</span>
              </h2>
            </div>
            <a
              href="#contact"
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold text-ink"
            >
              Full case studies
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-[repeat(3,minmax(220px,1fr))]">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                onClick={() => p.video && setActiveVideo(p.video)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.06,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className={`glass glass-hover group relative overflow-hidden p-3 ${p.span} ${p.video ? "cursor-pointer" : ""}`}
              >
                <div
                  className="relative h-full min-h-[220px] overflow-hidden rounded-[18px]"
                  style={{ background: p.gradient }}
                >
                  {/* video background */}
                  {p.video && (
                    <video
                      src={p.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{ objectPosition: p.videoPosition ?? "center" }}
                    />
                  )}
                  {/* moving specular */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-60 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      background:
                        "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.4) 0%, transparent 50%)",
                    }}
                  />
                  {/* chip */}
                  <span className="absolute left-3 top-3 rounded-full bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink backdrop-blur-md">
                    {p.chip}
                  </span>
                  {/* duration */}
                  <span className="absolute right-3 top-3 rounded-full bg-black/35 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-md">
                    {p.duration}
                  </span>
                  {/* Watch CTA */}
                  {p.video && (
                    <span className="absolute right-3 bottom-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-ink opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      Watch
                      <span aria-hidden>▶</span>
                    </span>
                  )}
                  {/* Title */}
                  <div className="absolute bottom-3 left-3 max-w-[70%] text-[15px] font-semibold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                    {p.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative flex justify-center px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={activeVideo}
                controls
                autoPlay
                className="max-h-[90vh] max-w-full rounded-2xl"
              />
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-4 text-white/70 hover:text-white text-sm font-semibold"
              >
                ✕ Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
