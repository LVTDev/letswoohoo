import Link from "next/link";
import { ArrowRight } from "react-feather";
import { ReactNode } from "react";

export function ButtonArrow({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`flex size-[42px] shrink-0 items-center justify-center rounded-full ${dark ? "bg-[linear-gradient(135deg,#ff1229,#ffba03)] text-white" : "bg-white text-[#ed1e2f]"}`}>
      <ArrowRight aria-hidden="true" size={18} strokeWidth={2.4} className="btl-cta-arrow motion-safe:transition-transform motion-safe:duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
    </span>
  );
}

export default function QuoteButton({ children = "Get your quote", href = "#quote", className = "" }: {
  children?: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <Link href={href} className={`group inline-flex min-h-[58px] items-center justify-between gap-3.5 rounded-full bg-[linear-gradient(90deg,#bd35a4,#ed1e2f_55%,#f58a07)] pr-2 pl-[26px] text-[17px] font-bold text-white no-underline transition duration-200 hover:-translate-y-0.5 hover:brightness-110 md:min-h-[60px] md:pr-2.5 md:pl-[30px] ${className}`}>
      {children}<ButtonArrow />
    </Link>
  );
}
