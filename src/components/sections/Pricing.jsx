import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBolt } from "@fortawesome/free-solid-svg-icons";
import { plans } from "../data/pricesData";
import { useTheme } from "../../context/ThemeContext";
import PaymentModal from "../modals/PaymentModal";

export default function Pricing({ onUpgrade }) {
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    plan: null,
  });

  const handleOpenPayment = (plan) => {
    setPaymentModal({ isOpen: true, plan });
  };
  const [isAnnual, setIsAnnual] = useState(true);
  const theme = useTheme();

  return (
    <section
      id="pricing"
      className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2
          className={`text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] ${theme.textPrimary}`}
        >
          Invest in your{" "}
          <span className={`${theme.textHighlight} block`}>
            permanent memory.
          </span>
        </h2>

        <p
          className={`mt-6 text-lg sm:text-xl leading-relaxed font-normal ${theme.textSecondary}`}
        >
          Start for free, upgrade when you need advanced writing tracing and
          analytics.
        </p>

        {/* Monthly / Annual Billing Toggle */}
        <div
          className={`mt-8 inline-flex items-center p-1.5 rounded-full border ${theme.surfaceBorder} ${theme.surface} backdrop-blur-md`}
        >
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
              !isAnnual
                ? "bg-indigo-600 text-white shadow-md"
                : `${theme.textSecondary} hover:${theme.textPrimary}`
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
              isAnnual
                ? "bg-indigo-600 text-white shadow-md"
                : `${theme.textSecondary} hover:${theme.textPrimary}`
            }`}
          >
            <span>Annual</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-500 dark:text-emerald-300 text-[10px] font-extrabold">
              Save 33%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan) => {
          const currentPrice = isAnnual ? plan.priceAnnual : plan.priceMonthly;

          return (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                plan.highlighted
                  ? "bg-slate-900/90 border-2 border-indigo-500 shadow-[0_0_50px_rgba(99,102,241,0.25)] lg:-translate-y-2"
                  : "bg-slate-950/60 border border-slate-800/80 hover:border-slate-700"
              }`}
            >
              {/* Top Highlight Gradient Accent */}
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
              )}

              <div>
                {/* Header Tag & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-bold ${theme.textPrimary}`}>
                    {plan.name}
                  </h3>
                  <span
                    className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border ${
                      plan.highlighted
                        ? "bg-indigo-500/20 border-indigo-500/40 text-indigo-500 dark:text-indigo-300"
                        : `${theme.surface} ${theme.surfaceBorder} ${theme.textSecondary}`
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <p
                  className={`text-xs ${theme.textSecondary} leading-relaxed min-h-[36px]`}
                >
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="my-6 flex items-baseline space-x-2">
                  <span
                    className={`text-5xl font-extrabold ${theme.textPrimary} tracking-tight`}
                  >
                    {currentPrice}
                  </span>
                  <span
                    className={`text-xs ${theme.textSecondary} font-medium`}
                  >
                    / {plan.id === "lifetime" ? "one-time" : plan.period}
                  </span>
                </div>

                {/* Features List */}
                <div className={`border-t ${theme.cardBorder} pt-6 mb-8`}>
                  <p
                    className={`text-xs font-bold ${theme.textPrimary} uppercase tracking-wider mb-4`}
                  >
                    What's included:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`flex items-center space-x-3 text-sm ${theme.textSecondary}`}
                      >
                        <div className="shrink-0 w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/40">
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="w-2.5 h-2.5 text-indigo-500 dark:text-indigo-300"
                          />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onUpgrade?.(plan.id)}
                className={`w-full py-4 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  plan.ctaVariant === "primary"
                    ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] text-white hover:bg-right shadow-[0_0_25px_rgba(124,108,240,0.4)] hover:scale-[1.02]"
                    : `${theme.surface} border ${theme.surfaceBorder} ${theme.textPrimary} ${theme.textHover}`
                }`}
              >
                <span>{plan.ctaText}</span>
                {plan.highlighted && (
                  <FontAwesomeIcon icon={faBolt} className="w-3.5 h-3.5 ml-1" />
                )}
              </button>
            </div>
          );
        })}
      </div>
      <PaymentModal
        isOpen={paymentModal.isOpen}
        selectedPlan={paymentModal.plan}
        onClose={() => setPaymentModal({ isOpen: false, plan: null })}
      />
    </section>
  );
}
