import type { Language } from "@/constants";

export type FileNames = {
  snippet: string;
  definition: string;
};

export function getFileNames(lang: Language): FileNames {
  switch (lang) {
    case "TypeScript":
      return { snippet: "time-snippet.ts", definition: "types.ts" };
    case "Python":
      return { snippet: "time_snippet.py", definition: "models.py" };
    case "Java":
      return { snippet: "TimeSnippet.java", definition: "Time.java" };
    case "C#":
      return { snippet: "TimeSnippet.cs", definition: "Time.cs" };
    case "C++":
      return { snippet: "time_snippet.cpp", definition: "time.hpp" };
    case "Go":
      return { snippet: "main.go", definition: "time.go" };
    default: {
      return { snippet: "time-snippet.ts", definition: "types.ts" };
    }
  }
}
