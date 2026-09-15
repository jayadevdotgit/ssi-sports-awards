"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { eventMoments } from "@/lib/imported-images";

export const celebrationPhotos = [
  { src: "/images/hero-ceremony.jpg", alt: "An athlete and guest celebrating at the SSI Sports Awards" },
  { src: "/images/award-group.jpg", alt: "Awardees and guests together at the SSI Sports Awards conclave" },
  { src: "/images/speaker.jpg", alt: "A speaker addressing the SSI Sports Awards conclave" },
  ...eventMoments,
];

function subscribeMotion(callback: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", callback);
  return () => preference.removeEventListener("change", callback);
}

function subscribePlayback(callback: () => void) {
  window.addEventListener("ssi-carousel-playback", callback);
  return () => window.removeEventListener("ssi-carousel-playback", callback);
}

function playbackAllowed() {
  try { return sessionStorage.getItem("ssi-carousel-autoplay") === "enabled"; } catch { return false; }
}

export function EventCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [playRequested, setPlayRequested] = useState(false);
  const reduced = useSyncExternalStore(subscribeMotion, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => true);
  const motionAllowed = useSyncExternalStore(subscribePlayback, playbackAllowed, () => false);
  const dragStart = useRef<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const loaded = useRef(new Set<number>());
  const stopped = paused || (reduced && !motionAllowed && !playRequested);
  useEffect(() => {
    if (stopped) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => loaded.current.has((current + 1) % celebrationPhotos.length) ? (current + 1) % celebrationPhotos.length : current);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [stopped]);

  function move(direction: number) {
    setPaused(true);
    setActive((current) => (current + direction + celebrationPhotos.length) % celebrationPhotos.length);
  }

  return <section className={`event-carousel${motionAllowed || playRequested ? " carousel-motion-enabled" : ""}${dragging ? " is-dragging" : ""}`} aria-label="SSI event photographs" aria-roledescription="carousel"
    onKeyDown={(event) => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1); } }}>
    <div className="event-carousel-frame" onPointerDown={(event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      dragStart.current = event.clientX;
      setDragging(true);
      setPaused(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    }} onPointerMove={(event) => {
      if (dragStart.current === null) return;
      setDragOffset(event.clientX - dragStart.current);
    }} onPointerUp={(event) => {
      if (dragStart.current !== null) {
        const width = event.currentTarget.clientWidth || 1;
        const offset = event.clientX - dragStart.current;
        if (Math.abs(offset) > width * 0.15) move(offset < 0 ? 1 : -1);
      }
      dragStart.current = null;
      setDragging(false);
      setDragOffset(0);
      if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    }} onPointerCancel={() => { dragStart.current = null; setDragging(false); setDragOffset(0); }} onDragStart={(event) => event.preventDefault()}>
      {celebrationPhotos.map((photo, index) => {
        const offset = (index - active + celebrationPhotos.length) % celebrationPhotos.length;
        const position = offset === celebrationPhotos.length - 1 ? -1 : offset;
        const shift = dragOffset ? `translateX(calc(${position * 100}% + ${dragOffset}px))` : `translateX(${position * 100}%)`;
        return <div key={photo.src} className={`event-slide${active === index ? " is-active" : ""}`} style={{ transform: shift, transition: position > 1 ? "none" : undefined }} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${celebrationPhotos.length}`} aria-hidden={active !== index}>
        <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 100vw, 60vw" loading={position === 0 || position === 1 ? "eager" : "lazy"} onLoad={() => loaded.current.add(index)} />
      </div>;
      })}
      <span className="event-photo-tag">SSI SPORTS AWARDS · THE CELEBRATION</span>
    </div>
    <div className="event-carousel-controls">
      <div className="event-slide-count" aria-live={stopped ? "polite" : "off"}><strong>{String(active + 1).padStart(2, "0")}</strong><span>/ {String(celebrationPhotos.length).padStart(2, "0")}</span></div>
      <span className="event-slide-progress" aria-hidden="true"><span style={{ width: `${(active + 1) / celebrationPhotos.length * 100}%` }} /></span>
      <button type="button" aria-label="Previous event photo" onClick={() => move(-1)}>←</button>
      <button type="button" aria-label={stopped ? "Play photo carousel" : "Pause photo carousel"} aria-pressed={stopped} onClick={() => {
        if (stopped) {
          setPlayRequested(true);
          try { sessionStorage.setItem("ssi-carousel-autoplay", "enabled"); } catch { /* Storage may be disabled. */ }
          window.dispatchEvent(new Event("ssi-carousel-playback"));
          setPaused(false);
        } else setPaused(true);
      }}>{stopped ? "▷" : "Ⅱ"}</button>
      <button type="button" aria-label="Next event photo" onClick={() => move(1)}>→</button>
    </div>
  </section>;
}
