"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { SectionHeading } from "./inner";
import { sponsors } from "@/lib/sponsors";

const SPEED = 30;

export function SponsorMarquee() {
  const scroller = useRef<HTMLDivElement>(null);
  const drag = useRef<{ startX: number; startScroll: number } | null>(null);
  const paused = useRef(false);
  const [dragging, setDragging] = useState(false);
  const loop = [...sponsors, ...sponsors];

  useEffect(() => {
    const node = scroller.current;
    if (!node) return;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const delta = now - last;
      last = now;
      if (!paused.current && !drag.current && !document.hidden) {
        const half = node.scrollWidth / 2;
        if (half > 0) {
          node.scrollLeft += (delta / 1000) * SPEED;
          if (node.scrollLeft >= half) node.scrollLeft -= half;
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  function normalize(node: HTMLDivElement, value: number) {
    const half = node.scrollWidth / 2;
    if (half <= 0) return value;
    return ((value % half) + half) % half;
  }

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    const node = scroller.current;
    if (!node) return;
    drag.current = { startX: event.clientX, startScroll: node.scrollLeft };
    setDragging(true);
    node.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const node = scroller.current;
    if (!node || !drag.current) return;
    node.scrollLeft = normalize(node, drag.current.startScroll - (event.clientX - drag.current.startX));
  }

  function onPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    const node = scroller.current;
    drag.current = null;
    setDragging(false);
    if (node?.hasPointerCapture(event.pointerId)) node.releasePointerCapture(event.pointerId);
  }

  return <section className="page-section alt sponsor-strip" aria-labelledby="sponsors-title">
    <SectionHeading center eyebrow="WITH GRATITUDE" title={<span id="sponsors-title">Our sponsors.</span>} intro="The organisations standing behind the celebration of Indian sport." />
    <div
      className={`sponsor-marquee${dragging ? " is-dragging" : ""}`}
      ref={scroller}
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onDragStart={(event) => event.preventDefault()}
    >
      <div className="sponsor-track">
        {loop.map((sponsor, index) => <figure className="sponsor-marquee-card" key={`${sponsor.src}-${index}`} aria-hidden={index >= sponsors.length}>
          <Image src={sponsor.src} alt={sponsor.alt} width={180} height={180} sizes="150px" />
        </figure>)}
      </div>
    </div>
  </section>;
}
