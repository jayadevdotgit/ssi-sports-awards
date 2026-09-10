import type { Metadata } from "next";
import { PageHero, SectionHeading, PersonCard } from "../inner";
import { Closing } from "../site-shell";
import { distinguishedGuests, awardeeVoices } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Testimonials | SSI Sports Awards",
  description: "Messages and reflections from the distinguished guests and awardees of the SSI Sports Awards 2025.",
};

export default function TestimonialsPage() {
  return <main id="main" className="inner-page">
    <PageHero
      eyebrow="SSI SPORTS AWARDS 2025"
      title={<>Our distinguished<br /><span>guests.</span></>}
      lead="Celebrating excellence in sports with the leaders, legends and awardees who joined us for the SSI Sports Awards 2025."
    />

    <section className="page-section">
      <SectionHeading eyebrow="GUEST MESSAGES" title="Voices of the evening." intro="Messages from our Chief Guest, Guest of Honour, Special Guests and Founder." />
      <div className="person-grid">
        {distinguishedGuests.map((guest) => <PersonCard key={guest.name} name={guest.name} role={guest.role} bio={guest.detail} />)}
      </div>
    </section>

    <section className="page-section alt">
      <SectionHeading eyebrow="VIEWS FROM AWARDEES" title="In their own words." intro="Reflections from the athletes recognised on the night." />
      <div className="person-grid">
        {awardeeVoices.map((voice) => <PersonCard key={voice.name} name={voice.name} role={voice.role} />)}
      </div>
    </section>

    <Closing />
  </main>;
}
