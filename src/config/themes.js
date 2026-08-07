export const themes = {
  light: {
    isDark: false,

    // Page & Navigation Surfaces
    navBg: "bg-white/85",
    navBorder: "border-slate-200/80",
    pageBg: "bg-slate-50",
    footerBg: "bg-slate-100/90",
    footerBorder: "border-slate-200",

    // Typography
    textPrimary: "text-slate-900",
    textSecondary: "text-slate-600",
    textHover: "hover:text-indigo-600",
    textMuted: "text-slate-400",
    textAccent: "text-indigo-600",
    textHighlight: `relative inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-3 pt-1 px-2 -mb-3 -mt-1 -mx-2 leading-normal
      drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.8))
      drop-shadow(0px 0px 14px rgba(255, 255, 255, 0.35))
      drop-shadow(0px 0px 28px rgba(129, 140, 248, 0.3))`,

    // Interactive & Focus States
    ring: {
      focus: "focus:ring-indigo-500 focus:ring-offset-slate-50",
    },

    // UI Elements & Cards
    surface: "bg-slate-100/70",
    surfaceBorder: "border-slate-200",
    inputBg: "bg-white",
    inputBorder: "border-slate-300 focus-within:border-indigo-500",
    iconContainer:
      "bg-slate-200/60 border-slate-300 hover:border-indigo-400 hover:text-indigo-600",

    // Toggle Specific Tokens
    toggleTrack: "bg-slate-300",
    toggleThumb: "bg-white",
    toggleIcon: "text-amber-500",

    // Brand Gradients, Accents & Buttons
    brandGlyph: "from-indigo-600 to-violet-600",
    linkUnderline: "bg-indigo-600",
    linkUnderlineHex: "#4f46e5",
    ctaButton: "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/10",
    primaryButton: "bg-indigo-600 hover:bg-indigo-500 text-white",
  },

  dark: {
    isDark: true,

    // Page & Navigation Surfaces
    navBg: "bg-[#0b0a10]/80",
    navBorder: "border-white/10",
    pageBg: "bg-[#0b0a10]",
    footerBg: "bg-[#0b0a10]/90",
    footerBorder: "border-slate-800/80",

    // Typography
    textPrimary: "text-[#f3ede0]",
    textSecondary: "text-[#f3ede0]/70",
    textHover: "hover:text-indigo-300",
    textMuted: "text-[#f3ede0]/40",
    textAccent: "text-indigo-400",
    textHighlight: `relative inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-3 pt-1 px-2 -mb-3 -mt-1 -mx-2 leading-normal
      drop-shadow(0px 1px 3px rgba(30, 27, 75, 0.18))
      drop-shadow(0px 4px 12px rgba(99, 102, 241, 0.15))
    `,

    // Interactive & Focus States
    ring: {
      focus: "focus:ring-[#a99df5] focus:ring-offset-[#0b0a10]",
    },

    // UI Elements & Cards
    surface: "bg-white/5",
    surfaceBorder: "border-white/10",
    inputBg: "bg-slate-900",
    inputBorder: "border-slate-800 focus-within:border-indigo-500/50",
    iconContainer:
      "bg-slate-900 border-slate-800 hover:text-indigo-400 hover:border-slate-700",

    // Toggle Specific Tokens
    toggleTrack: "bg-[#7c6cf0]/40",
    toggleThumb: "bg-[#f3ede0]",
    toggleIcon: "text-[#7c6cf0]",

    // Brand Gradients, Accents & Buttons
    brandGlyph: "from-[#a99df5] to-[#7c6cf0]",
    linkUnderline: "bg-[#a99df5]",
    linkUnderlineHex: "#a99df5",
    ctaButton:
      "bg-gradient-to-r from-[#7c6cf0] to-[#5b46e0] hover:from-[#6b5be0] hover:to-[#4c39cb] text-white shadow-[0_10px_25px_-5px_rgba(124,108,240,0.4)]",
    primaryButton: "bg-indigo-600 hover:bg-indigo-500 text-white",
  },
};
