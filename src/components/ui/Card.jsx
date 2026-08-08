import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../context/ThemeContext";

export default function Card({ feature }) {
  const theme = useTheme();

  const {
    icon,
    badge,
    title,
    description,
    colSpan = "lg:col-span-4",
    gradient,
    accentColor,
    borderColor,
  } = feature;

  return (
    <div
      className={`group relative rounded-3xl border ${theme.darkCardBorder} ${theme.darkCardBg} p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(99,102,241,0.12)] flex flex-col justify-between overflow-hidden ${colSpan} ${borderColor}`}
    >
      {/* Top Right Ambient Glow Accent */}
      <div
        className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${gradient} rounded-full blur-2xl pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-100`}
      />

      <div>
        {/* Card Header Tag & Icon */}
        <div className="flex items-center justify-between mb-6">
          <div
            className={`p-3 rounded-2xl ${theme.darkSurface} border ${theme.darkSurfaceBorder} ${accentColor}`}
          >
            <FontAwesomeIcon icon={icon} className="w-5 h-5" />
          </div>
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${theme.darkSurface} border ${theme.darkSurfaceBorder} ${theme.darkTextSecondary} tracking-wider uppercase`}
          >
            {badge}
          </span>
        </div>

        {/* Title & Description */}
        <h3
          className={`text-2xl font-bold ${theme.darkTextPrimary} mb-3 group-hover:text-indigo-200 transition-colors`}
        >
          {title}
        </h3>
        <p
          className={`${theme.darkTextSecondary} text-sm sm:text-base leading-relaxed`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
