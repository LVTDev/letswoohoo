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
    <div className="spotlight min-h-screen  max-w-screen">
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
        <div className="spotlight-track bg-gradient-to-br from-[#FFBA03] via-[#FF1219] to-[#BD35A4] px-4 pb-30 z-2 lg:-z-1">
          <div className="spotlight-card my-4 md:my-12 flex justify-center w-3/4 mx-auto">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="https://cdn.sanity.io/files/5egex671/production/9d1baf19401e5b906f3b7a4a0921784b3644b243.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Dos familias"
              />
            </div>
          </div>
          <div className="spotlight-card h-30 w-3/4 mx-auto mt-4 md:mt-12 flex justify-between">
            <div className="relative rounded-lg overfow-hidden aspect-square">
              <Image
                className="rounded-lg"
                fill
                src={
                  "https://cdn.sanity.io/images/5egex671/production/ed6880c5938b9786f407c4c57715b813c5cc8751-1000x1000.jpg"
                }
                alt="top golf"
              />
            </div>
            <div className="relative rounded-lg overfow-hidden aspect-square">
              <Image
                fill
                className="rounded-lg"
                src={
                  "https://cdn.sanity.io/images/5egex671/production/89e2e16c1c699e3aeb126b8f16196ab0c9f4a584-1600x1600.png"
                }
                alt="Como comi"
              />
            </div>
          </div>

          <div className="spotlight-card w-4/5 mx-auto my-4 md:my-12 flex justify-center">
            <div className="relative h-full rounded-lg overfow-hidden aspect-video">
              <Image
                className="rounded-lg"
                fill
                src={
                  "https://cdn.sanity.io/images/5egex671/production/58abc1c290a57739cd51507f62d6e18d0f434935-11811x7323.jpg"
                }
                alt="mural cerro de la silla"
              />
            </div>
          </div>

          <div className="spotlight-card my-4 md:my-12 flex w-3/4 mx-auto gap-4 justify-between">
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
                  "https://cdn.sanity.io/images/5egex671/production/6c298fd3baa23941b25c6f3e42cdec4822de95cc-501x501.png"
                }
                alt="Coca Cola destapa un grito"
              />
            </div>
          </div>

          <div className="spotlight-card my-4 md:my-12 flex justify-center w-3/4 mx-auto">
            <div className="relative h-full  overfow-hidden aspect-video">
              <Image
                className="rounded-lg"
                fill
                src={
                  "https://cdn.sanity.io/images/5egex671/production/8bb2ab5dcf0833ba7f7acc84ef82fa65b8efceb9-1920x1080.jpg"
                }
                alt="Sin taboobs"
              />
            </div>
          </div>
          {/* FIC &  */}
          <div className="spotlight-card mt-4 md:mt-12 flex gap-4 justify-between w-3/4 mx-auto">
            <div className="relative aspect-square rounded-lg overfow-hidden">
              <Image
                fill
                className="rounded-lg object-cover"
                src={
                  "https://cdn.sanity.io/images/5egex671/production/6656d5951c0b1700f6350933632115f2e8cb467f-1920x1080.jpg"
                }
                alt="Monterrey film festival"
              />
            </div>
            <div className="relative aspect-square rounded-lg overfow-hidden">
              <Image
                fill
                className="rounded-lg object-cover object-right"
                src={
                  "https://cdn.sanity.io/images/5egex671/production/89cdc9dbdf89af7128e798764a8be7b0ce66a685-1001x501.png"
                }
                alt="Coca Cola"
              />
            </div>
          </div>

          <div className="spotlight-card my-4 md:my-12 flex justify-center w-3/4 mx-auto">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="https://cdn.sanity.io/files/5egex671/production/fb03609d0306940a867b9b6f4eccd3e2f90497db.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Dos familias"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosotrosSticky;
