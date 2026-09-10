import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SectionHeading } from "../inner";
import { Closing } from "../site-shell";
import { NominationForm } from "../components";
import { awardCategories, nominationSubCategories } from "@/lib/site-content";
import { awardTrophies } from "@/lib/imported-images";
import { emptyDraft } from "@/lib/nomination";

export const metadata: Metadata = {
  title: "Nomination Form | SSI Sports Awards",
  description: "Official registration for the SSI Sports Awards 2026 — recognising excellence in Indian sports.",
};

export default function NominationFormPage() {
  return <main id="main" className="inner-page">
    <PageHero
      eyebrow="OFFICIAL REGISTRATION"
      title={<>SSI Sports Awards<br /><span>2026.</span></>}
      lead="Recognising excellence in Indian sports. December 5, 2026 · Kalinga Stadium, Bhubaneswar."
    />

    <section className="page-section">
      <SectionHeading eyebrow="AWARD CATEGORY" title="Choose a category." intro="Select one award category. Click a category for its description and eligibility." />
      <div>
        {awardCategories.map((category) => <details className="award-detail" key={category.name}>
          <summary>
            {awardTrophies[category.name] && <span className="award-thumb"><Image src={awardTrophies[category.name]} alt="" width={56} height={56} /></span>}
            <span className="award-heading"><span className="name">{category.name}</span><span className="tag">{category.tagline}</span></span>
          </summary>
          <div className="award-body">
            {category.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {category.eligibility && <p className="eligibility"><strong>Eligibility:</strong> {category.eligibility}</p>}
          </div>
        </details>)}
      </div>
      <p className="media-filter-label">SELECT SUB-CATEGORY</p>
      <div className="pill-list">{nominationSubCategories.map((item) => <span className="pill" key={item}>{item}</span>)}</div>
    </section>

    <section className="page-section alt">
      <SectionHeading eyebrow="NOMINEE & NOMINATOR DETAILS" title="Register a nomination." />
      <div className="nomination-panel">
        <NominationForm initialDraft={{ ...emptyDraft }} />
      </div>
    </section>

    <Closing />
  </main>;
}
