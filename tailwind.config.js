// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        draw: "draw 3.4s ease-in-out infinite",
        "soft-drift": "softDrift 20s ease-in-out infinite",
        "soft-drift-reverse": "softDrift 15s ease-in-out infinite reverse",
      },
      keyframes: {
        draw: {
          "0%": { strokeDashoffset: "900" },
          "35%": { strokeDashoffset: "0" },
          "75%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-900" },
        },
        softDrift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(2%, -3%) scale(1.05)" },
          "50%": { transform: "translate(-1%, 2%) scale(0.98)" },
          "75%": { transform: "translate(3%, 1%) scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};
