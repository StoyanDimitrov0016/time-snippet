import { getNow } from "./lib/time-utils";
import { useSecondTimer } from "./hooks/use-second-timer";
import LanguageSelector from "./components/custom/language-selector";
import CodeBlock from "./components/custom/code-block";
import { renderNow } from "./lib/render-utils";
import { useLanguage } from "./hooks/useLanguage";
import { Badge } from "@/components/ui/badge";

export default function App() {
  const date = useSecondTimer();
  const { language } = useLanguage();

  const now = getNow(date);
  const code = renderNow(language, now);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-10">
        <header className="text-center space-y-2 pt-6">
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Time Snippet
            </h1>

            <Badge variant="secondary" className="gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Live
            </Badge>
          </div>

          <p className="text-gray-600">
            Current time rendered in your favorite programming language
          </p>
        </header>

        <main className="flex-1 space-y-6 pt-10">
          <section className="flex justify-center" aria-label="Language selection">
            <LanguageSelector />
          </section>

          <section aria-label="Code output">
            <CodeBlock code={code} language="typescript" />
          </section>
        </main>

        <footer className="pt-10 text-center text-sm text-gray-500">
          <p className="mb-3">Personal project by Stoyan Dimitrov</p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a
              href="https://github.com/StoyanDimitrov0016"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-gray-900"
            >
              GitHub
            </a>
            <span aria-hidden className="text-gray-300">
              •
            </span>
            <a
              href="https://www.linkedin.com/in/stoyan-dimitrov-25bb71259/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-gray-900"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
