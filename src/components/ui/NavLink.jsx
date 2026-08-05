// src/components/ui/NavLink.jsx
import { useTheme } from "../../context/ThemeContext";

export default function NavLink({ href, children }) {
  const { theme } = useTheme();

  return (
    <a
      href={href}
      className={[
        "text-sm font-medium transition-colors duration-200",
        theme.text.secondary,
        theme.link.hoverText,
        theme.link.hoverBg,
        "px-3 py-2 rounded-lg",
      ].join(" ")}
    >
      {children}
    </a>
  );
}
