// src/components/sections/Pricing.jsx
import { useState, useCallback } from "react";
import { useTheme } from "../../context/ThemeContext";
import SectionHeader from "../ui/SectionHeader";
import PriceCard from "../ui/PriceCard";

const FREE_FEATURES = [
  "Unlimited decks & cards",
  "Full SM-2 spaced repetition",
  "Stroke-order tracing (1 deck)",
  "Streaks & activity heatmap",
  "Excel/CSV import",
];

const PRO_FEATURES = [
  "Everything in Free",
  "Stroke tracing on every deck",
  "Deck cloning & remedial decks",
  "Advanced mastery analytics",
  "Priority sync across devices",
  "Custom avatar upload history",
];

export default function Pricing({ onUpgrade }) {
  const { theme } = useTheme();
  const [isAnnual, setIsAnnual] = useState(false);

  const toggleBilling = useCallback(() => setIsAnnual((p) => !p), []);

  const proPrice = isAnnual ? "$4.80" : "$6";
  const proPeriod = "/ month";
  const proBilling = isAnnual
    ? "Billed $57.60 yearly · cancel anytime"
    : "Billed monthly · cancel anytime";

  return (
    <section id="pricing" className="py-28">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Study for free. Upgrade when you outgrow it."
          subtitle="No ads, ever. Pro just removes the ceiling."
          align="center"
        />

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-3.5 mb-11">
          <span
            className={[
              "font-mono text-sm",
              !isAnnual ? theme.text.primary : theme.text.muted,
            ].join(" ")}
          >
            Monthly
          </span>

          <button
            onClick={toggleBilling}
            className={[
              "relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
              theme.ring.focus,
              isAnnual ? "bg-indigo-600" : theme.background.track,
            ].join(" ")}
            aria-label={
              isAnnual
                ? "Switch to monthly billing"
                : "Switch to annual billing"
            }
          >
            <span
              className={[
                "absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300",
                isAnnual ? "left-7" : "left-1",
              ].join(" ")}
            />
          </button>

          <span
            className={[
              "font-mono text-sm",
              isAnnual ? theme.text.primary : theme.text.muted,
            ].join(" ")}
          >
            Annual
          </span>

          <span
            className={[
              "font-mono text-xs font-semibold px-2.5 py-1 rounded-full",
              "bg-amber-400/20 text-amber-600",
            ].join(" ")}
          >
            Save 20%
          </span>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-7 max-w-3xl mx-auto">
          <PriceCard
            name="Free"
            description="Everything you need to build the habit."
            price="$0"
            period="/ forever"
            billing="No card required"
            features={FREE_FEATURES}
            cta="Continue free"
            onCta={() => {}}
          />

          <PriceCard
            name="Pro"
            description="For learners chasing fluency, not just streaks."
            price={proPrice}
            period={proPeriod}
            billing={proBilling}
            features={PRO_FEATURES}
            cta="Upgrade to Pro"
            onCta={() => onUpgrade?.(isAnnual ? "annual" : "monthly")}
            isPro
            popular
          />
        </div>
      </div>
    </section>
  );
}
