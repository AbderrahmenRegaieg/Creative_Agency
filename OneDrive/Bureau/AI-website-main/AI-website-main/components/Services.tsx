import ServiceCard from "./ServiceCard";

const services = [
  {
    variant: "ad" as const,
    title: "Commercial Ad Videos",
    tagline: "Cinema-grade spots, engineered in days, not quarters.",
    features: [
      "30s, 15s, and 6s cut-downs from a single production pass",
      "Premium lighting, lens language, and motion design baked in",
      "A/B-ready variants for paid social — without the reshoot budget",
    ],
  },
  {
    variant: "avatar" as const,
    title: "Custom AI Avatars",
    tagline: "Your likeness, scaled. Your brand, always on camera.",
    features: [
      "Photoreal digital twin trained on your face, voice, and wardrobe",
      "Multilingual delivery — speak to every market in your own voice",
      "Drop a script, receive a finished talking-head in under 24 hours",
    ],
  },
  {
    variant: "film" as const,
    title: "AI Film Scenes",
    tagline: "Short-form cinema for brands that think in scripts.",
    features: [
      "Director-led scene design with storyboard, shotlist, and look-dev",
      "Built for episodic content, anthology series, and branded narrative",
      "Grade, sound design, and score handled end-to-end in-house",
    ],
  },
  {
    variant: "ugc" as const,
    title: "Automated UGC",
    tagline: "An always-on creator army that never logs off.",
    features: [
      "60+ authentic-feeling UGC variations per month, per product",
      "Creator personas built to match your ICP, not the algorithm's",
      "Hooks, formats, and trend adaptations refreshed every 7 days",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28 md:px-12 md:py-40 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-24 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="inline-block h-[6px] w-[6px] rounded-full bg-azure" />
              What we build
            </p>
            <h2 className="display text-[clamp(40px,5.5vw,76px)] text-ink">
              Four studios under{" "}
              <span className="italic-display text-azure">one roof.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-ink/65">
            Each service runs on its own pipeline and quality bar, built and
            executed by the same people who'll be on your project.
              Pick one, stack a few, or hand us the whole calendar and we'll handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
