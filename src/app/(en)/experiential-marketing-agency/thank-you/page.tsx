import type { Metadata } from "next";
import { Facebook, Instagram, Linkedin, Youtube } from "react-feather";
import Brand from "@/components/ExperientialMarketing/Brand";
import { experientialSocials } from "@/utils/experientialMarketing";

export const metadata: Metadata = {
  title: "Thanks for reaching out | WOOHOO",
  robots: { index: false, follow: true },
};

const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin, YouTube: Youtube };

export default function ExperientialThankYouPage() {
  return (
    <div className="relative flex min-h-[max(100svh,1000px)] flex-col overflow-hidden md:min-h-[max(100svh,1112px)] min-[68.75rem]:min-h-screen">
      <div aria-hidden="true" className="absolute top-[60px] -right-[110px] h-[280px] w-[300px] -rotate-8 rounded-[52%_48%_40%_60%/46%_56%_44%_54%] bg-[#bd35a4] opacity-30 md:top-[90px] md:-right-[150px] md:h-[430px] md:w-[460px] min-[68.75rem]:right-[5%] min-[68.75rem]:h-[500px] min-[68.75rem]:w-[530px]" />
      <div aria-hidden="true" className="absolute top-20 -right-20 h-[260px] w-[280px] rotate-14 rounded-[60%_40%_56%_44%/50%_44%_56%_50%] bg-[#ffba03] opacity-22 md:top-[110px] md:-right-[110px] md:h-[400px] md:w-[430px] min-[68.75rem]:right-[3%] min-[68.75rem]:h-[470px] min-[68.75rem]:w-[500px]" />
      <div aria-hidden="true" className="absolute top-[70px] -right-[70px] h-[220px] w-[240px] rounded-[50%_50%_46%_54%/58%_48%_52%_42%] bg-[linear-gradient(140deg,#bd35a4,#ff1229_50%,#ffba03)] md:top-[100px] md:-right-[90px] md:h-[340px] md:w-[370px] min-[68.75rem]:right-[4%] min-[68.75rem]:h-[420px] min-[68.75rem]:w-[450px]" />
      <div aria-hidden="true" className="absolute top-[380px] right-[36%] hidden size-[60px] rounded-full bg-[linear-gradient(140deg,#ff1229,#ffba03)] md:block" />
      <header className="relative mx-auto w-full max-w-[1400px] px-5 py-4 md:px-10 md:py-5"><Brand /></header>
      <main className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col gap-[22px] px-5 pt-[220px] pb-14 md:justify-end md:gap-[26px] md:px-10 md:pt-[260px] md:pb-[72px] min-[68.75rem]:pt-[150px]">
        <p className="flex items-center gap-2.5 text-[11px] font-light tracking-[.42em] text-[#d6d6d6] uppercase md:gap-3 md:text-xs md:tracking-[.5em]"><span aria-hidden="true" className="h-0.5 w-7 shrink-0 bg-[linear-gradient(90deg,#bd35a4,#ffba03)] md:w-[34px]" />Thanks for reaching out!</p>
        <h1 className="btl-thanks-title leading-[.88] font-extrabold tracking-[-.035em] md:leading-[.86]">We’re just<br />getting<br /><span className="btl-gradient-text">STAAAARTED</span></h1>
        <p className="text-[17px] leading-[1.55] font-light text-[#e6e6e6] md:max-w-[500px] md:text-[19px]">We’ve got your info. Someone from our team will be in touch soon to talk about your next experience.</p>
        <div className="mt-4 flex flex-col gap-3.5 md:mt-5 md:gap-4">
          <h2 className="text-[11px] font-semibold tracking-[.4em] text-[#bdbdbd] uppercase md:text-xs">Follow us</h2>
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3">
            {experientialSocials.map((social) => {
              const Icon = socialIcons[social.name];
              return <a key={social.name} href={social.url} className="flex flex-col gap-[18px] rounded-3xl border border-white/16 bg-white/7 p-[18px] text-[15px] font-semibold transition duration-200 hover:-translate-y-[3px] hover:border-[#ffba03] md:gap-[22px] md:rounded-[28px] md:p-5 md:text-base"><Icon aria-hidden="true" size={24} color={social.color} />{social.name}</a>;
            })}
          </div>
        </div>
      </main>
      <footer className="relative border-t border-white/12 text-xs text-[#bdbdbd] md:text-[13px]"><div className="mx-auto flex max-w-[1400px] flex-col gap-1.5 p-5 md:flex-row md:justify-between md:gap-3 md:px-10 md:py-6"><span>© 2026 WOOHOO</span><a href="mailto:hello@letswoohoo.com" className="hover:text-[#ffba03]">hello@letswoohoo.com</a></div></footer>
    </div>
  );
}
