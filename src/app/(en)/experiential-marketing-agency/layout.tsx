import { Outfit } from "next/font/google";
import { ReactNode } from "react";
import "./landing.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export default function ExperientialMarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${outfit.variable} btl-landing relative min-h-screen overflow-x-clip bg-[#0f0f10] text-white`}>
      {children}
    </div>
  );
}
