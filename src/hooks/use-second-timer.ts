import { useEffect, useState } from "react";

export function useSecondTimer() {
  const [date, setDate] = useState(() => new Date());
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    const tick = () => {
      setDate(new Date());
      timeout = setTimeout(tick, 1000 - (Date.now() % 1000));
    };
    tick();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);
  return date;
}
