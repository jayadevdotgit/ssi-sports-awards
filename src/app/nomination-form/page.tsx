import type { Metadata } from "next";
import { PageHero } from "../inner";
import { Closing } from "../site-shell";
import { NominationRequest } from "./nomination-request";

export const metadata: Metadata = {
  title: "Nomination Form | SSI Sports National Awards",
  description: "Official registration for the SSI Sports National Awards 2026 — recognising excellence in Indian sports.",
};

export default function NominationFormPage() {
  return <main id="main" className="inner-page">
    <PageHero
      eyebrow="OFFICIAL REGISTRATION"
      title={<>SSI Sports National Awards<br /><span>2026.</span></>}
      lead="Recognising excellence in Indian sports. December 5, 2026 · Kalinga Stadium, Bhubaneswar."
    />
    <section className="page-section">
      <NominationRequest />
    </section>
    <Closing />
  </main>;
}
