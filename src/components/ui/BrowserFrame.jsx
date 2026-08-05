// src/components/ui/BrowserFrame.jsx
import { useTheme } from "../../context/ThemeContext";

export default function BrowserFrame({
  children,
  url = "app.revu.study",
  className = "",
}) {
  const { theme } = useTheme();

  return (
    <div
      className={[
        "rounded-3xl border p-6",
        theme.background.secondary,
        theme.border.muted,
        className,
      ].join(" ")}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 pb-5">
        <div
          className={["w-2.5 h-2.5 rounded-full", theme.background.light].join(
            " ",
          )}
        />
        <div
          className={["w-2.5 h-2.5 rounded-full", theme.background.light].join(
            " ",
          )}
        />
        <div
          className={["w-2.5 h-2.5 rounded-full", theme.background.light].join(
            " ",
          )}
        />
        <div
          className={[
            "flex-1 ml-3 rounded-full px-4 py-1.5 font-mono text-xs",
            theme.background.card,
            theme.border.muted,
            theme.text.muted,
          ].join(" ")}
        >
          {url}
        </div>
      </div>

      {/* Content */}
      <div
        className={[
          "rounded-xl border overflow-hidden",
          theme.border.muted,
          "shadow-2xl",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}
