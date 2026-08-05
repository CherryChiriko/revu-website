// src/components/layout/Navbar.jsx
import { useTheme } from "../../context/ThemeContext";
import RevuLogo from "@assets/Revu_logo.png";
// import RevuLogo from "../../assets/revu2.png";
// import Logo from "../ui/Logo";
import NavLink from "../ui/NavLink";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";

const NAV_LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#screens", label: "Inside the app" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav
      className={[
        "sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300",
        theme.background.navbar,
        theme.border.muted,
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 h-[76px]">
        {/* Logo — Single Responsibility: just renders the brand */}
        {/* <Logo /> */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${theme.gradients.from} ${theme.gradients.to}`}
          style={{
            WebkitMaskImage: `url(${RevuLogo})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "contain",
            maskImage: `url(${RevuLogo})`,
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
          }}
        />

        {/* Desktop Nav Links — Open/Closed: we can add links without changing this component */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Actions — Theme toggle + CTAs */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Button variant="ghost" href="#" className="hidden sm:inline-flex">
            Log in
          </Button>

          <Button variant="accent" href="#pricing">
            Start free
          </Button>
        </div>
      </div>
    </nav>
  );
}
