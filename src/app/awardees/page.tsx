import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../inner";
import { Arrow } from "../icons";
import { Closing } from "../site-shell";

export const metadata: Metadata = {
  title: "Awardees | SSI Sports Awards",
  description: "Explore the athletes, coaches and institutions recognised at the SSI Sports Awards across the 2024 and 2023 editions.",
};

const editions = [
  {
    year: "2024",
    href: "/awardee-2024",
    title: "SSI Sports Awards 2024",
    summary: "Champions, coaches and institutions who redefined Indian sport with passion, perseverance and performance.",
  },
  {
    year: "2023",
    href: "/awardee-2023",
    title: "SSI Sports Awards 2023",
    summary: "The edition that put sports science, grassroots development and India's finest athletes centre stage.",
  },
];

export default function AwardeesPage() {
  return <main id="main" className="inner-page">
    <PageHero
      eyebrow="THE CELEBRATION"
      title={<>Our <span>awardees.</span></>}
      lead="Every year the SSI Sports Awards honours the athletes, coaches and institutions who inspire us to dream bigger, run faster and aim higher. Explore the editions below."
    />
    <section className="page-section">
      <div className="entry-grid">
        {editions.map((edition) => <article className="entry-card" key={edition.year}>
          <p className="eyebrow">{`EDITION · ${edition.year}`}</p>
          <h3>{edition.title}</h3>
          <p>{edition.summary}</p>
          <Link className="text-link" href={edition.href}>View awardees <Arrow /></Link>
        </article>)}
      </div>
    </section>
    <Closing />
  </main>;
}
