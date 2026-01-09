import { DEFINITIONS } from "@/constants/definitions.constants";
import { getSnippetSource } from "./snippet.utils";
import { FILENAMES } from "@/constants/filenames.constants";

export type Language = "TypeScript" | "Python" | "Java" | "C#" | "C++" | "Go";

export type Time = {
  year: number;
  month: { num: number; name: string };
  week: number;
  day: { num: number; name: string };
  hour: number;
  minute: number;
  second: number;
};

export type FileSpecification = { filename: string; source: string };

export type Project = {
  definition: FileSpecification;
  snippet: FileSpecification;
};

export type ProjectFilenames = {
  definition: string;
  snippet: string;
};

export type ProjectSources = {
  definition: string;
  snippet: string;
  filenames: ProjectFilenames;
};

export function getProject(time: Time, language: Language): ProjectSources {
  return {
    definition: DEFINITIONS[language],
    filenames: FILENAMES[language],
    snippet: getSnippetSource(time, language),
  };
}
