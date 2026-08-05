// src/components/sections/Screenshots.jsx
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import SectionHeader from "../ui/SectionHeader";
import TabGroup from "../ui/TabGroup";
import BrowserFrame from "../ui/BrowserFrame";

const PANES = [
  {
    id: "dashboard",
    label: "Dashboard",
    title: "The dashboard tells it straight",
    description:
      "Streak, cards due, and mastery count up front — plus every deck you're mid-way through, ready to resume in one tap.",
    badge: "Level 7 · 108/191 XP",
    image: "/assets/dashboard.png",
    alt: "Revu dashboard showing streak, cards due, mastered count, and continue-learning decks",
  },
  {
    id: "review",
    label: "Review session",
    title: "Rate honestly, review fairly",
    description:
      'Four ratings, not two. "Hard" isn\'t "wrong" — it just means the next review comes sooner.',
    badge: "Progress 0/1",
    image: "/assets/review.png",
    alt: "Revu review session showing a flip card with Again, Hard, Good, Easy rating buttons",
  },
  {
    id: "learn",
    label: "Learn session",
    title: "Stroke order, animated",
    description:
      "New Chinese characters play their stroke order before you're asked to trace or recall them.",
    badge: "好 · hǎo · good",
    image: "/assets/learn.png",
    alt: "Revu learn session showing a Chinese character with stroke-order animation and pinyin",
  },
];

export default function Screenshots() {
  const { theme } = useTheme();
  const [activePane, setActivePane] = useState("dashboard");

  const currentPane = PANES.find((p) => p.id === activePane) || PANES[0];

  const tabs = PANES.map((p) => ({ id: p.id, label: p.label }));

  return (
    <section id="screens" className="py-28">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeader
          eyebrow="Inside the app"
          title="Every screen, built around one question: what's due, and why?"
          subtitle="A dashboard that tells you the truth about your progress, and a study flow that doesn't waste a single card."
        />

        <TabGroup tabs={tabs} defaultTab="dashboard" onChange={setActivePane} />

        <BrowserFrame>
          <img
            src={currentPane.image}
            alt={currentPane.alt}
            className="w-full h-auto"
            loading="lazy"
          />
        </BrowserFrame>

        {/* Caption */}
        <div className="flex flex-wrap justify-between items-start gap-4 mt-6">
          <div className="max-w-md">
            <h4
              className={[
                "font-serif text-lg font-semibold mb-1.5",
                theme.text.primary,
              ].join(" ")}
            >
              {currentPane.title}
            </h4>
            <p
              className={["text-sm leading-relaxed", theme.text.secondary].join(
                " ",
              )}
            >
              {currentPane.description}
            </p>
          </div>
          <span
            className={[
              "font-mono text-xs px-3 py-1.5 rounded-full shrink-0",
              theme.background.track,
              theme.text.muted,
            ].join(" ")}
          >
            {currentPane.badge}
          </span>
        </div>
      </div>
    </section>
  );
}
