"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
// import { Mail } from "react-feather";

const ServiciosText = () => {
  gsap.registerPlugin(useGSAP);
  const logoRef = useRef<null | HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(logoRef.current, {
      repeat: -1,
      yoyo: true,
      duration: 0.76,
      ease: "bounce.inOut",
      // scale: 1.2,
      rotationY: 360,
      repeatDelay: 3.2,
    });
  });
  return (
    <div>
      <p className="text-2xl font-bold">NUESTROS SERVICIOS</p>
      <p className="mt-4">
        <span className="block my-1 italic">¿Obsesionarnos con una idea?</span>
        <span className="block my-1 italic">Para nada.</span>
        Lo que sí nos obsesiona, son las posibilidades infinitas y por qué no,
        los retos creativos. Aquí no hacemos magia. Pero sí buscamos estar en
        donde todos ponen su atención, donde nace una frase inolvidable, un
        video que desata una conversación o una activación que se convierte en
        anécdota.
        <br/>
        <br/>
         En Woohoo nos mueven las experiencias: aquellas historias que
        se vuelven memorables, virales… que despiertan algo en ti. Porque
        entendemos algo: que hoy ya nadie mira lo mismo que el otro, así que hay
        que lograr que te vean. Que te compartan. Que te recuerden. Que te
        vivan. Que te vuelvan a ver. Creamos experiencias y contamos historias
        que le pertenecerán al mundo. Y bien ¿cuándo comenzamos con tu historia?
        Let´s Woohoo
      </p>
      {/* <div className="md:w-1/2 ">
        <p className="text-lg font-medium">
          Río Rosas Sur 330 1er piso, <br />
          Del Valle, C. P. 66220, <br />
          San Pedro Garza Garcia, N.L., <br />
          +52 81 8461 0062
        </p>
        <div className="text-2xl font-medium my-8 flex items-center ">
          <div ref={logoRef}>
            <Mail className="inline mr-1 text-[#a501fc]" width={22} />
          </div>
          hello@letswoohoo.com
        </div>
      </div> */}
    </div>
  );
};

export default ServiciosText;

// ¿Obsesionarnos con una idea?
// Para nada.
// Lo que sí nos obsesiona, son las posibilidades infinitas y por qué no, los retos creativos.
// Aquí no hacemos magia.
// Pero sí buscamos estar en donde todos ponen su atención, donde nace una frase inolvidable, un video que desata una conversación o una activación que se convierte en anécdota.
// En Woohoo nos mueven las experiencias: aquellas historias que se vuelven memorables, virales… que despiertan algo en ti.
// Porque entendemos algo: que hoy ya nadie mira lo mismo que el otro, así que hay que lograr que te vean. Que te compartan. Que te recuerden. Que te vivan. Que te vuelvan a ver.
// Creamos experiencias y contamos historias que le pertenecerán al mundo.
// Y bien ¿cuándo comenzamos con tu historia?
// Let´s Woohoo
