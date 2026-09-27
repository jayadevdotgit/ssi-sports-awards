"use client";

import { useEffect, useState } from "react";
import { getEventCountdown } from "@/lib/event-countdown";

export function EventCountdown() {
  const [remaining, setRemaining] = useState<ReturnType<typeof getEventCountdown> | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    function tick() {
      const next = getEventCountdown(Date.now());
      setRemaining(next);
      if (!next.complete) timer = setTimeout(tick, 1000);
    }
    timer = setTimeout(tick, 0);
    return () => clearTimeout(timer);
  }, []);

  return <div className="event-countdown">
    <p className="event-countdown-label">{remaining?.complete ? "Countdown complete" : "The celebration begins in"}<span>5 Dec 2026 · 4:00 PM IST</span></p>
    <div className="event-countdown-units" role="timer" aria-live="off" aria-label="Time until SSI Sports National Awards 2026">
      {(["days", "hours", "minutes", "seconds"] as const).map((unit) => <div className="event-countdown-unit" key={unit}>
        <strong>{remaining ? String(remaining[unit]).padStart(2, "0") : "—"}</strong><span>{unit}</span>
      </div>)}
    </div>
  </div>;
}
