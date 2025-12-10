import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { LANGUAGES } from "@/constants";
import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex flex-col gap-3">
      <ButtonGroup className="inline-flex overflow-hidden rounded-lg border bg-muted p-1">
        {LANGUAGES.map((lang) => {
          const active = lang === language;
          return (
            <Button
              key={lang}
              type="button"
              variant="ghost"
              size="sm"
              className={[
                "rounded-md",
                active ? "bg-background shadow-sm" : "hover:bg-background/50",
              ].join(" ")}
              onClick={() => setLanguage(lang)}
            >
              {lang}
            </Button>
          );
        })}
      </ButtonGroup>
    </div>
  );
}
