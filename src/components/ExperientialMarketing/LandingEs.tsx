import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import {
  experientialMarketingSpanishPath,
  experientialServicesEs,
  experientialStepsEs,
} from "@/utils/experientialMarketing";
import LandingHeader from "./LandingHeader";
import LandingFooter from "./LandingFooter";
import LavaDrop from "./LavaDrop";
import QuoteButton from "./QuoteButton";
import QuoteForm from "./QuoteForm";
import RevealMotion from "./RevealMotion";
import ServiceMarquee from "./ServiceMarquee";
import ClientMarquee from "./ClientMarquee";

const container = "mx-auto w-full max-w-[1320px]";
const sectionPadding = "px-5 py-[72px] md:px-10 md:py-[88px] min-[68.75rem]:px-6 min-[68.75rem]:py-[110px]";
const heading = "text-[32px] leading-[1.05] font-bold tracking-[-.02em] md:text-[40px] min-[68.75rem]:text-[clamp(40px,3.6vw,48px)]";

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-[104px] pb-12 md:px-10 md:pt-[136px] md:pb-[72px] min-[68.75rem]:px-6 min-[68.75rem]:pt-[150px] min-[68.75rem]:pb-[90px]">
      <div className={`${container} grid grid-cols-1 gap-[22px] md:grid-cols-[minmax(0,1fr)_320px] md:gap-x-8 md:gap-y-7 min-[68.75rem]:grid-cols-[minmax(0,1fr)_minmax(280px,32%)] min-[68.75rem]:gap-x-10 min-[68.75rem]:gap-y-[26px]`}>
        <div className="flex min-w-0 flex-col gap-[22px] md:col-span-2 md:gap-7 min-[68.75rem]:col-span-1 min-[68.75rem]:gap-[26px]">
          <p className="flex items-center gap-2.5 text-[11px] font-light tracking-[.42em] text-[#d6d6d6] uppercase md:gap-3 md:text-xs md:tracking-[.5em]">
            <span aria-hidden="true" className="h-0.5 w-7 shrink-0 bg-[linear-gradient(90deg,#bd35a4,#ffba03)] md:w-[34px]" />WOOHOO means happy
          </p>
          <div aria-hidden="true" className="btl-hero-title leading-[.98] font-extrabold tracking-[-.035em] md:leading-[.96]">Donde las<br />experiencias<br />cobran<span className="hidden md:inline"> </span><br className="md:hidden" /><span className="btl-gradient-text">VIDAAAA</span></div>
        </div>
        <div className="btl-hero-details relative flex min-w-0 flex-col gap-[22px] border-t border-white/18 pt-5 md:gap-[22px] md:pt-[26px] min-[68.75rem]:gap-[26px]">
          <div className="flex flex-col gap-2.5 md:gap-3 min-[68.75rem]:flex-row min-[68.75rem]:gap-8">
            <h1 className="text-[22px] leading-[1.25] font-semibold md:text-[25px] min-[68.75rem]:flex-1 min-[68.75rem]:text-[22px]">Agencia BTL donde tu marca se vive (y se mide)</h1>
            <p className="text-[17px] leading-[1.5] font-light text-[#d6d6d6] md:text-lg min-[68.75rem]:flex-1 min-[68.75rem]:text-[17px] min-[68.75rem]:leading-[1.6]">
              Transformamos ideas en experiencias de marca que sorprenden, conectan y generan resultados.
            </p>
          </div>
          <QuoteButton className="md:self-start">Cotiza tu experiencia</QuoteButton>
        </div>
        <div className="mt-2 min-w-0 md:col-start-2 md:row-start-2 md:mt-0 md:self-center md:pt-2.5 min-[68.75rem]:row-span-2 min-[68.75rem]:row-start-1 min-[68.75rem]:pt-0">
          <LavaDrop alt="Activación de marca BMW" />
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <>
      <section className={`${sectionPadding} rounded-t-[32px] bg-[#e6e6e6] text-[#141414] md:rounded-t-[40px] min-[68.75rem]:rounded-t-[48px]`}>
        <div className={`${container} flex flex-col gap-7 md:gap-9 min-[68.75rem]:gap-11`}>
          <h2 className={`${heading} btl-reveal md:max-w-[620px] min-[68.75rem]:max-w-[780px]`}>Una agencia de eventos con más de 20 años de experiencia comprobada</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-3.5 min-[68.75rem]:grid-cols-3">
            <div className="btl-reveal flex min-h-[280px] flex-col justify-between gap-5 rounded-[32px_32px_32px_88px] bg-[image:var(--btl-card-gradient)] p-7 text-white md:row-span-2 md:min-h-[420px] md:gap-6 md:rounded-[40px_40px_40px_110px] md:p-8 min-[68.75rem]:min-h-[460px] min-[68.75rem]:rounded-[44px_44px_44px_120px] min-[68.75rem]:p-10">
              <span className="text-[11px] font-light tracking-[.4em] uppercase md:text-xs">Experiencia</span>
              <div><div className="text-[104px] leading-[.85] font-black tracking-[-.05em] md:text-[120px] min-[68.75rem]:text-[clamp(120px,11vw,160px)]">20+</div><h3 className="mt-2.5 text-xl font-semibold md:mt-3 md:text-[21px] min-[68.75rem]:text-[22px]">años de experiencia en la industria</h3></div>
            </div>
            <div className="btl-reveal flex flex-col gap-2 rounded-[32px] bg-white p-7 md:gap-2.5 md:rounded-[40px] md:p-[30px] min-[68.75rem]:rounded-[44px] min-[68.75rem]:p-9">
              <div className="text-[60px] leading-[.9] font-black tracking-[-.04em] text-[#ed1e2f] min-[68.75rem]:text-[68px]">200+</div>
              <h3 className="text-[19px] font-semibold min-[68.75rem]:text-xl">proyectos y campañas experienciales</h3>
              <p className="text-base leading-[1.5] font-light text-[#444] md:text-[15px] min-[68.75rem]:text-base">Para marcas automotrices, financieras y de consumo.</p>
            </div>
            <div className="btl-reveal flex flex-col gap-2 rounded-[32px] bg-[#0f0f10] p-7 text-white md:gap-2.5 md:rounded-[40px] md:p-[30px] min-[68.75rem]:rounded-[44px] min-[68.75rem]:p-9">
              <div className="text-[60px] leading-[.9] font-black tracking-[-.04em] text-[#ffba03] min-[68.75rem]:text-[68px]">1 equipo</div>
              <h3 className="text-[19px] font-semibold min-[68.75rem]:text-xl">Una solución integral</h3>
              <p className="text-base leading-[1.5] font-light text-[#d6d6d6] md:text-[15px] min-[68.75rem]:text-base">Concepto, producción, montaje, staff y resultados, todo con un mismo equipo.</p>
            </div>
          </div>
        </div>
      </section>
      <section aria-hidden="true" className="relative bg-[#e6e6e6] px-5 pt-2 pb-20 text-[#141414] md:px-10 md:pt-4 md:pb-24 min-[68.75rem]:px-6 min-[68.75rem]:pt-10 min-[68.75rem]:pb-[120px]">
        <div className="absolute top-2.5 -right-[70px] h-[180px] w-[200px] rounded-[48%_52%_60%_40%/56%_44%_56%_44%] bg-[linear-gradient(200deg,#ffba03,#ff1229)] opacity-90 md:-top-2.5 md:-right-20 md:h-[270px] md:w-[300px] min-[68.75rem]:-top-5 min-[68.75rem]:h-[340px] min-[68.75rem]:w-[380px]" />
        <div className={`${container} btl-claim btl-reveal relative leading-[.9] font-extrabold tracking-[-.035em] md:leading-[.88]`}>Donde tu marca<br />llega a la <span className="btl-gradient-text">CALLEEEE</span></div>
      </section>
    </>
  );
}

