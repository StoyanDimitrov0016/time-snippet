import type { Language } from "@/utils/get-project";

export const IMPORTS: Record<Language, string> = {
  TypeScript: `import type { Time } from "./types";`,
  Python: `from models import Time`,
  Java: ``,
  "C#": ``,
  "C++": `#include "time.hpp"`,
  Go: `package main`,
} as const;
