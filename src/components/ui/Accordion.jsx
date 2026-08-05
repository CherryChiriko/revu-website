// src/components/ui/Accordion.jsx
import { useState, useCallback } from "react";
import { useTheme } from "../../context/ThemeContext";

export function Accordion({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export function AccordionItem({ title, children, defaultOpen = false }) {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = useCallback(() => setIsOpen((p) => !p), []);

  return (
    <div
      className={[
        "border-t last:border-b transition-colors duration-200",
        theme.border.muted,
      ].join(" ")}
    >
      <button
        onClick={toggle}
        className={[
          "w-full flex items-center justify-between gap-5 py-7 text-left",
          "focus:outline-none focus:ring-2 focus:ring-inset focus:rounded-lg",
          theme.ring.focus,
        ].join(" ")}
        aria-expanded={isOpen}
      >
        <h4
          className={[
            "font-serif text-base font-semibold",
            theme.text.primary,
          ].join(" ")}
        >
          {title}
        </h4>
        <span
          className={[
            "w-7 h-7 rounded-full border flex items-center justify-center text-sm font-medium shrink-0 transition-all duration-200",
            isOpen
              ? [
                  theme.background.app,
                  theme.text.activeButton,
                  "rotate-45 border-transparent",
                ].join(" ")
              : [
                  theme.background.card,
                  theme.text.secondary,
                  theme.border.muted,
                ].join(" "),
          ].join(" ")}
        >
          +
        </span>
      </button>

      <div
        className={[
          "grid transition-all duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <p
            className={[
              "pb-7 max-w-2xl text-sm leading-relaxed",
              theme.text.secondary,
            ].join(" ")}
          >
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
