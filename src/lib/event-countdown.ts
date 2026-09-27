// Explicit IST offset keeps the deadline identical for visitors worldwide.
export const AWARDS_START = Date.parse("2026-12-05T16:00:00+05:30");

export function getEventCountdown(now: number) {
  const total = Math.max(0, Math.ceil((AWARDS_START - now) / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor(total / 3600) % 24,
    minutes: Math.floor(total / 60) % 60,
    seconds: total % 60,
    complete: total === 0,
  };
}
