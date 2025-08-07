'use client'
import LetsTalkForm from "@/components/General UI/LetsTalkForm";

import React from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/General UI/Map"), {
  ssr: false
});

const page = () => {
  return (
    <div className="pt-20 font-albert w-[90%] mx-auto">
      <h1 className="hidden">Contact us</h1>
      <div className="flex">
        <div className="w-1/2 ">
          <p className="font-bold text-4xl tracking-widest uppercase mb-6">
            Contact <br /> Details
          </p>
          <p className="text-lg font-medium">
            Río Rosas Sur 330 1er piso, <br />
            Del Valle, C. P. 66220, <br />
            San Pedro Garza Garcia, N.L., <br />
            +52 81 8461 0062
          </p>
          <p className="text-lg font-medium mt-8">hello@letswoohoo.com</p>
        </div>
        <LetsTalkForm />
      </div>
      <div>
        <p className="font-bold text-4xl tracking-widest uppercase">
          where to <br /> find us
        </p>
        <Map />
      </div>
    </div>
  );
};

export default page;
