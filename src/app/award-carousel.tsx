"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { awardShowcase } from "@/lib/site-content";

const CARD_GAP = 22;
const AUTOPLAY_DELAY = 4000;
const COPIES = 3;
const LENGTH = awardShowcase.length;

const slides = Array.from({ length: COPIES }, (_, copy) => awardShowcase.map((award) => ({ award, copy }))).flat();

export function AwardCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const rawIndex = useRef(LENGTH);
  const settle = useRef<number | undefined>(undefined);
  const [active, setActive] = useState(0);
  const [stopped, setStopped] = useState(false);
  const dragRef = useRef<{ startX: number; startScroll: number } | null>(null);
  const [dragging, setDragging] = useState(false);

  const step = useCallback((node: HTMLElement) => {
    const card = node.querySelector<HTMLElement>("[data-award-card]");
    return card ? card.offsetWidth + CARD_GAP : 0;
  }, []);

  const scrollToIndex = useCallback((target: number, smooth: boolean) => {
    const node = track.current;
    if (!node) return;
    const distance = step(node);
    if (!distance) return;
    node.scrollTo({ left: target * distance, behavior: smooth ? "smooth" : "auto" });
  }, [step]);

  function move(direction: number) {
    scrollToIndex(rawIndex.current + direction, true);
  }

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    const node = track.current;
    if (!node) return;
    dragRef.current = { startX: event.clientX, startScroll: node.scrollLeft };
    setDragging(true);
    node.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const node = track.current;
    if (!node || !dragRef.current) return;
    node.scrollLeft = dragRef.current.startScroll - (event.clientX - dragRef.current.startX);
  }

  function onPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    const node = track.current;
    dragRef.current = null;
    setDragging(false);
    if (node?.hasPointerCapture(event.pointerId)) node.releasePointerCapture(event.pointerId);
  }

  useEffect(() => {
    const node = track.current;
    if (!node) return;
    rawIndex.current = LENGTH;
    scrollToIndex(LENGTH, false);

    const onScroll = () => {
      const distance = step(node);
      if (!distance) return;
      const current = Math.round(node.scrollLeft / distance);
      rawIndex.current = current;
      setActive(((current % LENGTH) + LENGTH) % LENGTH);
      window.clearTimeout(settle.current);
      settle.current = window.setTimeout(() => {
        const settled = Math.round(node.scrollLeft / distance);
        if (settled >= LENGTH && settled < 2 * LENGTH) { rawIndex.current = settled; return; }
        const recentered = (((settled % LENGTH) + LENGTH) % LENGTH) + LENGTH;
        node.scrollTo({ left: recentered * distance, behavior: "auto" });
        rawIndex.current = recentered;
      }, 140);
    };
    node.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      node.removeEventListener("scroll", onScroll);
      window.clearTimeout(settle.current);
    };
  }, [scrollToIndex, step]);

  useEffect(() => {
    if (stopped || dragging) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      scrollToIndex(rawIndex.current + 1, true);
    }, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [stopped, dragging, scrollToIndex]);

  return <div className="award-carousel">
    <div
      className={`award-carousel-track${dragging ? " is-dragging" : ""}`}
      ref={track}
      tabIndex={0}
      aria-label="SSI Sports Awards categories"
      aria-roledescription="carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onDragStart={(event) => event.preventDefault()}
    >
      {slides.map(({ award, copy }) => <article className="award-showcase-card award-carousel-card" data-award-card key={`${award.name}-${copy}`} aria-hidden={copy !== 1}>
        <div className="award-showcase-image"><Image src={award.image} alt={`${award.name} trophy`} width={220} height={220} sizes="(max-width: 700px) 44vw, 260px" /></div>
        <p className="eyebrow">{award.tag}</p>
        <h3>{award.name}</h3>
        <p>{award.description}</p>
      </article>)}
    </div>
    <div className="award-carousel-controls">
      <button type="button" aria-label="Previous award" onClick={() => move(-1)}>←</button>
      <div className="award-slide-count" aria-live={stopped ? "polite" : "off"}><strong>{String(active + 1).padStart(2, "0")}</strong><span>/ {String(LENGTH).padStart(2, "0")}</span></div>
      <button type="button" aria-label={stopped ? "Play award carousel" : "Pause award carousel"} aria-pressed={stopped} onClick={() => setStopped((current) => !current)}>{stopped ? "▷" : "Ⅱ"}</button>
      <button type="button" aria-label="Next award" onClick={() => move(1)}>→</button>
    </div>
  </div>;
}
