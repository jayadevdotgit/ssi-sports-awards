import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SectionHeading } from "../inner";
import { Arrow } from "../icons";
import { Closing } from "../site-shell";
import { premiumSponsor, sponsors } from "@/lib/sponsors";

export const metadata: Metadata = {
  title: "Presenting Sponsor | SSI Sports Awards",
  description: "We extend our heartfelt gratitude to the sponsors who make the SSI Sports Awards possible.",
};

export default function PresentingSponsorPage() {
  return <main id="main" className="inner-page">
    <PageHero
      eyebrow="WITH GRATITUDE"
      title={<>Our <span>sponsors.</span></>}
      lead="We extend our heartfelt gratitude to our incredible sponsors who make the SSI Sports Awards possible. Their commitment to excellence in sports and unwavering support helps us honor the achievements of athletes and teams who inspire us all."
      actions={<a className="button button-orange" href="mailto:info@ssisportsawards.com">Become a sponsor <Arrow /></a>}
    />

    <section className="page-section">
      <SectionHeading center eyebrow="PREMIUM PARTNER" title="Our premium partner." intro="A special thank you to the partner whose support anchors the SSI Sports Awards." />
      <figure className="premium-sponsor">
        <Image src={premiumSponsor.src} alt={premiumSponsor.alt} width={320} height={320} sizes="(max-width: 700px) 70vw, 320px" />
      </figure>
    </section>

    <section className="page-section alt">
      <SectionHeading center eyebrow="PARTNERS" title="Our sponsors." intro="The organisations standing behind the celebration of Indian sport." />
      <div className="sponsor-grid">
        {sponsors.map((sponsor) => <figure className="sponsor-logo-card" key={sponsor.src}>
          <Image src={sponsor.src} alt={sponsor.alt} width={180} height={180} sizes="(max-width: 700px) 42vw, 180px" />
        </figure>)}
      </div>
    </section>

    <section className="page-section">
      <div className="entry-card">
        <p className="eyebrow">PARTNERSHIP</p>
        <h3>Become a sponsor</h3>
        <p>Reach out to the SSI team to explore presenting, category and partner opportunities across the awards ceremony and the Sports Science Conclave.</p>
        <a className="text-link" href="mailto:info@ssisportsawards.com">Get in touch <Arrow /></a>
      </div>
    </section>

    <Closing />
  </main>;
}
