import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faClockHistory,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext";

export default function SRSExplanation() {
  const { theme } = useTheme();

  const steps = [
    {
      icon: faBrain,
      step: "01",
      title: "Initial Encoding",
      description:
        "When you first encounter a card, REVU sets a baseline memory strength using active recall and stroke tracing performance.",
    },
    {
      icon: faClockHistory,
      step: "02",
      title: "Calculated Decay Rate",
      description:
        "Our modified SuperMemo-2 algorithm predicts the exact moment your retention probability drops below 85%.",
    },
    {
      icon: faChartLine,
      step: "03",
      title: "Optimal Review Spacing",
      description:
        "Cards are served right at the verge of forgetting, resetting the decay curve and doubling your long-term memory interval.",
    },
  ];

  return (
    <section
      id="srs"
      className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2
          className={`text-4xl sm:text-6xl font-extrabold ${theme.textPrimary} tracking-tight leading-[1.1]`}
        >
          How the SRS algorithm{" "}
          <span className={theme.textHighlight}>HACKS MEMORY.</span>
        </h2>

        <p className={`mt-6 text-lg ${theme.textSecondary} leading-relaxed`}>
          Without review, humans forget 70% of new information within 24 hours.
          REVU interrupts the decay curve at the perfect micro-second.
        </p>
      </div>

      {/* 3-Step Process Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className={`relative rounded-3xl border ${theme.surfaceBorder} ${theme.surface} p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-indigo-400 font-bold">
                  STEP {item.step}
                </span>
              </div>

              <h3 className={`text-xl font-bold ${theme.textPrimary} mb-3`}>
                {item.title}
              </h3>

              <p className={`text-sm ${theme.textSecondary} leading-relaxed`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
