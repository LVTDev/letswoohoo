// import { ArrowRightIcon } from "@sanity/icons";
import React from "react";

const page = () => {
  return (
    <div className="font-albert w-[90vw] mx-auto">
      <div className="h-0 opacity-0">
        <h1>Ideas mooove. We take them further</h1>
        <p>
          From creativity to execution, Woohoo is a creative and audiovisual
          production agency based in Monterrey, Mexico.
        </p>
        <p>
          We turn every idea into an experience that moves people, connects
          brands, and makes noise.
        </p>
        <p>
          We design brand activations, events, and live experiences that take
          ideas off the screen and into the real world. Each activation,
          convention, or exhibition becomes a story that sparrrks emotion and
          builds true human connection.
        </p>
      </div>
      

      <div className=" border-b border-gray mb-7 pb-4">
        <p className="  text-4xl font-extrabold tracking-widest">
          {" "}
          ADVERTISING
        </p>
        <div className="flex gap-3 my-7 flex-wrap">
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Análisis e Investigación de Mercados */}
            Market Analysis and Research
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Publicidad ATL */}
            Publicity ATL
          </p>

          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Desarrollo de Campañas */}
            Campaign Development
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Diseño Publicitario */}
            Advertising Design
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Marketing Digital */}
            Digital Marketing
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Branding
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Medios */}
            Media
          </p>

          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Comunicación Interna */}
            Internal Communication
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Manejo de Crisis */}
            Crisis Management
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Impresos */}
            Prints
          </p>
        </div>
      </div>

      <div className="border-b border-gray mb-7 pb-4">
        <p className=" text-4xl font-extrabold tracking-widest uppercase">
          AudioVisual
        </p>
        <div className="flex gap-3 my-7 flex-wrap">
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Producción de Cine y Video */}
            Film and Video Production
          </p>
      
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Post Production
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Producción de Audio */}
            Audio Production
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Videos Corporativos */}
            Corporate Videos
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            2D and 3D Animations
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Podcast
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Studio
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Equipment Rental
          </p>
        </div>
      </div>
      <div className="border-gray mb-7 pb-4 ">
        <div className="text-4xl font-extrabold tracking-widest flex">
          {/* <div className="w-10 ">
            <WoohooSvgWhite fill="#000" />
          </div>{" "} */}
          <h2>EXPERIENCES</h2>
        </div>
        <div className="flex gap-3 my-7 flex-wrap">
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Publicidad BTL */}
            Publicity BTL
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Activaciones */}
            Activations
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Eventos */}
            Events
          </p>

          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Convenciones */}
            Conventions
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Stands
          </p>

          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Exposiciones */}
            Expositions
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
