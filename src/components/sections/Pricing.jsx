import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBolt } from "@fortawesome/free-solid-svg-icons";

export default function Pricing({ onUpgrade }) {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      id: "free",
      name: "Starter",
      description:
        "Essential active recall tools for casual vocabulary learners.",
      priceMonthly: "$0",
      priceAnnual: "$0",
      period: "forever",
      badge: "Free Plan",
      highlighted: false,
      ctaText: "Start Learning Free",
      ctaVariant: "secondary",
      features: [
        "Up to 3 active decks",
        "Standard flip-card mode",
        "Basic spaced repetition",
        "Audio pronunciations",
        "Community support",
      ],
    },
    {
      id: "pro",
      name: "Pro Learner",
      description:
        "Unlocks Kanji tracing, custom intervals, and unlimited decks.",
      priceMonthly: "$9",
      priceAnnual: "$6",
      period: "per month",
      badge: "Most Popular",
      highlighted: true,
      ctaText: "Start 14-Day Free Trial",
      ctaVariant: "primary",
      features: [
        "Unlimited custom decks",
        "Full Hanzi & Kanji stroke tracing",
        "Advanced Spaced Repetition algorithms",
        "HD native audio playback",
        "Detailed performance analytics",
        "CSV / Anki deck importer",
        "Priority support",
      ],
    },
    {
      id: "lifetime",
      name: "Lifetime Access",
      description:
        "Pay once for unlimited access to all current and future features.",
      priceMonthly: "$149",
      priceAnnual: "$149",
      period: "one-time payment",
      badge: "Best Value",
      highlighted: false,
      ctaText: "Get Lifetime Access",
      ctaVariant: "secondary",
      features: [
        "Everything in Pro Learner",
        "Lifetime platform updates",
        "Early access to new features",
        "Offline study export",
        "Dedicated VIP support",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-4">
          <FontAwesomeIcon
            // icon={faSparkles}
            className="w-3 h-3 text-indigo-400"
          />
          <span>Simple, Transparent Pricing</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
          Invest in your{" "}
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
            PERMANENT MEMORY.
          </span>
        </h2>

        <p className="mt-4 text-lg text-slate-400">
          Start for free, upgrade when you need advanced writing tracing and
          analytics.
        </p>

        {/* Monthly / Annual Billing Toggle */}
        <div className="mt-8 inline-flex items-center p-1.5 rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-md">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
              !isAnnual
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
              isAnnual
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>Annual</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold">
              Save 33%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan) => {
          const currentPrice = isAnnual ? plan.priceAnnual : plan.priceMonthly;

          return (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                plan.highlighted
                  ? "bg-slate-900/90 border-2 border-indigo-500 shadow-[0_0_50px_rgba(99,102,241,0.25)] lg:-translate-y-2"
                  : "bg-slate-950/60 border border-slate-800/80 hover:border-slate-700"
              }`}
            >
              {/* Top Highlight Gradient Accent */}
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
              )}

              <div>
                {/* Header Tag & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <span
                    className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border ${
                      plan.highlighted
                        ? "bg-indigo-500/20 border-indigo-500/40 text-indigo-300"
                        : "bg-slate-900 border-slate-800 text-slate-400"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="my-6 flex items-baseline space-x-2">
                  <span className="text-5xl font-extrabold text-white tracking-tight">
                    {currentPrice}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    / {plan.id === "lifetime" ? "one-time" : plan.period}
                  </span>
                </div>

                {/* Features List */}
                <div className="border-t border-slate-800/80 pt-6 mb-8">
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
                    What's included:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-3 text-sm text-slate-300"
                      >
                        <div className="shrink-0 w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/40">
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="w-2.5 h-2.5 text-indigo-300"
                          />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onUpgrade?.(plan.id)}
                className={`w-full py-4 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  plan.ctaVariant === "primary"
                    ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] text-white hover:bg-right shadow-[0_0_25px_rgba(124,108,240,0.4)] hover:scale-[1.02]"
                    : "bg-slate-900 border border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600"
                }`}
              >
                <span>{plan.ctaText}</span>
                {plan.highlighted && (
                  <FontAwesomeIcon icon={faBolt} className="w-3.5 h-3.5 ml-1" />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
