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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8 pt-12">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Time as Code
          </h1>
          <p className="text-gray-600">
            Current time rendered in your favorite programming language
          </p>
        </div>

        {/* Language Selector */}
        <div className="flex justify-center">
          <LanguageSelector />
        </div>

        {/* Code Block */}
        <CodeBlock code={code} language="typescript" />

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 pt-8">
          <p>
            Updates every second • {now.day.name}, {now.month.name} {now.year}
          </p>
        </div>
      </div>
    </main>
  );
}
