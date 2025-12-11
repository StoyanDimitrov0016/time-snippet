# Time Snippet Roadmap

- **UTC option** is a must-have if you add time zones (simple, universal, nice for devs).
- Month/day **display language** should be **independent** from the “code language.” A Python snippet can still show `month.name: "Декември"` if the user wants. That’s a neat feature.

Below is a ready-to-paste README section you can drop under something like “Roadmap” or “Future ideas”. It’s written to be useful when you return later.

---

## Roadmap / Future ideas (optional)

This project is “done” for now, but if I revisit it later these are the next improvements.

### 1 Preferences (persisted)

Store user preferences in **one cookie** (long lifespan) as JSON:

- `theme`: `"system" | "light" | "dark"`
- `format`: `"extended" | "compact"` (extended default)
- `timeZone`: `"UTC" | IANA timezone` (default: user’s system timezone)
- `locale`: BCP-47 locale for month/day names (default: `"en"`)

Example:

```json
{ "theme": "system", "format": "extended", "timeZone": "Europe/Sofia", "locale": "en" }
```

### 2 Theme: light / dark / system

- Default to **system** (`prefers-color-scheme`)
- Allow user override (light/dark)
- Apply theme via Tailwind `dark` class on `<html>`
- Update CodeBlock syntax theme to match (dark vs light)

### 3 Output format toggle (extended ↔ compact)

Add a UI toggle:

- **Extended (default):**

  - `month: { num, name }`
  - `day: { num, name }`

- **Compact:**

  - `month: 10`
  - `day: 23`

Renderer should accept an option like `{ format: "extended" | "compact" }` and generate the correct snippet per language.

### 4 Timezone support (including UTC)

Add timezone picker:

- Quick option: **UTC**
- Otherwise: allow choosing a timezone (IANA string, e.g. `Europe/Sofia`, `America/New_York`)
- Persist selection in prefs cookie
- Update `getNow(date, timeZone)` so the shown time matches the selected zone (use `Intl.DateTimeFormat(..., { timeZone }).formatToParts()` to avoid heavy dependencies)

### 5 Month/day name language (locale)

Add locale selector (for the **names only**, independent of code language):

- Default: English (`en`)
- Allow switching e.g. `bg`, `de`, `es`, etc.
- Persist locale in prefs cookie
- Implement via `Intl.DateTimeFormat(locale, { month: "long", weekday: "long", timeZone })`

### 6 UI (small polish, still minimal)

- Settings area (popover or small panel) for:

  - Theme
  - Format (extended/compact)
  - Timezone (UTC + search)
  - Locale

- Keep main UI uncluttered; settings can be tucked away.

### Acceptance checklist

- [ ] Preferences survive refresh/new session
- [ ] “System theme” follows OS changes live
- [ ] CodeBlock theme matches app theme
- [ ] UTC matches actual UTC time
- [ ] Locale affects only month/day names, not code language
- [ ] Output stays readable on mobile (avoid long lines)
