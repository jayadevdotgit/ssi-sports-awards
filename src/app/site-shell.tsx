import Image from "next/image";
import Link from "next/link";
import { Navigation, NominateButton } from "./components";
import { Arrow } from "./icons";
import logo from "../../public/images/ssi-logo.png";

export function Header() {
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="SSI Sports Awards home">
      <Image className="brand-logo" src={logo} alt="SSI Sports Awards 2025" priority />
    </Link>
    <Navigation />
  </header>;
}

export function WhatsAppButton() {
  return <a className="whatsapp-fab" href="https://wa.me/917978559036" target="_blank" rel="noopener noreferrer" aria-label="Chat with the SSI Sports Awards team on WhatsApp">
    <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
  </a>;
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
  { href: "/jury", label: "Jury" },
  { href: "/board-member", label: "Board Members" },
  { href: "/nomination-form", label: "Nomination Form" },
  { href: "/gallery", label: "Gallery" },
  { href: "/media-coverage", label: "Media Coverage" },
];

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-top"><Link href="/">SSI SPORTS AWARDS 2025</Link><span className="footer-rule" /><p>CELEBRATING EXCELLENCE IN INDIAN SPORTS</p><p className="footer-values">PEOPLE <i /> SPORT <i /> A STRONGER INDIA</p></div>
    <nav className="footer-links" aria-label="Footer navigation">{footerLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
    <div className="footer-bottom"><p>A celebration of the people who move Indian sport forward.</p><div><Link href="/gallery">Event gallery</Link><a href="#top">Back to top <Arrow direction="up" /></a></div></div>
    <p className="footer-credit">Designed by <a href="mailto:jayadevpradhan9@gmail.com">Jayadev</a></p>
  </footer>;
}
