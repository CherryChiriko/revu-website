// src/components/sections/HowItWorks.jsx
import { useTheme } from "../../context/ThemeContext";
import SectionHeader from "../ui/SectionHeader";

const STEPS = [
  {
    icon: "好",
    title: "See the character",
    description:
      "New cards introduce pinyin, meaning, and stroke order together — nothing quizzed before it's been shown.",
  },
  {
    icon: "✎",
    title: "Trace the strokes",
    description:
      "Draw it yourself with HanziWriter-powered outline tracing. Muscle memory, not just recognition.",
  },
  {
    icon: "?",
    title: "Recall cold",
    description:
      "A recall phase strips the hints. If you hesitate, that's data — not a failure.",
  },
  {
    icon: "↻",
    title: "Reschedule fairly",
    description:
      "An SM-2 engine spaces the next review based on how it actually went — reviews you nail move further out.",
  },
];

export default function HowItWorks() {
  const { theme } = useTheme();

  return (
    <section id="how" className="py-28">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeader
          eyebrow="The loop"
          title="One card, four honest steps."
          subtitle="No streak-shaming, no mystery algorithm. Every card moves through the same cycle — and you can see exactly why it's due when it is."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Dotted connector line (desktop only) */}
          <div
            className={[
              "hidden lg:block absolute top-[34px] left-[60px] right-[60px] h-px",
              "bg-repeat-x",
            ].join(" ")}
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, currentColor 0 8px, transparent 8px 16px)`,
              color: theme.isDark ? "#374151" : "#e5e7eb",
            }}
          />

          {STEPS.map((step) => (
            <div key={step.title} className="relative">
              {/* Step number circle */}
              <div
                className={[
                  "w-[68px] h-[68px] rounded-full flex items-center justify-center font-serif text-xl font-semibold mb-5 relative z-10 border",
                  theme.background.card,
                  theme.border.muted,
                  theme.text.accent3,
                ].join(" ")}
              >
                {step.icon}
              </div>

              <h3
                className={[
                  "font-serif text-lg font-semibold mb-2.5",
                  theme.text.primary,
                ].join(" ")}
              >
                {step.title}
              </h3>
              <p
                className={[
                  "text-sm leading-relaxed",
                  theme.text.secondary,
                ].join(" ")}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
