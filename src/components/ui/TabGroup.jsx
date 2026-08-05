// src/components/ui/TabGroup.jsx
import { useState, useCallback } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function TabGroup({
  tabs,
  defaultTab,
  onChange,
  className = "",
}) {
  const { theme } = useTheme();
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);

  const handleClick = useCallback(
    (id) => {
      setActive(id);
      onChange?.(id);
    },
    [onChange],
  );

  return (
    <div className={["flex flex-wrap gap-2.5 mb-8", className].join(" ")}>
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={[
              "px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-offset-2",
              theme.ring.focus,
              isActive
                ? [
                    theme.background.app,
                    theme.text.activeButton,
                    "border-transparent",
                  ].join(" ")
                : [
                    theme.background.card,
                    theme.text.secondary,
                    theme.border.muted,
                    theme.link.hoverBg,
                    theme.link.hoverText,
                  ].join(" "),
            ].join(" ")}
            aria-selected={isActive}
            role="tab"
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
