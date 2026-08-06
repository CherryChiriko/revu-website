// src/App.jsx
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import SoftGradientBackground from "./components/effects/SoftGradientBackground";
import Hero from "./components/sections/Hero";
import LogoStrip from "./components/sections/LogoStrip";
import HowItWorks from "./components/sections/HowItWorks";
import Screenshots from "./components/sections/Screenshots";
import Features from "./components/sections/Features";
import Testimonial from "./components/sections/Testimonial";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/layout/Footer";
import CheckoutModal from "./components/modals/CheckoutModal";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      {/* <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900"> */}
      <SoftGradientBackground>
        <Navbar />
        <main>
          {/* <Hero /> */}
          {/* <LogoStrip />
          <HowItWorks />
          <Screenshots />
          <Features />
          <Testimonial />
          <Pricing onUpgrade={(plan) => window.openCheckout?.(plan)} />
          <FAQ />
          <FinalCTA onStart={() => window.openCheckout?.("pro")} /> */}
        </main>
        {/* <Footer /> */}
        {/* <CheckoutModal /> */}
      </SoftGradientBackground>
      {/* </div> */}
    </ThemeProvider>
  );
}
