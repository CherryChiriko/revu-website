// src/components/sections/Features.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { featuresData } from "../data/featuresData";
import Card from "../ui/Card";

export default function Features() {
  const theme = useTheme();

  return (
    <section
      id="features"
      className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2
          className={`text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] ${theme.textPrimary}`}
        >
          Everything you need to make words{" "}
          <span className={theme.textHighlight}>unforgettable.</span>
        </h2>

        <p
          className={`mt-6 text-lg sm:text-xl leading-relaxed font-normal ${theme.textSecondary}`}
        >
          Designed around cognitive science principles to turn transient
          vocabulary into permanent memory.
        </p>
      </div>

      {/* Asymmetric Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {featuresData.map((feature) => (
          <Card key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}
