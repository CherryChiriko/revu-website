// src/components/sections/LogoStrip.jsx
import { useTheme } from "../../context/ThemeContext";

const STRIP_ITEMS = [
  { label: "Chinese", detail: "HSK 1–6" },
  { label: "French", detail: "vocab decks" },
  { label: "Russian", detail: "reversed drills" },
  { label: "Any deck", detail: "import from Excel" },
  { label: "Free forever", detail: "tier" },
];

export default function LogoStrip() {
  const { theme } = useTheme();

  return (
    <div
      className={[
        "border-y py-9",
        theme.border.muted,
        theme.background.secondary,
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="flex flex-wrap items-center justify-between gap-5">
          {STRIP_ITEMS.map((item) => (
            <div
              key={item.label}
              className={[
                "font-mono text-sm uppercase tracking-wider",
                theme.text.muted,
              ].join(" ")}
            >
              <span className={["font-semibold", theme.text.primary].join(" ")}>
                {item.label}
              </span>
              {" · "}
              {item.detail}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
