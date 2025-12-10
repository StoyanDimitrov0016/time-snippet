import type { Language, Now } from "@/constants";

type Renderer = (now: Now) => string;

const renderers: Record<Language, Renderer> = {
  TypeScript: renderTypeScript,
  Python: renderPython,
  Java: renderJava,
  "C#": renderCSharp,
  "C++": renderCpp,
  Go: renderGo,
} as const satisfies Record<Language, Renderer>;

export function renderNow(lang: Language, now: Now): string {
  return renderers[lang](now);
}

function n(x: number): string {
  if (!Number.isFinite(x)) throw new Error(`Invalid number: ${x}`);
  return String(x);
}

function dq(s: string): string {
  // safe double-quoted string literal
  return JSON.stringify(s);
}

function renderTypeScript(now: Now): string {
  return `const now = {
  year: ${n(now.year)},
  month: { num: ${n(now.month.num)}, name: ${dq(now.month.name)} },
  week: ${n(now.week)},
  day: { num: ${n(now.day.num)}, name: ${dq(now.day.name)} },
  hour: ${n(now.hour)},
  minute: ${n(now.minute)},
  second: ${n(now.second)},
} as const;`;
}

function renderPython(now: Now): string {
  return `now = {
  "year": ${n(now.year)},
  "month": {"num": ${n(now.month.num)}, "name": ${dq(now.month.name)}},
  "week": ${n(now.week)},
  "day": {"num": ${n(now.day.num)}, "name": ${dq(now.day.name)}},
  "hour": ${n(now.hour)},
  "minute": ${n(now.minute)},
  "second": ${n(now.second)},
}`;
}

function renderJava(now: Now): string {
  return `import java.util.Map;

var now = Map.of(
  "year", ${n(now.year)},
  "month", Map.of("num", ${n(now.month.num)}, "name", ${dq(now.month.name)}),
  "week", ${n(now.week)},
  "day", Map.of("num", ${n(now.day.num)}, "name", ${dq(now.day.name)}),
  "hour", ${n(now.hour)},
  "minute", ${n(now.minute)},
  "second", ${n(now.second)}
);`;
}

function renderCSharp(now: Now): string {
  return `var now = new
{
    year = ${n(now.year)},
    month = new { num = ${n(now.month.num)}, name = ${dq(now.month.name)} },
    week = ${n(now.week)},
    day = new { num = ${n(now.day.num)}, name = ${dq(now.day.name)} },
    hour = ${n(now.hour)},
    minute = ${n(now.minute)},
    second = ${n(now.second)},
};`;
}

function renderCpp(now: Now): string {
  return `#include <nlohmann/json.hpp>
using nlohmann::json;

json now = {
  {"year", ${n(now.year)}},
  {"month", {{"num", ${n(now.month.num)}}, {"name", ${dq(now.month.name)}}}},
  {"week", ${n(now.week)}},
  {"day", {{"num", ${n(now.day.num)}}, {"name", ${dq(now.day.name)}}}},
  {"hour", ${n(now.hour)}},
  {"minute", ${n(now.minute)}},
  {"second", ${n(now.second)}}
};`;
}

function renderGo(now: Now): string {
  return `now := map[string]any{
  "year": ${n(now.year)},
  "month": map[string]any{"num": ${n(now.month.num)}, "name": ${dq(now.month.name)}},
  "week": ${n(now.week)},
  "day": map[string]any{"num": ${n(now.day.num)}, "name": ${dq(now.day.name)}},
  "hour": ${n(now.hour)},
  "minute": ${n(now.minute)},
  "second": ${n(now.second)},
}`;
}
