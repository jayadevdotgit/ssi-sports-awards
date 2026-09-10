import type { Metadata } from "next";
import { PageHero, SectionHeading } from "../inner";
import { Arrow } from "../icons";
import { Closing } from "../site-shell";

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
      <SectionHeading eyebrow="PARTNERSHIP" title="Premium partner." intro="Partner with the SSI Sports Awards and help celebrate the people who move Indian sport forward." />
      <div className="entry-card">
        <p className="eyebrow">PREMIUM PARTNER</p>
        <h3>Become a sponsor</h3>
        <p>Reach out to the SSI team to explore presenting, category and partner opportunities across the awards ceremony and the Sports Science Conclave.</p>
        <a className="text-link" href="mailto:info@ssisportsawards.com">Get in touch <Arrow /></a>
      </div>
    </section>

    <Closing />
  </main>;
}
