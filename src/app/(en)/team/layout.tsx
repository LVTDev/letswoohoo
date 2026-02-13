import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Woohoo Creative & Production Agency in Monterrey",
  description:
    "Meet the Woohoo team: creatives, producers, and strategists who bring campaigns, stories, and experiences to life that truly echo.",
  // title: "Equipo Woohoo | Agencia de Publicidad y Producción Audiovisual",
  // description:
  //   "Conoce al equipo creativo de Woohoo: productores, diseñadores y estrategas que dan vida a ideas, campañas y experiencias que hacen eco.",
};

export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className="pt-16">{children}</div>
   
  );
}
