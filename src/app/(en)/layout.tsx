import Header from "@/components/General UI/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative & Advertising Agency in Monterrey | Woohoo",
  description:
    // "Woohoo es una agencia creativa y productora audiovisual en Monterrey. Creamos campañas, contenidos y experiencias que hacen eco y mueven emociones.",
    "Woohoo is a creative and audiovisual production agency in Monterrey, Mexico. We craft campaigns, content, and brand experiences that move people and make ideas echo.",
      keywords:
    // "Agencia de publicidad en Monterrey, agencia creativa, producción audiovisual, casa productora, BTL, marketing 360.",
    "Advertising agency in Monterrey, creative agency, audiovisual production, full-scale production house, BTL.",
};

export default function ENGLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-16">
      <Header lang={"en"} />

      {children}
    </div>
  );
}
