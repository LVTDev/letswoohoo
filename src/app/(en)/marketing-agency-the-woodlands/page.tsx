import type { Metadata } from "next";
import WoodlandsLanding from "@/components/WoodlandsLanding/Landing";
import { woodlandsPath } from "@/components/WoodlandsLanding/data";

export const metadata: Metadata = {
  title: "Marketing & Advertising Agency Serving The Woodlands, TX | WOOHOO",
  description: "Digital ads, content, creative and design from a full-service, bilingual marketing agency with 20+ years of experience. Serving The Woodlands and greater Houston. Get your proposal.",
  alternates: { canonical: `https://www.letswoohoo.com${woodlandsPath}` },
};

export default function MarketingAgencyTheWoodlandsPage() {
  return <WoodlandsLanding />;
}
