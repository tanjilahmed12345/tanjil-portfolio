/**
 * ThemeContext
 *
 * Holds the current colour theme ("dark" or "light"), mirrors it onto
 * <body class="..."> so the CSS variables in global.css switch, and remembers
 * the choice in localStorage. Storage access is wrapped in try/catch because
 * it throws in some private-browsing modes.
 */
import { createContext, useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const DEFAULT_THEME = "dark";

const readStoredTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
};

const storeTheme = (theme) => {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage unavailable: the theme still applies for this visit.
  }
};

/** @type {React.Context<{ theme: "dark" | "light", toggleTheme: () => void }>} */
export const ThemeContext = createContext({
  theme: DEFAULT_THEME,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(readStoredTheme);

  // Keep <body> in sync with the state (also runs once on first mount).
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    storeTheme(next);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
