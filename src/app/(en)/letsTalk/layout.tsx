import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Woohoo Creative & Production Agency in Monterrey",
  description:
    "Get in touch with Woohoo,  a creative and audiovisual production agency in Monterrey, Mexico. Let’s create campaigns and experiences that make ideas echo.",
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
