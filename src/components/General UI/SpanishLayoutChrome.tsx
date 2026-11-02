"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/General UI/Header";
import { experientialMarketingSpanishPath } from "@/utils/experientialMarketing";

export default function SpanishLayoutChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isExperientialLanding =
    pathname === experientialMarketingSpanishPath || pathname.startsWith(`${experientialMarketingSpanishPath}/`);

  return (
    <>
      {!isExperientialLanding && <Header lang="es" />}
      <div className={isExperientialLanding ? "" : "pt-16"}>{children}</div>
    </>
  );
}
