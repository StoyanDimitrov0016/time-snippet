import type { Language as PrismLanguage } from "prism-react-renderer";

export const LANGUAGES = ["TypeScript", "Python", "Java", "C#", "C++", "Go"] as const;
export type Language = (typeof LANGUAGES)[number];

export type Now = {
  year: number;
  month: { num: number; name: string };
  week: number; // ISO week
  day: { num: number; name: string }; // num = day-of-month, name = weekday
  hour: number;
  minute: number;
  second: number;
};

export const DEFAULT_LANGUAGE: Language = "TypeScript";

export const PRISM_LANGS_MAP = {
  TypeScript: "ts",
  Python: "python",
  Java: "java",
  "C#": "csharp",
  "C++": "cpp",
  Go: "go",
} as const satisfies Record<Language, PrismLanguage>;
