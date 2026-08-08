import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext";

export default function FinalCTA({ onStart }) {
  const theme = useTheme();

  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden select-none">
      {/* Outer Card Container using permanent dark theme tokens */}
      <div
        className={`relative rounded-3xl border ${theme.darkCardBorder} ${theme.darkCardBg} p-10 md:p-20 text-center overflow-hidden backdrop-blur-xl shadow-2xl transition-all duration-300`}
      >
        {/* Central Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-indigo-600/25 via-purple-600/20 to-pink-500/0 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Main Headline */}
          <h2
            className={`text-4xl sm:text-6xl font-extrabold ${theme.darkTextPrimary} tracking-tight leading-[1.1]`}
          >
            Learn faster{" "}
            <span className={`block ${theme.textHighlight}`}>
              without the burnout
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className={`mt-6 text-lg sm:text-xl ${theme.darkTextSecondary} leading-relaxed font-normal max-w-2xl`}
          >
            Join thousands of learners using Revu's smart spaced repetition to
            make new vocabulary stick — for good.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onStart?.("pro")}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold text-white transition-all duration-300 shadow-[0_0_30px_rgba(124,108,240,0.5)] bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] hover:bg-right hover:scale-[1.02]"
            >
              <span>Get Started Free</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
              />
            </button>

            <a
              href="#pricing"
              className={`w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium border ${theme.darkSurfaceBorder} ${theme.darkSurface} ${theme.darkTextPrimary} backdrop-blur-md transition-all duration-200 ${theme.darkSurfaceHover}`}
            >
              View Pricing & Plans
            </a>
          </div>

          {/* Trust Badges / Guarantees */}
          <div
            className={`mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs ${theme.darkTextSecondary} font-medium`}
          >
            <div className="flex items-center space-x-1.5">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-indigo-400"
              />
              <span>No credit card required</span>
            </div>
            <span>•</span>
            <span>Free tier forever</span>
            <span>•</span>
            <span>14-day Pro trial</span>
          </div>
        </div>
      </div>
    </section>
  );
}
