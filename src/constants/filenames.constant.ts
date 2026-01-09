import type { Language, ProjectFilenames } from "@/utils/get-project";

const TYPESCRIPT_FILENAMES: ProjectFilenames = {
  snippet: "time-snippet.ts",
  definition: "types.ts",
} as const;

const PYTHON_FILENAMES: ProjectFilenames = {
  snippet: "time_snippet.py",
  definition: "models.py",
} as const;

const JAVA_FILENAMES: ProjectFilenames = {
  snippet: "TimeSnippet.java",
  definition: "Time.java",
} as const;

const C_SHARP_FILENAMES: ProjectFilenames = {
  snippet: "TimeSnippet.cs",
  definition: "Time.cs",
} as const;

const C_PLUS_PLUS_FILENAMES: ProjectFilenames = {
  snippet: "time_snippet.cpp",
  definition: "time.hpp",
} as const;

const GO_LANG_FILENAMES: ProjectFilenames = {
  snippet: "main.go",
  definition: "time.go",
} as const;

export const FILENAMES: Record<Language, ProjectFilenames> = {
  TypeScript: TYPESCRIPT_FILENAMES,
  Python: PYTHON_FILENAMES,
  Java: JAVA_FILENAMES,
  "C#": C_SHARP_FILENAMES,
  "C++": C_PLUS_PLUS_FILENAMES,
  Go: GO_LANG_FILENAMES,
} as const;
