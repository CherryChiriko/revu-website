// src/App.jsx
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Background from "./context/Background";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Screenshots from "./components/sections/Screenshots";
import Features from "./components/sections/Features";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/layout/Footer";
import CheckoutModal from "./components/modals/CheckoutModal";
import ScrollToTop from "./components/ui/ScrollToTop";
// hero ok, navbar - not sticky, features - copywrite+themes, finalcta ok, footer ok
export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      {/* <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900"> */}
      <Background>
        <Navbar />
        <main>
          <Hero />
          {/* <HowItWorks /> */}
          {/* <Screenshots /> */}
          <Features />
          <Pricing onUpgrade={(plan) => window.openCheckout?.(plan)} />
          {/* <FAQ /> */}
          <FinalCTA onStart={() => window.openCheckout?.("pro")} />
        </main>
        <Footer />
        <ScrollToTop />
        {/* <CheckoutModal /> */}
      </Background>
      {/* </div> */}
    </ThemeProvider>
  );
}
