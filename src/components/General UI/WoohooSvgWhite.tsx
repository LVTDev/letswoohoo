"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const WoohooSvgWhite = ({ fill }: { fill: string }) => {
  gsap.registerPlugin(MotionPathPlugin);
  const dotRef = useRef<null | SVGSVGElement>(null);
  useGSAP(() => {
    gsap.to(dotRef.current, {
      // y: -30,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "bounce.out",
      // scale: 1.2,
       rotationY: 360, 
      repeatDelay: 5,
      // repeat: -1,
      // yoyo: true,
      // transformOrigin: "center center",
      // duration: 0.8,
      // ease: "power1.inOut",
      // motionPath: {
      //   path: [
      //     { x: 0, y: 0 },
      //     { x: -50, y: 0 },
      //     { x: 0, y: 0 },
      //   ],
      //   curviness: 1.5,
      // },
      // repeat: -1,
      // duration: 2,
      // ease: "power1.inOut",
      // opacity: 0.3,
      // repeat: -1,
      // yoyo: true,
      // duration: 0.4,
      // ease: "sine.inOut",
    });

    // gsap.fromTo(
    //   dotRef.current,
    //   { scale: 0.8, opacity: 0.8 },
    //   {
    //     scale: 1.2,
    //     opacity: 1,
    //     repeat: -1,
    //     yoyo: true,
    //     transformOrigin: "center",
    //     duration: 1.2,
    //     ease: "power2.inOut",
    //   }
    // );
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Capa_1"
      version="1.1"
      viewBox="0 0 500 351.5"
      className={`overflow-visible text-$white !important scale-50`}
      ref={dotRef}
    >
      <path
        className="st0"
        color={fill}
        d="M70.9,221.1c-8.9-1.6,38.9-137.6,31.4-153C72,6.6-62.8,214.1,56.8,264.1c0,0,57.2,25.9,120.9-38.8,0,0-6.7,101.5,70.8,113.4,77.5,11.9,129.5-57.7,178.3-143.2,48.8-85.5,43.3-178.4-12.5-186.5-130.4-18.9-168.8,235.9-179,235.7-7.2-.2,10.1-109,14.6-131.5,5.8-29.1,19.7-107.9-43.1-97.2S76.9,222.2,70.9,221.1Z"
      />
      <path
        color={"white"}
        className="st0 "
        d="M493.8,274.9c3.3,25.7-15.5,48.8-42.1,51.6-26.6,2.8-50.9-15.7-54.2-41.4s15.5-48.8,42.1-51.6c26.6-2.8,50.9,15.7,54.2,41.4Z"
      />
    </svg>
  );
};

export default WoohooSvgWhite;
