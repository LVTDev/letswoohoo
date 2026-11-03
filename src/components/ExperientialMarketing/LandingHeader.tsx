"use client";

import Link from "next/link";
import { Menu, X } from "react-feather";
import { useEffect, useRef, useState } from "react";
import Brand from "./Brand";

export default function LandingHeader({ locale = "en" }: { locale?: "en" | "es" }) {
  const isSpanish = locale === "es";
  const links = isSpanish
    ? [
        { href: "#services", label: "Servicios" },
        { href: "#process", label: "Proceso" },
        { href: "#clients", label: "Clientes" },
      ]
    : [
        { href: "#services", label: "Services" },
        { href: "#process", label: "Process" },
        { href: "#clients", label: "Clients" },
      ];
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const mobileMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    mobileMenu.current?.querySelector("a")?.focus();
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const onOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !mobileMenu.current?.contains(event.target) && !menuButton.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    const breakpoint = window.matchMedia("(min-width: 768px)");
    const onResize = () => { if (breakpoint.matches) setMenuOpen(false); };
    document.addEventListener("keydown", onEscape);
    document.addEventListener("pointerdown", onOutsideClick);
    breakpoint.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.removeEventListener("pointerdown", onOutsideClick);
      breakpoint.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-5 focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-black">{isSpanish ? "Saltar al contenido" : "Skip to content"}</a>
      <nav aria-label={isSpanish ? "Navegación principal" : "Main"} className="relative mx-auto flex max-w-[1368px] items-center justify-between gap-3 px-5 py-4 md:gap-4 md:px-10 md:py-5 min-[68.75rem]:px-6 min-[68.75rem]:py-[22px]">
        <Brand href="#top" label={isSpanish ? "Inicio WOOHOO" : "WOOHOO home"} />
        <div className="hidden items-center gap-1 rounded-full border border-white/14 bg-white/8 p-[5px] text-sm md:flex min-[68.75rem]:gap-1.5 min-[68.75rem]:p-1.5">
          {links.map((link) => <Link key={link.href} href={link.href} className="rounded-full px-4 py-3 transition hover:bg-white/10 min-[68.75rem]:px-[18px] min-[68.75rem]:py-2.5">{link.label}</Link>)}
        </div>
        <div className="flex items-center gap-2">
          <Link href="#quote" className="inline-flex min-h-11 items-center rounded-full bg-white px-4 text-sm font-bold text-[#0f0f10] transition hover:-translate-y-0.5 md:min-h-[46px] md:px-5 min-[68.75rem]:px-[22px]">
            <span className="md:hidden">{isSpanish ? "Cotiza" : "Get a quote"}</span><span className="hidden md:inline">{isSpanish ? "Cotiza tu experiencia" : "Get your quote"}</span>
          </Link>
          <button ref={menuButton} type="button" aria-label={menuOpen ? (isSpanish ? "Cerrar menú" : "Close menu") : (isSpanish ? "Abrir menú" : "Open menu")} aria-expanded={menuOpen} aria-controls="btl-mobile-menu" onClick={() => setMenuOpen(!menuOpen)} className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/24 bg-white/8 md:hidden">
            {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
        <div ref={mobileMenu} id="btl-mobile-menu" hidden={!menuOpen} className="btl-mobile-menu absolute top-full right-5 left-5 rounded-3xl border border-white/20 bg-[#17171a] p-3 shadow-xl md:hidden">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block rounded-2xl px-5 py-3 hover:bg-white/10">{link.label}</Link>)}
        </div>
      </nav>
    </header>
  );
}
