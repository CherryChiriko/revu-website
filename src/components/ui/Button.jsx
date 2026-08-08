// src/components/ui/Button.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Button({
  children,
  variant = "accent", // "accent" | "primary" | "secondary" | "outline"
  href,
  onClick,
  icon: Icon,
  className = "",
  ...props
}) {
  const t = useTheme();

  // Variant styles mapped directly to theme tokens
  const variants = {
    // Glowing Animated Gradient CTA (Hero Variant)
    accent: [
      "text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600",
      "bg-[length:200%_auto] hover:bg-right hover:scale-[1.02]",
      "shadow-[0_0_30px_rgba(124,108,240,0.5)]",
    ].join(" "),

    // Standard Theme CTA Button
    primary: [t.ctaButton, "text-white"].join(" "),

    // Secondary / Glass Outline Button
    secondary: [
      t.surface,
      t.surfaceBorder,
      t.textPrimary,
      "border backdrop-blur-md hover:border-indigo-500/50 hover:bg-slate-500/10",
    ].join(" "),

    // Standard Accent Button
    outline: [t.primaryButton].join(" "),
  };

  const baseStyles = [
    "group relative inline-flex items-center justify-center",
    "px-8 py-4 rounded-full text-sm font-semibold tracking-wide",
    "transition-all duration-300 ease-out",
    "focus:outline-none",
    t.ringFocus,
    variants[variant] || variants.accent,
    className,
  ].join(" ");

  // Render as link if href is provided
  if (href) {
    return (
      <a href={href} className={baseStyles} {...props}>
        <span>{children}</span>
        {Icon && (
          <Icon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        )}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseStyles} {...props}>
      <span>{children}</span>
      {Icon && (
        <Icon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
}
