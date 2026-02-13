"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LangSwitch = ({lang}:{lang:string}) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const links = {
    "/": "/inicio",
    "/clients": "/clientes",
    "/services": "/servicios",
    "/letsTalk": "/contacto",
    "/team": "/equipo",
    "/our-culture": "/cultura",
    "/our-culture/posada": "/cultura/posada",
    "/our-culture/cancerMama": "/cultura/cancerMama",
  };
  const engLinks = Object.keys(links);

  const espLinks = Object.values(links);
  const handleLangSwitch = () => {
    if (engLinks.includes(pathname)) {
      router.push(links[pathname as keyof typeof links]);
    } else if (espLinks.includes(pathname)) {
      const engPath = Object.keys(links).find(
        (key) => links[key as keyof typeof links] === pathname
      );
      if (engPath) router.push(engPath);
    }
  };
    return <div className="cursor-pointer text-[6px] md:text-base" onClick={handleLangSwitch}><span className={`${lang === "en" && "font-bold text-[#caeb0c]  cursor-pointer"}`}>EN</span>/ <span className={`${lang === "es" && "font-bold text-[#caeb0c]"} `}>ES</span></div>;
};

export default LangSwitch;
