// src/components/ui/ThemeToggle.jsx
import { useTheme } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const t = useTheme();

  return (
    <button
      onClick={t.toggleTheme}
      aria-label={t.isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={[
        "relative inline-flex h-7 w-12 items-center rounded-full",
        "transition-colors duration-300",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        t.ring.focus,
        t.toggleTrack,
      ].join(" ")}
    >
      <span
        className={[
          "flex items-center justify-center",
          "h-5 w-5 rounded-full shadow-md",
          "transition-transform duration-300",
          "text-[11px]",
          t.toggleThumb,
          t.isDark ? "translate-x-6" : "translate-x-1",
        ].join(" ")}
      >
        <FontAwesomeIcon
          icon={t.isDark ? faMoon : faSun}
          className={`transition-colors duration-200 ${t.toggleIcon}`}
        />
      </span>
    </button>
  );
}
