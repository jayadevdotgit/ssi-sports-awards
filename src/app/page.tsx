import Image from "next/image";
import Link from "next/link";
import { AboutButton, GalleryPhoto, NominateButton } from "./components";
import { Arrow } from "./icons";
import { Closing } from "./site-shell";

function LightRibbons() {
  return <svg className="hero-ribbons" viewBox="0 0 1100 540" fill="none" preserveAspectRatio="none" aria-hidden="true">
    <defs><filter id="ribbon-glow" x="-20%" y="-100%" width="140%" height="300%"><feGaussianBlur stdDeviation="5" /></filter><linearGradient id="ribbon-color"><stop stopColor="#c06a12" stopOpacity="0" /><stop offset=".35" stopColor="#ffae28" /><stop offset=".65" stopColor="#fff8d5" /><stop offset="1" stopColor="#ff8a0d" /></linearGradient></defs>
    <g stroke="url(#ribbon-color)"><path className="ribbon-halo" d="M430 127C368 16 845 73 1002 5M923 166C1199 234 1038 329 459 420S297 480 1130 516" strokeWidth="10" filter="url(#ribbon-glow)" /><path d="M430 127C368 16 845 73 1002 5M923 166C1199 234 1038 329 459 420S297 480 1130 516" strokeWidth="2.5" /><path d="M437 129C375 24 845 82 1004 10M930 169C1199 247 1031 337 459 425S301 484 1130 521" strokeWidth="1" /></g>
  </svg>;
}

export default function Home() {
  return <main id="main" className="home-page">
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title"><span>Every champion</span><span>has a journey.</span></h1>
        <p className="hero-subtitle">SSI SPORTS AWARDS</p>
        <p className="hero-description">Celebrating athletes, changemakers<br className="desktop-break" /> and the spirit of a stronger India.</p>
        <div className="hero-actions"><a className="button button-orange" href="#awardees">Explore the awards <Arrow /></a><NominateButton outline /></div>
        <p className="hero-values">PEOPLE <i /> PURPOSE <i /> PROGRESS</p>
      </div>
      <div className="hero-visual">
        <div className="emblem-display" aria-hidden="true"><div className="award-emblem"><Image src="/images/ssi-logo.jpg" alt="" width={300} height={300} /></div><div className="pedestal pedestal-top" /><div className="pedestal pedestal-bottom" /></div>
        <GalleryPhoto index={0} className="hero-photo" preload />
      </div>
      <p className="side-note hero-side">SPORTS<br />BUILDS A<br />BRIGHTER<br />INDIA<span /></p>
      <p className="handwritten">More<br />Than<br />A Game</p>
      <LightRibbons />
      <p className="side-note hero-bottom">INDIAN SPORTS.<br />BRIGHTER TOMORROWS.<span /></p>
      <span className="star-flare hero-star" aria-hidden="true" />
      <div className="section-arc hero-arc" aria-hidden="true" />
    </section>

    <section className="moments" id="awardees" aria-labelledby="moments-title">
      <div className="section-heading"><p className="eyebrow">REAL PEOPLE. REAL IMPACT.</p><h2 id="moments-title">Moments of glory.</h2><p className="section-subtitle"><span />TOGETHER FOR A STRONGER SPORTING INDIA.<span /></p></div>
      <div className="group-stage"><div className="group-photo-wrap"><GalleryPhoto index={1} className="group-photo" /><span className="photo-reflection" aria-hidden="true" /></div><p className="side-note">DIVERSE<br />PEOPLE.<br />A STRONGER<br />INDIA.<span /></p></div>
      <Link className="gallery-invitation text-link" href="/gallery">Explore the 2025 gallery <span className="photo-count">03 MOMENTS</span><Arrow /></Link>
      <span className="star-flare group-star" aria-hidden="true" />
    </section>

    <section className="about" id="about" aria-labelledby="about-title">
      <p className="side-note about-side">LEADERSHIP<br />FUELS<br />POSSIBILITIES.<span /></p>
      <GalleryPhoto index={2} className="speaker-photo" />
      <div className="about-copy"><p className="eyebrow">VISION FOR A STRONGER TOMORROW</p><h2 id="about-title">Celebrating sport.<br />Inspiring India.</h2><p>The SSI Sports Awards honour exceptional athletes, dedicated coaches, institutions and changemakers who are shaping a healthier, stronger and more united India through sport.</p><AboutButton /></div>
      <div className="impact" aria-label="The possibilities that sport creates">{[
        { icon: "opportunities", first: "MORE", second: "OPPORTUNITIES" },
        { icon: "communities", first: "STRONGER", second: "COMMUNITIES" },
        { icon: "trophy", first: "BRIGHTER", second: "TOMORROWS" },
      ].map((item) => <div key={item.icon}><Image src={`/illustrations/${item.icon}.svg`} alt="" width={38} height={38} /><span>{item.first}<br />{item.second}</span></div>)}</div>
      <div className="section-arc about-arc" aria-hidden="true" />
    </section>
    <Closing />
  </main>;
}
