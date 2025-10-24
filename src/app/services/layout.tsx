import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publicidad, Marketing y Producción Audiovisual | Woohoo",
  description:
    "Somos una agencia de publicidad, marketing digital y producción audiovisual en Monterrey. Creamos campañas, experiencias y contenidos que hacen eco.",
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <div className="pt-16">{children}</div>
   
  );
}
