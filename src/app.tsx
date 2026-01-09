import Footer from "./layout/footer";
import Header from "./layout/header";
import LanguageSelector from "./components/custom/language-selector";
import CodeBlock from "./components/custom/code-block";
import { useLanguage } from "./hooks/use-language";
import { useSecondTimer } from "./hooks/use-second-timer";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import { Activity, useState } from "react";
import { getTime } from "./utils/time.utils";
import { getProject } from "./utils/project.utils";

type View = "time_snippet" | "definition";

export default function App() {
  const date = useSecondTimer();
  const { language } = useLanguage();

  const time = getTime(date);
  const project = getProject(time, language);

  const [view, setView] = useState<View>("time_snippet");

  const activeFilename =
    view === "time_snippet"
      ? project.filenames.snippet
      : project.filenames.definition;

  return (
    <div className="min-h-dvh bg-linear-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="mx-auto flex min-h-dvh max-w-4xl flex-col p-4">
        <Header />

        <main className="flex flex-1 flex-col gap-6 pt-6">
          <section
            className="flex justify-center"
            aria-label="Language selection"
          >
            <LanguageSelector />
          </section>

          <section aria-label="Code output" className="flex-1 min-h-[420px]">
            <div className="h-full overflow-hidden rounded-xl border border-white/10 bg-[#0f111a] shadow-2xl">
              {/* Window / Title bar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#0b0d13] px-4 py-2">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>

                <div className="truncate px-3 text-xs text-white/60">
                  {activeFilename}
                </div>

                <div className="w-16" />
              </div>

              {/* Main area */}
              {/* Mobile (no sidebar) */}
              <div className="md:hidden h-[calc(100%-76px)]">
                <div className="h-full bg-[#0f111a]">
                  {/* Tabs */}
                  <div className="flex border-b border-white/10 bg-[#0b0d13]">
                    <TabButton
                      active={view === "time_snippet"}
                      onClick={() => setView("time_snippet")}
                      label={project.filenames.snippet}
                    />
                    <TabButton
                      active={view === "definition"}
                      onClick={() => setView("definition")}
                      label={project.filenames.definition}
                    />
                    <div className="flex-1" />
                  </div>

                  {/* Editor surface */}
                  <div className="relative h-full overflow-auto p-3">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div className="relative">
                      {view === "time_snippet" ? (
                        <div className="rounded-xl border border-white/10 bg-black/40 shadow-lg">
                          <CodeBlock
                            code={project.snippet}
                            language="typescript"
                          />
                        </div>
                      ) : (
                        <div className="rounded-xl border border-white/10 bg-black/40 shadow-lg">
                          <CodeBlock
                            code={project.definition}
                            language={language}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop (with sidebar) */}
              <div className="hidden md:block h-[calc(100%-76px)]">
                <ResizablePanelGroup direction="horizontal" className="h-full">
                  {/* Explorer */}
                  <ResizablePanel
                    defaultSize={28}
                    minSize={18}
                    className="bg-[#0b0d13]"
                  >
                    <div className="h-full">
                      <div className="border-b border-white/10 px-4 py-2 text-[11px] font-semibold tracking-wider text-white/60">
                        EXPLORER
                      </div>

                      <div className="p-2">
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

                  {/* Editor */}
                  <ResizablePanel
                    defaultSize={72}
                    minSize={30}
                    className="bg-[#0f111a]"
                  >
                    {/* Tabs */}
                    <div className="flex border-b border-white/10 bg-[#0b0d13]">
                      <TabButton
                        active={view === "time_snippet"}
                        onClick={() => setView("time_snippet")}
                        label={project.filenames.snippet}
                      />
                      <TabButton
                        active={view === "definition"}
                        onClick={() => setView("definition")}
                        label={project.filenames.definition}
                      />
                      <div className="flex-1" />
                    </div>

                    {/* Editor surface */}
                    <div className="relative h-full overflow-auto p-3 md:p-4">
                      <div
                        className="pointer-events-none absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}
                      />
                      <div className="relative">
                        <Activity
                          mode={view === "time_snippet" ? "visible" : "hidden"}
                        >
                          <div className="rounded-xl border border-white/10 bg-black/40 shadow-lg">
                            <CodeBlock
                              code={project.snippet}
                              language="typescript"
                            />
                          </div>
                        </Activity>

                        <Activity
                          mode={view === "definition" ? "visible" : "hidden"}
                        >
                          <div className="rounded-xl border border-white/10 bg-black/40 shadow-lg">
                            <CodeBlock
                              code={project.definition}
                              language={language}
                            />
                          </div>
                        </Activity>
                      </div>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between border-t border-white/10 bg-[#0b0d13] px-4 py-2 text-[11px] text-white/60">
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
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

function FileButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "group flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm",
        "transition",
        active
          ? "bg-white/10 text-white"
          : "text-white/70 hover:bg-white/5 hover:text-white",
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

function TabButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "border-r border-white/10 px-3 md:px-4 py-2 text-xs md:text-sm",
        "transition",
        active
          ? "bg-[#0f111a] text-white"
          : "bg-[#0b0d13] text-white/60 hover:text-white",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
