"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { createTrophyScene } from "./trophy-scene";

export function TrophyHero() {
  const host = useRef<HTMLDivElement>(null);
  const scene = useRef<ReturnType<typeof createTrophyScene> | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">("loading");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let active = true;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => { setPaused(preference.matches); scene.current?.setPaused(preference.matches); };
    preference.addEventListener("change", updateMotion);
    import("./trophy-scene").then(({ createTrophyScene }) => {
      if (!active || !host.current) return;
      try {
        scene.current = createTrophyScene(host.current, () => { if (active) setStatus("fallback"); });
        updateMotion();
        scene.current.ready.then(() => { if (active) setStatus("ready"); }).catch(() => {
          if (active) { scene.current?.dispose(); scene.current = null; setStatus("fallback"); }
        });
      } catch { setStatus("fallback"); }
    }).catch(() => { if (active) setStatus("fallback"); });
    return () => { active = false; preference.removeEventListener("change", updateMotion); scene.current?.dispose(); scene.current = null; };
  }, []);

  return <div className={`trophy-experience trophy-${status}`}>
    {status === "fallback" && <div className="trophy-fallback-art"><Image src="/images/trophy-hero-fallback.png" alt="A sculptural gold trophy on a dark stone pedestal" fill sizes="(max-width: 700px) 100vw, 60vw" /></div>}
    {status === "loading" && <div className="trophy-loading-indicator" role="status"><span />CRAFTING EXCELLENCE</div>}
    <div ref={host} className="trophy-canvas" tabIndex={status === "ready" ? 0 : -1} role="img" aria-label="Interactive three-dimensional gold trophy. Move your pointer or use left and right arrow keys to rotate." />
    {status === "ready" && <div className="trophy-controls"><span><i aria-hidden="true" />EXPLORE IN 3D</span><button aria-pressed={paused} onClick={() => { const next = !paused; setPaused(next); scene.current?.setPaused(next); }}>{paused ? "Play rotation" : "Pause rotation"}<span aria-hidden="true">{paused ? " ▷" : " Ⅱ"}</span></button></div>}
  </div>;
}
