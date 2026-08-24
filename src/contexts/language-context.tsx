import { DEFAULT_LANGUAGE, LANGUAGES, SHIKI_LANGS_MAP, type Language } from "@/constants";
import { updateUrlState } from "@/utils/url-state.utils";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getLanguageFromUrl(): Language {
  const slug = new URLSearchParams(window.location.search).get("language");
  return LANGUAGES.find((language) => SHIKI_LANGS_MAP[language] === slug) ?? DEFAULT_LANGUAGE;
}

function hasInvalidLanguageParam(): boolean {
  const slug = new URLSearchParams(window.location.search).get("language");
  return slug !== null && !LANGUAGES.some((language) => SHIKI_LANGS_MAP[language] === slug);
}

export default function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(getLanguageFromUrl);

  useEffect(() => {
    if (hasInvalidLanguageParam()) updateUrlState({ language: null });
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    updateUrlState({
      language: nextLanguage === DEFAULT_LANGUAGE ? null : SHIKI_LANGS_MAP[nextLanguage],
    });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
