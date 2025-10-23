import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Woohoo Agencia de Publicidad y Producción Audiovisual",
  description:
    "Contacta a Woohoo, agencia de publicidad y producción audiovisual en Monterrey. Hablemos de ideas, creatividad y campañas que hacen eco.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <div className="pt-16">{children}</div>
   
  );
}
