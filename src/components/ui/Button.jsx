// src/components/ui/Button.jsx
import { useTheme } from "../../context/ThemeContext";

const VARIANTS = {
  primary: (t) => t.button.primary,
  secondary: (t) => t.button.secondary,
  accent: (t) => t.button.accent,
  accent2: (t) => t.button.accent2,
  ghost: (t) =>
    [
      "bg-transparent border",
      t.border.muted,
      t.text.primary,
      "hover:border-gray-400",
    ].join(" "),
  danger: (t) => t.button.danger,
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  size = "md",
  ...props
}) {
  const { theme } = useTheme();

  const baseClasses = [
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    theme.ring.focus,
    size === "sm" && "px-4 py-2 text-sm",
    size === "md" && "px-5 py-2.5 text-sm",
    size === "lg" && "px-7 py-4 text-base",
    VARIANTS[variant]?.(theme) || VARIANTS.primary(theme),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} {...props}>
      {children}
    </button>
  );
}
