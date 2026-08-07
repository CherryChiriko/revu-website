import {
  faBrain,
  faChartLine,
  faPenFancy,
  faVolumeHigh,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const featuresData = [
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
    id: "writing-mode",
    icon: faPenFancy,
    badge: "Writing Mode",
    title: "Hanzi & Kanji Tracing",
    description:
      "Master stroke order with embedded canvas tracing. Receive immediate stroke accuracy feedback for native writing precision.",
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
    accentColor: "text-pink-400",
    borderColor: "group-hover:border-pink-500/40",
  },
  //   {
  //     id: "audio-playback",
  //     icon: faVolumeHigh,
  //     badge: "Audio & Pronunciation",
  //     title: "Native Voice Playback",
  //     description:
  //       "Listen to high-definition native pronunciations for thousands of characters and words to refine accent and ear training.",
  //     colSpan: "lg:col-span-4",
  //     gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
  //     accentColor: "text-blue-400",
  //     borderColor: "group-hover:border-blue-500/40",
  //   },
  {
    id: "custom-deck",
    icon: faLayerGroup,
    badge: "Organization",
    title: "Custom Deck Architect",
    description:
      "Organize terminology by topics, tags, or difficulty tiers. Import and export custom flashcard decks in seconds.",
    gradient: "from-cyan-500/10 via-teal-500/5 to-transparent",
    accentColor: "text-cyan-400",
    borderColor: "group-hover:border-cyan-500/40",
  },
];

export { featuresData };
