// src/components/ui/ThemeToggle.jsx
import { useTheme } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const t = useTheme();

  return (
    <button
      type="button"
      onClick={t.toggleTheme}
      aria-label={t.isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={[
        "relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full p-0.5",
        "transition-colors duration-300 ease-in-out focus:outline-none",
        t.ringFocus,
        t.toggleTrack,
      ].join(" ")}
    >
      <span
        className={[
          "pointer-events-none flex h-6 w-6 transform items-center justify-center rounded-full",
          "shadow-sm transition duration-300 ease-in-out",
          t.toggleThumb,
          t.isDark ? "translate-x-6" : "translate-x-0",
        ].join(" ")}
      >
        <FontAwesomeIcon
          icon={t.isDark ? faMoon : faSun}
          className={`h-3.5 w-3.5 transition-transform duration-200 ${t.toggleIcon}`}
        />
      </span>
    </button>
  );
}
