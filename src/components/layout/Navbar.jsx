// src/components/layout/Navbar.jsx
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import useScrolled from "../../hooks/useScrolled";
import RevuLogo from "@assets/Revu_logo.png";
import ThemeToggle from "../ui/ThemeToggle";
import Button from "../ui/Button";
import NavLink from "../ui/NavLink";

const NAV_LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const t = useTheme();
  const { openLogin, openSignup } = useAuth();
  const isScrolled = useScrolled(10);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={[
        "sticky top-0 z-40 w-full transition-all duration-300 select-none",
        t.navBg,
        t.textPrimary,
        isScrolled
          ? `border-b ${t.navBorder} shadow-lg shadow-black/5 backdrop-blur-xl bg-opacity-80 dark:bg-opacity-80`
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 md:px-12 h-[72px]">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={RevuLogo}
            alt="Revu Logo"
            className="h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Action Buttons & Theme Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggle />

          {/* Log in Button */}
          <button
            type="button"
            onClick={openLogin}
            className={`hidden sm:inline-flex text-sm font-medium transition-colors px-3 py-2 rounded-lg ${t.textSecondary} ${t.textHover}`}
          >
            Log in
          </button>

          {/* Get Started CTA */}
          <Button onClick={openSignup} variant="accent" size="md">
            Get Started
          </Button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 pt-3 pb-6 border-b transition-colors backdrop-blur-xl ${t.navBg} ${t.navBorder}`}
        >
          <div className="flex flex-col gap-4 text-base font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors py-1 ${t.textSecondary} ${t.textHover}`}
              >
                {link.label}
              </a>
            ))}

            <hr className={t.surfaceBorder} />

            <div className="flex flex-col gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLogin();
                }}
                className={`w-full text-center transition-colors py-2 rounded-lg ${t.textSecondary} ${t.textHover}`}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
