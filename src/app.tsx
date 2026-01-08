import Footer from "./layout/footer";
import Header from "./layout/header";
import LanguageSelector from "./components/custom/language-selector";
import CodeBlock from "./components/custom/code-block";
import { useLanguage } from "./hooks/use-language";
import { useSecondTimer } from "./hooks/use-second-timer";
import { renderNow } from "./lib/render-utils";
import { getNow } from "./lib/time-utils";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import { Activity, useState } from "react";
import DefinitionView from "./components/custom/definition-view";

type View = "time_snippet" | "definition";

export default function App() {
  const date = useSecondTimer();
  const { language } = useLanguage();

  const now = getNow(date);
  const code = renderNow(language, now);

  const [view, setView] = useState<View>("time_snippet");

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-10">
        <Header />

        <main className="flex-1 space-y-6 pt-10">
          <section
            className="flex justify-center"
            aria-label="Language selection"
          >
            <LanguageSelector />
          </section>

          <section aria-label="Code output" className="h-[70vh] min-h-[420px]">
            <ResizablePanelGroup
              direction="horizontal"
              className="rounded-lg border bg-white/70"
            >
              <ResizablePanel defaultSize={30} minSize={10}>
                <div className="h-full overflow-auto p-4 flex flex-col ">
                  <button onClick={() => setView("time_snippet")}>
                    time_snippet.tsx
                  </button>
                  <button onClick={() => setView("definition")}>
                    definition.tsx
                  </button>
                </div>
              </ResizablePanel>

              <ResizableHandle withHandle />

              <ResizablePanel defaultSize={70} minSize={20}>
                <div className="h-full overflow-auto p-4">
                  <Activity
                    mode={view === "time_snippet" ? "visible" : "hidden"}
                  >
                    <CodeBlock code={code} language="typescript" />
                  </Activity>

                  <Activity mode={view === "definition" ? "visible" : "hidden"}>
                    <DefinitionView />
                  </Activity>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
