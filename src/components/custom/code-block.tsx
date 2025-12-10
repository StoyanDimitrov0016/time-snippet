import { Highlight, themes, type Language as PrismLanguage } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
  language: PrismLanguage;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <Highlight code={code} language={language} theme={themes.vsDark}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`rounded-xl p-4 overflow-auto border shadow-sm ${className}`} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
