import { DEFAULT_LANGUAGE, type Language } from "@/constants";
import { createContext, useState, type PropsWithChildren } from "react";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
