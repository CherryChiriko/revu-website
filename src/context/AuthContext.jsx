// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from "react";
import AuthModal from "../components/modals/AuthModal";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("signup");

  const openLogin = () => {
    setMode("login");
    setIsOpen(true);
  };

  const openSignup = () => {
    setMode("signup");
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <AuthContext.Provider
      value={{
        isOpen,
        mode,
        openLogin,
        openSignup,
        closeModal,
      }}
    >
      {children}
      {/* Modal renders globally here so no parent needs to render it manually */}
      <AuthModal isOpen={isOpen} onClose={closeModal} initialMode={mode} />
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
