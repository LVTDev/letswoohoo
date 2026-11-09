import type { Metadata } from "next";
import Landing from "@/components/ExperientialMarketing/Landing";
import { experientialMarketingPath, experientialMarketingSpanishPath } from "@/utils/experientialMarketing";

export const metadata: Metadata = {
  title: "Experiential Marketing Agency & Brand Activations | WOOHOO",
  description: "Brand activations, trade show booths, corporate events and 360° conferences. One team, 20+ years of experience, and results you can measure. Get your quote.",
  alternates: {
    canonical: `https://www.letswoohoo.com${experientialMarketingPath}`,
    languages: {
      en: `https://www.letswoohoo.com${experientialMarketingPath}`,
      es: `https://www.letswoohoo.com${experientialMarketingSpanishPath}`,
    },
  },
};

export default function ExperientialMarketingPage() {
  return <Landing />;
}
