/**
 * Entry point: mounts <App> inside the theme provider.
 *
 * global.css is imported FIRST on purpose. Component stylesheets are pulled
 * in by App's imports, and with equal specificity the later rule wins, so
 * component styles must load after the global ones.
 */
import "./styles/global.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
