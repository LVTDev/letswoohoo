import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients | Woohoo Creative & Production Agency in Monterrey",
  description:
    "Discover the brands that work with Woohoo. We create campaigns, experiences, and audiovisual productions for leading national and international clients that make ideas echo.",
  // title: "Clientes | Woohoo Agencia de Publicidad y Producción Audiovisual",
  // description:
  //   "Conoce las marcas que confían en Woohoo. Creamos campañas, experiencias y producciones audiovisuales para clientes nacionales e internacionales que hacen eco.",
};

export default function ClientsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className="pt-16">{children}</div>

  );
}
