import type { Language, Time } from "@/utils/project.utils";
import { IMPORTS } from "@/constants/imports.constants";

export function getSnippetSource(time: Time, language: Language): string {
  const importSection = IMPORTS[language];
  const bodySection = makeSnippetBody(time, language);
  return `${importSection}\n\n${bodySection}`;
}

function num(value: number): string {
  if (!Number.isFinite(value)) throw new Error(`Invalid number: ${value}`);
  return String(value);
}

function str(value: string): string {
  return JSON.stringify(value);
}

function makeSnippetBody(time: Time, language: Language): string {
  switch (language) {
    case "TypeScript":
      return `const time: Time = {
  year: ${num(time.year)},
  month: { num: ${num(time.month.num)}, name: ${str(time.month.name)} },
  week: ${num(time.week)},
  day: { num: ${num(time.day.num)}, name: ${str(time.day.name)} },
  hour: ${num(time.hour)},
  minute: ${num(time.minute)},
  second: ${num(time.second)},
};`;

    case "Python":
      return `time: Time = {
    "year": ${num(time.year)},
    "month": {
        "num": ${num(time.month.num)},
        "name": ${str(time.month.name)},
    },
    "week": ${num(time.week)},
    "day": {
        "num": ${num(time.day.num)},
        "name": ${str(time.day.name)},
    },
    "hour": ${num(time.hour)},
    "minute": ${num(time.minute)},
    "second": ${num(time.second)},
}`;

    case "Java":
      return `var time = new Time(
  ${num(time.year)},
  new Time.Month(${num(time.month.num)}, ${str(time.month.name)}),
  ${num(time.week)},
  new Time.Day(${num(time.day.num)}, ${str(time.day.name)}),
  ${num(time.hour)},
  ${num(time.minute)},
  ${num(time.second)}
);`;

    case "C#":
      return `var time = new Time(
  ${num(time.year)},
  new Month(${num(time.month.num)}, ${str(time.month.name)}),
  ${num(time.week)},
  new Day(${num(time.day.num)}, ${str(time.day.name)}),
  ${num(time.hour)},
  ${num(time.minute)},
  ${num(time.second)}
);`;

    case "C++":
      return `Time time{
  .year = ${num(time.year)},
  .month = Month{ .num = ${num(time.month.num)}, .name = ${str(
        time.month.name
      )} },
  .week = ${num(time.week)},
  .day = Day{ .num = ${num(time.day.num)}, .name = ${str(time.day.name)} },
  .hour = ${num(time.hour)},
  .minute = ${num(time.minute)},
  .second = ${num(time.second)},
};`;

    case "Go":
      return `var time = Time{
  Year: ${num(time.year)},
  Month: Month{
    Num: ${num(time.month.num)},
    Name: ${str(time.month.name)},
  },
  Week: ${num(time.week)},
  Day: Day{
    Num: ${num(time.day.num)},
    Name: ${str(time.day.name)},
  },
  Hour: ${num(time.hour)},
  Minute: ${num(time.minute)},
  Second: ${num(time.second)},
}`;
  }
}
