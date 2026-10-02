import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#161618", bone: "#f1ebe2", accent: "#7c3aed", glow: "#b79cff" },
    fontFamily: { display: ["var(--font-display)", "sans-serif"], sans: ["var(--font-body)", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
