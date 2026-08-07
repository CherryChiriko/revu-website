import React, { useState } from "react";
import FlipCardDemo from "../demos/FlipCardDemo";

export default function HowItWorks({ activeTheme }) {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: "active-recall",
      step: "01",
      title: "Interactive Active Recall",
      description:
        "Test your memory instantly with multi-mode flip cards. Toggle between standard quiz mode, guided reveals, and timed self-assessment.",
      badge: "Core Feature",
    },
    {
      id: "spaced-repetition",
      step: "02",
      title: "Smart Spaced Repetition",
      description:
        "REVU calculates optimal review intervals based on your response ratings. Spend time only on words you are about to forget.",
      badge: "Algorithm",
    },
    {
      id: "character-tracing",
      step: "03",
      title: "Kanji & Hanzi Stroke Tracing",
      description:
        "Practice stroke order directly on screen with real-time feedback and audio pronunciations for native fluency.",
      badge: "Writing",
    },
  ];

  // Default theme fallback if activeTheme is missing from context
  const theme = activeTheme || {
    background: { secondary: "bg-slate-900/80" },
    border: { secondary: "border-slate-800" },
    text: {
      primary: "text-white",
      secondary: "text-slate-400",
      muted: "text-slate-500",
      activeButton: "text-white",
    },
    button: {
      primary: "bg-indigo-600 hover:bg-indigo-500",
      secondary: "bg-slate-800 hover:bg-slate-700",
    },
  };

  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2
          className={`text-xs uppercase tracking-[0.25em]  font-bold mb-3 ${theme.textAccent}`}
        >
          How it works
        </h2>
        <p
          className={`text-3xl sm:text-5xl font-extraboldtracking-tight ${theme.textPrimary}`}
        >
          Remember vocabulary effortlessly.
        </p>
      </div>

      {/* Senthora-Style Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT COLUMN: Feature Selection Tabs */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          {features.map((feature, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                  isActive
                    ? "bg-slate-900/90 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                    : "bg-slate-900/30 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700"
                }`}
              >
                {/* Active Accent Bar */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500" />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-indigo-400 font-bold">
                    STEP {feature.step}
                  </span>
                  <span
                    className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold border ${
                      isActive
                        ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-300"
                        : "bg-slate-800/50 border-slate-700 text-slate-400"
                    }`}
                  >
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Interactive Card Frame */}
        <div className="lg:col-span-7 h-[460px] relative rounded-3xl border border-slate-800 bg-slate-950/60 p-4 md:p-8 backdrop-blur-xl flex flex-col justify-between shadow-2xl overflow-hidden group">
          {/* Interactive Component Container */}
          <div className="relative flex-1 w-full h-full flex items-center justify-center my-auto">
            <FlipCardDemo activeTheme={theme} />
          </div>
        </div>
      </div>
    </section>
  );
}
