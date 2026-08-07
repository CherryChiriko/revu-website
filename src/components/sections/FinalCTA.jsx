import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

export default function FinalCTA({ onStart }) {
  return (
    <section className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden select-none">
      {/* Outer Card Container */}
      <div className="relative rounded-3xl border border-slate-800/80 bg-slate-950/80 p-10 md:p-20 text-center overflow-hidden backdrop-blur-xl shadow-2xl">
        {/* Central Background Glow Atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-indigo-600/25 via-purple-600/20 to-pink-500/0 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <FontAwesomeIcon
              // icon={faSparkles}
              className="w-3 h-3 text-indigo-400"
            />
            <span>Start Building Permanent Memory</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Learn faster{" "}
            <span
              className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent"
              style={{
                filter: `
                  drop-shadow(1px 0px 0px rgba(255, 255, 255, 0.3))
                  drop-shadow(-1px 0px 0px rgba(255, 255, 255, 0.3))
                  drop-shadow(0px 1px 0px rgba(255, 255, 255, 0.3))
                  drop-shadow(0px -1px 0px rgba(255, 255, 255, 0.3))
                  drop-shadow(0 0 16px rgba(129, 140, 248, 0.35))
                `,
              }}
            >
              without the burnout
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed font-normal max-w-2xl">
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
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium border border-slate-800 bg-slate-900/60 backdrop-blur-md text-white transition-all duration-200 hover:bg-slate-800 hover:border-slate-700"
            >
              View Pricing & Plans
            </a>
          </div>

          {/* Trust Badges / Guarantees */}
          <div className="mt-8 flex items-center space-x-6 text-xs text-slate-500 font-medium">
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
