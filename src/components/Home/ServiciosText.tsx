"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Mail } from "react-feather";

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
      <p>NUESTROS SERVICIOS</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi alias
        nostrum dolorum necessitatibus repellendus harum sed quidem quos, minus
        laudantium eum vero similique quae doloremque iusto magni magnam.
        Deserunt voluptatum ea obcaecati fugiat pariatur, sed eos laborum rerum
        aspernatur, assumenda dolorem quo modi. Harum iste quia tenetur expedita
        a numquam, aspernatur sed cupiditate earum natus voluptate, consectetur
        illo assumenda obcaecati.
      </p>
      <div className="md:w-1/2 ">
    
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
    </div>
  );
};

export default ServiciosText;
