"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useId, useRef, useState, type ReactNode, type FormEvent } from "react";
import { eventPhotos } from "@/lib/photos";
import { emptyDraft, formatDraft, nominationStorageKey, readDraft, validateDraft, type NominationDraft } from "@/lib/nomination";
import { Arrow, CloseIcon, ExpandIcon } from "./icons";

type Experience = { openPhoto: (index: number) => void; openNomination: () => void; openAbout: () => void };
const ExperienceContext = createContext<Experience | null>(null);

function useExperience() {
  const context = useContext(ExperienceContext);
  if (!context) throw new Error("Site components require SiteExperience.");
  return context;
}

export function SiteExperience({ children }: { children: ReactNode }) {
  const gallery = useRef<HTMLDialogElement>(null);
  const nomination = useRef<HTMLDialogElement>(null);
  const about = useRef<HTMLDialogElement>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [nominationSession, setNominationSession] = useState(0);
  const [draft, setDraft] = useState<NominationDraft>({ ...emptyDraft });
  const photo = eventPhotos[photoIndex];
  function openNomination() {
    try { setDraft(readDraft(localStorage.getItem(nominationStorageKey))); }
    catch { setDraft({ ...emptyDraft }); }
    setNominationSession((session) => session + 1);
    nomination.current?.showModal();
  }
  function movePhoto(direction: number) {
    setPhotoIndex((index) => (index + direction + eventPhotos.length) % eventPhotos.length);
  }
  return <ExperienceContext.Provider value={{
    openPhoto: (index) => { setPhotoIndex(index); gallery.current?.showModal(); },
    openNomination,
    openAbout: () => about.current?.showModal(),
  }}>
    {children}
    <dialog ref={gallery} className="dialog gallery-dialog" aria-label="SSI Sports Awards photo gallery" onClick={(event) => { if (event.target === event.currentTarget) gallery.current?.close(); }} onKeyDown={(event) => {
      if (event.key === "ArrowRight") { event.preventDefault(); movePhoto(1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); movePhoto(-1); }
    }}>
      <div className="dialog-toolbar"><span>SSI SPORTS AWARDS <b>2025</b></span><button autoFocus className="icon-button" aria-label="Close photo gallery" onClick={() => gallery.current?.close()}><CloseIcon /></button></div>
      <div className="gallery-viewer"><Image src={photo.src} alt={photo.alt} width={640} height={427} sizes="(max-width: 700px) 94vw, 900px" /><button className="viewer-prev icon-button" aria-label="Previous photo" onClick={() => movePhoto(-1)}><Arrow direction="left" /></button><button className="viewer-next icon-button" aria-label="Next photo" onClick={() => movePhoto(1)}><Arrow /></button></div>
      <div className="viewer-caption"><div aria-live="polite"><span className="eyebrow">{photo.category} · {String(photoIndex + 1).padStart(2, "0")} / 03</span><h2>{photo.title}</h2></div><a className="text-link" href={photo.src} download>Original photo <Arrow direction="down" /></a></div>
      <div className="gallery-thumbnails" aria-label="Choose a photo">{eventPhotos.map((item, index) => <button key={item.src} aria-label={`Show ${item.title}`} aria-pressed={index === photoIndex} onClick={() => setPhotoIndex(index)}><Image src={item.src} alt="" width={96} height={64} /></button>)}</div>
    </dialog>
    <dialog ref={nomination} className="dialog nomination-dialog" aria-label="Prepare an athlete nomination"><div className="dialog-toolbar"><span>YOUR JOURNEY STARTS HERE</span><button autoFocus className="icon-button" aria-label="Close nomination form" onClick={() => nomination.current?.close()}><CloseIcon /></button></div><NominationForm key={nominationSession} initialDraft={draft} /></dialog>
    <dialog ref={about} className="dialog about-dialog" aria-label="About the SSI Sports Awards"><div className="dialog-toolbar"><span>THE SPIRIT BEHIND THE AWARDS</span><button autoFocus className="icon-button" aria-label="Close about the awards" onClick={() => about.current?.close()}><CloseIcon /></button></div><p className="eyebrow">PEOPLE. PURPOSE. PROGRESS.</p><h2>More than a game.</h2><p>Sport brings people together. The SSI Sports Awards celebrates the athletes, coaches, institutions and changemakers whose dedication helps Indian sport move forward.</p><p>The 2025 celebration puts those journeys in the spotlight: the achievements, the people behind them, and the possibilities they inspire.</p><div className="about-dialog-values"><div><strong>Recognise</strong><span>The commitment behind every achievement.</span></div><div><strong>Connect</strong><span>A community united by a love of sport.</span></div><div><strong>Inspire</strong><span>The next generation of sporting journeys.</span></div></div><Link className="button button-orange" href="/gallery" onClick={() => about.current?.close()}>Explore the celebration <Arrow /></Link></dialog>
  </ExperienceContext.Provider>;
}

