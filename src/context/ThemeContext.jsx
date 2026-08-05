// src/context/ThemeContext.jsx
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import themes from "../../../revu-app/src/assets/themes";

const ThemeContext = createContext(null);

export function ThemeProvider({ children, defaultTheme = "light" }) {
  const [currentThemeId, setCurrentThemeId] = useState(defaultTheme);

  const theme = useMemo(
    () => themes.find((t) => t.id === currentThemeId) || themes[0],
    [currentThemeId],
  );

  const toggleTheme = useCallback(() => {
    setCurrentThemeId((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const setTheme = useCallback((id) => {
    const found = themes.find((t) => t.id === id);
    if (found) setCurrentThemeId(id);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      currentThemeId,
      toggleTheme,
      setTheme,
      isDark: theme.isDark,
    }),
    [theme, currentThemeId, toggleTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
