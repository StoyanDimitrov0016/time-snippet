import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import LanguageProvider from "./contexts/language-context.tsx";
import App from "./app.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
