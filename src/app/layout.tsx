import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import LetsTalkButton from "@/components/General UI/LetsTalkButton";
import Footer from "@/components/General UI/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  // title: "Agencia de Publicidad y Producción Audiovisual en Monterrey | Woohoo",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id={"GA_head"}>
          {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-K275LP93');
        `}
        </Script>
      </head>
      <body className={` ${albert.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K275LP93"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Analytics />

        <LetsTalkButton />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
