import Image from "next/image";
import { experientialBrands } from "@/utils/experientialMarketing";

const brandRows = [experientialBrands.slice(0, 5), experientialBrands.slice(5)];

export default function ClientMarquee({ locale = "en" }: { locale?: "en" | "es" }) {
  return (
    <section id="clients" aria-labelledby="btl-clients-title" className="btl-clients">
      <div className="btl-clients-heading px-5 md:px-10 min-[68.75rem]:px-6">
        <h2 id="btl-clients-title" className="btl-reveal mx-auto w-full max-w-[1320px] text-[32px] leading-[1.05] font-bold tracking-[-.02em] md:text-[40px] min-[68.75rem]:text-[clamp(40px,3.6vw,48px)]">
          {locale === "es" ? <>Marcas que ya hicieron <span className="btl-gradient-text">WOOHOO</span> con nosotros</> : <>Brands that have gone <span className="btl-gradient-text">WOOHOO</span></>}
        </h2>
      </div>
      <ul className="sr-only" aria-label={locale === "es" ? "Marcas clientes" : "Our clients"}>
        {experientialBrands.map((brand) => <li key={brand.name}>{brand.name}</li>)}
      </ul>
      <div aria-hidden="true" className="btl-client-rows">
        {brandRows.map((brands, row) => (
          <div key={row} className={`btl-client-track${row === 1 ? " btl-client-track-reverse" : ""}`}>
            {[0, 1].map((copy) => (
              <div key={copy} className="btl-client-group">
                {[...brands, ...brands].map((brand, index) => (
                  <div key={`${brand.name}-${index}`} className="btl-client-pill">
                    <div className="btl-client-logo">
                      <Image src={brand.image} alt="" fill sizes="(min-width: 1100px) 132px, (min-width: 768px) 120px, 100px" quality={90} className="object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
