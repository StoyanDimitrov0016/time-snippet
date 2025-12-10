import { getNow } from "./lib/time-utils";
import { useSecondTimer } from "./hooks/use-second-timer";
import LanguageSelector from "./components/custom/language-selector";
import CodeBlock from "./components/custom/code-block";
import { renderNow } from "./lib/render-utils";
import { useLanguage } from "./hooks/useLanguage";

export default function App() {
  const date = useSecondTimer();
  const { language } = useLanguage();

  const now = getNow(date);
  const code = renderNow(language, now);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <LanguageSelector />
        <CodeBlock code={code} language="ts" />
      </div>
    </main>
  );
}
