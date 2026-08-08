// src/components/ui/AuthModal.jsx
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../../context/ThemeContext";

export default function AuthModal({ isOpen, onClose, initialMode = "signup" }) {
  const t = useTheme();
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Sync mode whenever initialMode changes (e.g. clicking Log In after Get Started)
  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${mode} submitted:`, { email, password });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none animate-fadeIn">
      {/* Modal Container */}
      <div
        className={`relative w-full max-w-md rounded-3xl border p-8 shadow-2xl backdrop-blur-xl transition-all ${t.cardBg} ${t.cardBorder} ${t.textPrimary}`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${t.textSecondary} ${t.textHover}`}
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold tracking-tight">
            {mode === "signup" ? "Create your account" : "Welcome back"}
          </h3>
          <p className={`text-xs mt-1 ${t.textSecondary}`}>
            {mode === "signup"
              ? "Sign up to import decks and track your retention."
              : "Log in to access your saved decks and progress."}
          </p>
        </div>

        {/* Social Auth Buttons */}
        <div className="flex items-center justify-center mb-6">
          <button
            type="button"
            className={`space-x-2 py-2.5 px-4 rounded-xl border text-xs font-medium transition-all ${t.surface} ${t.surfaceBorder} ${t.textSecondary} ${t.textHover}`}
          >
            <FontAwesomeIcon icon={faGoogle} className="w-3.5 h-3.5" />
            <span>Google</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center mb-6">
          <div className={`w-full border-t ${t.surfaceBorder}`} />
          <span
            className={`absolute px-3 text-[10px] uppercase font-bold tracking-wider ${t.cardBg} ${t.textMuted}`}
          >
            or with email
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className={`block text-xs font-semibold mb-1.5 ${t.textSecondary}`}
            >
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={`w-full px-4 py-3 rounded-xl border text-xs transition-colors focus:outline-none ${t.inputBg} ${t.inputBorder} ${t.textPrimary}`}
            />
          </div>

          <div>
            <label
              className={`block text-xs font-semibold mb-1.5 ${t.textSecondary}`}
            >
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={`w-full px-4 py-3 rounded-xl border text-xs transition-colors focus:outline-none ${t.inputBg} ${t.inputBorder} ${t.textPrimary}`}
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3.5 rounded-xl text-xs font-semibold transition-all ${t.ctaButton} shadow-lg mt-2`}
          >
            {mode === "signup" ? "Get Started Free" : "Log In"}
          </button>
        </form>

        {/* Toggle Mode Footer */}
        <div className="text-center mt-6 text-xs">
          <span className={t.textSecondary}>
            {mode === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
          </span>
          <button
            type="button"
            onClick={() => setMode(mode === "signup" ? "login" : "signup")}
            className="font-bold text-indigo-400 hover:underline ml-1"
          >
            {mode === "signup" ? "Log in" : "Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}
