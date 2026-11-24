"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { isLandingPath } from "@/utils/experientialMarketing";
import Footer from "./Footer";
import LetsTalkButton from "./LetsTalkButton";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hasLandingLayout = isLandingPath(pathname);

  return (
    <>
      {!hasLandingLayout && <LetsTalkButton />}
      <div>{children}</div>
      {!hasLandingLayout && <Footer />}
    </>
  );
}
