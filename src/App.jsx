import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Background from "./context/Background";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Screenshots from "./components/sections/Screenshots";
import Features from "./components/sections/Features";
import Pricing from "./components/sections/Pricing";
import DeckMarketplace from "./components/sections/DeckMarketplace";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import AuthModal from "./components/modals/AuthModal";
// hero ok, navbar - not sticky, features - copywrite+themes, finalcta ok, footer ok
export default function App() {
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: "signup" });

  const openAuth = (mode = "signup") => setAuthModal({ isOpen: true, mode });
  const closeAuth = () => setAuthModal({ isOpen: false, mode: "signup" });

  return (
    <ThemeProvider>
      <Background>
        <Navbar onOpenAuth={openAuth} />
        <main>
          {/* <Hero /> */}
          {/* <HowItWorks /> */}
          {/* <Screenshots /> */}
          <Features />
          <Pricing onUpgrade={(plan) => window.openCheckout?.(plan)} />
          {/* <FAQ /> */}
          <DeckMarketplace onDownloadDeck={() => openAuth("signup")} />
          <FinalCTA onStart={() => window.openCheckout?.("pro")} />
          <AuthModal
            isOpen={authModal.isOpen}
            initialMode={authModal.mode}
            onClose={closeAuth}
          />
        </main>
        <Footer />
        <ScrollToTop />
      </Background>
    </ThemeProvider>
  );
}
