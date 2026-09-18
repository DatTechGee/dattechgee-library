import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/globals.css";

// Reveal body once React mounts (prevents FOUC, igboclass pattern)
requestAnimationFrame(() => {
  document.body.classList.add("loaded");
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);