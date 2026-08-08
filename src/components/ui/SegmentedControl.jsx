// src/components/ui/SegmentedControl.jsx
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function SegmentedControl({
  options, // Array of { value, label, badge }
  value,
  onChange,
}) {
  const t = useTheme();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const buttonRefs = useRef([]);

  const selectedIndex = options.findIndex((opt) => opt.value === value);

  // Recalculate indicator position and width when selection or viewport changes
  useEffect(() => {
    const activeBtn = buttonRefs.current[selectedIndex];
    if (activeBtn) {
      setIndicatorStyle({
        left: `${activeBtn.offsetLeft}px`,
        width: `${activeBtn.offsetWidth}px`,
      });
    }
  }, [selectedIndex, options]);

  return (
    <div
      className={[
        "relative inline-flex items-center rounded-full p-1 border backdrop-blur-md shadow-inner transition-colors duration-200",
        t.surfaceBorder,
        t.surface,
      ].join(" ")}
    >
      {/* Dynamic Sliding Pill Indicator */}
      <div
        className={`absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-out pointer-events-none ${t.pillActiveBg}`}
        style={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
        }}
      />

      {/* Option Buttons */}
      {options.map((option, idx) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            ref={(el) => (buttonRefs.current[idx] = el)}
            type="button"
            onClick={() => onChange(option.value)}
            className={[
              "relative z-10 flex items-center justify-center space-x-2 px-5 py-1.5 text-xs font-bold transition-colors duration-200 rounded-full whitespace-nowrap select-none",
              isActive
                ? t.pillActiveText
                : `${t.textSecondary} ${t.textHoverPrimary}`,
            ].join(" ")}
          >
            <span>{option.label}</span>
            {option.badge && (
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold transition-colors duration-200 ${
                  isActive
                    ? `${t.badgeActiveBg} ${t.badgeActiveText}`
                    : `${t.badgeBg} ${t.badgeText}`
                }`}
              >
                {option.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
