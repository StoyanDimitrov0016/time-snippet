import { Button } from "@/components/ui/button";

function getISOWeek(date: Date) {
  // Copy date, force to UTC to avoid DST/timezone surprises
  const dateUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

  // ISO: Monday=1 ... Sunday=7
  const day = dateUTC.getUTCDay() || 7;

  // Move to Thursday of this week (ISO week-year anchor)
  dateUTC.setUTCDate(dateUTC.getUTCDate() + 4 - day);

  // Week 1 is the week with Jan 4th
  const yearStart = new Date(Date.UTC(dateUTC.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((dateUTC.getTime() - yearStart.getTime()) / 86_400_000 + 1) / 7);

  return week;
}

export default function App() {
  const date = new Date();

  const now = {
    year: date.getFullYear(),
    mon: {
      num: date.getMonth() + 1,
      name: new Intl.DateTimeFormat(undefined, { month: "long" }).format(date),
    },
    week: getISOWeek(date), // your ISO week fn
    day: {
      num: ((date.getDay() + 6) % 7) + 1,
      name: new Intl.DateTimeFormat(undefined, { weekday: "long" }).format(date),
    },
    hour: date.getHours(),
    min: date.getMinutes(),
    sec: date.getSeconds(),
  } as const;
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <pre>
        <span>const now = </span>
        {JSON.stringify(now, null, 2)} <span>as const;</span>
      </pre>
    </div>
  );
}
