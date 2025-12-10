import type { Now } from "@/constants";

function getISOWeek(date: Date) {
  const dateUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = dateUTC.getUTCDay() || 7;

  dateUTC.setUTCDate(dateUTC.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(dateUTC.getUTCFullYear(), 0, 1));

  return Math.ceil(((dateUTC.getTime() - yearStart.getTime()) / 86_400_000 + 1) / 7);
}

export function getNow(date: Date): Now {
  return {
    year: date.getFullYear(),
    month: {
      num: date.getMonth() + 1,
      name: new Intl.DateTimeFormat(undefined, { month: "long" }).format(date),
    },
    week: getISOWeek(date),
    day: {
      num: date.getDate(),
      name: new Intl.DateTimeFormat(undefined, { weekday: "long" }).format(date),
    },
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  } as const;
}
