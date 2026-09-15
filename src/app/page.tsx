import Image from "next/image";
import { AboutButton, NominateButton } from "./components";
import { SectionHeading } from "./inner";
import { Arrow } from "./icons";
import { Closing } from "./site-shell";
import { EventCarousel } from "./event-carousel";
import { TrophyHero } from "./trophy-hero";
import { AwardCarousel } from "./award-carousel";
import { SponsorMarquee } from "./sponsor-marquee";
import { awardeeVoices, contact, distinguishedGuests, guestMessages } from "@/lib/site-content";
import { personImages } from "@/lib/imported-images";

export default function Home() {
  return <main id="main" className="home-page">
    <section className="cinematic-hero celebration-hero reference-hero" aria-labelledby="hero-title">
      <div className="cinematic-atmosphere" aria-hidden="true" />
      <div className="cinematic-copy">
        <div className="hero-head">
          <div className="hero-logos" aria-label="Presented by SSI Foundation, Sports Science India and SSI Sports Awards">
            <div className="hero-logo"><span className="hero-logo-frame"><Image src="/images/imported/LOGO.jpg" alt="SSI Foundation" width={56} height={56} /></span><span className="hero-logo-label">SSI Sports</span></div>
            <div className="hero-logo"><span className="hero-logo-frame"><Image src="/images/imported/Whats-App-Image-2025-07-08-at-16-56-45-28b2319b.jpg" alt="Sports Science India" width={56} height={56} /></span><span className="hero-logo-label">Science India</span></div>
            <div className="hero-logo"><span className="hero-logo-frame"><Image src="/images/imported/Whats-App-Image-2025-07-26-at-16-10-38-cda9fa21.jpg" alt="SSI Sports Awards 2025" width={56} height={56} /></span><span className="hero-logo-label">Awards 2025</span></div>
          </div>
          <h1 id="hero-title">Every champion<span>has a journey.</span></h1>
        </div>
        <p className="cinematic-lead">SSI SPORTS AWARDS</p>
        <p className="cinematic-description">Celebrating athletes, changemakers<br />and the spirit of a stronger India.</p>
        <p className="hero-event"><span>6 December 2025</span><i aria-hidden="true" /><span>Kalinga Stadium, Bhubaneswar</span></p>
        <div className="hero-actions"><a className="button button-champagne" href="#awards">Explore the awards <Arrow /></a><NominateButton outline /></div>
        <p className="reference-values">PEOPLE <span>|</span> PURPOSE <span>|</span> PROGRESS</p>
      </div>
      <div className="celebration-stage"><EventCarousel />
        <TrophyHero />
        <svg className="reference-light-trails" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true"><defs><filter id="gold-glow"><feGaussianBlur stdDeviation="5" /></filter><linearGradient id="gold-line"><stop stopColor="#ff9500" /><stop offset=".45" stopColor="#fff5cf" /><stop offset="1" stopColor="#ff9b13" /></linearGradient></defs><g fill="none" stroke="url(#gold-line)"><path className="trail-glow" d="M120 170 C90 30 410 55 875 0 M865 160 C1160 300 990 400 85 505 C-105 555 440 562 1060 595" /><path d="M120 170 C90 30 410 55 875 0 M865 160 C1160 300 990 400 85 505 C-105 555 440 562 1060 595" /><path d="M130 155 C145 60 470 65 875 8 M880 172 C1150 300 960 380 95 512 C-85 550 475 569 1060 586" opacity=".6" /></g></svg>
      </div>
      <p className="reference-side-note">SPORTS<br />BUILDS A<br />BRIGHTER<br />INDIA<span /></p><p className="reference-script">More<br />Than<br />A Game</p>
      <div className="cinematic-footer"><p className="reference-bottom-note">INDIAN SPORTS.<br />BRIGHTER TOMORROWS.</p></div>
    </section>

    <section className="about" id="about" aria-labelledby="about-title">
      <p className="side-note about-side">LEADERSHIP<br />FUELS<br />POSSIBILITIES.<span /></p>
      <div className="photo-button speaker-photo"><Image src="/images/imported/6K4A0447.jpg" alt="The Chief Guest welcomed on stage at the SSI Sports Awards 2025" width={640} height={520} sizes="(max-width: 700px) 88vw, 32vw" /></div>
      <div className="about-copy"><p className="eyebrow">VISION FOR A STRONGER TOMORROW</p><h2 id="about-title">Celebrating sport.<br />Inspiring India.</h2><p>The SSI Sports Awards honour exceptional athletes, dedicated coaches, institutions and changemakers who are shaping a healthier, stronger and more united India through sport.</p><blockquote className="about-quote">We honour more than medals — we honour the people, the purpose and the progress behind every achievement.</blockquote><p>From athletics, hockey and swimming to gymnastics, shooting and weightlifting, the awards shine a light on the dedication behind each triumph and on the grassroots work that nurtures India&apos;s next generation of champions.</p><AboutButton /></div>
      <div className="impact" aria-label="The possibilities that sport creates">{[
        { icon: "opportunities", first: "MORE", second: "OPPORTUNITIES" },
        { icon: "communities", first: "STRONGER", second: "COMMUNITIES" },
        { icon: "trophy", first: "BRIGHTER", second: "TOMORROWS" },
      ].map((item) => <div key={item.icon}><Image src={`/illustrations/${item.icon}.svg`} alt="" width={38} height={38} /><span>{item.first}<br />{item.second}</span></div>)}</div>
      <div className="section-arc about-arc" aria-hidden="true" />
    </section>

    <section className="page-section home-awards" id="awards" aria-labelledby="awards-title">
      <SectionHeading center eyebrow="SSI SPORTS AWARDS" title={<span id="awards-title">Excellence honoured.</span>} intro="Celebrating outstanding achievements in sports and honouring distinguished personalities across every dimension of Indian sport." />
      <AwardCarousel />
      <p className="page-note">As outlined by Dr. Sarthak Patnaik.</p>
    </section>

    <section className="page-section alt home-guests" id="guests" aria-labelledby="guests-title">
      <SectionHeading center eyebrow="SSI SPORTS AWARDS 2025" title={<span id="guests-title">Our distinguished guests.</span>} intro="Honouring exceptional individuals who joined us to celebrate excellence in Indian sport." />
      <div className="guest-grid">
        {distinguishedGuests.map((guest) => <article className="guest-card" key={guest.name}>
          {personImages[guest.name] && <div className="guest-card-photo"><Image src={personImages[guest.name]} alt={guest.name} width={480} height={480} sizes="(max-width: 700px) 76px, 240px" /></div>}
          <div className="guest-card-body">
            <p className="eyebrow">{guest.role}</p>
            <h3>{guest.name}</h3>
            <p>{guest.detail}</p>
          </div>
        </article>)}
      </div>
    </section>

    <SponsorMarquee />

    <section className="page-section home-messages" aria-labelledby="messages-title">
      <SectionHeading center eyebrow="GUEST MESSAGES" title={<span id="messages-title">Voices of the evening.</span>} intro="Messages from our Chief Guest, Guest of Honour, Special Guests and Founder." />
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

    <section className="page-section alt home-voices" aria-labelledby="voices-title">
      <SectionHeading center eyebrow="VIEWS FROM AWARDEES" title={<span id="voices-title">In their own words.</span>} intro="Reflections from the athletes recognised on the night." />
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

    <section className="page-section home-contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-block">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2 id="contact-title">{contact.organisation}</h2>
        <p>{contact.address}</p>
        <p>{contact.phones.join(" | ")}</p>
        <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
      </div>
    </section>

    <Closing />
  </main>;
}
