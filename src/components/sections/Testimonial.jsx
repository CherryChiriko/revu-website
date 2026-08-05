// src/components/sections/Testimonial.jsx
import { useTheme } from "../../context/ThemeContext";
import Card from "../ui/Card";

export default function Testimonial() {
  const { theme } = useTheme();

  return (
    <section className="py-28">
      <div className="mx-auto max-w-[1180px] px-8">
        <Card
          variant="gradient"
          padding="xl"
          className="relative overflow-hidden"
        >
          {/* Giant background character */}
          <span
            className={[
              "absolute -right-8 -bottom-16 font-serif text-[22rem] font-semibold leading-none pointer-events-none select-none",
              "text-white/5",
            ].join(" ")}
            aria-hidden="true"
          >
            好
          </span>

          <blockquote
            className={[
              "relative z-10 font-serif text-2xl sm:text-3xl font-medium italic leading-snug max-w-3xl mb-7",
            ].join(" ")}
          >
            "I stopped dreading review sessions. Watching a character I used to
            blank on drop into 'Mastered' feels like the whole point of
            studying."
          </blockquote>

          <div className="relative z-10 flex items-center gap-3.5">
            <div
              className={[
                "w-11 h-11 rounded-full bg-gradient-to-br",
                theme.gradients.from,
                theme.gradients.to,
              ].join(" ")}
              aria-hidden="true"
            />
            <div>
              <b className="block text-sm font-semibold">Mei L.</b>
              <span className={["text-sm opacity-60"].join(" ")}>
                HSK 4 learner, 87-day streak
              </span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
