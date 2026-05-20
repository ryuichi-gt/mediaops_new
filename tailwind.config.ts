import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#1a1a1a",
          muted: "#6b6b6b",
          subtle: "#a3a3a3",
        },
        paper: {
          DEFAULT: "#fafaf9",
          card: "#ffffff",
          border: "#ececec",
        },
        accent: {
          DEFAULT: "#c96442",
          soft: "#f5e9e3",
        },
      },
    },
  },
  plugins: [],
};

export default config;
