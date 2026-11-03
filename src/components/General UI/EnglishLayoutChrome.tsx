"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/General UI/Header";
import { experientialMarketingPath } from "@/utils/experientialMarketing";

export default function EnglishLayoutChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isExperientialLanding =
    pathname === experientialMarketingPath || pathname.startsWith(`${experientialMarketingPath}/`);

  return (
    <>
      {!isExperientialLanding && <Header lang="en" />}
      <div className={isExperientialLanding ? "" : "pt-16"}>{children}</div>
    </>
  );
}
