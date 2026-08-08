// src/components/layout/Navbar.jsx
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import RevuLogo from "@assets/Revu_logo.png";
import ThemeToggle from "../ui/ThemeToggle";
import Button from "../ui/Button";

const NAV_LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const t = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@700&display=swap');

        .nav-link-underline {
          position: relative;
        }
        .nav-link-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 1.5px;
          background-color: ${t.linkUnderlineHex};
          transition: width 0.25s ease;
        }
        .nav-link-underline:hover::after {
          width: 100%;
        }
      `}</style>

      <nav
        className={`sticky top-0 z-40 w-full backdrop-blur-xl border-b transition-colors duration-300 select-none ${t.navBg} ${t.navBorder} ${t.textPrimary}`}
      >
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 md:px-12 h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={RevuLogo}
              alt="Revu Logo"
              className="h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link-underline transition-colors duration-200 ${t.textSecondary} ${t.textHover}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions & Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Theme Toggle Wrapper */}

            <ThemeToggle />

            <a
              href="#"
              className={`hidden sm:inline-flex text-sm font-medium transition-colors px-3 py-1.5 rounded-lg ${t.textSecondary} ${t.textHover}`}
            >
              Log in
            </a>

            {/* Primary CTA */}
            <Button href="#pricing" variant="accent" size="md">
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg md:hidden transition-colors ${t.textSecondary} ${t.textHover}`}
              aria-label="Toggle Navigation Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden px-6 pt-2 pb-6 border-b transition-colors ${t.navBg} ${t.navBorder}`}
          >
            <div className="flex flex-col gap-4 text-base font-medium">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors ${t.textSecondary} ${t.textHover}`}
                >
                  {link.label}
                </a>
              ))}
              <hr className={t.surfaceBorder} />
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors ${t.textSecondary} ${t.textHover}`}
              >
                Log in
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
