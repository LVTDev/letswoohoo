import Image from "next/image";
import Link from "next/link";
import { Star, Target, TrendingUp } from "react-feather";
import { experientialSocials } from "@/utils/experientialMarketing";
import LandingHeader from "@/components/ExperientialMarketing/LandingHeader";
import LavaDrop from "@/components/ExperientialMarketing/LavaDrop";
import QuoteButton from "@/components/ExperientialMarketing/QuoteButton";
import RevealMotion from "@/components/ExperientialMarketing/RevealMotion";
import ServiceMarquee from "@/components/ExperientialMarketing/ServiceMarquee";
import WoodlandsForm from "./WoodlandsForm";
import {
  woodlandsBrands,
  woodlandsHeroImage,
  woodlandsIndustries,
  woodlandsLinks,
  woodlandsMarquee,
  woodlandsPerks,
  woodlandsServices,
  woodlandsWhy,
} from "./data";

const container = "mx-auto w-full max-w-[1320px]";
const sectionPadding = "px-5 py-[72px] md:px-10 md:py-[88px] min-[68.75rem]:px-6 min-[68.75rem]:py-[110px]";
const heading = "text-[32px] leading-[1.05] font-bold tracking-[-.02em] md:text-[40px] min-[68.75rem]:text-[clamp(40px,3.6vw,48px)]";
const eyebrow = "text-[11px] font-light tracking-[.4em] uppercase md:text-xs";
const perkIcons = { star: Star, trend: TrendingUp, target: Target };
const brandRows = [woodlandsBrands, [...woodlandsBrands].reverse()];
const socialLinks = experientialSocials;

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-[104px] pb-12 md:px-10 md:pt-[136px] md:pb-[72px] min-[68.75rem]:px-6 min-[68.75rem]:pt-[150px] min-[68.75rem]:pb-[90px]">
      <div className={`${container} grid grid-cols-1 gap-[22px] md:grid-cols-[minmax(0,1fr)_320px] md:gap-x-8 md:gap-y-7 min-[68.75rem]:grid-cols-[minmax(0,1fr)_minmax(280px,32%)] min-[68.75rem]:gap-x-10 min-[68.75rem]:gap-y-[26px]`}>
        <div className="flex min-w-0 flex-col gap-[22px] md:col-span-2 md:gap-7 min-[68.75rem]:col-span-1 min-[68.75rem]:gap-[26px]">
          <p className="flex items-center gap-2.5 text-[11px] font-light tracking-[.42em] text-[#d6d6d6] uppercase md:gap-3 md:text-xs md:tracking-[.5em]">
            <span aria-hidden="true" className="h-0.5 w-7 shrink-0 bg-[linear-gradient(90deg,#bd35a4,#ffba03)] md:w-[34px]" />WOOHOO means happy
          </p>
          <div aria-hidden="true" className="btl-hero-title leading-[.98] font-extrabold tracking-[-.035em] md:leading-[.96]">Let’s<br />make it<br /><span className="btl-gradient-text">HAPPEEEEN</span></div>
        </div>
        <div className="btl-hero-details relative flex min-w-0 flex-col gap-[22px] border-t border-white/18 pt-5 md:gap-[22px] md:pt-[26px] min-[68.75rem]:gap-[26px]">
          <div className="flex flex-col gap-2.5 md:gap-3 min-[68.75rem]:max-w-[720px]">
            <h1 className="text-[22px] leading-[1.25] font-semibold md:text-[25px] min-[68.75rem]:text-[26px]">Digital marketing agency serving The Woodlands: smart strategies, bold ideas, better returns</h1>
            <p className="text-[17px] leading-[1.5] font-light text-[#d6d6d6] md:text-lg min-[68.75rem]:text-[19px]">
              Big goals? We’re the full-service marketing agency that works as your marketing department, with creative, design, digital ads and content that make your brand stand ouuut.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <QuoteButton>Get your proposal</QuoteButton>
            <Link href="#industries" className="inline-flex min-h-[58px] items-center justify-center rounded-full border-[1.5px] border-white/60 px-7 text-[17px] font-semibold text-white no-underline transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 md:min-h-[60px]">Find your industry</Link>
          </div>
        </div>
        <div className="mt-2 min-w-0 md:col-start-2 md:row-start-2 md:mt-0 md:self-center md:pt-2.5 min-[68.75rem]:row-span-2 min-[68.75rem]:row-start-1 min-[68.75rem]:pt-0">
          <LavaDrop src={woodlandsHeroImage} alt="WOOHOO production team working on a shoot" />
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section id="clients" aria-labelledby="wh-clients-title" className="btl-clients">
      <div className="btl-clients-heading px-5 md:px-10 min-[68.75rem]:px-6">
        <h2 id="wh-clients-title" className="btl-reveal mx-auto w-full max-w-[1320px] text-[32px] leading-[1.05] font-bold tracking-[-.02em] md:text-[40px] min-[68.75rem]:text-[clamp(40px,3.6vw,48px)]">Brands that have gone <span className="btl-gradient-text">WOOHOO</span></h2>
      </div>
      <ul className="sr-only" aria-label="Our clients">
        {woodlandsBrands.map((brand) => <li key={brand.name}>{brand.name}</li>)}
      </ul>
      <div aria-hidden="true" className="btl-client-rows">
        {brandRows.map((brands, row) => (
          <div key={row} className={`btl-client-track${row === 1 ? " btl-client-track-reverse" : ""}`}>
            {[0, 1].map((copy) => (
              <div key={copy} className="btl-client-group">
                {[...brands, ...brands, ...brands].map((brand, index) => (
                  <div key={`${brand.name}-${index}`} className={`btl-client-pill${brand.wide ? " wh-pill-wide" : ""}`}>
                    <div className="btl-client-logo">
                      <Image src={brand.image} alt="" fill sizes="(min-width: 1100px) 250px, 170px" quality={90} className="object-contain" />
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

function Highlights() {
  return (
    <>
      <section className={`${sectionPadding} rounded-t-[32px] bg-[#e6e6e6] text-[#141414] md:rounded-t-[40px] min-[68.75rem]:rounded-t-[48px]`}>
        <div className={`${container} flex flex-col gap-7 md:gap-9 min-[68.75rem]:gap-11`}>
          <h2 className={`${heading} btl-reveal md:max-w-[620px] min-[68.75rem]:max-w-[820px]`}>A full-service marketing agency with 20+ years of moving brands forward</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-3.5 min-[68.75rem]:grid-cols-3">
            <div className="btl-reveal flex min-h-[280px] flex-col justify-between gap-5 rounded-[32px_32px_32px_88px] bg-[image:var(--btl-card-gradient)] p-7 text-white md:row-span-2 md:min-h-[420px] md:gap-6 md:rounded-[40px_40px_40px_110px] md:p-8 min-[68.75rem]:min-h-[380px] min-[68.75rem]:rounded-[44px_44px_44px_120px] min-[68.75rem]:p-10">
              <span className={eyebrow}>Experience</span>
              <div><div className="text-[104px] leading-[.85] font-black tracking-[-.05em] md:text-[120px] min-[68.75rem]:text-[clamp(120px,11vw,160px)]">20+</div><h3 className="mt-2.5 text-xl font-semibold md:mt-3 md:text-[21px] min-[68.75rem]:text-[22px]">years of industry experience</h3></div>
            </div>
            <div className="btl-reveal flex flex-col gap-2 rounded-[32px] bg-white p-7 md:gap-2.5 md:rounded-[40px] md:p-[30px] min-[68.75rem]:rounded-[44px] min-[68.75rem]:p-9">
              <div className="text-[60px] leading-[.9] font-black tracking-[-.04em] text-[#ed1e2f] min-[68.75rem]:text-[68px]">100+</div>
              <h3 className="text-[19px] font-semibold min-[68.75rem]:text-xl">national and international brands</h3>
            </div>
            <div className="btl-reveal flex flex-col gap-2 rounded-[32px] bg-[#0f0f10] p-7 text-white md:gap-2.5 md:rounded-[40px] md:p-[30px] min-[68.75rem]:rounded-[44px] min-[68.75rem]:p-9">
              <div className="text-[60px] leading-[.9] font-black tracking-[-.04em] text-[#ffba03] min-[68.75rem]:text-[68px]">1 team</div>
              <h3 className="text-[19px] font-semibold min-[68.75rem]:text-xl">creative, design, ads and content, end to end</h3>
            </div>
          </div>
        </div>
      </section>
      <section aria-hidden="true" className="relative overflow-hidden bg-[#e6e6e6] px-5 pt-2 pb-20 text-[#141414] md:px-10 md:pt-4 md:pb-24 min-[68.75rem]:px-6 min-[68.75rem]:pt-10 min-[68.75rem]:pb-[120px]">
        <div className="absolute top-2.5 -right-[110px] h-[150px] w-[170px] rounded-[48%_52%_60%_40%/56%_44%_56%_44%] bg-[linear-gradient(200deg,#ffba03,#ff1229)] opacity-90 md:top-4 md:-right-20 md:h-[240px] md:w-[260px] min-[68.75rem]:top-1/2 min-[68.75rem]:right-[5%] min-[68.75rem]:-translate-y-[40%]" />
        <div className={`${container} btl-claim btl-reveal relative leading-[.9] font-extrabold tracking-[-.035em] md:leading-[.88]`}>Outsourced marketing<br />that feels<br />in-<span className="btl-gradient-text">HOUUUSE</span></div>
      </section>
    </>
  );
}

function Outsourced() {
  return (
    <section id="outsourced" className={`${sectionPadding} bg-[#0f0f10]`}>
      <div className={`${container} flex flex-col gap-9 md:gap-12`}>
        <div className="btl-reveal flex max-w-[820px] flex-col gap-4">
          <h2 className={heading}>Outsourced marketing that works as an extension of your team</h2>
          <p className="text-base leading-[1.6] font-light text-[#d6d6d6] md:text-lg">You know where your brand needs to go. Getting there with a small team and a budget that has to work twice as hard is the tricky part. WOOHOO is the outsourced marketing team that works as an extension of yours, bringing the strategy, creative and media expertise of a full agency, so you can reach more people and get more done without adding headcount.</p>
        </div>
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 min-[68.75rem]:grid-cols-3">
          {woodlandsPerks.map((perk) => {
            const Icon = perkIcons[perk.icon];
            return (
              <div key={perk.title} className="btl-reveal flex flex-col gap-3.5 rounded-[32px] border border-white/10 bg-[#1b1b1e] p-7 transition duration-200 hover:-translate-y-1 md:rounded-[40px] md:p-9">
                <span aria-hidden="true" className={`flex size-[52px] items-center justify-center rounded-full ${perk.iconClassName}`}><Icon size={24} strokeWidth={2} /></span>
                <h3 className="text-[23px] leading-[1.2] font-bold">{perk.title}</h3>
                <p className="text-base leading-[1.6] font-light text-[#d6d6d6]">{perk.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ForwardClaim() {
  return (
    <section aria-hidden="true" className="relative overflow-hidden bg-[linear-gradient(90deg,#bd35a4,#ff1229_50%,#ffba03)] px-5 py-[72px] text-white md:px-10 md:py-20 min-[68.75rem]:px-6 min-[68.75rem]:py-[90px]">
      <div className="absolute -bottom-[170px] -left-[100px] h-[380px] w-[420px] rounded-[46%_54%_58%_42%/52%_46%_54%_48%] bg-white/16" />
      <div className={`${container} wh-claim-lg btl-reveal relative text-right leading-[.9] font-extrabold tracking-[-.035em] md:leading-[.88]`}>Ideas that move<br />you FORWAAARD</div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className={`${sectionPadding} bg-[#0f0f10]`}>
      <div className={`${container} flex flex-col gap-9 md:gap-12`}>
        <h2 className={`${heading} btl-reveal max-w-[860px]`}>The Woodlands digital marketing services: four services, one team</h2>
        <div className="grid grid-cols-1 gap-4 min-[68.75rem]:grid-cols-2">
          {woodlandsServices.map((service) => (
            <article key={service.number} className="btl-reveal flex flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#1b1b1e] transition duration-200 hover:-translate-y-1 md:rounded-[44px]">
              <div className={`relative h-[200px] overflow-hidden ${service.imageClassName}`}>
                <Image src={service.image} alt={service.alt} fill sizes="(min-width: 1100px) 640px, 100vw" quality={85} className="object-cover" style={{ objectPosition: service.imagePosition }} />
              </div>
              <div className="flex flex-col gap-3.5 px-7 pt-8 pb-9 md:px-10 md:pt-9 md:pb-10">
                <span className="text-xs font-semibold tracking-[.36em] text-[#ffba03] uppercase">{service.number}</span>
                <h3 className="text-[30px] leading-[1.1] font-bold">{service.title}</h3>
                <h4 aria-hidden="true" className="text-[24px] leading-[1.1] font-extrabold tracking-[-.02em] md:text-[26px]">{service.tagline}</h4>
                <p className="text-base leading-[1.6] font-light text-[#d6d6d6]">{service.description}</p>
                <ul className="mt-1.5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => <li key={tag} className="rounded-full border border-white/20 px-3.5 py-2 text-sm text-[#e6e6e6]">{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="btl-reveal relative flex flex-col items-start gap-6 overflow-hidden rounded-[32px] bg-[linear-gradient(110deg,#3c00f6,#bd35a4_70%)] p-8 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-7 md:rounded-[44px] md:p-12">
          <div aria-hidden="true" className="absolute -bottom-[120px] right-[18%] h-[220px] w-[260px] rounded-[50%_50%_44%_56%/58%_46%_54%_42%] bg-[#ff1229] opacity-50" />
          <div className="relative flex min-w-0 flex-col gap-2.5 md:flex-1">
            <h3 className="text-[26px] leading-[1.15] font-bold md:text-[clamp(26px,2.6vw,34px)]">Already have a strategy (or a team)?</h3>
            <p className="text-base leading-[1.5] font-light md:text-lg">Ads only, content only or just the creative: we jump in exactly where you need us.</p>
          </div>
          <Link href="#quote" className="relative inline-flex min-h-14 items-center rounded-full bg-white px-[30px] text-[17px] font-bold text-[#0f0f10] no-underline transition duration-200 hover:-translate-y-0.5">I only need part of it</Link>
        </div>
      </div>
    </section>
  );
}

function HelloClaim() {
  return (
    <section aria-hidden="true" className="relative overflow-hidden rounded-t-[32px] bg-[#e6e6e6] px-5 pt-10 pb-20 text-[#141414] md:rounded-t-[40px] md:px-10 md:pt-12 md:pb-24 min-[68.75rem]:rounded-t-[48px] min-[68.75rem]:px-6 min-[68.75rem]:pt-[60px] min-[68.75rem]:pb-[120px]">
      <div className="absolute top-1/2 -right-[100px] h-[130px] w-[140px] -translate-y-1/2 rounded-[52%_48%_40%_60%/46%_56%_44%_54%] bg-[linear-gradient(140deg,#bd35a4,#ff1229_55%,#ffba03)] md:right-[5%] md:h-[220px] md:w-[240px]" />
      <div className={`${container} wh-claim-lg relative leading-[.9] font-extrabold tracking-[-.035em] md:leading-[.88]`}>Hello<br /><span className="wh-swap"><span className="wh-swap-track"><span className="btl-gradient-text">WOODLANDS</span><span className="btl-gradient-text">HOUSTON</span><span className="btl-gradient-text">WOODLANDS</span></span></span></div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="bg-[#e6e6e6] px-5 pt-5 pb-[72px] text-[#141414] md:px-10 md:pb-[88px] min-[68.75rem]:px-6 min-[68.75rem]:pb-[110px]">
      <div className={`${container} flex flex-col gap-9 min-[68.75rem]:gap-11`}>
        <div className="btl-reveal flex max-w-[820px] flex-col gap-4">
          <h2 className={heading}>Marketing for auto dealerships, restaurants, healthcare providers and agencies</h2>
          <p className="text-base leading-[1.6] font-light text-[#333] md:text-lg">We’ve grown brands in these industries before. Now we’re bringing that experience to businesses in The Woodlands and greater Houston.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 min-[68.75rem]:grid-cols-2">
          {woodlandsIndustries.map((industry) => {
            const dark = "dark" in industry && industry.dark;
            return (
              <article key={industry.title} className={`btl-reveal flex flex-col rounded-[32px] p-3.5 transition duration-200 hover:-translate-y-1 md:rounded-[44px] ${dark ? "bg-[#0f0f10] text-white" : "bg-white"}`}>
                <div className={`relative flex h-[220px] items-center justify-center overflow-hidden p-6 text-center text-sm text-white ${industry.imageClassName}`}>
                  <Image src={industry.image} alt={industry.alt} fill sizes="(min-width: 1100px) 640px, 100vw" quality={85} className="object-cover" style={{ objectPosition: industry.imagePosition }} />
                </div>
                <div className="flex flex-col gap-3.5 px-[22px] pt-7 pb-[30px] md:px-[26px]">
                  <p aria-hidden="true" className="text-[28px] leading-none font-extrabold tracking-[-.025em] md:text-[34px]">{industry.claim}</p>
                  <h3 className="text-xl leading-[1.3] font-semibold">{industry.title}</h3>
                  <p className={`text-base leading-[1.6] font-light ${dark ? "text-[#d6d6d6]" : "text-[#333]"}`}>{industry.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className={`${sectionPadding} relative overflow-hidden bg-[#17171a]`}>
      <div aria-hidden="true" className="absolute -top-[100px] -left-[140px] h-[420px] w-[460px] rounded-[46%_54%_58%_42%/52%_46%_54%_48%] bg-[linear-gradient(140deg,#bd35a4,#ff1229)] opacity-35" />
      <div className={`${container} relative flex flex-col gap-12 min-[68.75rem]:gap-16`}>
        <div aria-hidden="true" className="btl-reveal text-right text-[40px] leading-[1.02] font-extrabold tracking-[-.03em] md:text-[64px] min-[68.75rem]:text-[clamp(64px,7vw,104px)]">Big-agency firepower,<br />tailored to <span className="btl-gradient-text">YOUUUU</span></div>
        <div className="flex flex-col gap-8 min-[68.75rem]:flex-row min-[68.75rem]:items-start min-[68.75rem]:gap-12">
          <h2 className={`${heading} min-[68.75rem]:flex-1`}>Why partner with <span className="btl-gradient-text">WOOHOO</span></h2>
          <ul className="flex min-w-0 flex-col min-[68.75rem]:flex-[2.1]">
            {woodlandsWhy.map((item, index) => (
              <li key={item.title} className={`btl-reveal flex gap-5 border-t border-white/16 py-6 md:gap-6 md:py-[26px] ${index === woodlandsWhy.length - 1 ? "border-b" : ""}`}>
                <span aria-hidden="true" className={`flex size-[52px] shrink-0 items-center justify-center rounded-full text-lg font-bold md:size-14 ${item.className}`}>{String(index + 1).padStart(2, "0")}</span>
                <div className="flex flex-col gap-1.5 pt-1"><h3 className="text-xl font-bold md:text-[22px]">{item.title}</h3><p className="text-[15px] leading-[1.55] font-light text-[#d6d6d6] md:text-base">{item.description}</p></div>
              </li>
            ))}
          </ul>
        </div>
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
          <h2 className="btl-quote-title relative shrink-0 leading-[1.08] font-extrabold tracking-[-.03em]">Ready to grow?<br />Let’s WOOHOO</h2>
          <p className="relative text-base leading-[1.55] min-[68.75rem]:text-lg">Tell us what you want to achieve and we’ll build a proposal tailored to your goals and budget.</p>
        </div>
        <WoodlandsForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0f0f10] px-5 pt-12 pb-8 md:px-10 md:pt-14 md:pb-9 min-[68.75rem]:px-6 min-[68.75rem]:pt-16 min-[68.75rem]:pb-10">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-7 md:gap-9 min-[68.75rem]:gap-10">
        <div aria-hidden="true" className="btl-gradient-text text-[clamp(54px,16.4vw,64px)] leading-[.85] font-black tracking-[-.05em] md:text-[128px] md:leading-[.82] min-[68.75rem]:text-[clamp(128px,14vw,200px)] min-[68.75rem]:leading-[.8]">LET’S<br className="min-[68.75rem]:hidden" /><span className="hidden min-[68.75rem]:inline"> </span>WOOHOO</div>
        <div className="flex flex-col gap-7 md:flex-row md:justify-between md:gap-8">
          <address className="flex flex-col gap-1.5 text-[15px] leading-[1.5] font-light not-italic md:max-w-[340px] min-[68.75rem]:max-w-none">
            <a href="mailto:hello@letswoohoo.com" className="hover:text-[#ffba03]">hello@letswoohoo.com</a>
            <a href="https://wa.me/528184610062" className="hover:text-[#ffba03]">+52 81 8461 0062</a>
            <span className="text-[#bdbdbd]">Serving The Woodlands and greater Houston, TX · Mon–Fri, 9 a.m.–6 p.m. CT</span>
          </address>
          <div className="grid grid-cols-2 gap-2 text-xs tracking-[.26em] md:grid-cols-[auto_auto] md:content-start md:gap-x-7 md:gap-y-1 md:tracking-[.28em] min-[68.75rem]:flex min-[68.75rem]:flex-wrap min-[68.75rem]:items-start min-[68.75rem]:gap-5 min-[68.75rem]:tracking-[.3em]">
            {socialLinks.map((social) => <a key={social.name} href={social.url} className="py-3 uppercase hover:text-[#ffba03] md:py-2.5 min-[68.75rem]:py-0">{social.name}</a>)}
          </div>
        </div>
        <div className="flex flex-col gap-2.5 border-t border-white/14 pt-5 text-xs text-[#bdbdbd] md:flex-row md:justify-between md:gap-4 md:pt-6 md:text-[13px]">
          <span>© 2026 WOOHOO · Creative + Film + Content</span>
          <span className="flex flex-wrap gap-5"><Link href="/privacy-policy" className="hover:text-white">Privacy notice</Link><Link href="/terms-and-conditions" className="hover:text-white">Terms &amp; conditions</Link></span>
        </div>
      </div>
    </footer>
  );
}

export default function WoodlandsLanding() {
  return (
    <>
      <RevealMotion />
      <LandingHeader links={woodlandsLinks} cta={{ short: "Get a proposal", long: "Get your proposal" }} />
      <main id="main-content">
        <Hero />
        <ServiceMarquee items={woodlandsMarquee} />
        <Clients />
        <Highlights />
        <Outsourced />
        <ForwardClaim />
        <Services />
        <HelloClaim />
        <Industries />
        <Why />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
