import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { LANGUAGES } from "@/constants";
import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">Language</label>
      <ButtonGroup>
        {LANGUAGES.map((lang) => (
          <Button
            key={lang}
            type="button"
            variant="outline"
            size="sm"
            className={lang === language ? "bg-primary text-primary-foreground border-primary" : ""}
            onClick={() => setLanguage(lang)}
          >
            {lang}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
