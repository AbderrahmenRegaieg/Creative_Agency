import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A1A3A",
        porcelain: "#F7F9FC",
        azure: "#0A84FF",
        sky: "#64B5FF",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        glass: "28px",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(4%, -3%) scale(1.05)" },
          "66%": { transform: "translate(-3%, 4%) scale(0.98)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%) skewX(-12deg)" },
          "100%": { transform: "translateX(220%) skewX(-12deg)" },
        },
      },
      animation: {
        drift: "drift 30s ease-in-out infinite",
        "drift-slow": "drift 45s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 1.2s cubic-bezier(.2,.8,.2,1)",
      },
    },
  },
  plugins: [],
};

export default config;