function Services() {
  return (
    <section id="services" className={sectionPadding}>
      <div className={`${container} flex flex-col gap-8 md:gap-10 min-[68.75rem]:gap-14`}>
        <div className="btl-reveal flex flex-col gap-3.5 md:gap-4 min-[68.75rem]:flex-row min-[68.75rem]:items-end min-[68.75rem]:justify-between min-[68.75rem]:gap-6">
          <h2 className={`${heading} md:max-w-[640px] min-[68.75rem]:max-w-[760px]`}>Servicios de marketing experiencial que hacen vivir tu marca</h2>
          <p className="text-base leading-[1.55] font-light text-[#d6d6d6] md:max-w-[640px] md:text-[17px] min-[68.75rem]:max-w-[360px] min-[68.75rem]:text-lg min-[68.75rem]:leading-[1.5]">
            <span className="min-[68.75rem]:hidden">Somos expertos en producción de eventos, marketing experiencial, congresos 360°, activaciones de marca y diseño y producción de stands. Convertimos cada interacción en una oportunidad para impulsar marcas, conectar con audiencias y dejar huella.</span>
            <span className="hidden min-[68.75rem]:inline">Elige un servicio o déjanos encargarnos de todo. Tú decides hasta dónde llegamos.</span>
          </p>
        </div>
        <div>
          {experientialServicesEs.map((service) => (
            <article key={service.number} className="btl-reveal group grid grid-cols-[48px_minmax(0,1fr)] items-center gap-4 border-t border-white/16 py-7 last:border-b md:grid-cols-[88px_minmax(0,1fr)] md:items-start md:gap-x-6 md:py-9 min-[68.75rem]:grid-cols-[120px_minmax(0,1fr)_minmax(280px,28%)] min-[68.75rem]:items-center min-[68.75rem]:gap-x-8 min-[68.75rem]:gap-y-3.5 min-[68.75rem]:py-10">
              <span aria-hidden="true" className="text-5xl leading-none font-extralight text-[#ff1229] transition-colors group-hover:text-[#ff1229] md:row-span-3 md:text-[64px] md:text-[#5a5a5a] min-[68.75rem]:row-span-2 min-[68.75rem]:text-[84px]">{service.number}</span>
              <h3 className="text-2xl leading-[1.1] font-bold md:col-start-2 md:text-[30px] min-[68.75rem]:text-[clamp(30px,2.6vw,36px)]">{service.title}</h3>
              <p className="col-span-2 row-start-3 text-base leading-[1.6] font-light text-[#d6d6d6] md:col-span-1 md:col-start-2 md:row-start-2 md:leading-[1.65] min-[68.75rem]:max-w-[640px]">
                {"compactDescription" in service ? <><span className="min-[68.75rem]:hidden">{service.compactDescription}</span><span className="hidden min-[68.75rem]:inline">{service.description}</span></> : service.description}
              </p>
              <div className={`relative col-span-2 row-start-2 flex min-h-[230px] items-center justify-center overflow-hidden p-5 text-center text-[13px] md:col-span-1 md:col-start-2 md:row-start-3 md:min-h-[268px] md:p-6 md:text-sm min-[68.75rem]:col-start-3 min-[68.75rem]:row-span-2 min-[68.75rem]:row-start-1 ${service.imageClassName}`}>
                <Image src={service.image} alt={service.title} fill sizes="(min-width: 1100px) 30vw, (min-width: 768px) 70vw, 100vw" quality={90} className="object-cover" />
              </div>
            </article>
          ))}
        </div>
        <div className="btl-reveal relative flex flex-col gap-5 overflow-hidden rounded-[32px] bg-[linear-gradient(110deg,#3c00f6,#bd35a4_70%)] px-6 py-8 md:flex-row md:items-center md:justify-between md:gap-6 md:rounded-[40px] md:p-10 min-[68.75rem]:gap-7 min-[68.75rem]:rounded-[44px] min-[68.75rem]:p-12">
          <div aria-hidden="true" className="absolute -right-[60px] -bottom-[90px] h-[180px] w-[200px] rounded-[50%_50%_44%_56%/58%_46%_54%_42%] bg-[#ff1229] opacity-50 md:right-[14%] md:-bottom-[110px] md:h-[190px] md:w-[220px] min-[68.75rem]:right-[18%] min-[68.75rem]:-bottom-[120px] min-[68.75rem]:h-[220px] min-[68.75rem]:w-[260px]" />
          <div className="relative flex min-w-0 flex-1 flex-col gap-2 min-[68.75rem]:gap-2.5">
            <h3 className="text-2xl leading-[1.15] font-bold md:text-[27px] min-[68.75rem]:text-[34px]">¿Ya tienes una estrategia (o un cliente)?</h3>
            <p className="text-base leading-[1.5] font-light md:text-[17px] min-[68.75rem]:text-lg">Producción, montaje, staff o resultados: nos sumamos justo donde nos necesitas.</p>
          </div>
          <Link href={`${experientialMarketingSpanishPath}?service=partial#quote`} className="relative inline-flex min-h-[54px] shrink-0 items-center justify-center rounded-full bg-white px-[26px] text-base font-bold text-[#0f0f10] transition hover:-translate-y-0.5 md:min-h-14 min-[68.75rem]:px-[30px] min-[68.75rem]:text-[17px]">Solo necesito una parte</Link>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className={`${sectionPadding} relative overflow-hidden bg-[#17171a]`}>
      <div aria-hidden="true" className="absolute -top-20 -left-[120px] h-[280px] w-[300px] rounded-[46%_54%_58%_42%/52%_46%_54%_48%] bg-[linear-gradient(140deg,#bd35a4,#ff1229)] opacity-35 md:-top-[90px] md:-left-[130px] md:h-[340px] md:w-[380px] min-[68.75rem]:-top-[100px] min-[68.75rem]:-left-[140px] min-[68.75rem]:h-[420px] min-[68.75rem]:w-[460px]" />
      <div className={`${container} relative flex flex-col gap-9 md:gap-12 min-[68.75rem]:gap-16`}>
        <div aria-hidden="true" className="btl-claim btl-reveal text-right leading-[.9] font-extrabold tracking-[-.035em] md:leading-[.88]">Así mantenemos<br />la <span className="btl-gradient-text">SINCRONÍAAAA</span></div>
        <h2 className="btl-reveal text-[28px] leading-[1.1] font-bold tracking-[-.02em] md:max-w-[560px] md:text-[34px] min-[68.75rem]:max-w-[720px] min-[68.75rem]:text-[42px]">Nuestro proceso experiencial 360°: cinco pasos, un solo equipo</h2>
        <ol className="relative grid grid-cols-1 gap-[22px] before:absolute before:inset-y-[26px] before:left-[25px] before:w-0.5 before:bg-[linear-gradient(180deg,#ffba03,#ff1229_50%,#3c00f6)] md:grid-cols-2 md:gap-x-7 md:gap-y-8 md:before:hidden min-[68.75rem]:grid-cols-5 min-[68.75rem]:gap-7 min-[68.75rem]:before:inset-x-0 min-[68.75rem]:before:top-[27px] min-[68.75rem]:before:bottom-auto min-[68.75rem]:before:block min-[68.75rem]:before:h-0.5 min-[68.75rem]:before:w-auto min-[68.75rem]:before:bg-[linear-gradient(90deg,#ffba03,#ff1229_50%,#3c00f6)]">
          {experientialStepsEs.map((step) => <li key={step.number} className="btl-reveal btl-process-step relative flex items-start gap-[18px] md:gap-4 min-[68.75rem]:flex-col min-[68.75rem]:gap-3.5">
            <span className={`flex size-[52px] shrink-0 items-center justify-center rounded-full text-[17px] font-bold md:size-14 md:text-lg ${step.colorClassName}`}>{step.number}</span>
            <div className="flex flex-col gap-1.5 pt-1 min-[68.75rem]:gap-3.5 min-[68.75rem]:pt-0"><h3 className="text-xl font-bold md:text-[21px] min-[68.75rem]:text-[22px]">{step.title}</h3><p className="text-[15px] leading-[1.5] font-light text-[#d6d6d6] md:text-base min-[68.75rem]:leading-[1.55]">{step.description}</p></div>
          </li>)}
        </ol>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section id="quote" className="bg-[#e6e6e6] px-3 py-14 text-[#141414] md:px-8 md:py-20 min-[68.75rem]:px-6 min-[68.75rem]:py-[110px]">
      <div className={`${container} grid grid-cols-1 overflow-hidden rounded-[32px] bg-white md:rounded-[44px] min-[68.75rem]:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)] min-[68.75rem]:rounded-[48px]`}>
        <div className="btl-reveal relative flex min-w-0 flex-col gap-[18px] overflow-hidden bg-[image:var(--btl-card-gradient)] px-6 py-10 text-white md:flex-row md:items-end md:justify-between md:gap-8 md:px-10 md:py-12 min-[68.75rem]:flex-col min-[68.75rem]:items-start min-[68.75rem]:gap-10 min-[68.75rem]:px-12 min-[68.75rem]:py-14">
          <div aria-hidden="true" className="absolute -right-[70px] -bottom-20 h-[200px] w-[220px] rounded-[52%_48%_40%_60%/46%_56%_44%_54%] bg-white/18 md:-right-20 md:-bottom-[90px] md:h-[260px] md:w-[280px] min-[68.75rem]:-right-[90px] min-[68.75rem]:h-[280px] min-[68.75rem]:w-[300px]" />
          <h2 className="btl-quote-title relative shrink-0 leading-[.92] font-extrabold tracking-[-.03em]">¿Lo sientes?<br />Hagamos WOOHOO</h2>
          <p className="relative text-base leading-[1.55] min-[68.75rem]:text-lg">¿Tienes un lanzamiento, una expo o un evento en puerta? Cuéntanos qué quieres lograr y crearemos una propuesta a tu medida y presupuesto.</p>
        </div>
        <Suspense fallback={<p role="status" className="p-10">Cargando formulario de cotización…</p>}><QuoteForm locale="es" /></Suspense>
      </div>
    </section>
  );
}

export default function LandingEs() {
  return (
    <>
      <RevealMotion />
      <LandingHeader locale="es" />
      <main id="main-content">
        <Hero />
        <ServiceMarquee locale="es" />
        <ClientMarquee locale="es" />
        <Highlights />
        <Services />
        <Process />
        <Quote />
      </main>
      <LandingFooter locale="es" />
    </>
  );
}
