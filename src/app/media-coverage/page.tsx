import type { Metadata } from "next";
import { PageHero, SectionHeading } from "../inner";
import { Arrow } from "../icons";
import { Closing } from "../site-shell";
import { mediaVideos } from "@/lib/site-content";
import { MediaCollection } from "./media-collection";
import { VideoEmbed } from "./video-embed";

export const metadata: Metadata = {
  title: "Media Coverage | SSI Sports Awards",
  description: "Featured articles and videos about the SSI Sports Awards and the Sports Science Conclave.",
};

export default function MediaCoveragePage() {
  return <main id="main" className="inner-page">
    <PageHero
      eyebrow="IN THE NEWS"
      title={<>Media <span>coverage.</span></>}
      lead="Featured articles and videos about the SSI Sports Awards and the Sports Science Conclave. The inaugural conclave and awards ceremony garnered significant media attention from leading publications."
    />

    <section className="page-section">
      <SectionHeading eyebrow="FEATURED ARTICLES" title="Stories that mattered." />
      <MediaCollection />
    </section>

    <section className="page-section alt">
      <SectionHeading eyebrow="VIDEO COVERAGE" title="Watch the moments." intro="Highlights, interviews and sessions from the SSI Sports Awards 2023 and the Sports Science Conclave." />
      <div className="media-grid media-video-grid">
        {mediaVideos.map((video) => <article className="media-card media-video-card" key={video.title}>
          <VideoEmbed id={video.id} title={video.title} />
          <span className="source">Video</span>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <time>{video.date}</time>
          <a className="text-link" href={video.youtube} target="_blank" rel="noreferrer">Watch on YouTube <Arrow /></a>
        </article>)}
      </div>
    </section>

    <Closing />
  </main>;
}
