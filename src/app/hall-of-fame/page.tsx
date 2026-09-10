import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../inner";
import { Closing } from "../site-shell";
import { hallOfFame } from "@/lib/site-content";
import { personImages } from "@/lib/imported-images";

export const metadata: Metadata = {
  title: "Hall of Fame | SSI Sports Awards",
  description: "Honoring the legends, champions, and trailblazers who have forged an everlasting legacy in the world of sport.",
};

export default function HallOfFamePage() {
  return <main id="main" className="inner-page">
    <PageHero
      eyebrow="LEGENDS. CHAMPIONS. TRAILBLAZERS."
      title={<>Hall of<br /><span>fame.</span></>}
      lead="Honoring the legends, champions, and trailblazers who have forged an everlasting legacy in the world of sport."
    />
    <section className="page-section">
      <div className="hof-grid">
        {hallOfFame.map((item, index) => {
          const image = personImages[item.name];
          return <article className="hof-item" key={item.name}>
            <span className="rank" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            {image && <div className="hof-photo"><Image src={image} alt={item.name} width={72} height={72} sizes="72px" /></div>}
            <div><h3>{item.name}</h3><span className="role">{item.role}</span></div>
          </article>;
        })}
      </div>
    </section>
    <Closing />
  </main>;
}
