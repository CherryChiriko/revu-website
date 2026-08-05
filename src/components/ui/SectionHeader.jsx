// src/components/ui/SectionHeader.jsx
import { useTheme } from "../../context/ThemeContext";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left", // 'left' | 'center'
  className = "",
}) {
  const { theme } = useTheme();

  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={["max-w-2xl mb-14", alignClass, className].join(" ")}>
      {eyebrow && (
        <span
          className={[
            "inline-block mb-3 font-mono text-xs uppercase tracking-widest",
            theme.text.accent3,
          ].join(" ")}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className={[
            "font-serif text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-4",
            theme.text.primary,
          ].join(" ")}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={["text-lg leading-relaxed", theme.text.secondary].join(
            " ",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
