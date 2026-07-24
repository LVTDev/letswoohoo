import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface GradientButtonProps
  extends LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  children: ReactNode;
}

export default function GradientButton({ children, className = "", ...props }: GradientButtonProps) {
  return (
    <Link
      {...props}
      className={`
        py-2 px-4 rounded-full uppercase font-bold
        inline-flex items-center justify-center
         text-base 
        cursor-pointer no-underline
        text-black
        hover:text-white
        hover:bg-gradient-to-r from-[#EE340C] via-[#DE1F42] to-[#CA1261]
        bg-[length:300%_100%] bg-left hover:bg-right
        border
        hover:border-0
        hover:shadow-[0_4px_15px_0_rgba(238,52,12,0.5)]
        transition-[background-position] duration-[400ms] ease-in-out
        hover:delay-150
        ${className}
      `}
    >
      {children}
    </Link>
  );
}