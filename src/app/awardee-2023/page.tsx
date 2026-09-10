import type { Metadata } from "next";
import { AwardeeEditionContent } from "../inner";
import { Closing } from "../site-shell";
import { awardees2023 } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Awardee 2023 | SSI Sports Awards",
  description: "The athletes, coaches and institutions recognised at the SSI Sports Awards 2023.",
};

export default function Awardee2023Page() {
  return <main id="main" className="inner-page">
    <AwardeeEditionContent edition={awardees2023} />
    <Closing />
  </main>;
}
