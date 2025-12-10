import { Highlight, themes, type Language as PrismLanguage } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
  language: PrismLanguage;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
      <div className="relative">
        <Highlight code={code} language={language as any} theme={themes.vsDark}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`rounded-xl p-6 overflow-auto shadow-lg ${className}`}
              style={{
                ...style,
                backgroundColor: "#1e1e1e",
                fontSize: "0.95rem",
                lineHeight: "1.6",
              }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="inline-block w-8 select-none text-gray-600 text-right mr-4">
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
