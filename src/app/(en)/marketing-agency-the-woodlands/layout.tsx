import { Outfit } from "next/font/google";
import { ReactNode } from "react";
import "../experiential-marketing-agency/landing.css";
import "./woodlands.css";
import DocumentLanguage from "@/components/ExperientialMarketing/DocumentLanguage";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export default function WoodlandsLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${outfit.variable} btl-landing relative min-h-screen overflow-x-clip bg-[#0f0f10] text-white`}>
      <DocumentLanguage lang="en" />
      {children}
    </div>
  );
}
