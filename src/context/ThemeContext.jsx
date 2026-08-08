// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState } from "react";
import { themes } from "../config/themes";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const currentTheme = isDark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider
      value={{
        ...currentTheme, // Spreads current theme tokens directly (e.g. t.toggleTrack)
        theme: currentTheme, // Retains t.theme reference for canvas/backgrounds
        isDark,
        setIsDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
