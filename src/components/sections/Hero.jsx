// src/components/sections/Hero.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";

// Inline arrow icon component for clear deliverable scope
function ArrowRightIcon({ className }) {
  return (
    <svg
      className={className}
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
  );
}

export default function Hero() {
  const t = useTheme();

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-16 pb-24 select-none">
      {/* Central Glow Atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-pink-500/0 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12 flex flex-col items-center text-center z-10">
        {/* Hero Title with Theme Highlight */}
        <h1
          className={`max-w-4xl text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05] ${t.textPrimary}`}
        >
          Vocabulary that{" "}
          <span className={t.textHighlight}>actually sticks.</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-8 max-w-2xl text-lg sm:text-xl font-normal leading-relaxed opacity-90 ${t.textSecondary}`}
        >
          Revu uses smart spaced repetition to help you capture, store, and
          effortlessly recall new words whenever you need them.
        </p>

        {/* Action Buttons using clean Theme-Aware Component */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button
            href="#pricing"
            variant="accent"
            icon={ArrowRightIcon}
            className="w-full sm:w-auto"
          >
            Start Building Free
          </Button>

          <Button href="#demo" variant="secondary" className="w-full sm:w-auto">
            Explore Platform &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
