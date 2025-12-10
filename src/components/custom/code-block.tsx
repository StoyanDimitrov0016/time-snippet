import { Highlight, themes, type Language as PrismLanguage } from "prism-react-renderer";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: PrismLanguage;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 900);
    } catch {}
  };

  return (
    <div className="relative group">
      <Highlight code={code} language={language} theme={themes.vsDark}>
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
            <div className="absolute right-3 top-3 z-2">
              <TooltipProvider delayDuration={150}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      type="button"
                      variant="secondary"
                      size="icon-sm"
                      onClick={onCopy}
                      aria-label="Copy code to clipboard"
                    >
                      {copied ? <Check /> : <Copy />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{copied ? "Copied" : "Copy"}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

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
  );
}
