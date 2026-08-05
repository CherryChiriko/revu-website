// src/components/ui/ThemeToggle.jsx
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={[
        "relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
        theme.ring.focus,
        isDark ? "bg-indigo-600" : "bg-gray-300",
      ].join(" ")}
    >
      <span
        className={[
          "inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300",
          isDark ? "translate-x-6" : "translate-x-1",
        ].join(" ")}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
