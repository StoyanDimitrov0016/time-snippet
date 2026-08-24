import { createHighlighterCore, createJavaScriptRegexEngine } from "react-shiki/core";

export const shikiHighlighter = createHighlighterCore({
  themes: [import("@shikijs/themes/slack-dark")],
  langs: [
    import("@shikijs/langs/typescript"),
    import("@shikijs/langs/python"),
    import("@shikijs/langs/java"),
    import("@shikijs/langs/csharp"),
    import("@shikijs/langs/cpp"),
    import("@shikijs/langs/go"),
    import("@shikijs/langs/rust"),
  ],
  engine: createJavaScriptRegexEngine(),
});
