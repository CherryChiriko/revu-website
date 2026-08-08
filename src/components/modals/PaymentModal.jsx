import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faLock,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext";
// import { useUpgradeToPro } from "../../hooks/useUpgradeToPro"; // adjust path to your existing hook

export default function PaymentModal({
  isOpen,
  onClose,
  selectedPlan = {
    id: "pro",
    name: "Pro",
    priceMonthly: "$4.99",
    priceAnnual: "$39.99",
  },
}) {
  const { theme: t } = useTheme();
  const [billingCycle, setBillingCycle] = useState("annual"); // "monthly" or "annual"
  const [isRedirecting, setIsRedirecting] = useState(false);

  // This should call your existing useUpgradeToPro logic, which appends
  // client_reference_id to the right Stripe Payment Link (monthly/annual/lifetime)
  // and returns the URL to send the user to.
  // const { getCheckoutUrl } = useUpgradeToPro();
  const { getCheckoutUrl } = "";
  if (!isOpen) return null;

  const displayPrice =
    billingCycle === "annual"
      ? selectedPlan.priceAnnual
      : selectedPlan.priceMonthly;

  const handleContinue = async () => {
    setIsRedirecting(true);
    try {
      const url = await getCheckoutUrl({
        planId: selectedPlan.id,
        billingCycle,
      });
      // Stripe Checkout handles card entry, Apple Pay, Google Pay, and
      // region-appropriate methods (iDEAL, Alipay, etc.) automatically.
      window.location.href = url;
    } catch (err) {
      setIsRedirecting(false);
      // TODO: surface a toast/error state here
      console.error("Failed to start checkout:", err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none animate-fadeIn">
      <div
        className={`relative w-full max-w-md rounded-3xl border p-6 sm:p-8 shadow-2xl backdrop-blur-xl transition-all ${
          t.isDark
            ? "bg-[#0b0a10]/95 border-slate-800 text-white"
            : "bg-white/95 border-slate-200 text-slate-900"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${t.textSecondary} ${t.textHover}`}
          aria-label="Close payment modal"
        >
          <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span>Checkout</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight">
            Upgrade to Revu {selectedPlan.name}
          </h3>
          <p className={`text-xs mt-1 ${t.textSecondary}`}>
            Unlimited imports, deeper character practice, and richer analytics.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        {selectedPlan.id !== "lifetime" && (
          <div
            className={`p-1.5 rounded-2xl border ${t.surfaceBorder} ${t.surface} flex items-center mb-6 text-xs`}
          >
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`flex-1 py-2 rounded-xl font-semibold transition-all ${
                billingCycle === "annual"
                  ? "bg-indigo-600 text-white shadow-md"
                  : `${t.textSecondary} ${t.textHover}`
              }`}
            >
              Annual (Save 33%)
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`flex-1 py-2 rounded-xl font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-indigo-600 text-white shadow-md"
                  : `${t.textSecondary} ${t.textHover}`
              }`}
            >
              Monthly
            </button>
          </div>
        )}

        {/* Plan Summary Box */}
        <div
          className={`p-4 rounded-2xl border ${t.surfaceBorder} ${t.surface} flex items-center justify-between mb-6`}
        >
          <div>
            <h4 className="text-sm font-bold">Revu {selectedPlan.name}</h4>
            <p className={`text-xs ${t.textMuted}`}>
              {selectedPlan.id === "lifetime"
                ? "One-time payment"
                : `Billed ${billingCycle}`}
            </p>
          </div>
          <div className="text-right">
            <span className="text-xl font-black text-indigo-400">
              {displayPrice}
            </span>
            {selectedPlan.id !== "lifetime" && (
              <span className={`text-xs ${t.textMuted}`}>
                {" "}
                / {billingCycle === "annual" ? "yr" : "mo"}
              </span>
            )}
          </div>
        </div>

        {/* Continue to Stripe Checkout */}
        <button
          type="button"
          onClick={handleContinue}
          disabled={isRedirecting}
          className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all ${t.ctaButton} shadow-lg flex items-center justify-center space-x-2`}
        >
          {isRedirecting ? (
            <span>Redirecting to secure checkout...</span>
          ) : (
            <>
              <span>Continue to Secure Checkout</span>
              <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
            </>
          )}
        </button>

        {/* Security / trust note */}
        <div
          className={`flex items-center justify-center space-x-2 text-[11px] ${t.textMuted} pt-4`}
        >
          <FontAwesomeIcon icon={faLock} className="w-3 h-3 text-emerald-400" />
          <span>Payment handled securely by Stripe. Cancel anytime.</span>
        </div>
      </div>
    </div>
  );
}
