# Time Snippet ⏱️

Render the current time as a code snippet in different programming languages — updated every second.

**Live demo:** https://time-snippet.vercel.app/

---

## What it does

- Shows a `now` object/map with:
  - `year`, `month` (`num`, `name`), `week`, `day` (`num`, `name`), `hour`, `minute`, `second`
- Renders the same structure in multiple languages (TypeScript, Python, Java, C#, C++, Go)
- Updates every second
- Copy button inside the snippet for quick sharing

---

## Roadmap

Planned ideas: see [`roadmap.md`](./roadmap.md)

---

## Tech stack

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui (UI primitives)
- prism-react-renderer (syntax highlighting)
- lucide-react (icons)
- Deployed on Vercel

---

## Getting started (local)

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```
