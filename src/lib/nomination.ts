export const nominationStorageKey = "ssi-nomination-draft-v1";

export type NominationDraft = {
  athlete: string;
  sport: string;
  location: string;
  name: string;
  email: string;
  achievements: string;
};

export const emptyDraft: NominationDraft = {
  athlete: "", sport: "", location: "", name: "", email: "", achievements: "",
};

export function readDraft(raw: string | null): NominationDraft {
  if (!raw) return { ...emptyDraft };
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object" || Array.isArray(value)) return { ...emptyDraft };
    const record = value as Record<string, unknown>;
    return Object.fromEntries(Object.keys(emptyDraft).map((key) => [
      key, typeof record[key] === "string" ? record[key].slice(0, key === "achievements" ? 5000 : 200) : "",
    ])) as NominationDraft;
  } catch {
    return { ...emptyDraft };
  }
}

export function validateDraft(draft: NominationDraft): Partial<Record<keyof NominationDraft, string>> {
  const errors: Partial<Record<keyof NominationDraft, string>> = {};
  if (!draft.athlete.trim()) errors.athlete = "Enter the athlete's name.";
  if (!draft.sport.trim()) errors.sport = "Enter their sport.";
  if (!draft.name.trim()) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email.trim())) errors.email = "Enter a valid email address.";
  if (!draft.achievements.trim()) errors.achievements = "Tell us about their achievements.";
  return errors;
}

export function formatDraft(draft: NominationDraft): string {
  return [
    "SSI SPORTS AWARDS", "ATHLETE NOMINATION — DRAFT", "",
    `Athlete: ${draft.athlete.trim()}`, `Sport: ${draft.sport.trim()}`,
    `City / State: ${draft.location.trim() || "Not provided"}`, "",
    `Nominated by: ${draft.name.trim()}`, `Contact email: ${draft.email.trim()}`,
    "", "STORY & ACHIEVEMENTS", draft.achievements.trim(), "",
    "This is a personal nomination draft. It has not been submitted to SSI Sports Awards.",
  ].join("\n");
}
