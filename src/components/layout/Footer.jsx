// src/components/layout/Footer.jsx
import { useTheme } from "../../context/ThemeContext";
// import Logo from "../ui/Logo";

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#how" },
      { label: "Inside the app", href: "#screens" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={["border-t pt-16 pb-10 mt-10", theme.border.muted].join(" ")}
    >
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] gap-10 mb-12">
          {/* Brand */}
          <div>
            {/* <Logo /> */}
            <p
              className={[
                "mt-3.5 text-sm leading-relaxed max-w-xs",
                theme.text.secondary,
              ].join(" ")}
            >
              Spaced repetition and stroke-order practice for learners who want
              words to actually stay learned.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h5
                className={[
                  "font-mono text-xs uppercase tracking-widest mb-4",
                  theme.text.muted,
                ].join(" ")}
              >
                {col.title}
              </h5>
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={[
                        "block text-sm py-1 transition-colors duration-200",
                        theme.text.secondary,
                        "hover:text-indigo-500",
                      ].join(" ")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className={[
            "flex flex-wrap justify-between items-center gap-3 pt-6 border-t text-xs",
            theme.border.muted,
            theme.text.muted,
          ].join(" ")}
        >
          <span>© 2026 Revu. All rights reserved.</span>
          <span className="font-mono">
            Made for people who keep forgetting 的 the same character.
          </span>
        </div>
      </div>
    </footer>
  );
}
