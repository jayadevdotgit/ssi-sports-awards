import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Arrow } from "./icons";
import { personImages } from "@/lib/imported-images";
import type { AwardeeEdition, Person } from "@/lib/site-content";

export function PageHero({ eyebrow, title, lead, backHref, backLabel, actions }: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  backHref?: string;
  backLabel?: string;
  actions?: ReactNode;
}) {
  return <section className="page-hero">
    {backHref && <Link className="text-link back-link" href={backHref}><Arrow direction="left" /> {backLabel}</Link>}
    <p className="eyebrow">{eyebrow}</p>
    <h1>{title}</h1>
    {lead && <p className="page-hero-lead">{lead}</p>}
    {actions && <div className="page-hero-actions">{actions}</div>}
  </section>;
}

export function SectionHeading({ eyebrow, title, intro, center = false }: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
}) {
  return <div className={center ? "section-head center" : "section-head"}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {intro && <p>{intro}</p>}
  </div>;
}

export function EntryCard({ entry }: { entry: Person }) {
  const image = personImages[entry.name];
  return <article className="entry-card">
    {image && <div className="entry-card-image"><Image src={image} alt={entry.name} width={640} height={480} sizes="(max-width: 700px) 88vw, (max-width: 1100px) 43vw, 380px" /></div>}
    <p className="eyebrow">{entry.role}</p>
    <h3>{entry.name}</h3>
    {entry.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
  </article>;
}

function initials(name: string) {
  return name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Shri|Smt\.)\s*/i, "").split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join("").toUpperCase();
}

export function PersonCard({ name, role, bio }: { name: string; role: string; bio?: string }) {
  const image = personImages[name];
  return <article className="person-card" data-person={name}>
    {image
      ? <div className="person-card-photo"><Image src={image} alt={name} width={640} height={480} sizes="(max-width: 700px) 88px, (max-width: 1100px) 28vw, 280px" /></div>
      : <div className="person-card-photo person-card-initials" aria-hidden="true"><span>{initials(name)}</span></div>}
    <h3>{name}</h3>
    <p className="role">{role}</p>
    {bio && <p>{bio}</p>}
  </article>;
}

export function AwardeeEditionContent({ edition }: { edition: AwardeeEdition }) {
  return <>
    <PageHero
      eyebrow={`SSI SPORTS AWARDS · ${edition.year}`}
      title={`SSI Sports Awards ${edition.year}`}
      lead={edition.intro}
      backHref="/awardees"
      backLabel="All awardees"
    />
    {edition.groups.map((group) => <section className="page-section" key={group.title}>
      <SectionHeading eyebrow={edition.tagline} title={group.title} />
      <div className="entry-grid">{group.entries.map((entry) => <EntryCard key={entry.name} entry={entry} />)}</div>
    </section>)}
    <section className="page-section alt">
      <blockquote className="quote-block"><p>{edition.quote}</p></blockquote>
      <p className="page-note">© {edition.year} SSI Sports Awards. All rights reserved.</p>
    </section>
  </>;
}
