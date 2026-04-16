import { asset } from "@/lib/asset";

type Props = {
  variant?: "wordmark" | "mark";
  className?: string;
};

export default function Logo({ variant = "wordmark", className = "" }: Props) {
  if (variant === "mark") {
    return (
      <img
        src={asset("/logo.jpg")}
        alt="Level Up Agency"
        className={`h-8 w-8 object-contain ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={asset("/logo.jpg")}
        alt="Level Up Agency"
        className="h-8 w-8 object-contain"
      />
      <span className="flex items-baseline gap-[0.2em] text-[17px] leading-none">
        <span className="italic-display text-ink">Level Up</span>
        <span className="font-medium tracking-tight text-ink/80">Agency</span>
      </span>
    </div>
  );
}
