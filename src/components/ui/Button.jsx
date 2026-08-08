// src/components/ui/Button.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Button({
  children,
  variant = "accent", // "accent" | "primary" | "secondary" | "outline"
  size = "lg", // "sm" | "md" | "lg"
  href,
  onClick,
  icon: Icon,
  className = "",
  ...props
}) {
  const t = useTheme();

  // Size variations
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm", // Ideal for Navbar
    lg: "px-8 py-4 text-sm", // Default (Hero size)
  };

  // Variant styles mapped directly to theme tokens
  const variants = {
    accent: [
      "text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600",
      "bg-[length:200%_auto] hover:bg-right hover:scale-[1.02]",
      "shadow-[0_0_30px_rgba(124,108,240,0.5)]",
    ].join(" "),

    primary: [t.ctaButton, "text-white"].join(" "),

    secondary: [
      t.surface,
      t.surfaceBorder,
      t.textPrimary,
      "border backdrop-blur-md hover:border-indigo-500/50 hover:bg-slate-500/10",
    ].join(" "),

    outline: [t.primaryButton].join(" "),
  };

  const baseStyles = [
    "group relative inline-flex items-center justify-center rounded-full font-semibold tracking-wide",
    "transition-all duration-300 ease-out focus:outline-none",
    t.ringFocus,
    sizes[size] || sizes.lg,
    variants[variant] || variants.accent,
    className,
  ].join(" ");

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
