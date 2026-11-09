"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import React, { useEffect } from "react";
// import HomeBubble from "./HomeBubble";
import Image from "next/image";

const NosotrosSticky = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);

    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="spotlight min-h-screen  ">
      <div className="spotlight-layout">
        <div className="spotlight-headline relative">
          <p className="uppercase border rounded-full px-3 mt-12 w-max mx-auto">
            Nosotros
          </p>
          <p className="text-center w-3/4 mx-auto text-lg mt-6">
            Somos una agencia que cree que las ideas están en constante
            movimiento y que la creatividad es el motor de transformación que
            impulsa marcas, conecta personas y hace crecer negocios. Integramos
            estrategia, creatividad, producción y diseño de experiencias para
            convertir ideas en acciones que generan impacto y nuevas
            oportunidades.
          </p>
          {/* <div className="absolute -top-[30%] left-[80%] z-0 ">
            <HomeBubble />
          </div> */}
        </div>
        <div className="spotlight-track bg-gradient-to-br from-[#FFBA03] via-[#FF1219] to-[#BD35A4] -z-1 px-4 pb-20">
          <div className="spotlight-card mt-12 flex justify-between">
            <div className="relative rounded-lg overfow-hidden aspect-[3/4]">
              <Image
                className="rounded-lg"
                fill
                src={
                  "https://cdn.sanity.io/images/5egex671/production/58abc1c290a57739cd51507f62d6e18d0f434935-11811x7323.jpg"
                }
                alt="mural cerro de la silla"
              />
            </div>
            <div className="relative rounded-lg overfow-hidden aspect-[3/4]">
              <Image
                fill
                className="rounded-lg"
                src={
                  "https://cdn.sanity.io/images/5egex671/production/89e2e16c1c699e3aeb126b8f16196ab0c9f4a584-1600x1600.png"
                }
                alt="mural cerro de la silla"
              />
            </div>
          </div>
          <div className="spotlight-card">
            <div className="relative  overfow-hidden aspect-video">
              <Image
                className="rounded-lg"
                fill
                src={
                  "https://cdn.sanity.io/images/5egex671/production/8bb2ab5dcf0833ba7f7acc84ef82fa65b8efceb9-1920x1080.jpg"
                }
                alt="mural cerro de la silla"
              />
            </div>
          </div>
          <div className="spotlight-card mt-12 flex gap-4 justify-between">
            <div className="relative aspect-square rounded-lg overfow-hidden">
              <Image
                fill
                className="rounded-lg"
                src={
                  "https://cdn.sanity.io/images/5egex671/production/2e8be6880b51914d01be6be2397a13be2f35915a-1200x1200.png"
                }
                alt="DOS FAMILIAS"
              />
            </div>
            <div className="relative aspect-square rounded-lg overfow-hidden">
              <Image
                fill
                className="rounded-lg"
                src={
                  "https://cdn.sanity.io/images/5egex671/production/2e8be6880b51914d01be6be2397a13be2f35915a-1200x1200.png"
                }
                alt="Dos familias"
              />
            </div>
          </div>
          <div className="spotlight-card">
            <div className="relative aspect-video rounded-lg overfow-hidden">
              <Image
                fill
                className="rounded-lg"
                src={
                  "https://cdn.sanity.io/images/5egex671/production/a1db5a3975b573120c140c97c94c21d9096e2491-679x387.png"
                }
                alt="Dos familias"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosotrosSticky;
