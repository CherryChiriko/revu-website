import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Hero() {
  const t = useTheme();
  const filter = t.isDark
    ? `
      drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.8))
      drop-shadow(0px 0px 14px rgba(255, 255, 255, 0.35))
      drop-shadow(0px 0px 28px rgba(129, 140, 248, 0.3))
    `
    : `
      drop-shadow(0px 1px 3px rgba(30, 27, 75, 0.18))
      drop-shadow(0px 4px 12px rgba(99, 102, 241, 0.15))
    `;

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-16 pb-24 select-none">
      {/* Central Glow Atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-pink-500/0 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12 flex flex-col items-center text-center z-10">
        {/* Hero Title with Gradient Text & Stroke Outline */}
        <h1
          className={`max-w-4xl text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05] ${t.textPrimary}`}
        >
          Vocabulary that{" "}
          <span
            className="relative inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-3 pt-1 px-2 -mb-3 -mt-1 -mx-2 leading-normal"
            style={{
              filter: t.isDark
                ? "drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.8)) drop-shadow(0px 0px 14px rgba(255, 255, 255, 0.35))"
                : "drop-shadow(0px 1px 3px rgba(30, 27, 75, 0.18)) drop-shadow(0px 4px 12px rgba(99, 102, 241, 0.15))",
            }}
          >
            actually sticks.
          </span>
        </h1>

        {/* Subtitle with dark backdrop contrast shadow */}
        <p
          className={`mt-8 max-w-2xl text-lg sm:text-xl font-normal leading-relaxed opacity-90 ${t.textSecondary} [text-shadow:_0_1px_8px_rgba(0,0,0,0.4)]`}
        >
          Revu uses smart spaced repetition to help you capture, store, and
          effortlessly recall new words whenever you need them.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#pricing"
            className={`group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold ${t.textPrimary} transition-all duration-300 shadow-[0_0_30px_rgba(124,108,240,0.5)] bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] hover:bg-right hover:scale-[1.02] ${t.ctaButton}`}
          >
            <span>Start Building Free</span>
            <svg
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          <a
            href="#demo"
            className={`w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium border backdrop-blur-md transition-all duration-200 hover:bg-white/10 ${t.surfaceBorder} ${t.textPrimary}`}
          >
            Explore Platform &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
