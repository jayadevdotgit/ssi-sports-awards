import Image from "next/image";
import Link from "next/link";
import { Navigation, NominateButton } from "./components";
import { Arrow } from "./icons";

export function Header() {
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="SSI Sports Awards home">
      <span className="brand-emblem"><Image src="/images/ssi-logo.jpg" width={80} height={80} alt="" /></span>
      <span className="brand-wordmark"><strong>SSI</strong><small>SPORTS AWARDS 2025</small></span>
    </Link>
    <Navigation />
  </header>;
}

export function Closing() {
  return <section className="closing" aria-labelledby="closing-title">
    <div className="closing-content">
      <p className="eyebrow">ATHLETES TODAY. A BRIGHTER INDIA TOMORROW.</p>
      <h2 id="closing-title">Your moment awaits.</h2>
      <NominateButton />
    </div>
    <Image className="gold-runner" src="/illustrations/gold-runner.svg" alt="" width={210} height={230} />
    <div className="closing-sparks" aria-hidden="true" />
    <div className="closing-trail" aria-hidden="true" />
  </section>;
}

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/hall-of-fame", label: "Hall of Fame" },
  { href: "/awardees", label: "Awardees" },
  { href: "/awardee-2024", label: "Awardee 2024" },
  { href: "/awardee-2023", label: "Awardee 2023" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/presenting-sponsor", label: "Presenting Sponsor" },
  { href: "/ssi-team", label: "SSI Team" },
  { href: "/jury", label: "Jury" },
  { href: "/board-member", label: "Board Member" },
  { href: "/nomination-form", label: "Nomination Form" },
  { href: "/gallery", label: "Gallery" },
  { href: "/media-coverage", label: "Media Coverage" },
];

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-top"><Link href="/">SSI SPORTS AWARDS 2025</Link><span className="footer-rule" /><p>CELEBRATING EXCELLENCE IN INDIAN SPORTS</p><p className="footer-values">PEOPLE <i /> SPORT <i /> A STRONGER INDIA</p></div>
    <nav className="footer-links" aria-label="Footer navigation">{footerLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
    <div className="footer-bottom"><p>A celebration of the people who move Indian sport forward.</p><div><Link href="/gallery">Event gallery</Link><a href="#top">Back to top <Arrow direction="up" /></a></div></div>
  </footer>;
}
