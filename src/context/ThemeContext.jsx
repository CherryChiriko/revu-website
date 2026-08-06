import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { themes } from "../config/themes";

const ThemeContext = createContext(null);

export function ThemeProvider({ children, defaultTheme = "light" }) {
  const [currentThemeId, setCurrentThemeId] = useState(defaultTheme);

  const activeTheme = useMemo(
    () => themes[currentThemeId] || themes.light,
    [currentThemeId],
  );

  const toggleTheme = useCallback(() => {
    setCurrentThemeId((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const setTheme = useCallback((id) => {
    if (themes[id]) {
      setCurrentThemeId(id);
    }
  }, []);

  const value = useMemo(
    () => ({
      // Spread all properties from active theme (e.g. navBg, ring, surface, etc.)
      ...activeTheme,

      // Retain activeTheme under 'theme' key for backwards compatibility
      theme: activeTheme,

      // Context metadata & controls
      currentThemeId,
      toggleTheme,
      setTheme,
      isDark: activeTheme.isDark,
    }),
    [activeTheme, currentThemeId, toggleTheme, setTheme],
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