const moreLinks = [
  { href: "/testimonials", label: "Testimonials" },
  { href: "/presenting-sponsor", label: "Presenting Sponsor" },
  { href: "/ssi-team", label: "SSI Team" },
  { href: "/jury", label: "Jury" },
  { href: "/board-member", label: "Board Member" },
  { href: "/nomination-form", label: "Nomination Form" },
  { href: "/media-coverage", label: "Media Coverage" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const { openNomination } = useExperience();
  function close() { setOpen(false); setMoreOpen(false); }
  return <div className="navigation-wrap" onKeyDown={(event) => { if (event.key === "Escape") { close(); toggle.current?.focus(); } }}>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}><span>{open ? "Close" : "Menu"}</span><span className={open ? "menu-lines is-open" : "menu-lines"} aria-hidden="true"><i /><i /></span></button>
    <nav className={open ? "navigation open" : "navigation"} id="navigation" aria-label="Main navigation">
      <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined} onClick={close}>About</Link>
      <Link href="/awardees" aria-current={pathname === "/awardees" || pathname.startsWith("/awardee-") ? "page" : undefined} onClick={close}>Awardees</Link>
      <Link href="/hall-of-fame" aria-current={pathname === "/hall-of-fame" ? "page" : undefined} onClick={close}>Hall of Fame</Link>
      <Link href="/gallery" aria-current={pathname === "/gallery" ? "page" : undefined} onClick={close}>Gallery</Link>
      <div className="nav-more">
        <button className="nav-more-toggle" aria-expanded={moreOpen} aria-controls="more-navigation" onClick={() => setMoreOpen(!moreOpen)}>More <i aria-hidden="true" /></button>
        {moreOpen && <div className="nav-more-menu" id="more-navigation">
          {moreLinks.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={close}>{link.label}</Link>)}
        </div>}
      </div>
      <button className="button button-orange nav-nominate" onClick={() => { close(); openNomination(); }}>Nominate an athlete <Arrow /></button>
    </nav>
  </div>;
}

export function NominateButton({ outline = false }: { outline?: boolean }) {
  const { openNomination } = useExperience();
  return <button className={`button ${outline ? "button-outline" : "button-orange"}`} onClick={openNomination}>Nominate an athlete {!outline && <Arrow />}</button>;
}

export function AboutButton() {
  const { openAbout } = useExperience();
  return <button className="button button-outline learn-button" onClick={openAbout}>Learn more about SSI <Arrow /></button>;
}

export function GalleryPhoto({ index, className, preload = false }: { index: number; className: string; preload?: boolean }) {
  const { openPhoto } = useExperience();
  const photo = eventPhotos[index];
  return <button className={`photo-button ${className}`} aria-label={`Enlarge photo: ${photo.title}`} onClick={() => openPhoto(index)}>
    <Image src={photo.src} alt={photo.alt} width={640} height={427} sizes={index === 1 ? "(max-width: 700px) 88vw, 84vw" : "(max-width: 700px) 88vw, 48vw"} preload={preload} />
    <span className="photo-zoom"><ExpandIcon /><span>View photo</span></span>
  </button>;
}

