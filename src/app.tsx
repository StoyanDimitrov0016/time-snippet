import Footer from "./layout/footer";
import Header from "./layout/header";
import LanguageSelector from "./components/custom/language-selector";
import CodeEditor from "./components/custom/code-editor";
import { useLanguage } from "./hooks/use-language";
import { useSecondTimer } from "./hooks/use-second-timer";
import { getTime } from "./utils/time.utils";
import { getProject } from "./utils/project.utils";

export default function App() {
  const date = useSecondTimer();
  const { language } = useLanguage();

  const time = getTime(date);
  const project = getProject(time, language);

  return (
    <div className="relative h-dvh overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(168,85,247,0.16),transparent_30%)]" />
      <div className="relative mx-auto flex h-full max-w-6xl flex-col px-3 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Header />

        <main className="flex min-h-0 flex-1 flex-col gap-4 pt-4 sm:gap-5 sm:pt-6">
          <section className="flex shrink-0 justify-center" aria-label="Language selection">
            <LanguageSelector />
          </section>

          <section aria-label="Code output" className="min-h-0 flex-1">
            <CodeEditor language={language} project={project} />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
