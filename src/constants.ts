export const LANGUAGES = ["TypeScript", "Python", "Rust", "Go", "Java", "C#", "C++"] as const;
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

export const SHIKI_LANGS_MAP = {
  TypeScript: "typescript",
  Python: "python",
  Java: "java",
  "C#": "csharp",
  "C++": "cpp",
  Go: "go",
  Rust: "rust",
} as const satisfies Record<Language, string>;
