import type { Language, Now } from "@/constants";

export function renderNow(lang: Language, now: Now): string {
  switch (lang) {
    case "TypeScript":
      return renderTypeScript(now);
    case "Python":
      return renderPython(now);
    case "Java":
      return renderJava(now);
    case "C#":
      return renderCSharp(now);
    case "C++":
      return renderCpp(now);
    case "Go":
      return renderGo(now);
    default:
      return assertNever(lang);
  }
}

function renderTypeScript(now: Now) {
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

function renderPython(now: Now) {
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

function renderJava(now: Now) {
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

function renderCSharp(now: Now) {
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

function renderCpp(now: Now) {
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

function renderGo(now: Now) {
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

/** Double-quoted string literal with safe escaping (works fine for TS/Java/C#/Go/C++/Python). */
function dq(s: string): string {
  return JSON.stringify(s);
}

/** Ensures we only output finite numbers (helps catch bugs early). */
function n(x: number): string {
  if (!Number.isFinite(x)) throw new Error(`Invalid number: ${x}`);
  return String(x);
}

function assertNever(x: never): never {
  throw new Error(`Unhandled language: ${x}`);
}
