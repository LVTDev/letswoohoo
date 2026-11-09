import Link from "next/link";
import WoohooSvgWhite from "@/components/General UI/WoohooSvgWhite";
import { experientialMarketingPath } from "@/utils/experientialMarketing";

export default function Brand({ href = experientialMarketingPath, label = "WOOHOO home" }: { href?: string; label?: string }) {
  return (
    <Link href={href} aria-label={label} className="inline-flex h-7 w-10 shrink-0 text-white no-underline md:h-9 md:w-12">
      <WoohooSvgWhite fill="white" className="h-full w-full" />
    </Link>
  );
}
