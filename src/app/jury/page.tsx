import type { Metadata } from "next";
import { PageHero, SectionHeading, PersonCard } from "../inner";
import { Closing } from "../site-shell";
import { juryMembers } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Jury | SSI Sports Awards",
  description: "Meet the distinguished jury evaluating the exceptional nominations for the SSI Sports Awards 2025.",
};

export default function JuryPage() {
  return <main id="main" className="inner-page">
    <PageHero
      eyebrow="SSI SPORTS AWARDS 2025"
      title={<>The distinguished<br /><span>jury.</span></>}
      lead="Our panel of esteemed sports experts brings decades of experience and unparalleled expertise to evaluate the exceptional nominations for this year's awards."
    />
    <section className="page-section">
      <SectionHeading eyebrow="MEET THE JURY PANEL" title="Experience you can trust." />
      <div className="person-grid aligned-person-grid">
        {juryMembers.map((member) => <PersonCard key={member.name} name={member.name} role={member.role} bio={member.bio} />)}
      </div>
    </section>
    <section className="page-section alt">
      <p className="page-note">© 2025 SSI Sports Awards. All rights reserved.</p>
    </section>
    <Closing />
  </main>;
}
