import { LanguageContext } from "@/contexts/language-context";
import { use } from "react";

export function useLanguage() {
  const context = use(LanguageContext);
  if (!context) {
    throw new Error("useLanguage hook should be wrapped in LanguageContextProvider");
  }
  return context;
}
