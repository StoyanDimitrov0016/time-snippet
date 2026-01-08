import { getDefinitionCode } from "@/utils/get-definition-code";
import { Highlight, themes } from "prism-react-renderer";

export default function DefinitionView() {
  const code = getDefinitionCode("Go");
  return (
    <Highlight code={code} language={"ts"} theme={themes.vsDark}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`relative rounded-xl p-6 overflow-auto shadow-lg ${className}`}
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
  );
}
