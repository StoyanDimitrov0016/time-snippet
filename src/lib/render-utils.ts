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
  const prelude = getPrelude(lang);
  const body = renderers[lang](now);
  return prelude ? `${prelude}\n\n${body}` : body;
}

function getPrelude(lang: Language): string {
  switch (lang) {
    case "TypeScript":
      return `import type { Time } from "./types";`;
    case "Python":
      return `from models import Time`;
    case "Java":
      return ``;
    case "C#":
      return ``;
    case "C++":
      return `#include "time.hpp"`;
    case "Go":
      return `package main`;
    default: {
      return ``;
    }
  }
}

/* ----------------------- helpers ----------------------- */

function n(x: number): string {
  if (!Number.isFinite(x)) throw new Error(`Invalid number: ${x}`);
  return String(x);
}

function dq(s: string): string {
  return JSON.stringify(s);
}

/* ----------------------- renderers ----------------------- */

function renderTypeScript(now: Now): string {
  return `const now: Time = {
  year: ${n(now.year)},
  month: {
    num: ${n(now.month.num)},
    name: ${dq(now.month.name)},
  },
  week: ${n(now.week)},
  day: {
    num: ${n(now.day.num)},
    name: ${dq(now.day.name)},
  },
  hour: ${n(now.hour)},
  minute: ${n(now.minute)},
  second: ${n(now.second)},
};`;
}

function renderPython(now: Now): string {
  return `now: Time = {
    "year": ${n(now.year)},
    "month": {
        "num": ${n(now.month.num)},
        "name": ${dq(now.month.name)},
    },
    "week": ${n(now.week)},
    "day": {
        "num": ${n(now.day.num)},
        "name": ${dq(now.day.name)},
    },
    "hour": ${n(now.hour)},
    "minute": ${n(now.minute)},
    "second": ${n(now.second)},
}`;
}

function renderJava(now: Now): string {
  return `var now = new Time(
  ${n(now.year)},
  new Time.Month(${n(now.month.num)}, ${dq(now.month.name)}),
  ${n(now.week)},
  new Time.Day(${n(now.day.num)}, ${dq(now.day.name)}),
  ${n(now.hour)},
  ${n(now.minute)},
  ${n(now.second)}
);`;
}

function renderCSharp(now: Now): string {
  return `var now = new Time(
  ${n(now.year)},
  new Month(${n(now.month.num)}, ${dq(now.month.name)}),
  ${n(now.week)},
  new Day(${n(now.day.num)}, ${dq(now.day.name)}),
  ${n(now.hour)},
  ${n(now.minute)},
  ${n(now.second)}
);`;
}

function renderCpp(now: Now): string {
  return `Time now{
  .year = ${n(now.year)},
  .month = Month{ .num = ${n(now.month.num)}, .name = ${dq(now.month.name)} },
  .week = ${n(now.week)},
  .day = Day{ .num = ${n(now.day.num)}, .name = ${dq(now.day.name)} },
  .hour = ${n(now.hour)},
  .minute = ${n(now.minute)},
  .second = ${n(now.second)},
};`;
}

function renderGo(now: Now): string {
  return `var now = Time{
  Year: ${n(now.year)},
  Month: Month{
    Num: ${n(now.month.num)},
    Name: ${dq(now.month.name)},
  },
  Week: ${n(now.week)},
  Day: Day{
    Num: ${n(now.day.num)},
    Name: ${dq(now.day.name)},
  },
  Hour: ${n(now.hour)},
  Minute: ${n(now.minute)},
  Second: ${n(now.second)},
}`;
}
