import type { Metadata } from "next";
import LandingEs from "@/components/ExperientialMarketing/LandingEs";
import { experientialMarketingPath, experientialMarketingSpanishPath } from "@/utils/experientialMarketing";

export const metadata: Metadata = {
  title: "Agencia BTL | Activaciones, Eventos y Stands | WOOHOO",
  description: "Agencia BTL con más de 20 años: activaciones de marca, eventos corporativos y stands para exposiciones. Del concepto al reporte de KPIs. Cotiza tu experiencia.",
  alternates: {
    canonical: `https://www.letswoohoo.com${experientialMarketingSpanishPath}`,
    languages: {
      en: `https://www.letswoohoo.com${experientialMarketingPath}`,
      es: `https://www.letswoohoo.com${experientialMarketingSpanishPath}`,
    },
  },
};

export default function MarketingExperiencialPage() {
  return <LandingEs />;
}
