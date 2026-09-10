import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SectionHeading, PersonCard } from "../inner";
import { Closing } from "../site-shell";
import { founders, services, teamsWeServe, contact } from "@/lib/site-content";
import { brandLogo } from "@/lib/imported-images";

export const metadata: Metadata = {
  title: "About | SSI Sports Awards",
  description: "Sports Science India is one of the largest multidisciplinary sports medicine practices in Eastern India and the first Sports Medicine Centre of Odisha.",
};

export default function AboutPage() {
  return <main id="main" className="inner-page">
    <PageHero
      eyebrow="SPORTS SCIENCE INDIA · SINCE 2016"
      title={<>Excellence in<br /><span>sports medicine.</span></>}
      lead="One of the largest multidisciplinary sports medicine practices in Eastern India — and the first Sports Medicine Centre of Odisha and Eastern India."
    />

    <section className="page-section">
      <SectionHeading eyebrow="WHO WE ARE" title="The team behind the awards." />
      <div className="prose">
        <p>Sports Science India is one of the largest multidisciplinary sports medicine practices in Eastern India. It&rsquo;s the first Sports Medicine Centre of Odisha and Eastern India.</p>
        <p>The idea was conceived by Dr. Sarthak Patnaik and Mr. Soumya Patnaik. The brother duo has been working with various sports disciplines for the last 7 years and has earned many laurels for their National and International sports event participation.</p>
        <p>The team has been presently serving the Indian Ice Hockey team, India U-16/19 football team, Odisha Football Academy, Ranji Cricket team, SAI table tennis academy, Naval Tata hockey Academy, Tennis clubs, Weight lifting Associations of Bbsr and Puri, Wrestler association and many more local clubs of various disciplines.</p>
        <p>The Team comprises Sports Medicine specialists, Sports surgeons, Sports physiotherapists, Sports psychology and Sports nutrition specialists. Our Sports Medicine Expert Dr. Sarthak Patnaik has been in the service for the last 7 years and has treated many professional sports players both National and International representing India including Olympic Gold Medalist winner Mr. Neeraj Chopra.</p>
        <p>At Sports Science India we strive to create a unique environment of excellent facilities, courteous staff and pioneering medical procedures. With the help of cutting-edge technologies, extensive research resources and best-in-the-world treatment options, Sports Science India is the Sports Medicine destination of choice for a great number of patients.</p>
      </div>
    </section>

    <section className="page-section alt">
      <SectionHeading eyebrow="OUR ESTEEMED FOUNDERS" title="A brother duo." />
      <div className="person-grid">{founders.map((founder) => <PersonCard key={founder.name} name={founder.name} role={founder.role} />)}</div>
    </section>

    <section className="page-section">
      <SectionHeading eyebrow="STATE-OF-THE-ART FACILITY" title="Teams we serve." />
      <div className="pill-list">{teamsWeServe.map((team) => <span className="pill" key={team}>{team}</span>)}</div>
    </section>

    <section className="page-section alt">
      <SectionHeading eyebrow="WHAT WE DO" title="Complete athlete care." />
      <div className="person-grid">{services.map((service) => <PersonCard key={service.name} name={service.name} role={service.detail} />)}</div>
    </section>

    <section className="page-section">
      <SectionHeading eyebrow="SSI SPORTS AWARDS 2025" title="Our event highlight." intro="A moment of pride from the SSI National Sports Awards 2025, held on 6th December 2025 at Kalinga Stadium." />
      <div className="brand-mark"><Image src={brandLogo} alt="Sports Science India logo" width={260} height={260} /></div>
      <div className="contact-block">
        <p><strong>{contact.organisation}</strong></p>
        <p>{contact.address}</p>
        <p>{contact.phones.join(" | ")}</p>
        <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
      </div>
    </section>

    <Closing />
  </main>;
}
