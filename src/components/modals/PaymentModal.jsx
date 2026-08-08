import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faLock,
  faCreditCard,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faApple, faGooglePay } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../../context/ThemeContext";

export default function PaymentModal({
  isOpen,
  onClose,
  selectedPlan = { name: "Pro Learner", price: "$9.99", period: "month" },
}) {
  const { theme: t } = useTheme();
  const [billingCycle, setBillingCycle] = useState("annual"); // "monthly" or "annual"
  const [paymentMethod, setPaymentMethod] = useState("card"); // "card", "apple", "google"

  // Form states
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment API call
    setTimeout(() => {
      setIsProcessing(false);
      onClose();
      alert("Payment successful! Welcome to REVU Pro.");
    }, 1500);
  };

  const calculatedPrice = billingCycle === "annual" ? "$7.99" : "$9.99";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none animate-fadeIn">
      {/* Modal Card */}
      <div
        className={`relative w-full max-w-lg rounded-3xl border p-6 sm:p-8 shadow-2xl backdrop-blur-xl transition-all ${
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
            Upgrade to REVU Pro
          </h3>
          <p className={`text-xs mt-1 ${t.textSecondary}`}>
            Unlock unlimited AI Kanji stroke analysis & cloud sync.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div
          className={`p-1.5 rounded-2xl border ${t.surfaceBorder} ${t.surface} flex items-center mb-6 text-xs`}
        >
          <button
            type="button"
            onClick={() => setBillingCycle("annual")}
            className={`flex-1 py-2 rounded-xl font-semibold transition-all flex items-center justify-center space-x-1.5 ${
              billingCycle === "annual"
                ? "bg-indigo-600 text-white shadow-md"
                : `${t.textSecondary} ${t.textHover}`
            }`}
          >
            <span>Annual (Save 20%)</span>
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

        {/* Plan Summary Box */}
        <div
          className={`p-4 rounded-2xl border ${t.surfaceBorder} ${t.surface} flex items-center justify-between mb-6`}
        >
          <div>
            <h4 className="text-sm font-bold">{selectedPlan.name}</h4>
            <p className={`text-xs ${t.textMuted}`}>Billed {billingCycle}</p>
          </div>
          <div className="text-right">
            <span className="text-xl font-black text-indigo-400">
              {calculatedPrice}
            </span>
            <span className={`text-xs ${t.textMuted}`}> / mo</span>
          </div>
        </div>

        {/* Express Pay Methods */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={() => setPaymentMethod("apple")}
            className={`flex items-center justify-center space-x-2 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
              paymentMethod === "apple"
                ? "border-indigo-500 ring-1 ring-indigo-500"
                : `${t.surfaceBorder} ${t.surface}`
            }`}
          >
            <FontAwesomeIcon icon={faApple} className="w-4 h-4" />
            <span>Pay</span>
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod("google")}
            className={`flex items-center justify-center space-x-2 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
              paymentMethod === "google"
                ? "border-indigo-500 ring-1 ring-indigo-500"
                : `${t.surfaceBorder} ${t.surface}`
            }`}
          >
            <FontAwesomeIcon icon={faGooglePay} className="w-5 h-5" />
            <span>Pay</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center mb-6">
          <div className={`w-full border-t ${t.surfaceBorder}`} />
          <span
            className={`absolute px-3 text-[10px] uppercase font-bold tracking-wider ${t.pageBg} ${t.textMuted}`}
          >
            or pay with card
          </span>
        </div>

        {/* Credit Card Form */}
        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label
              className={`block text-xs font-semibold mb-1.5 ${t.textSecondary}`}
            >
              Cardholder Name
            </label>
            <input
              type="text"
              required
              placeholder="Satoshi Nakamoto"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-xl border text-xs transition-colors focus:outline-none ${t.inputBg} ${t.inputBorder} ${t.textPrimary}`}
            />
          </div>

          <div>
            <label
              className={`block text-xs font-semibold mb-1.5 ${t.textSecondary}`}
            >
              Card Number
            </label>
            <div className="relative">
              <input
                type="text"
                required
                maxLength={19}
                placeholder="4532 •••• •••• 8892"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className={`w-full pl-4 pr-10 py-2.5 rounded-xl border text-xs transition-colors focus:outline-none ${t.inputBg} ${t.inputBorder} ${t.textPrimary}`}
              />
              <FontAwesomeIcon
                icon={faCreditCard}
                className={`absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${t.textMuted}`}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className={`block text-xs font-semibold mb-1.5 ${t.textSecondary}`}
              >
                Expiration
              </label>
              <input
                type="text"
                required
                placeholder="MM/YY"
                maxLength={5}
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl border text-xs transition-colors focus:outline-none ${t.inputBg} ${t.inputBorder} ${t.textPrimary}`}
              />
            </div>
            <div>
              <label
                className={`block text-xs font-semibold mb-1.5 ${t.textSecondary}`}
              >
                CVC
              </label>
              <input
                type="text"
                required
                maxLength={4}
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl border text-xs transition-colors focus:outline-none ${t.inputBg} ${t.inputBorder} ${t.textPrimary}`}
              />
            </div>
          </div>

          {/* Guarantee / Security Note */}
          <div
            className={`flex items-center space-x-2 text-[11px] ${t.textMuted} pt-2`}
          >
            <FontAwesomeIcon
              icon={faLock}
              className="w-3 h-3 text-emerald-400"
            />
            <span>256-bit encrypted secure checkout. Cancel anytime.</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isProcessing}
            className={`w-full py-3.5 rounded-xl text-xs font-semibold transition-all ${t.ctaButton} shadow-lg mt-2 flex items-center justify-center space-x-2`}
          >
            {isProcessing ? (
              <span>Processing...</span>
            ) : (
              <>
                <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5" />
                <span>Confirm & Pay {calculatedPrice}</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
