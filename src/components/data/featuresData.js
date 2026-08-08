// src/data/featuresData.js
import {
  faBrain,
  faChartLine,
  faPenFancy,
  faFire,
  faLayerGroup,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const featuresData = [
  {
    id: "active-recall",
    icon: faBrain,
    badge: "Active Recall",
    title: "Interactive Study Cards",
    description:
      "Flip between questions and answers seamlessly. Lock in knowledge using self-rated difficulty triggers that adapt to your recall speed.",
    gradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
    accentColor: "text-indigo-400",
    borderColor: "group-hover:border-indigo-500/40",
  },
  {
    id: "spaced-repetition",
    icon: faChartLine,
    badge: "Smart Algorithm",
    title: "Spaced Repetition Engine",
    description:
      "Our intelligent schedule predicts exactly when you are about to forget a word, serving reviews at the mathematically optimal time.",
    gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
    accentColor: "text-purple-400",
    borderColor: "group-hover:border-purple-500/40",
  },
  {
    id: "streak",
    icon: faFire,
    badge: "Streak",
    title: "Streak Protection",
    description:
      "Revu freezes your streak when there isn't meaningful work available, instead of punishing you for it. Your habit stays intact.",
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    accentColor: "text-orange-400",
    borderColor: "group-hover:border-orange-500/40",
  },
  {
    id: "writing-mode",
    icon: faPenFancy,
    badge: "Writing Mode",
    title: "Character Support",
    description:
      "Master characters by practicing stroke order with our interactive tracing canvas. Receive immediate accuracy feedback.",
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
    accentColor: "text-pink-400",
    borderColor: "group-hover:border-pink-500/40",
  },
  {
    id: "import-deck",
    icon: faLayerGroup,
    badge: "Import",
    title: "Deck Import",
    description:
      "Import from CSV or Excel, map columns, build decks or merge instantly with automatic data validation before it hits a card.",
    gradient: "from-cyan-500/10 via-teal-500/5 to-transparent",
    accentColor: "text-cyan-400",
    borderColor: "group-hover:border-cyan-500/40",
  },
  {
    id: "user-settings",
    icon: faUser,
    badge: "Personalization",
    title: "Custom Settings & Cockpit Controls",
    description:
      "Adjust autoflip timing, character animation speed, daily review caps, themes, and avatars to match your personal learning pace.",
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    accentColor: "text-emerald-400",
    borderColor: "group-hover:border-emerald-500/40",
  },
];
