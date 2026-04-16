type Variant = "ad" | "avatar" | "film" | "ugc";

type Props = {
  variant: Variant;
  className?: string;
};

export default function GlassIcon({ variant, className = "" }: Props) {
  const id = `gi-${variant}`;
  return (
    <div
      className={`relative inline-flex h-20 w-20 items-center justify-center ${className}`}
      aria-hidden
    >
      {/* blue radial glow */}
      <div
        className="absolute inset-0 rounded-[22px] blur-xl"
        style={{
          background:
            "radial-gradient(circle at 50% 60%, rgba(10,132,255,0.45), transparent 65%)",
        }}
      />
      {/* Rounded tile */}
      <div
        className="relative flex h-20 w-20 items-center justify-center rounded-[22px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.75), rgba(255,255,255,0.35))",
          backdropFilter: "blur(14px) saturate(180%)",
          WebkitBackdropFilter: "blur(14px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.7)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(10,132,255,0.12), 0 10px 30px -10px rgba(10,26,58,0.2)",
        }}
      >
        {renderInner(variant, id)}
      </div>
    </div>
  );
}

function renderInner(variant: Variant, id: string) {
  const gradient = (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#64B5FF" />
        <stop offset="100%" stopColor="#0A84FF" />
      </linearGradient>
      <linearGradient id={`${id}-shine`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
    </defs>
  );

  switch (variant) {
    case "ad":
      return (
        <svg viewBox="0 0 48 48" width="44" height="44">
          {gradient}
          <rect
            x="8"
            y="8"
            width="32"
            height="32"
            rx="9"
            fill={`url(#${id})`}
          />
          <rect
            x="8"
            y="8"
            width="32"
            height="14"
            rx="9"
            fill={`url(#${id}-shine)`}
            opacity="0.55"
          />
          <path
            d="M20 17 L32 24 L20 31 Z"
            fill="white"
            stroke="rgba(255,255,255,0.6)"
          />
        </svg>
      );
    case "avatar":
      return (
        <svg viewBox="0 0 48 48" width="44" height="44">
          {gradient}
          <circle
            cx="24"
            cy="24"
            r="18"
            fill="none"
            stroke={`url(#${id})`}
            strokeWidth="0.8"
            strokeDasharray="2 3"
            opacity="0.7"
          />
          <circle cx="24" cy="20" r="6" fill={`url(#${id})`} />
          <circle
            cx="24"
            cy="20"
            r="6"
            fill={`url(#${id}-shine)`}
            opacity="0.6"
          />
          <path
            d="M13 36 C13 29 18 26 24 26 C30 26 35 29 35 36 Z"
            fill={`url(#${id})`}
          />
          <path
            d="M13 36 C13 30 17 28 24 28 C31 28 35 30 35 36 Z"
            fill={`url(#${id}-shine)`}
            opacity="0.5"
          />
        </svg>
      );
    case "film":
      return (
        <svg viewBox="0 0 48 48" width="44" height="44">
          {gradient}
          <rect
            x="7"
            y="12"
            width="34"
            height="24"
            rx="4"
            fill={`url(#${id})`}
          />
          <rect
            x="7"
            y="12"
            width="34"
            height="10"
            rx="4"
            fill={`url(#${id}-shine)`}
            opacity="0.55"
          />
          {/* perforations */}
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={`t-${i}`}
              x={10 + i * 6}
              y="14.5"
              width="3"
              height="2"
              rx="0.5"
              fill="white"
              opacity="0.8"
            />
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={`b-${i}`}
              x={10 + i * 6}
              y="31.5"
              width="3"
              height="2"
              rx="0.5"
              fill="white"
              opacity="0.8"
            />
          ))}
          {/* clapper mark */}
          <path
            d="M14 24 L22 24 M26 24 L34 24"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="24" cy="24" r="2" fill="white" />
        </svg>
      );
    case "ugc":
      return (
        <svg viewBox="0 0 48 48" width="44" height="44">
          {gradient}
          {/* back phone */}
          <rect
            x="18"
            y="10"
            width="18"
            height="28"
            rx="4"
            fill={`url(#${id})`}
            opacity="0.55"
            transform="rotate(10 27 24)"
          />
          {/* front phone */}
          <rect
            x="12"
            y="12"
            width="18"
            height="28"
            rx="4"
            fill={`url(#${id})`}
          />
          <rect
            x="12"
            y="12"
            width="18"
            height="12"
            rx="4"
            fill={`url(#${id}-shine)`}
            opacity="0.6"
          />
          <circle cx="21" cy="15" r="1" fill="white" opacity="0.8" />
          {/* sparkle */}
          <g transform="translate(32 14)" fill="white">
            <path d="M0 -5 L1 -1 L5 0 L1 1 L0 5 L-1 1 L-5 0 L-1 -1 Z" />
          </g>
          <g transform="translate(37 22)" fill="white" opacity="0.7">
            <path d="M0 -3 L0.6 -0.6 L3 0 L0.6 0.6 L0 3 L-0.6 0.6 L-3 0 L-0.6 -0.6 Z" />
          </g>
        </svg>
      );
  }
}
