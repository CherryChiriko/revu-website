// src/components/sections/FinalCTA.jsx
import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";

export default function FinalCTA({ onStart }) {
  const { theme } = useTheme();

  return (
    <section className="py-28">
      <div className="mx-auto max-w-[1180px] px-8">
        <div
          className={[
            "relative rounded-[2rem] px-12 py-24 text-center overflow-hidden",
            "bg-gradient-to-br",
            theme.gradients.from,
            theme.gradients.to,
          ].join(" ")}
        >
          {/* Optional subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-5 tracking-tight">
              Your next review is already waiting.
            </h2>
            <p className="text-lg text-white/90 mb-9 max-w-md mx-auto">
              Start free — no card, no trial clock, just cards due today.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={onStart}
              className="bg-white !text-gray-900 hover:bg-gray-100 active:bg-gray-200"
            >
              Start learning free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
