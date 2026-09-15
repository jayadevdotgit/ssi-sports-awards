"use client";

import Image from "next/image";
import { useState } from "react";

export function VideoEmbed({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const [quality, setQuality] = useState("maxresdefault");

  if (playing) {
    return <div className="media-video-embed">
      <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </div>;
  }

  return <button type="button" className="media-video-embed media-video-facade" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
    <Image src={`https://i.ytimg.com/vi/${id}/${quality}.jpg`} alt="" fill sizes="(max-width: 700px) 88vw, 44vw" onError={() => setQuality("sddefault")} />
    <span className="media-video-play" aria-hidden="true" />
  </button>;
}
