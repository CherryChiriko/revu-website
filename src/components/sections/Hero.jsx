// src/components/sections/Hero.jsx
import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";
import FlipCardDemo from "../demos/FlipcardDemo";
// import AnimatedStroke from "../ui/AnimatedStroke";

const PROOF_STATS = [
  { value: "4", label: "Mastery stages" },
  { value: "SM-2", label: "Adaptive review engine" },
  { value: "∞", label: "Decks, any language" },
];

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <div
              className={[
                "inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border font-mono text-xs uppercase tracking-widest",
                theme.text.accent3,
                theme.border.muted,
                theme.background.secondary,
              ].join(" ")}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Built for language learners who forget on schedule
            </div>

            {/* Headline */}
            <h1
              className={[
                "font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.04] mb-7",
                theme.text.primary,
              ].join(" ")}
            >
              Characters that fade less{" "}
              <em
                className={[theme.text.accent3, "not-italic font-medium"].join(
                  " ",
                )}
              >
                every time
              </em>{" "}
              you see them.
            </h1>

            {/* Subtitle */}
            <p
              className={[
                "text-lg sm:text-xl leading-relaxed max-w-lg mb-9",
                theme.text.secondary,
              ].join(" ")}
            >
              Revu pairs a spaced-repetition engine with stroke-order writing
              practice, so vocabulary graduates from "recognized" to
              "remembered" — for Chinese characters and any language you're
              learning.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3.5 items-center mb-10">
              <Button
                variant="accent"
                size="lg"
                onClick={() => window.openCheckout?.("pro")}
              >
                Start free trial
              </Button>
              <Button variant="ghost" size="lg" href="#screens">
                See it in action ↓
              </Button>
            </div>

            {/* Proof stats */}
            <div
              className={[
                "flex gap-8 sm:gap-10 pt-7 border-t max-w-lg",
                theme.border.muted,
              ].join(" ")}
            >
              {PROOF_STATS.map((stat) => (
                <div key={stat.label}>
                  <b
                    className={[
                      "block font-serif text-2xl font-semibold mb-0.5",
                      theme.text.primary,
                    ].join(" ")}
                  >
                    {stat.value}
                  </b>
                  <span className={["text-xs", theme.text.muted].join(" ")}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="order-1 lg:order-2 w-full max-w-md mx-auto">
            <div
              className={[
                "relative aspect-[4/3] rounded-3xl p-6 shadow-2xl",
                theme.background.primary,
                theme.border.muted,
                "border",
              ].join(" ")}
            >
              <FlipCardDemo activeTheme={theme} />
            </div>

            <p
              className={["text-center mt-4 text-sm", theme.text.muted].join(
                " ",
              )}
            >
              Flip cards → recall → remember
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
