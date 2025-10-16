"use client";
import LetsTalkForm from "@/components/General UI/LetsTalkForm";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { Mail } from "react-feather";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Map = dynamic(() => import("@/components/General UI/Map"), {
  ssr: false,
});

const Page = () => {
  gsap.registerPlugin( useGSAP);
  const logoRef = useRef<null | HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(logoRef.current, {
      repeat: -1,
      yoyo: true,
      duration: .76,
      ease: "bounce.inOut",
      // scale: 1.2,
       rotationY: 360, 
      repeatDelay: 3.2,
    
    });

  });




  return (
    <div className="pt-[80px] font-albert w-[90%] mx-auto">
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
          <div className="text-2xl font-medium my-8 flex items-center ">
            <div ref={logoRef}>
              <Mail className="inline mr-1 text-[#a501fc]" width={22} />
            </div>
            hello@letswoohoo.com
          </div>
          <div className="mb-8 ">
            <div>
              <p className="font-bold text-2xl tracking-widest uppercase mb-1">
                Comercial
              </p>
              <div>
                <p className=" font-medium mb-1">Juan Pablo Gutierrez </p>
                <p className="italic">
                  {" "}
                  <Mail className="inline mr-1" width={18} />
                  juanpablo@letswoohoo.com
                </p>
              </div>
              <div>
                <p className=" font-medium mb-1">Ernesto Vallejo</p>
                <p className="italic">
                  <Mail className="inline mr-1" width={18} />
                  vallejo@letswoohoo.com
                </p>
              </div>
              <div>
                <p className=" font-medium mb-1">Cristina Rodriguez</p>
                <p className="italic">
                  <Mail className="inline mr-1" width={18} />
                  cristina@letswoohoo.com
                </p>
              </div>
            </div>
            <div className="mt-5 ">
              <p className="font-bold text-2xl tracking-widest uppercase mb-1">
                Producción
              </p>
              <div>
                <p className="font-medium">Nancy Monsivais</p>
                <p className="italic">
                  <Mail className="inline mr-1" width={18} />
                  nancy@letswoohoo.com
                </p>
              </div>
            </div>
          </div>
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

export default Page;
