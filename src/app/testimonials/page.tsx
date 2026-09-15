import type { Metadata } from "next";
import { PageHero, SectionHeading, PersonCard } from "../inner";
import { Closing } from "../site-shell";
import { distinguishedGuests, guestMessages, awardeeVoices } from "@/lib/site-content";

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
      <SectionHeading eyebrow="OUR DISTINGUISHED GUESTS" title="The people who joined us." intro="The leaders, legends and changemakers who graced the SSI Sports Awards 2025." />
      <div className="person-grid">
        {distinguishedGuests.map((guest) => <PersonCard key={guest.name} name={guest.name} role={guest.role} bio={guest.detail} />)}
      </div>
    </section>

    <section className="page-section alt">
      <SectionHeading eyebrow="GUEST MESSAGES" title="Messages from the evening." intro="Watch the messages shared by our Chief Guest, Guest of Honour, Special Guests and Founder." />
      <div className="video-grid">
        {guestMessages.map((message) => <figure className="video-card" key={message.video}>
          <video controls preload="metadata" playsInline src={message.video} />
          <figcaption>
            <span className="eyebrow">{message.role}</span>
            <h3>{message.name}</h3>
            <p>{message.detail}</p>
            <small>{message.caption}</small>
          </figcaption>
        </figure>)}
      </div>
    </section>

    <section className="page-section">
      <SectionHeading eyebrow="VIEWS FROM AWARDEES" title="In their own words." intro="Reflections from the athletes recognised on the night." />
      <div className="video-grid video-grid-two">
        {awardeeVoices.map((voice) => <figure className="video-card" key={voice.video}>
          <video controls preload="metadata" playsInline src={voice.video} />
          <figcaption>
            <span className="eyebrow">Awardee</span>
            <h3>{voice.name}</h3>
            <p>{voice.role}</p>
          </figcaption>
        </figure>)}
      </div>
    </section>

    <Closing />
  </main>;
}
