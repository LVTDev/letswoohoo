"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { experientialMarketingPath, experientialMarketingSpanishPath } from "@/utils/experientialMarketing";
import Footer from "./Footer";
import LetsTalkButton from "./LetsTalkButton";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hasLandingLayout =
    pathname === experientialMarketingPath ||
    pathname.startsWith(`${experientialMarketingPath}/`) ||
    pathname === experientialMarketingSpanishPath ||
    pathname.startsWith(`${experientialMarketingSpanishPath}/`);

  return (
    <>
      {!hasLandingLayout && <LetsTalkButton />}
      <div>{children}</div>
      {!hasLandingLayout && <Footer />}
    </>
  );
}
