// import { ArrowRightIcon } from "@sanity/icons";
import React from "react";

const page = () => {
  return (
    <div className="font-albert w-[90vw] mx-auto">
      <div className="h-0 opacity-0">
        <h1>Las ideas se mueeeven. Nosotros las llevamos más leeejos.</h1>
        <p>
          Desde la creatividad hasta la ejecución, Woohoo es una agencia de
          publicidad, marketing y producción audiovisual en Monterrey que
          convierte cada idea en una experiencia que vibraaa, conecta y deja
          eeeco.
        </p>
        <p>
          Diseñamos activaciones, eventos y experiencias de marca que hacen que
          las ideas saaalten del plano digital al mundo real.
        </p>
        <p>
          Cada montaje, cada convención y cada stand se convierte en una
          historia que despierta emociooones y genera conexión genuina entre las
          marcas y las personas.
        </p>
      </div>
    

     

      <div className="border-b border-gray mb-7 pb-4">
        <p className="  text-4xl font-extrabold tracking-widest">
          {" "}
          PUBLICIDAD
        </p>
        <div className="flex gap-3 my-7 flex-wrap">
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Análisis e Investigación de Mercados
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Publicidad ATL
          </p>

          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Desarrollo de Campañas
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Diseño Publicitario
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Marketing Digital
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Branding
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Medios
          </p>
     
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Comunicación Interna
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Manejo de Crisis
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Impresos
          </p>
        </div>
      </div>

      <div className="border-b border-gray mb-7 pb-4">
        <p className=" text-4xl font-extrabold tracking-widest uppercase">
          AudioVisual
        </p>
        <div className="flex gap-3 my-7 flex-wrap">
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Producción de Cine y Video
          </p>
   
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Post produccion
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Producción de Audio
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Videos Corporativos
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Animaciones 2D y 3D
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Podcast
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Studio
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Renta de Equipo
          </p>
        </div>
      </div>
       <div className=" border-gray my-7 pb-4">
        <div className="text-4xl font-extrabold tracking-widest flex">
          {/* <div className="w-10 ">
            <WoohooSvgWhite fill="#000" />
          </div>{" "} */}
          <h2>EXPERIENCIAS</h2>
        </div>
        <div className="flex gap-3 my-7 flex-wrap">
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Publicidad BTL
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Activaciones
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Eventos
          </p>

          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Convenciones
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Stands
          </p>

          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Exposiciones
          </p>
        </div>
      </div>
      {/* <div className=" pb-5 mb-3">
        <p className="uppercase text-4xl font-extrabold mb-5 tracking-widest">
          let&apos;s <br /> begin
        </p>
        <p className="flex items-center text-lg font-medium">
          <span className="inline mr-3">
            <ArrowRightIcon className="inline" />
          </span>
          hello@letswoohoo.com
        </p>
      </div> */}
    </div>
  );
};

export default page;
