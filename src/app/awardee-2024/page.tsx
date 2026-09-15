import type { Metadata } from "next";
import { AwardeeEditionContent } from "../inner";
import { Closing } from "../site-shell";
import { awardees2024 } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Awardee 2024 | SSI Sports Awards",
  description: "The athletes, coaches and institutions recognised at the SSI Sports Awards 2024.",
};

export default function Awardee2024Page() {
  return <main id="main" className="inner-page">
    <AwardeeEditionContent edition={awardees2024} containImages />
    <Closing />
  </main>;
}
