"use client";
import CalendlyForm from "@/components/General UI/CalendlyForm";
import GradientButton from "@/components/General UI/GradientButton";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Map = dynamic(() => import("@/components/General UI/Map"), {
  ssr: false,
});
const page = () => {
  return (
    <div className="w-3/4 mx-auto font-albert">
      <h1 className="hidden ">Our Culture</h1>
      <div className="pt-6 md:pt-10 text-justify md:text-2xl lg:w-3/4">
        <p>
          Somos WOOHOO.{" "}
          <span className="bg-gradient-to-r from-[#EE340C]  to-[#CA1261] bg-clip-text text-transparent font-bold">
            Contamos historias,
          </span>{" "}
          venimos del cine, vivimos entre escenarios, festivales y proyectos
          culturales. Entendemos al mundo a través del arte, de ese que se queda
          en la memoria y enchina la piel.
        </p>
        <p className="mt-4 mb-8">
          Nos movemos entre eventos, digital, audiovisual, data, estrategia,
          audiovisual, medios, creatividad y btl{" "}
          <span className="bg-gradient-to-r from-[#EE340C]  to-[#CA1261] bg-clip-text text-transparent font-bold">
           <br /> para inspirar y emocionar, porque aquí, creamos experiencias.
          </span>{" "}
           
        </p>
      </div>
      <div className="grid gap-3 my-4 grid-cols-2 lg:grid-cols-3 items-center justify-center">
        <GradientButton href={"/servicios"}>Audiovisual</GradientButton>
        <GradientButton href={"/servicios"}>Creatividad</GradientButton>
        <GradientButton href={"/servicios"}>Digital</GradientButton>
        <GradientButton href={"/servicios"}>Experencias</GradientButton>
        <GradientButton href={"/servicios"}>Medios</GradientButton>
        <GradientButton href={"/servicios"}>Mercadotecnia</GradientButton>
        {/* <Link className="border rounder py-1 px-3 uppercase font-bold rounded-full w-max"></Link> */}
      </div>
      <p className="text-lg lg:text-3xl font-bold text-center my-8">
        Si recuerdas cómo te hizo sentir, fue una buena historia. 
      </p>

      <h3 className="mb-4 font-extrabold uppeercase text-3xl">Noticias</h3>

      <div className="gap-3 flex flex-col lg:flex-row mb-4 md:mb-0">
        <Link
          href={"/blog/marketing-women"}
          className="md:flex gap-7  lg:mb-0 pb-8"
        >
          <div className="relative mb-4 md:mb-0 w-[200px] h-[200px]">
            <Image
              alt="Entrevista Dennise Chapa Imagen"
              src={
                "https://cdn.sanity.io/images/5egex671/production/a7f811fe9ea414bada5415b32a9055c7518242d1-1000x1000.png"
              }
              fill
            />
          </div>
          <div className="md:w-1/2 ">
            <p className="bg-black text-white uppercase text-center py-2 px-4 rounded-xl w-max font-bold">
              Marketing Women
            </p>
            <p className="text-sm my-3">
              &quot;Se necesita lograr un equilibrio enrtre satisfacer las
              necesidades del cliente y al mismo tiempo alinearlas con nuestra
              filosofia de trabajo y creatividad&quot;
            </p>
            <ul className=" text-sm">
              <li>Denisse Chapa, CEO en WOOHOO</li>
            </ul>
          </div>
        </Link>
        <Link href={"/blog/titanesDeAltura"} className="md:flex gap-7 pt-5 mb-10 lg:mb-0">
          <div className="relative mb-4 md:mb-0 w-[200px] h-[200px]">
            <Image
              alt="Entrevista Dennise Chapa Imagen"
              src={
                "https://cdn.sanity.io/images/5egex671/production/0a6581965a19fe85f70a12a936dfcc8d52866f5c-1000x1000.png"
              }
              fill
            />
          </div>
          <div className="md:w-1/2 ">
            <p className="bg-black text-white uppercase text-center py-2 px-4 rounded-xl w-max font-bold">
              Titanes de Altura 2026
            </p>
            <p className="text-sm my-3">
              &quot;Ante cualquier crisis, limitacion o cambio de reglas en el
              juego, elimina las quejas.&quot;
            </p>
            <ul className=" text-sm">
              <li>Denisse Chapa, CEO en WOOHOO</li>
            </ul>
          </div>
        </Link>
      </div>

      <div className="mt-10 pt-8 ">
        <h2 className="text-3xl text-center font-extrabold mb-8">
          LET&apos;S WOOHOO
        </h2>
        <div className="lg:flex w-[90%] mx-auto">
          <div>
            <div className="mb-8 pt-6 justify-around  border-b border-gray pb-6">
              <div className="md:w-1/4 md:flex justify-between gap-15">
                <div>
                  <p className="font-bold text-2xl tracking-widest uppercase mb-1">
                    Comercial
                  </p>
                  <div className="md:flex justify-between">
                    <div>
                      <p className=" font-medium mb-1 flex items-center">
                        Juan Pablo Gutierrez{" "}
                      </p>
                      <p className="italic mb-6" > juanpablo@letswoohoo.com</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="mt-5 md:mt-0">
                <p className="font-bold text-2xl tracking-widest uppercase mb-1">
                  Producción
                </p>
                <div>
                  <p className="font-medium flex items-center"><Aperture className="inline-block  mr-1" width={16}/>Nancy Monsivais</p>
                  <p className="italic">
                    <Mail className="inline mr-1" width={18} />
                    nancy@letswoohoo.com
                  </p>
                </div>
              </div> */}
              <CalendlyForm />
            </div>
          </div>
          <div className="lg:w-2/3">
            <p className="font-bold text-right mb-10">
              Río Rosas Sur 330 1er piso, <br />
              Del Valle, C. P. 66220,
              <br />
              San Pedro Garza Garcia, N.L.,
              <br />
              +52 81 8461 0062
            </p>
            <div className="lg:w-[90%] ml-5">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
