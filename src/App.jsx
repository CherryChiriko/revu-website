import React, { useState } from "react";
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
// hero ok, navbar - not sticky, features - copywrite+themes, finalcta ok, footer ok
export default function App() {
  return (
    <div className="min-h-screen">
      <Background>
        <Navbar />
        <main>
          {/* <Hero /> */}
          {/* <HowItWorks /> */}
          {/* <Screenshots /> */}
          <Features />
          <Pricing onUpgrade={(plan) => window.openCheckout?.(plan)} />
          {/* <FAQ /> */}
          <DeckMarketplace onDownloadDeck={() => openAuth("signup")} />
          <FinalCTA onStart={() => window.openCheckout?.("pro")} />
        </main>
        <Footer />
        <ScrollToTop />
      </Background>
    </div>
  );
}
