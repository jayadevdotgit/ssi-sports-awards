export function Arrow({ direction = "right" }: { direction?: "right" | "left" | "up" | "down" }) {
  return <svg className={`arrow arrow-${direction}`} width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true"><path d="M2 9h19M15 3l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function CloseIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

export function ExpandIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M10 3h5v5M15 3 9 9M8 15H3v-5M3 15l6-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
