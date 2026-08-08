// src/config/themes.js
export const themes = {
  light: {
    isDark: false,

    // Page & Navigation Surfaces
    navBg: "bg-white/70 backdrop-blur-md",
    navBorder: "border-slate-200/60",
    pageBg: "bg-slate-50",
    footerBg: "bg-slate-100/80 backdrop-blur-sm",
    footerBorder: "border-slate-200/80",

    // Backward compatibility alias
    bg: "bg-slate-50",

    // Typography
    textPrimary: "text-slate-900",
    textSecondary: "text-slate-600",
    textHover: "hover:text-indigo-600",
    textHoverPrimary: "hover:text-slate-900",
    textMuted: "text-slate-400",
    textAccent: "text-indigo-600",
    textHighlight:
      "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent",

    // Interactive & Focus States
    ringFocus:
      "focus:ring-2 focus:ring-indigo-500/40 focus:ring-offset-2 focus:ring-offset-slate-50",

    // Standard Cards & Elements
    cardBg: "bg-white/80 backdrop-blur-md shadow-sm shadow-slate-200/50",
    cardBorder: "border-slate-200/80",
    surface: "bg-slate-100/80 backdrop-blur-sm",
    surfaceBorder: "border-slate-500/80",
    inputBg: "bg-white/90",
    inputBorder: "border-slate-300 focus-within:border-indigo-500",
    iconContainer:
      "bg-slate-100 border-slate-200/80 hover:border-indigo-300 hover:text-indigo-600 text-slate-600",

    // Active Segmented Control / Pill Tokens
    pillActiveBg: "bg-indigo-600 shadow-md shadow-indigo-600/20",
    pillActiveText: "text-white",

    // Discount / Offer Badge Tokens
    badgeBg: "bg-emerald-500/15",
    badgeText: "text-emerald-700",
    badgeActiveBg: "bg-white/20",
    badgeActiveText: "text-white",

    // Permanent Dark Card Overrides (For high-contrast elements in Light Mode)
    darkCardBg: "bg-slate-900/90 backdrop-blur-md",
    darkCardBorder: "border-slate-800",
    darkTextPrimary: "text-white",
    darkTextSecondary: "text-slate-400",
    darkSurface: "bg-slate-800/50",
    darkSurfaceBorder: "border-slate-700/60",
    darkSurfaceHover: "hover:bg-slate-800 hover:border-slate-700",

    // Toggle Specific Tokens
    toggleTrack: "bg-slate-200 hover:bg-slate-300 border border-slate-300/60",
    toggleThumb: "bg-white shadow-sm",
    toggleIcon: "text-amber-500",

    // Brand Gradients, Accents & Buttons
    brandGlyph: "from-indigo-600 to-violet-600",
    linkUnderline: "bg-indigo-600",
    linkUnderlineHex: "#4f46e5",

    // Canvas Background Blob Palette
    gradientColors: [
      "#a5b4fc",
      "#c084fc",
      "#f0abfc",
      "#38bdf8",
      "#818cf8",
      "#f472b6",
    ],
  },

  dark: {
    isDark: true,

    // Page & Navigation Surfaces
    navBg: "bg-slate-950/70 backdrop-blur-md",
    navBorder: "border-slate-800/60",
    pageBg: "bg-slate-950",
    footerBg: "bg-slate-950/80 backdrop-blur-sm",
    footerBorder: "border-slate-800/60",

    // Backward compatibility alias
    bg: "bg-slate-950",

    // Typography
    textPrimary: "text-slate-100",
    textSecondary: "text-slate-400",
    textHover: "hover:text-indigo-400",
    textHoverPrimary: "hover:text-slate-100",
    textMuted: "text-slate-500",
    textAccent: "text-indigo-400",
    textHighlight:
      "bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent",

    // Interactive & Focus States
    ringFocus:
      "focus:ring-2 focus:ring-indigo-400/40 focus:ring-offset-2 focus:ring-offset-slate-950",

    // Standard Cards & Elements
    cardBg: "bg-slate-900/60 backdrop-blur-md shadow-xl shadow-black/20",
    cardBorder: "border-slate-800/80",
    surface: "bg-slate-900/60 backdrop-blur-sm",
    surfaceBorder: "border-slate-500/80",
    inputBg: "bg-slate-900/80",
    inputBorder: "border-slate-800 focus-within:border-indigo-500/50",
    iconContainer:
      "bg-slate-900/80 border-slate-800 hover:text-indigo-400 hover:border-slate-700 text-slate-400",

    // Active Segmented Control / Pill Tokens
    pillActiveBg: "bg-indigo-500 shadow-md shadow-indigo-950",
    pillActiveText: "text-white",

    // Discount / Offer Badge Tokens
    badgeBg: "bg-emerald-500/20",
    badgeText: "text-emerald-400",
    badgeActiveBg: "bg-white/20",
    badgeActiveText: "text-white",

    // Permanent Dark Card Tokens
    darkCardBg: "bg-slate-900/80 backdrop-blur-md",
    darkCardBorder: "border-slate-800",
    darkTextPrimary: "text-white",
    darkTextSecondary: "text-slate-400",
    darkSurface: "bg-slate-800/50",
    darkSurfaceBorder: "border-slate-700/60",
    darkSurfaceHover: "hover:bg-slate-800 hover:border-slate-700",

    // Toggle Specific Tokens
    toggleTrack: "bg-slate-800 hover:bg-slate-700 border border-slate-700/60",
    toggleThumb: "bg-indigo-500 shadow-sm shadow-indigo-950",
    toggleIcon: "text-slate-100",

    // Brand Gradients, Accents & Buttons
    brandGlyph: "from-indigo-400 to-violet-400",
    linkUnderline: "bg-indigo-400",
    linkUnderlineHex: "#818cf8",

    // Canvas Background Blob Palette
    gradientColors: [
      "#312e81",
      "#4338ca",
      "#6366f1",
      "#818cf8",
      "#c084fc",
      "#d8b4fe",
    ],
  },
};
