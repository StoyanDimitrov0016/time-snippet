import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { LANGUAGES } from "@/constants";
import { useLanguage } from "@/hooks/use-language";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="w-full overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <ButtonGroup className="mx-auto flex-nowrap gap-1 rounded-2xl border border-white/10 bg-white/5 p-1.5 shadow-lg shadow-black/10 backdrop-blur">
        {LANGUAGES.map((lang) => (
          <Button
            key={lang}
            type="button"
            variant="ghost"
            size="sm"
            className={cn(
              "rounded-xl px-3 text-white/60 hover:bg-white/10 hover:text-white",
              lang === language ? "bg-white/15 text-white shadow-sm" : "",
            )}
            onClick={() => setLanguage(lang)}
          >
            {lang}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
