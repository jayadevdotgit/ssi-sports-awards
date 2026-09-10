import type { Metadata } from "next";
import { PageHero, SectionHeading, PersonCard } from "../inner";
import { Closing } from "../site-shell";
import { teamMembers } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Board Members | SSI Sports Awards",
  description: "Meet the board members behind the SSI Sports Awards, dedicated to recognizing excellence and inspiring future generations of athletes.",
};

export default function BoardMemberPage() {
  return <main id="main" className="inner-page">
    <PageHero
      eyebrow="THE PEOPLE BEHIND THE AWARDS"
      title={<>Board <span>members.</span></>}
      lead="Meet the passionate team behind the SSI Sports Awards, dedicated to recognizing excellence and inspiring future generations of athletes."
    />

    <section className="page-section">
      <SectionHeading eyebrow="OUR VISION" title="Guided by purpose." intro="At SSI Sports Awards, we believe in the transformative power of sports. Our team works tirelessly to celebrate athletic achievement, foster sportsmanship, and create opportunities for athletes at all levels to shine." />
      <div className="person-grid">
        {teamMembers.map((member) => <PersonCard key={member.name} name={member.name} role={member.role} />)}
      </div>
    </section>

    <section className="page-section alt">
      <SectionHeading eyebrow="GET IN TOUCH" title="Connect with us." />
      <div className="contact-block">
        <p><strong>SSI Sports Awards © 2025</strong> · Celebrating Excellence in Sports</p>
        <p><a href="mailto:info@ssisportsawards.com">info@ssisportsawards.com</a> · +91 98765 43210</p>
      </div>
    </section>

    <Closing />
  </main>;
}
