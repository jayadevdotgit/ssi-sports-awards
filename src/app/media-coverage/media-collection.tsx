"use client";

import Image from "next/image";
import { useState } from "react";
import { mediaArticles } from "@/lib/site-content";

const filters = ["All", "National", "Regional", "English", "Hindi"];

export function MediaCollection() {
  const [filter, setFilter] = useState("All");
  const visible = mediaArticles.filter((article) => filter === "All" || article.tags.includes(filter));
  return <>
    <div className="gallery-filters" role="group" aria-label="Filter media coverage">
      {filters.map((item) => <button aria-pressed={filter === item} key={item} onClick={() => setFilter(item)}>{item}</button>)}
    </div>
    <p className="gallery-count" aria-live="polite">{visible.length} {visible.length === 1 ? "article" : "articles"} about the SSI Sports Awards</p>
    {visible.length === 0
      ? <p className="media-empty">No articles in this category yet.</p>
      : <div className="media-grid">
        {visible.map((article) => <article className="media-card" key={article.title}>
          <div className="media-card-image"><Image src={article.image} alt="" width={800} height={600} sizes="(max-width: 700px) 88vw, (max-width: 1100px) 43vw, 380px" /></div>
          <span className="source">{article.source}</span>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <time>{article.date}</time>
        </article>)}
      </div>}
  </>;
}
