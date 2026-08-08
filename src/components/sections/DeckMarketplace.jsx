import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faStar,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext";

export default function DeckMarketplace({ onDownloadDeck }) {
  const { theme } = useTheme();

  const featuredDecks = [
    {
      id: "jlpt-n5",
      title: "JLPT N5 Core Vocabulary",
      category: "Japanese",
      cardsCount: 800,
      rating: 4.9,
      downloads: "12.4k",
      badge: "Official",
      description:
        "Complete essential vocabulary with Kanji stroke tracing, example sentences, and audio clips.",
    },
    {
      id: "hsk-1-2",
      title: "HSK 1 & 2 Hanzi Master",
      category: "Chinese",
      cardsCount: 500,
      rating: 4.8,
      downloads: "8.9k",
      badge: "Popular",
      description:
        "Master essential Mandarin characters with stroke order guides, Pinyin, and tone practice.",
    },
    {
      id: "medical-roots",
      title: "Medical Terminology Roots",
      category: "Science",
      cardsCount: 1200,
      rating: 5.0,
      downloads: "5.2k",
      badge: "Curated",
      description:
        "Latin and Greek roots, prefixes, and suffixes tailored for medical and biology students.",
    },
  ];

  return (
    <section
      id="decks"
      className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2
          className={`text-4xl sm:text-6xl font-extrabold ${theme.textPrimary} tracking-tight leading-[1.1]`}
        >
          Ready-to-study{" "}
          <span className={theme.textHighlight}>PRESET DECKS.</span>
        </h2>

        <p className={`mt-6 text-lg ${theme.textSecondary} leading-relaxed`}>
          Skip manual card creation. Download pre-built decks with audio, stroke
          diagrams, and tags in one click.
        </p>
      </div>

      {/* Deck Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredDecks.map((deck) => (
          <div
            key={deck.id}
            className={`relative rounded-3xl border ${theme.surfaceBorder} ${theme.surface} p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between overflow-hidden group`}
          >
            <div>
              {/* Card Top Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  {deck.category}
                </span>
                <span
                  className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full border ${theme.surfaceBorder} ${theme.textMuted}`}
                >
                  {deck.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3
                className={`text-xl font-bold ${theme.textPrimary} mb-2 group-hover:text-indigo-400 transition-colors`}
              >
                {deck.title}
              </h3>
              <p
                className={`text-xs ${theme.textSecondary} leading-relaxed mb-6`}
              >
                {deck.description}
              </p>
            </div>

            {/* Bottom Details & Download Button */}
            <div>
              <div
                className={`flex items-center justify-between text-xs ${theme.textMuted} border-t ${theme.surfaceBorder} pt-4 mb-6`}
              >
                <div className="flex items-center space-x-1">
                  <FontAwesomeIcon
                    icon={faLayerGroup}
                    className="w-3.5 h-3.5 text-indigo-400"
                  />
                  <span>{deck.cardsCount} cards</span>
                </div>
                <div className="flex items-center space-x-1 text-amber-400">
                  <FontAwesomeIcon icon={faStar} className="w-3.5 h-3.5" />
                  <span className={`font-bold ${theme.textPrimary}`}>
                    {deck.rating}
                  </span>
                </div>
                <div>{deck.downloads} downloads</div>
              </div>

              <button
                onClick={() => onDownloadDeck?.(deck.id)}
                className={`w-full py-3 rounded-full text-xs font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${theme.primaryButton} shadow-md`}
              >
                <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
                <span>Import Deck</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
