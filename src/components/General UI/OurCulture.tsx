"use client";

import { cancerMama, posada } from "@/app/our-culture/eventos";

// import React, { useState } from "react";

const OurCulture = () => {
  

  return (
    <div className="font-albert">
      <h1 className="text-4xl my-3 text-center ">Our Culture</h1>

      <div>
        <h3 className="text-xl text-center my-4">Posada 2025</h3>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 w-[80%] gap-y-3  md:w-[65%] mx-auto">
          {posada.map((event, i) => <div className={`${event.size === "large" && "col-span-2 "} relative rounded-lg overflow-hidden`} key={i}>
            <img className=""  src={event.link} alt="Posada equipo LVT" />
            <div className="absolute bg-[#caeb0c] px-2 py-1 left-3 bottom-3 font-bold rounded text-sm md:text-base">Posada</div>
            <div className="absolute bg-[#caeb0c] px-2 py-1 right-3 bottom-3 font-bold rounded text-sm md:text-base">Dec 2025</div>
          </div>)}
        </div>
      </div>
      <div>
        <h3 className="text-xl text-center mt-6 mb-3">Hablemos de Cáncer de Mama</h3>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 w-[80%] gap-y-3 md:w-[65%] mx-auto justify-center">
          {cancerMama.map((event, i) => <div className={`${event.size === "large" && "col-span-2"} rounded-lg overflow-hidden relative`} key={i}>
            <img  src={event.link} alt="Posada equipo LVT" />
            <div className="absolute bg-rose-200 px-2 py-1 left-3 bottom-3 font-bold rounded text-sm md:text-base">Cancer de Mama</div>
            <div className="absolute bg-rose-200 px-2 py-1 right-3 bottom-3 font-bold rounded text-sm md:text-base">Oct 2025</div>

          </div>)}
        </div>
      </div>
      
    </div>
  );
};

export default OurCulture;
