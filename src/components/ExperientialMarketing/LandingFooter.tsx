import Link from "next/link";
import { experientialSocials } from "@/utils/experientialMarketing";

export default function LandingFooter({ locale = "en" }: { locale?: "en" | "es" }) {
  const isSpanish = locale === "es";
  return (
    <footer className="bg-[#0f0f10] px-5 pt-12 pb-8 md:px-10 md:pt-14 md:pb-9 min-[68.75rem]:px-6 min-[68.75rem]:pt-16 min-[68.75rem]:pb-10">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-7 md:gap-9 min-[68.75rem]:gap-10">
        <div aria-hidden="true" className="btl-gradient-text text-[clamp(54px,16.4vw,64px)] leading-[.85] font-black tracking-[-.05em] md:text-[128px] md:leading-[.82] min-[68.75rem]:text-[clamp(128px,14vw,200px)] min-[68.75rem]:leading-[.8]">LET’S<br className="min-[68.75rem]:hidden" /><span className="hidden min-[68.75rem]:inline"> </span>WOOHOO</div>
        <div className="flex flex-col gap-7 md:flex-row md:justify-between md:gap-8">
          <address className="flex flex-col gap-1.5 text-[15px] leading-[1.5] font-light not-italic md:max-w-[340px] min-[68.75rem]:max-w-none">
            <a href="mailto:hello@letswoohoo.com" className="hover:text-[#ffba03]">hello@letswoohoo.com</a>
            <a href="https://wa.me/528184610062" className="hover:text-[#ffba03]">+52 81 8461 0062</a>
            <span className="text-[#bdbdbd]">Río Rosas Sur 330, 1er piso, Del Valle, San Pedro Garza García, N.L., MX</span>
          </address>
          <div className="grid grid-cols-2 gap-2 text-xs tracking-[.26em] md:grid-cols-[auto_auto] md:content-start md:gap-x-7 md:gap-y-1 md:tracking-[.28em] min-[68.75rem]:flex min-[68.75rem]:flex-wrap min-[68.75rem]:items-start min-[68.75rem]:gap-5 min-[68.75rem]:tracking-[.3em]">
            {experientialSocials.map((social) => <a key={social.name} href={social.url} className="py-3 uppercase hover:text-[#ffba03] md:py-2.5 min-[68.75rem]:py-0">{social.name}</a>)}
          </div>
        </div>
        <div className="flex flex-col gap-2.5 border-t border-white/14 pt-5 text-xs text-[#bdbdbd] md:flex-row md:justify-between md:gap-4 md:pt-6 md:text-[13px]">
          <span>© 2026 WOOHOO · {isSpanish ? "Creatividad + Cine + Contenido + Experiencias" : "Creative + Film + Content + Experience"}</span>
          <span className="flex flex-wrap gap-5"><Link href={isSpanish ? "/aviso-de-privacidad" : "/privacy-policy"} className="hover:text-white">{isSpanish ? "Aviso de privacidad" : "Privacy notice"}</Link><Link href={isSpanish ? "/terminos" : "/terms-and-conditions"} className="hover:text-white">{isSpanish ? "Términos y condiciones" : "Terms & conditions"}</Link></span>
        </div>
      </div>
    </footer>
  );
}
