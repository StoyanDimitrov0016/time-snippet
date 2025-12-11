import Footer from "./layout/footer";
import Header from "./layout/header";
import LanguageSelector from "./components/custom/language-selector";
import CodeBlock from "./components/custom/code-block";
import { useLanguage } from "./hooks/use-language";
import { useSecondTimer } from "./hooks/use-second-timer";
import { renderNow } from "./lib/render-utils";
import { getNow } from "./lib/time-utils";

export default function App() {
  const date = useSecondTimer();
  const { language } = useLanguage();

  const now = getNow(date);
  const code = renderNow(language, now);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-10">
        <Header />

        <main className="flex-1 space-y-6 pt-10">
          <section className="flex justify-center" aria-label="Language selection">
            <LanguageSelector />
          </section>

          <section aria-label="Code output">
            <CodeBlock code={code} language="typescript" />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
