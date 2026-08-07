import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const t = useTheme();

  return (
    <footer
      className={`relative border-t ${t.footerBorder} ${t.footerBg} ${t.textSecondary} text-sm select-none overflow-hidden transition-colors duration-300`}
    >
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[150px] bg-indigo-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <span
                className={`text-2xl font-black tracking-wider ${t.textPrimary}`}
              >
                Revu
              </span>
            </div>
            <p
              className={`${t.textSecondary} text-xs sm:text-sm leading-relaxed max-w-sm`}
            >
              Smart active recall and spaced repetition engineered to turn
              temporary words into permanent memory.
            </p>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4
              className={`text-xs font-bold uppercase tracking-wider ${t.textPrimary} mb-3`}
            >
              Product
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { name: "Features", href: "#features" },
                { name: "Interactive Demo", href: "#screens" },
                { name: "Pricing Plans", href: "#pricing" },
                { name: "Kanji Tracing Mode", href: "#features" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`${t.textHover} transition-colors`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4
              className={`text-xs font-bold uppercase tracking-wider ${t.textPrimary} mb-3`}
            >
              Resources
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { name: "How It Works", href: "#how" },
                { name: "Spaced Repetition Science", href: "#how" },
                { name: "Anki Importer", href: "#features" },
                { name: "FAQ", href: "#faq" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`${t.textHover} transition-colors`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h4
              className={`text-xs font-bold uppercase tracking-wider ${t.textPrimary} mb-3`}
            >
              Legal & Support
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { name: "Terms of Service", href: "#terms" },
                { name: "Privacy Policy", href: "#privacy" },
                { name: "Cookie Settings", href: "#cookies" },
                { name: "Contact Support", href: "#support" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`${t.textHover} transition-colors`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div
          className={`pt-4 border-t ${t.footerBorder} flex flex-col sm:flex-row items-center justify-between gap-3 text-xs`}
        >
          <p>© {new Date().getFullYear()} Revu App. All rights reserved.</p>

          <div className="flex items-center space-x-3">
            {[
              {
                icon: faGithub,
                label: "GitHub",
                href: "https://github.com/CherryChiriko/Revu",
              },
              {
                icon: faDiscord,
                label: "Discord",
                href: "https://discord.com",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`p-1.5 rounded-full border ${t.iconContainer} transition-colors`}
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
