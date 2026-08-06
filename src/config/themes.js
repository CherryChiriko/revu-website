export const themes = {
  light: {
    isDark: false,

    // Page & Navigation Surfaces
    navBg: "bg-white/85",
    navBorder: "border-slate-200/80",
    pageBg: "bg-slate-50",

    // Typography
    textPrimary: "text-slate-900",
    textSecondary: "text-slate-600",
    textHover: "hover:text-slate-900",
    textMuted: "text-slate-400",

    // Interactive & Focus States
    ring: {
      focus: "focus:ring-indigo-500 focus:ring-offset-slate-50",
    },

    // UI Elements & Cards
    surface: "bg-slate-100/70",
    surfaceBorder: "border-slate-200",

    // Toggle Specific Tokens
    toggleTrack: "bg-slate-300",
    toggleThumb: "bg-white",
    toggleIcon: "text-amber-500",

    // Brand Gradients, Accents & Buttons
    brandGlyph: "from-indigo-600 to-violet-600",
    linkUnderline: "bg-indigo-600",
    linkUnderlineHex: "#4f46e5", // Used for raw CSS ::after Pseudo-element
    ctaButton: "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/10",
  },

  dark: {
    isDark: true,

    // Page & Navigation Surfaces
    navBg: "bg-[#0b0a10]/80",
    navBorder: "border-white/10",
    pageBg: "bg-[#0b0a10]",

    // Typography
    textPrimary: "text-[#f3ede0]",
    textSecondary: "text-[#f3ede0]/70",
    textHover: "hover:text-white",
    textMuted: "text-[#f3ede0]/40",

    // Interactive & Focus States
    ring: {
      focus: "focus:ring-[#a99df5] focus:ring-offset-[#0b0a10]",
    },

    // UI Elements & Cards
    surface: "bg-white/5",
    surfaceBorder: "border-white/10",

    // Toggle Specific Tokens
    toggleTrack: "bg-[#7c6cf0]/40",
    toggleThumb: "bg-[#f3ede0]",
    toggleIcon: "text-[#7c6cf0]",

    // Brand Gradients, Accents & Buttons
    brandGlyph: "from-[#a99df5] to-[#7c6cf0]",
    linkUnderline: "bg-[#a99df5]",
    linkUnderlineHex: "#a99df5", // Used for raw CSS ::after Pseudo-element
    ctaButton:
      "bg-gradient-to-r from-[#7c6cf0] to-[#5b46e0] hover:from-[#6b5be0] hover:to-[#4c39cb] text-white shadow-[0_10px_25px_-5px_rgba(124,108,240,0.4)]",
  },
};
