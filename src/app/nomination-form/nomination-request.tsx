"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { awardCategories } from "@/lib/site-content";
import { Arrow } from "../icons";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xoeqedzz";
const KARNA = "SSI Karna Award";

type FieldKey =
  | "nominee_name" | "sport" | "nominee_email" | "nominee_phone"
  | "achievements" | "justification"
  | "nominator_name" | "relationship" | "nominator_email" | "nominator_phone";

type Values = Record<FieldKey, string>;
type ErrorKey = FieldKey | "award";

const emptyValues: Values = {
  nominee_name: "", sport: "", nominee_email: "", nominee_phone: "",
  achievements: "", justification: "",
  nominator_name: "", relationship: "", nominator_email: "", nominator_phone: "",
};

const requiredFields: FieldKey[] = ["nominee_name", "sport", "achievements", "justification", "nominator_name", "relationship", "nominator_email", "nominator_phone"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NominationRequest() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [award, setAward] = useState("");
  const [openInfo, setOpenInfo] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<ErrorKey, boolean>>>({});
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [summary, setSummary] = useState<(Values & { award: string }) | null>(null);

  const progress = useMemo(() => {
    const total = requiredFields.length + 1;
    let filled = award ? 1 : 0;
    for (const key of requiredFields) if (values[key].trim()) filled += 1;
    return Math.round((filled / total) * 100);
  }, [values, award]);

  function update(key: FieldKey, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: false }));
    setStatus(null);
  }

  function validate() {
    const next: Partial<Record<ErrorKey, boolean>> = {};
    if (!award) next.award = true;
    for (const key of requiredFields) if (!values[key].trim()) next[key] = true;
    if (values.nominator_email.trim() && !emailPattern.test(values.nominator_email.trim())) next.nominator_email = true;
    setErrors(next);
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    const next = validate();
    if (Object.keys(next).length) {
      setStatus({ type: "error", text: "Please complete the highlighted fields." });
      return;
    }
    setSubmitting(true);
    try {
      const body = new FormData();
      body.append("award_category", award);
      for (const key of requiredFields) body.append(key, values[key].trim());
      body.append("nominee_email", values.nominee_email.trim());
      body.append("nominee_phone", values.nominee_phone.trim());
      const response = await fetch(FORMSPREE_ENDPOINT, { method: "POST", body, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Request failed");
      setSummary({ ...values, award });
      setValues(emptyValues);
      setAward("");
      setOpenInfo(null);
      setStatus({ type: "success", text: "Your nomination has been submitted successfully." });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus({ type: "error", text: "Something went wrong. Please try again or email sportscienceindia@gmail.com." });
    } finally {
      setSubmitting(false);
    }
  }

  function textField(key: FieldKey, label: ReactNode, placeholder: string, type = "text") {
    return <label className={`nr-field${errors[key] ? " has-error" : ""}`} htmlFor={`nr-${key}`}>
      <span className="nr-label">{label}</span>
      <input id={`nr-${key}`} name={key} type={type} value={values[key]} placeholder={placeholder} autoComplete="off" onChange={(event) => update(key, event.target.value)} aria-invalid={!!errors[key]} />
      {errors[key] && <span className="nr-error">{key === "nominator_email" ? "Enter a valid email address" : "This field is required"}</span>}
    </label>;
  }

  function textArea(key: FieldKey, label: ReactNode, placeholder: string) {
    return <label className={`nr-field${errors[key] ? " has-error" : ""}`} htmlFor={`nr-${key}`}>
      <span className="nr-label">{label}</span>
      <textarea id={`nr-${key}`} name={key} value={values[key]} placeholder={placeholder} onChange={(event) => update(key, event.target.value)} aria-invalid={!!errors[key]} />
      {errors[key] && <span className="nr-error">This field is required</span>}
    </label>;
  }

  if (summary) {
    const rows: [string, string][] = [
      ["Award Category", summary.award],
      ["Nominee", summary.nominee_name],
      ["Sport", summary.sport],
      ["Nominator", summary.nominator_name],
      ["Contact email", summary.nominator_email],
    ];
    return <div className="nr-success" role="status">
      <p className="eyebrow">REGISTRATION COMPLETED</p>
      <h2>Thank you.</h2>
      <p>Your nomination has been submitted to Sports Science India. A member of the team will be in touch.</p>
      <dl>{rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <div className="nr-submit-area">
        <button type="button" className="button button-orange" onClick={() => { setSummary(null); setStatus(null); }}>Submit another nomination <Arrow /></button>
        <button type="button" className="text-link" onClick={() => window.print()}>Print this page</button>
      </div>
    </div>;
  }

  return <form className="nr-form" onSubmit={handleSubmit} noValidate>
    <div className="nr-progress-wrap">
      <div className="nr-progress-track" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
      <span className="nr-progress-percent" aria-live="polite">{progress}%</span>
    </div>

    <section className="nr-section">
      <div className="nr-section-head">
        <h3>Award Category</h3>
        <span className="nr-hint">Select one · tap i for details</span>
      </div>
      <div className={`nr-award-grid${errors.award ? " has-error" : ""}`} role="radiogroup" aria-label="Award category">
        {awardCategories.map((category) => {
          const checked = award === category.name;
          const open = openInfo === category.name;
          return <div className={`nr-award-card${checked ? " is-selected" : ""}${category.name === KARNA ? " is-featured" : ""}`} key={category.name}>
            <div className="nr-award-top">
              <label className="nr-award-option">
                <input type="radio" name="award_category" value={category.name} checked={checked} onChange={() => { setAward(category.name); setErrors((current) => ({ ...current, award: false })); setStatus(null); }} />
                <span className="nr-award-label"><strong>{category.name}</strong><small>{category.tagline}</small></span>
              </label>
              <button type="button" className={`nr-info-toggle${open ? " is-open" : ""}`} aria-expanded={open} aria-label={`${open ? "Hide" : "Show"} details for ${category.name}`} onClick={() => setOpenInfo(open ? null : category.name)}>i</button>
            </div>
            {open && <div className="nr-award-detail">
              {category.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {category.eligibility && <p className="nr-eligibility"><strong>Eligibility:</strong> {category.eligibility}</p>}
            </div>}
          </div>;
        })}
      </div>
      {errors.award && <span className="nr-error">Please select an award category.</span>}
    </section>

    <section className="nr-section">
      <div className="nr-section-head"><h3>Nominee Details</h3></div>
      {textField("nominee_name", <>Full Name / Team Name <span className="nr-required">*</span></>, "Enter full name or team name")}
      {textField("sport", <>Sport <span className="nr-required">*</span></>, "Enter sport name")}
      <div className="nr-row">
        {textField("nominee_email", <>Nominee Email <span className="nr-optional">(optional)</span></>, "nominee@example.com", "email")}
        {textField("nominee_phone", <>Nominee Phone <span className="nr-optional">(optional)</span></>, "+91 98765 43210", "tel")}
      </div>
    </section>

    <section className="nr-section">
      <div className="nr-section-head"><h3>Achievements (2023–2025)</h3><span className="nr-hint">Key milestones</span></div>
      {textArea("achievements", <>List key achievements, records, awards, or notable milestones <span className="nr-required">*</span></>, "e.g. Gold medal at National Championships 2024, set new meet record...")}
    </section>

    <section className="nr-section">
      <div className="nr-section-head"><h3>Justification for Nomination</h3></div>
      {textArea("justification", <>Explain why this nominee deserves the selected award <span className="nr-required">*</span></>, "Describe the nominee's impact, character, and achievements that make them a standout candidate...")}
    </section>

    <section className="nr-section">
      <div className="nr-section-head"><h3>Nominator Details</h3></div>
      {textField("nominator_name", <>Your Full Name <span className="nr-required">*</span></>, "Enter your full name")}
      {textField("relationship", <>Relationship to Nominee <span className="nr-required">*</span></>, "e.g. Coach, Teammate, Fan, Family")}
      <div className="nr-row">
        {textField("nominator_email", <>Your Email <span className="nr-required">*</span></>, "you@example.com", "email")}
        {textField("nominator_phone", <>Your Phone <span className="nr-required">*</span></>, "+91 98765 43210", "tel")}
      </div>
    </section>

    {status && <p className={`nr-status ${status.type}`} role="status">{status.text}</p>}

    <div className="nr-submit-area">
      <button type="submit" className="button button-orange" disabled={submitting}>{submitting ? "Submitting…" : <>Submit registration <Arrow /></>}</button>
      <button type="button" className="text-link" onClick={() => window.print()}>Print form</button>
    </div>
  </form>;
}
