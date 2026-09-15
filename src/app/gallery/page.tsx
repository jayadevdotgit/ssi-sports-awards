import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GalleryCollection } from "../components";
import { Arrow } from "../icons";
import { Closing } from "../site-shell";
import { eventMoments } from "@/lib/imported-images";

export const metadata: Metadata = {
  title: "The 2025 Gallery | SSI Sports Awards",
  description: "Original photographs from the SSI Sports Awards ceremony and conclave. Explore the moments and download the original event images.",
};

export default function GalleryPage() {
  return <main id="main" className="gallery-page">
    <section className="gallery-intro"><Link className="text-link back-link" href="/"><Arrow direction="left" /> Back to the celebration</Link><p className="eyebrow">SSI SPORTS AWARDS · 2025</p><h1>Great moments.<br /><span>Lasting memories.</span></h1><div className="gallery-intro-bottom"><p>The people, the pride, and the moments that brought us together.<br />Explore the original photographs from the celebration.</p><a className="button button-outline" href="/downloads/ssi-original-images.zip" download>Download original images <Arrow direction="down" /></a></div></section>
    <section className="gallery-collection" aria-label="Event photographs"><GalleryCollection /></section>
    <section className="gallery-moments" aria-label="More moments from the celebration">
      <div className="section-head"><p className="eyebrow">FROM THE ARCHIVE</p><h2>More moments.</h2><p>Scenes from the ceremony, the conclave and the people who made the celebration.</p></div>
      <div className="gallery-mosaic">
        {eventMoments.map((moment) => <figure className="gallery-moment" key={moment.src}>
          <Image src={moment.src} alt={moment.alt} width={640} height={480} sizes="(max-width: 700px) 88vw, 44vw" />
        </figure>)}
      </div>
    </section>
    <Closing />
  </main>;
}
