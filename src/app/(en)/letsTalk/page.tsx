"use client";
import LetsTalkForm from "@/components/General UI/LetsTalkForm";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import {  Disc, Mail } from "react-feather";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CalendlyForm from "@/components/General UI/CalendlyForm";

const Map = dynamic(() => import("@/components/General UI/Map"), {
  ssr: false,
});

const Page = () => {
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
    <div className=" font-albert w-[90%] mx-auto">
      <h1 className="hidden">Contact us</h1>
      <div className="md:flex  pb-6">
        <div className="md:w-1/2 ">
          <h2 className="font-bold text-4xl tracking-widest uppercase mb-6">
            Contact <br /> Details
          </h2>
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
        </div>
        <LetsTalkForm lang={"en"} />
      </div>
      <div>
        <div className="mb-8 lg:flex pt-6 justify-around  border-b border-gray pb-6">
          <div className="md:w-1/4 md:flex justify-between gap-15">
            <div>
              <p className="font-bold text-2xl tracking-widest uppercase mb-1">
                Commercial
              </p>
              <div className="">
                <div>
                  <p className=" font-medium mb-1 flex items-center">
                    <Disc className="inline-block mr-1" width={16} />
                    Juan Pablo Gutierrez{" "}
                  </p>
                  <p className="italic w-max">
                    {" "}
                    <Mail className="inline mr-1" width={18} />
                    juanpablo@letswoohoo.com
                  </p>
                </div>
              </div>
            </div>
            <CalendlyForm/>
          </div>
        
          {/* <div className="mt-5 md:mt-0">
            <p className="font-bold text-2xl tracking-widest uppercase mb-1">
              Production
            </p>
            <div>
              <p className="font-medium flex items-center mb-1">
                <Aperture className="inline-block  mr-1" width={16} />
                Nancy Monsivais
              </p>
              <p className="italic">
                <Mail className="inline mr-1" width={18} />
                nancy@letswoohoo.com
              </p>
            </div>
          </div> */}
        </div>
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

export default Page;
