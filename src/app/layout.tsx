import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/General UI/Header";
import LetsTalkButton from "@/components/General UI/LetsTalkButton";
import Footer from "@/components/General UI/Footer";

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agencia de Publicidad y Producción Audiovisual en Monterrey | Woohoo",
  description:
    "Woohoo es una agencia creativa y productora audiovisual en Monterrey. Creamos campañas, contenidos y experiencias que hacen eco y mueven emociones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${albert.variable} antialiased`}>
        <Header />
        <LetsTalkButton />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
