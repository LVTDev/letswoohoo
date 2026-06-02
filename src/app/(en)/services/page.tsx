// import { ArrowRightIcon } from "@sanity/icons";
import React from "react";

const page = () => {
  return (
    <div className="font-albert w-[90vw] mx-auto pt-[40px]">
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
      <div className="w-full mx-auto mb-10 rounded-lg overflow-hidden">
        <video
          data-testid="video"
          className="w-full   h-full  object-cover object-center md:block hidden"
          width="100%"
          height="1000%"
          muted={true}
          autoPlay={true}
          loop
          playsInline
        >
          <source
            src={
              "https://cdn.sanity.io/files/5egex671/production/90cdc65b68a29e678ff5f95a64f7181b8e48f08e.mp4"
            }
            type="video/mp4"
          />
        </video>
        {/* <img
          src="https://cdn.sanity.io/images/5egex671/production/ab5cb1a0bf635d7c3216066cb78ab3292c462094-1921x541.png"
          alt="letswoohoo banner"
        /> */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Capa_1"
          version="1.1"
          viewBox="0 0 1523.5 639.2"
        >
          <g>
            <path d="M1511.8,519.7c6.9,53.3-35.6,101.6-95,108s-113.2-31.6-120.1-84.9c-6.9-53.3,35.6-101.6,95-108s113.2,31.6,120.1,84.9Z" />
            <path d="M706.8,409.3c-16.4-2.9,72-250.1,58-278.1-56.1-112-305.1,265.4-84.2,356.3,0,0,105.7,47,223.3-70.5,0,0-12.4,184.5,130.8,206.2,143.2,21.7,239.3-104.9,329.4-260.4,90.1-155.5,80-324.2-23.1-339-241-34.4-311.9,428.9-330.7,428.4-13.3-.3,18.7-198.1,27-239.1,10.7-53,36.5-196.2-79.6-176.7-132.8,22.3-239.9,374.9-251,372.9h0Z" />
          </g>
          <g>
            <path d="M37.8,334.8h55.7v27.5H9v-146.1h28.8v118.5h0Z" />
            <path d="M134.4,321.2c3.6,13.1,13.4,19.6,29.4,19.6s18.1-3.5,23.4-10.4l21.7,12.5c-10.3,14.9-25.5,22.3-45.5,22.3s-31.1-5.2-41.5-15.6c-10.4-10.4-15.6-23.6-15.6-39.4s5.1-28.8,15.4-39.3,23.5-15.8,39.6-15.8,27.9,5.3,37.9,15.9c9.9,10.6,14.9,23.7,14.9,39.2s-.3,7.2-1,11.1h-78.7,0ZM134,300.3h53.2c-1.5-7.1-4.7-12.4-9.5-15.9s-10.3-5.2-16.4-5.2-13.2,1.8-17.9,5.5-7.9,8.9-9.4,15.5h0Z" />
            <path d="M294.7,283.9h-23.6v43.4c0,3.6.9,6.3,2.7,7.9,1.8,1.7,4.5,2.6,7.9,2.8,3.5.2,7.8.2,12.9-.1v24.4c-18.5,2.1-31.5.3-39.1-5.2-7.6-5.6-11.4-15.5-11.4-29.8v-43.4h-18.2v-25.9h18.2v-21.1l26.9-8.1v29.2h23.6v25.9h.1Z" />
            <path d="M358.3,216l-15.6,58h-21.9l8.3-58h29.2Z" />
            <path d="M394.2,287.6c0,2.8,1.8,5,5.5,6.8,3.7,1.7,8.2,3.3,13.5,4.6,5.3,1.3,10.6,3,15.9,5s9.8,5.4,13.5,10.1,5.5,10.6,5.5,17.7c0,10.7-4,19-12,24.7-8,5.8-18,8.7-29.9,8.7-21.4,0-36-8.3-43.8-24.8l23.4-13.1c3.1,9,9.9,13.6,20.4,13.6s14.4-3,14.4-9-1.8-5-5.5-6.8c-3.7-1.7-8.2-3.3-13.5-4.7-5.3-1.4-10.6-3.1-15.9-5.2s-9.8-5.4-13.5-9.9-5.5-10.2-5.5-17c0-10.3,3.8-18.4,11.4-24.3s17-8.9,28.3-8.9,16.2,1.9,23.2,5.7c7,3.8,12.4,9.3,16.5,16.4l-23,12.5c-3.3-7.1-8.9-10.6-16.7-10.6s-6.4.8-8.7,2.3c-2.3,1.5-3.4,3.6-3.4,6.3h0Z" />
          </g>
        </svg> */}
      </div>

      <div className=" border-b border-gray my-7 pb-4">
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
            Shopper
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
            {/* Producción Musical */}
            Musical Production
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
            Radio
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