export function GalleryCollection() {
  const [filter, setFilter] = useState("All moments");
  const { openPhoto } = useExperience();
  const filters = ["All moments", ...eventPhotos.map((photo) => photo.category)];
  const visible = eventPhotos.map((photo, index) => ({ ...photo, index })).filter((photo) => filter === "All moments" || photo.category === filter);
  return <><div className="gallery-filters" role="group" aria-label="Filter event photos">{filters.map((item) => <button aria-pressed={filter === item} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div><p className="gallery-count" aria-live="polite">{visible.length} {visible.length === 1 ? "moment" : "moments"} from SSI Sports Awards 2025</p><div className="gallery-grid">{visible.map((photo) => <button className="gallery-card" key={photo.src} onClick={() => openPhoto(photo.index)}><div className="gallery-card-image"><Image src={photo.src} alt={photo.alt} width={640} height={427} sizes="(max-width: 700px) 88vw, 30vw" /><span className="photo-zoom"><ExpandIcon /></span></div><span className="eyebrow">{photo.category}</span><h2>{photo.title}</h2><p>{photo.description}</p><span className="text-link">View moment <Arrow /></span></button>)}</div></>;
}

export function NominationForm({ initialDraft }: { initialDraft: NominationDraft }) {
  const [draft, setDraft] = useState(initialDraft);
  const [step, setStep] = useState<"details" | "review">("details");
  const [errors, setErrors] = useState<Partial<Record<keyof NominationDraft, string>>>({});
  const [status, setStatus] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const id = useId();

  function update(field: keyof NominationDraft, value: string) {
    setDraft((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("");
  }
  function review(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateDraft(draft);
    setErrors(nextErrors);
    const firstField = Object.keys(nextErrors)[0];
    if (firstField) { form.current?.querySelector<HTMLInputElement>(`[name="${firstField}"]`)?.focus(); return; }
    setStep("review"); setStatus("");
    requestAnimationFrame(() => heading.current?.focus());
  }
  function save() {
    try { localStorage.setItem(nominationStorageKey, JSON.stringify(draft)); setStatus("Draft saved on this device. You can return to it anytime."); }
    catch { setStatus("This browser could not save your draft. You can still review and download it."); }
  }
  function download() {
    const url = URL.createObjectURL(new Blob([formatDraft(draft)], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url; link.download = "ssi-nomination-draft.txt"; document.body.appendChild(link); link.click(); link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus("Your draft has been downloaded. It has not been submitted to SSI.");
  }
  function field(name: keyof NominationDraft, label: string, placeholder: string, type = "text") {
    return <label htmlFor={`${id}-${name}`}>{label}<input id={`${id}-${name}`} name={name} aria-label={label} type={type} value={draft[name]} onChange={(event) => update(name, event.target.value)} placeholder={placeholder} maxLength={200} autoComplete={name === "name" ? "name" : name === "email" ? "email" : "off"} aria-required={name !== "location"} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${id}-${name}-error` : undefined} />{errors[name] && <span className="field-error" id={`${id}-${name}-error`}>{errors[name]}</span>}</label>;
  }

  return <><div className="form-progress" aria-label={`Step ${step === "details" ? "1" : "2"} of 2`}><span className={step === "details" ? "active" : "complete"}><b>01</b> The story</span><i /><span className={step === "review" ? "active" : ""}><b>02</b> Review & keep</span></div><p className="eyebrow">RECOGNISE AN EXTRAORDINARY JOURNEY</p><h2 ref={heading} tabIndex={-1}>{step === "details" ? "Every story deserves a spotlight." : "A champion worth celebrating."}</h2><p className="form-intro">{step === "details" ? "Tell us about an athlete who inspires you. Prepare a draft to save or download for your records." : "Check the details below, then download your nomination draft."}</p>
    <div className="draft-notice"><span aria-hidden="true">ⓘ</span> Draft only. Online nominations are not available on this website.</div>
    {step === "details" ? <form ref={form} noValidate onSubmit={review}><div className="form-grid">{field("athlete", "Athlete's name *", "Full name")}{field("sport", "Sport *", "e.g. Athletics")}{field("location", "City / state", "Where their journey began")}{field("name", "Your name *", "Full name")}{field("email", "Your email *", "you@example.com", "email")}</div><label htmlFor={`${id}-achievements`}>Their story & achievements *<textarea id={`${id}-achievements`} name="achievements" aria-label="Their story & achievements *" rows={4} value={draft.achievements} onChange={(event) => update("achievements", event.target.value)} maxLength={5000} placeholder="Share the achievements, dedication, or impact that make their journey stand out." aria-required="true" aria-invalid={!!errors.achievements} aria-describedby={errors.achievements ? `${id}-achievements-error` : undefined} />{errors.achievements && <span className="field-error" id={`${id}-achievements-error`}>{errors.achievements}</span>}<small className="character-count">{draft.achievements.length} / 5,000</small></label><div className="form-actions"><button type="submit" className="button button-orange">Review draft <Arrow /></button><button type="button" className="text-link" onClick={save}>Save for later</button></div></form> : <div className="nomination-review"><dl><div><dt>Athlete</dt><dd>{draft.athlete}</dd></div><div><dt>Sport</dt><dd>{draft.sport}</dd></div>{draft.location.trim() && <div><dt>City / state</dt><dd>{draft.location}</dd></div>}<div><dt>Nominated by</dt><dd>{draft.name}</dd></div><div><dt>Contact email</dt><dd>{draft.email}</dd></div><div className="review-story"><dt>Their story & achievements</dt><dd>{draft.achievements}</dd></div></dl><div className="form-actions"><button className="button button-orange" onClick={download}>Download draft <Arrow direction="down" /></button><button className="text-link" onClick={() => { setStep("details"); setStatus(""); requestAnimationFrame(() => heading.current?.focus()); }}>Edit details</button><button className="text-link" onClick={save}>Save for later</button></div></div>}
    <p className="save-status" role="status">{status || "Your information stays on your device. Nothing is sent to SSI."}</p>
  </>;
}
