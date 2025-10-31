"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LangSwitch = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const links = {
    "/": "/inicio",
    "/clients": "/clientes",
    "/services": "/servicios",
    "/letsTalk": "/contacto",
    "/team": "/equipo",
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
  return <div onClick={handleLangSwitch}>LangSwitch</div>;
};

export default LangSwitch;
