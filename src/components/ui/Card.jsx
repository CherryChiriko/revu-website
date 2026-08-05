// src/components/ui/Card.jsx
import { useTheme } from "../../context/ThemeContext";

export default function Card({
  children,
  className = "",
  variant = "default", // 'default' | 'elevated' | 'gradient'
  padding = "lg", // 'sm' | 'md' | 'lg' | 'xl'
}) {
  const { theme } = useTheme();

  const paddingMap = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  const variantClasses = {
    default: [
      theme.background.card,
      "border",
      theme.border.muted,
      "rounded-2xl",
    ],
    elevated: [
      theme.background.card,
      "border",
      theme.border.muted,
      "rounded-2xl shadow-xl",
    ],
    gradient: [
      "bg-gradient-to-br",
      theme.gradients.from,
      theme.gradients.to,
      "rounded-2xl text-white",
    ],
  };

  return (
    <div
      className={[
        "transition-colors duration-300",
        paddingMap[padding],
        variantClasses[variant],
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
