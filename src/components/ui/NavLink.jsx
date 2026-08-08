// src/components/ui/NavLink.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function NavLink({ href, children, onClick }) {
  const t = useTheme();

  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        "relative text-sm font-medium transition-colors duration-200 py-1",
        t.textSecondary,
        t.textHover,
        // Tailwind pseudo-element for smooth hover underline
        "after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0",
        "after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full",
      ].join(" ")}
    >
      {children}
    </a>
  );
}
