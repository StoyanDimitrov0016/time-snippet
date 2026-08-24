import { useState, type ReactNode } from "react";

import type { Language } from "@/constants";
import { SHIKI_LANGS_MAP } from "@/constants";
import type { ProjectSources } from "@/utils/project.utils";
import { updateUrlState } from "@/utils/url-state.utils";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

import CodeBlock from "./code-block";

type View = "time_snippet" | "definition";

interface CodeEditorProps {
  language: Language;
  project: ProjectSources;
}

interface EditorTabsProps {
  view: View;
  setView: (view: View) => void;
  snippetFilename: string;
  definitionFilename: string;
}

interface EditorSurfaceProps {
  children: ReactNode;
}

interface EditorButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
}

function getViewFromUrl(): View {
  return new URLSearchParams(window.location.search).get("view") === "definition"
    ? "definition"
    : "time_snippet";
}

export default function CodeEditor({ language, project }: CodeEditorProps) {
  const [view, setViewState] = useState<View>(getViewFromUrl);
  const activeSource = view === "time_snippet" ? project.snippet : project.definition;
  const syntaxLanguage = SHIKI_LANGS_MAP[language];

  const setView = (nextView: View) => {
    setViewState(nextView);
    updateUrlState({ view: nextView === "time_snippet" ? null : nextView });
  };

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#0f111a]/95 shadow-2xl shadow-black/30 ring-1 ring-white/5">
      <div className="flex min-h-0 flex-1 flex-col md:hidden">
        <EditorTabs
          view={view}
          setView={setView}
          snippetFilename={project.filenames.snippet}
          definitionFilename={project.filenames.definition}
        />
        <EditorSurface>
          <CodeBlock code={activeSource} language={syntaxLanguage} />
        </EditorSurface>
      </div>

      <div className="hidden min-h-0 flex-1 md:block">
        <ResizablePanelGroup direction="horizontal" className="min-h-0">
          <ResizablePanel defaultSize={21} minSize={15} className="min-h-0 bg-[#0b0d13]">
            <div className="flex h-full min-h-0 flex-col">
              <div className="flex h-9 shrink-0 items-center border-b border-white/10 px-4 text-[11px] font-semibold tracking-wider text-white/60">
                EXPLORER
              </div>

              <div className="min-h-0 overflow-auto p-2">
                <FileButton
                  active={view === "time_snippet"}
                  onClick={() => setView("time_snippet")}
                  label={project.filenames.snippet}
                />
                <FileButton
                  active={view === "definition"}
                  onClick={() => setView("definition")}
                  label={project.filenames.definition}
                />
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle className="bg-white/5" />

          <ResizablePanel
            defaultSize={79}
            minSize={40}
            className="flex min-h-0 flex-col bg-[#0f111a]"
          >
            <EditorTabs
              view={view}
              setView={setView}
              snippetFilename={project.filenames.snippet}
              definitionFilename={project.filenames.definition}
            />
            <EditorSurface>
              <CodeBlock code={activeSource} language={syntaxLanguage} />
            </EditorSurface>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <div className="flex shrink-0 items-center justify-between gap-6 overflow-x-auto border-t border-white/10 bg-[#0b0d13] px-3 py-2 text-[11px] whitespace-nowrap text-white/60 sm:px-4">
        <div className="flex items-center gap-3">
          <span>Ln 1, Col 1</span>
          <span className="text-white/30">|</span>
          <span>Spaces: 2</span>
        </div>
        <div className="flex items-center gap-3">
          <span>{language}</span>
          <span className="text-white/30">|</span>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
}

function EditorTabs({ view, setView, snippetFilename, definitionFilename }: EditorTabsProps) {
  return (
    <div className="flex h-9 shrink-0 overflow-x-auto border-b border-white/10 bg-[#0b0d13]">
      <TabButton
        active={view === "time_snippet"}
        onClick={() => setView("time_snippet")}
        label={snippetFilename}
      />
      <TabButton
        active={view === "definition"}
        onClick={() => setView("definition")}
        label={definitionFilename}
      />
    </div>
  );
}

function EditorSurface({ children }: EditorSurfaceProps) {
  return (
    <div className="min-h-0 flex-1 overflow-auto bg-[#0f111a] p-3 sm:p-4">
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function FileButton({ active, onClick, label }: EditorButtonProps) {
  return (
    <button
      onClick={onClick}
      className={[
        "group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition",
        active ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white",
      ].join(" ")}
    >
      <span
        className={[
          "h-2 w-2 rounded-full",
          active ? "bg-blue-400" : "bg-white/20 group-hover:bg-white/30",
        ].join(" ")}
      />
      <span className="truncate">{label}</span>
    </button>
  );
}

function TabButton({ active, onClick, label }: EditorButtonProps) {
  return (
    <button
      onClick={onClick}
      className={[
        "h-full border-r border-white/10 px-3 text-xs transition md:px-4 md:text-sm",
        active ? "bg-[#0f111a] text-white" : "bg-[#0b0d13] text-white/60 hover:text-white",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
