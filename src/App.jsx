import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Background from "./context/Background";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Features from "./components/sections/Features";
import Pricing from "./components/sections/Pricing";
import DeckMarketplace from "./components/sections/DeckMarketplace";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
// hero ok, navbar - not sticky, features - ok, finalcta ok, footer ok
// how it works - to do, pricing - to do, deck marketplace - to do
// authmodal - to do, pricemodal - to do
export default function App() {
  return (
    <div className="min-h-screen">
      <Background>
        <Navbar />
        <main>
          {/* <Hero /> */}
          {/* <HowItWorks /> */}
          {/* <Features /> */}
          <Pricing onUpgrade={(plan) => window.openCheckout?.(plan)} />
          {/* <DeckMarketplace onDownloadDeck={() => openAuth("signup")} /> */}
          {/* <FinalCTA onStart={() => window.openCheckout?.("pro")} /> */}
        </main>
        <Footer />
        <ScrollToTop />
      </Background>
    </div>
  );
}
