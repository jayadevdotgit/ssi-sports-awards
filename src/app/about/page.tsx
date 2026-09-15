import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SectionHeading, PersonCard } from "../inner";
import { ServiceIcon } from "../icons";
import { Closing } from "../site-shell";
import { founders, services, teamsWeServe, contact } from "@/lib/site-content";
import { brandLogo, eventHighlightImage, eventMoments, facilityImage } from "@/lib/imported-images";

export const metadata: Metadata = {
  title: "About | SSI Sports Awards",
  description: "Sports Science India is one of the largest multidisciplinary sports medicine practices in Eastern India and the first Sports Medicine Centre of Odisha.",
};

const stats = [
  { value: "2016", label: "Established" },
  { value: "First", label: "Sports medicine centre of Odisha" },
  { value: "7+", label: "Years serving national teams" },
  { value: "Olympic", label: "Gold medallist treated" },
];

export default function AboutPage() {
  return <main id="main" className="inner-page about-page">
    <PageHero
      eyebrow="SPORTS SCIENCE INDIA · SINCE 2016"
      title={<>Excellence in<br /><span>sports medicine.</span></>}
      lead="One of the largest multidisciplinary sports medicine practices in Eastern India — and the first Sports Medicine Centre of Odisha and Eastern India."
      actions={<ul className="about-stats">
        {stats.map((stat) => <li key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></li>)}
      </ul>}
    />

    <section className="page-section about-who">
      <SectionHeading center eyebrow="WHO WE ARE" title="The team behind the awards." />
      <div className="about-split">
        <div className="prose">
          <p>Sports Science India is one of the largest multidisciplinary sports medicine practices in Eastern India. It&rsquo;s the first Sports Medicine Centre of Odisha and Eastern India.</p>
          <p>The idea was conceived by Dr. Sarthak Patnaik and Mr. Soumya Patnaik. The brother duo has been working with various sports disciplines for the last 7 years and has earned many laurels for their National and International sports event participation.</p>
          <p>The team has been presently serving the Indian Ice Hockey team, India U-16/19 football team, Odisha Football Academy, Ranji Cricket team, SAI table tennis academy, Naval Tata hockey Academy, Tennis clubs, Weight lifting Associations of Bbsr and Puri, Wrestler association and many more local clubs of various disciplines.</p>
          <p>The Team comprises <strong className="prose-highlight">Sports Medicine specialists, Sports surgeons, Sports physiotherapists, Sports psychology and Sports nutrition specialists</strong>. Our Sports Medicine Expert Dr. Sarthak Patnaik has been in the service for the last 7 years and has treated many professional sports players both National and International representing India including Olympic Gold Medalist winner Mr. Neeraj Chopra.</p>
          <p>At Sports Science India we strive to create a unique environment of excellent facilities, courteous staff and pioneering medical procedures. With the help of cutting-edge technologies, extensive research resources and best-in-the-world treatment options, Sports Science India is the Sports Medicine destination of choice for a great number of patients.</p>
        </div>
        <figure className="about-figure premium-frame">
          <Image src={facilityImage} alt="The state-of-the-art Sports Science India sports medicine facility" width={720} height={540} sizes="(max-width: 900px) 88vw, 40vw" />
          <figcaption>State-of-the-art sports medicine facility</figcaption>
        </figure>
      </div>
    </section>

    <section className="page-section alt about-founders">
      <SectionHeading center eyebrow="OUR ESTEEMED FOUNDERS" title="A brother duo." intro="The visionaries who built Sports Science India and the SSI Sports Awards." />
      <div className="person-grid">{founders.map((founder) => <PersonCard key={founder.name} name={founder.name} role={founder.role} />)}</div>
    </section>

    <section className="page-section about-teams">
      <SectionHeading center eyebrow="STATE-OF-THE-ART FACILITY" title="Teams we serve." />
      <div className="pill-list">{teamsWeServe.map((team) => <span className="pill" key={team}>{team}</span>)}</div>
    </section>

    <section className="page-section alt about-services">
      <SectionHeading center eyebrow="WHAT WE DO" title="Complete athlete care." intro="A multidisciplinary team covering every stage of the athlete journey." />
      <div className="person-grid">{services.map((service) => <article className="person-card service-card" key={service.name}>
        <div className="service-icon" aria-hidden="true"><ServiceIcon name={service.icon} /></div>
        <h3>{service.name}</h3>
        <p className="role">{service.detail}</p>
      </article>)}</div>
    </section>

    <section className="page-section about-event">
      <SectionHeading center eyebrow="SSI SPORTS AWARDS 2025" title="Our event highlight." intro="A moment of pride from the SSI National Sports Awards 2025, held on 6th December 2025 at Kalinga Stadium." />
      <div className="event-highlight">
        <figure className="event-highlight-media premium-frame">
          <span className="about-event-badge">2025</span>
          <Image src={eventHighlightImage} alt="The SSI National Sports Awards 2025 celebration" width={1280} height={800} sizes="(max-width: 900px) 88vw, 52vw" />
          <figcaption>A moment of pride from the SSI National Sports Awards 2025.</figcaption>
        </figure>
        <div className="event-highlight-info">
          <p className="eyebrow">SPORTS SCIENCE INDIA PRESENTS</p>
          <h3>SSI National Sports Awards</h3>
          <p className="event-highlight-tagline">Celebrating Excellence in Indian Sports</p>
          <ul className="event-highlight-details">
            <li><strong>Date</strong><span>6th December 2025</span></li>
            <li><strong>Venue</strong><span>Kalinga Stadium, Bhubaneswar</span></li>
          </ul>
          <div className="event-status">
            <strong>EVENT CONCLUDED</strong>
            <span>Thank you for being part of this celebration.</span>
          </div>
        </div>
      </div>
      <div className="event-gallery" aria-label="Moments from the SSI National Sports Awards 2025">
        {eventMoments.slice(0, 6).map((moment) => <figure key={moment.src}>
          <Image src={moment.src} alt={moment.alt} width={320} height={320} sizes="(max-width: 560px) 44vw, (max-width: 900px) 30vw, 15vw" />
        </figure>)}
      </div>
      <div className="about-event-meta">
        <div className="brand-mark"><Image src={brandLogo} alt="Sports Science India logo" width={260} height={260} /></div>
        <div className="contact-block">
          <p><strong>{contact.organisation}</strong></p>
          <p>{contact.address}</p>
          <p>{contact.phones.join(" | ")}</p>
          <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        </div>
      </div>
    </section>

    <Closing />
  </main>;
}
