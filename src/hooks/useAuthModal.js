// src/hooks/useAuthModal.js
import { useState } from "react";

export default function useAuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("signup");

  const openLogin = () => {
    console.log("Opening login modal");
    setMode("login");
    setIsOpen(true);
  };

  const openSignup = () => {
    setMode("signup");
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    mode,
    openLogin,
    openSignup,
    closeModal,
  };
}
