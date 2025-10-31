import Header from "@/components/General UI/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative & Advertising Agency in Monterrey | Woohoo",
  description:
    "Woohoo es una agencia creativa y productora audiovisual en Monterrey. Creamos campañas, contenidos y experiencias que hacen eco y mueven emociones.",
  keywords:
    "Agencia de publicidad en Monterrey, agencia creativa, producción audiovisual, casa productora, BTL, marketing 360.",
};

export default function ESPLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-16">
      <Header lang={"es"} />

      {children}
    </div>
  );
}
