// src/components/ui/PriceCard.jsx
import { useTheme } from "../../context/ThemeContext";
import Button from "./Button";

export default function PriceCard({
  name,
  description,
  price,
  period,
  billing,
  features,
  cta,
  ctaVariant = "primary",
  onCta,
  isPro = false,
  popular = false,
}) {
  const { theme } = useTheme();

  if (isPro) {
    return (
      <div
        className={[
          "relative rounded-3xl p-10 flex flex-col border-0 overflow-hidden",
          "bg-gradient-to-br from-indigo-600 to-purple-700 text-white",
        ].join(" ")}
      >
        {popular && (
          <span
            className={[
              "absolute top-6 right-6 font-mono text-xs uppercase tracking-widest font-bold",
              "bg-amber-400 text-gray-900 px-3 py-1.5 rounded-full",
            ].join(" ")}
          >
            Most popular
          </span>
        )}

        <div className="mb-1.5 font-serif text-xl font-semibold">{name}</div>
        <div className="text-sm opacity-65 mb-7">{description}</div>

        <div className="flex items-end gap-2 mb-2">
          <span className="font-serif text-5xl font-semibold tracking-tight">
            {price}
          </span>
          <span className="text-base opacity-60 mb-2">{period}</span>
        </div>
        <div className="text-sm opacity-55 mb-8">{billing}</div>

        <ul className="space-y-0 flex-1 mb-8">
          {features.map((feat, i) => (
            <li
              key={i}
              className={[
                "flex items-start gap-2.5 py-2.5 text-sm",
                i > 0 && "border-t border-white/10",
              ].join(" ")}
            >
              <span className="text-amber-400 font-bold shrink-0">✓</span>
              {feat}
            </li>
          ))}
        </ul>

        <Button variant="accent" onClick={onCta} className="w-full">
          {cta}
        </Button>
      </div>
    );
  }

  // Free tier
  return (
    <div
      className={[
        "rounded-3xl p-10 flex flex-col border",
        theme.background.card,
        theme.border.muted,
      ].join(" ")}
    >
      <div
        className={[
          "mb-1.5 font-serif text-xl font-semibold",
          theme.text.primary,
        ].join(" ")}
      >
        {name}
      </div>
      <div className={["text-sm mb-7", theme.text.secondary].join(" ")}>
        {description}
      </div>

      <div className="flex items-end gap-2 mb-2">
        <span
          className={[
            "font-serif text-5xl font-semibold tracking-tight",
            theme.text.primary,
          ].join(" ")}
        >
          {price}
        </span>
        <span className={["text-base mb-2", theme.text.muted].join(" ")}>
          {period}
        </span>
      </div>
      <div className={["text-sm mb-8", theme.text.muted].join(" ")}>
        {billing}
      </div>

      <ul className="space-y-0 flex-1 mb-8">
        {features.map((feat, i) => (
          <li
            key={i}
            className={[
              "flex items-start gap-2.5 py-2.5 text-sm",
              i > 0 && ["border-t", theme.border.muted].join(" "),
              theme.text.secondary,
            ].join(" ")}
          >
            <span
              className={[
                "text-indigo-500 font-bold shrink-0",
                theme.text.accent3,
              ].join(" ")}
            >
              ✓
            </span>
            {feat}
          </li>
        ))}
      </ul>

      <Button variant="ghost" onClick={onCta} className="w-full">
        {cta}
      </Button>
    </div>
  );
}
