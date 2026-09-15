export function Arrow({ direction = "right" }: { direction?: "right" | "left" | "up" | "down" }) {
  return <svg className={`arrow arrow-${direction}`} width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true"><path d="M2 9h19M15 3l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function CloseIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

export function ExpandIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M10 3h5v5M15 3 9 9M8 15H3v-5M3 15l6-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function MedicalKitIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" /><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" stroke="currentColor" strokeWidth="1.4" /><path d="M12 10.5v6M9 13.5h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;
}

function StethoscopeIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 3v5a4 4 0 0 0 8 0V3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><path d="M10 12v3.5a4.5 4.5 0 0 0 9 0V14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><circle cx="19" cy="11.5" r="2.2" stroke="currentColor" strokeWidth="1.4" /></svg>;
}

function HeartPulseIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 20.5 4.2 12.9a4.8 4.8 0 0 1 6.8-6.8l1 1 1-1a4.8 4.8 0 0 1 6.8 6.8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M4.5 12.5h3.6l1.4-2.6 2.4 5 1.4-2.4h5.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function BrainIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5.5A2.8 2.8 0 0 0 7 4.2 2.6 2.6 0 0 0 4.3 7a2.6 2.6 0 0 0 .4 1.4A2.8 2.8 0 0 0 5 14a2.8 2.8 0 0 0 2.9 3.3A2.4 2.4 0 0 0 12 18.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M12 5.5a2.8 2.8 0 0 1 5-1.3A2.6 2.6 0 0 1 19.7 7a2.6 2.6 0 0 1-.4 1.4A2.8 2.8 0 0 1 19 14a2.8 2.8 0 0 1-2.9 3.3A2.4 2.4 0 0 1 12 18.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M12 5.5v13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;
}

function AppleIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 8.2c-1.4-2-3.8-2.4-5.3-1-2 1.6-2.4 4.8-.6 8.1 1.2 2.2 2.9 3.9 4.3 3.9.7 0 .9-.4 1.6-.4s.9.4 1.6.4c1.4 0 3.1-1.7 4.3-3.9 1.8-3.3 1.4-6.5-.6-8.1-1.5-1.4-3.9-1-5.3 1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M12 8.2c0-1.9.8-3.3 2.4-4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;
}

const serviceIcons = { medicine: MedicalKitIcon, surgery: StethoscopeIcon, physio: HeartPulseIcon, psychology: BrainIcon, nutrition: AppleIcon };

export function ServiceIcon({ name }: { name: string }) {
  const Icon = serviceIcons[name as keyof typeof serviceIcons];
  return Icon ? <Icon /> : null;
}
