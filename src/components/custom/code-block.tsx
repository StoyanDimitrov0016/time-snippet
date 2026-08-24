import ShikiHighlighter from "react-shiki/core";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { Check, Copy } from "lucide-react";
import { shikiHighlighter } from "@/lib/shiki";

interface CodeBlockProps {
  code: string;
  language: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlighter, setHighlighter] = useState<Awaited<typeof shikiHighlighter> | null>(null);

  useEffect(() => {
    let mounted = true;

    void shikiHighlighter.then((loadedHighlighter) => {
      if (mounted) setHighlighter(loadedHighlighter);
    });

    return () => {
      mounted = false;
    };
  }, []);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 900);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="group relative min-w-0">
      {highlighter ? (
        <ShikiHighlighter
          highlighter={highlighter}
          language={language}
          theme="slack-dark"
          showLanguage={false}
          className="text-sm leading-relaxed sm:text-[0.95rem] [&_code]:!bg-transparent [&_pre]:min-h-32 [&_pre]:max-w-full [&_pre]:!bg-transparent [&_pre]:pr-16"
        >
          {code}
        </ShikiHighlighter>
      ) : (
        <pre className="min-h-32 p-6 font-mono text-sm leading-relaxed text-white/70">
          Loading syntax highlighting…
        </pre>
      )}

      <div className="absolute top-3 right-3 z-2">
        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="secondary"
                size="icon-sm"
                className="border border-white/10 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                onClick={onCopy}
                aria-label="Copy code to clipboard"
              >
                {copied ? <Check /> : <Copy />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{copied ? "Copied code" : "Copy code"}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
