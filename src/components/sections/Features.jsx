// src/components/sections/Features.jsx
import { useTheme } from "../../context/ThemeContext";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

const FEATURES = [
  {
    icon: "↻",
    title: "Adaptive scheduling",
    description:
      "An SM-2-based engine tracks lapses and intervals per card, so mastered cards drift to the back without ever leaving rotation.",
  },
  {
    icon: "筆",
    title: "Stroke-order tracing",
    description:
      "Chinese character decks include animated stroke order, guided outline tracing, and a cold-recall quiz phase — powered by HanziWriter.",
  },
  {
    icon: "⌘",
    title: "Bulk import",
    description:
      "Bring your own vocabulary from Excel or CSV. Field mapping and CJK validation catch mistakes before they become bad cards.",
  },
  {
    icon: "◔",
    title: "Four mastery stages",
    description:
      "New → Familiar → Solid → Mastered. Depth is computed from your review history, not a status you can accidentally reset.",
  },
  {
    icon: "▦",
    title: "Heatmap & streaks",
    description:
      "A full activity calendar and streak tracking that freezes fairly on days a deck simply has nothing due.",
  },
  {
    icon: "⇄",
    title: "Deck cloning",
    description:
      "Swap languages, convert a deck to Chinese-character mode, or build a remedial deck from your missed cards in one click.",
  },
];

export default function Features() {
  const { theme } = useTheme();

  return (
    <section id="features" className="py-28">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeader
          eyebrow="What's under the hood"
          title="Not just flashcards. A system that adapts to you."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden border">
          {FEATURES.map((feature) => (
            <Card key={feature.title} padding="lg" className="h-full">
              {/* Icon */}
              <div
                className={[
                  "w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5",
                  "bg-gradient-to-br from-indigo-500/10 to-purple-500/10",
                  theme.text.accent3,
                ].join(" ")}
              >
                {feature.icon}
              </div>

              <h3
                className={[
                  "font-serif text-base font-semibold mb-2.5",
                  theme.text.primary,
                ].join(" ")}
              >
                {feature.title}
              </h3>
              <p
                className={[
                  "text-sm leading-relaxed",
                  theme.text.secondary,
                ].join(" ")}
              >
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
