export function updateUrlState(updates: Record<string, string | null>): void {
  const url = new URL(window.location.href);

  for (const [key, value] of Object.entries(updates)) {
    if (value === null) url.searchParams.delete(key);
    else url.searchParams.set(key, value);
  }

  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
}
