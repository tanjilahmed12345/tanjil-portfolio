// src/ThemeContext.js
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("theme") || "dark"; }
    catch { return "dark"; }
  });

  useEffect(() => {
    let saved = "dark";
    try { saved = localStorage.getItem("theme") || "dark"; } catch {}
    setTheme(saved);
    document.body.className = saved;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    try { localStorage.setItem("theme", newTheme); } catch {}
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
