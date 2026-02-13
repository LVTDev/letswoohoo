import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clientes | Woohoo Agencia de Publicidad y Producción Audiovisual",
  description:
    "Conoce las marcas que confían en Woohoo. Creamos campañas, experiencias y producciones audiovisuales para clientes nacionales e internacionales que hacen eco.",
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
