"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef, useState } from "react";

const LetsTalkButton = () => {
  const [fillColor, setFillColor] = useState("black")
  gsap.registerPlugin(useGSAP);
  const buttonRef = useRef<SVGSVGElement | null>(null);

  useGSAP(
    () => {
      gsap.to(buttonRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
      });
      gsap.from(".letsTalk_text-cont", {
        opacity: 0,
        y: 10,
        duration: 0.5,
        delay: 0.4,
      });
      setTimeout(() => {
        gsap.to(buttonRef.current, {
          y: -10,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          // delay: 2,
        });
        // gsap.to(buttonRef.current, {
        //   scale: 1.08,
        //   duration: 0.3,
        //   repeat: -1,
        //   repeatDelay: 2.7,
        //   yoyo: true,
        //   ease: "power1.inOut",
        // });
      }, 5000);
    },
    { scope: buttonRef }
  );
  return (
    <div onMouseLeave={() => setFillColor("black")} onMouseEnter={() => setFillColor("white")}  className="w-12 hover:text-white transition md:w-22 fixed right-2 bottom-[10%] z-1000">
      <Link href={"/letsTalk"}>
        <svg
          className="opacity-0 scale-80 translate-y-20"
          ref={buttonRef}
          xmlns="http://www.w3.org/2000/svg"
          id="Capa_1"
          version="1.1"
          viewBox="0 0 198.2 222.2"
        >
          <path
            className="st0_letsTalk"
            d="M168.2,198.2l-17.2,24-15.5-24H30c-16.5,0-30-13.5-30-30V30C0,13.5,13.5,0,30,0h138.2c16.5,0,30,13.5,30,30v138.2c0,16.5-13.5,30-30,30Z"
          />
          <g className="letsTalk_text-cont"   fill={fillColor}>
            <path d="M41.9,94.3v-47.5h9.8v47.5h-9.8Z" />
            <path d="M67.5,82c1.1,3,3.7,4.5,7.8,4.5s4.7-.8,6.2-2.5l7.8,4.5c-3.2,4.5-7.9,6.7-14.2,6.7s-9.8-1.6-13.1-4.9c-3.3-3.2-4.9-7.3-4.9-12.3s1.6-9,4.8-12.3c3.2-3.3,7.4-4.9,12.4-4.9s8.7,1.6,11.8,4.9c3.1,3.3,4.7,7.4,4.7,12.3s-.1,2.7-.4,3.9h-23.1ZM67.3,74.7h14c-1-3.4-3.2-5.1-6.9-5.1s-6.1,1.7-7.1,5.1Z" />
            <path d="M114.5,71.2h-6.7v11.5c0,1.3.5,2.1,1.6,2.5,1,.3,2.8.5,5.1.3v8.8c-6.2.7-10.5,0-12.9-1.8-2.4-1.8-3.6-5.1-3.6-9.8v-11.5h-5.2v-9.4h5.2v-6.2l9.8-2.9v9.1h6.7v9.4Z" />
            <path d="M121.7,64.4l-1.3-15.6h9.1l-1.3,15.6h-6.5Z" />
            <path d="M142.3,71.3c0,.6.6,1.2,1.7,1.6,1.1.4,2.4.8,4,1.2,1.6.4,3.1.9,4.7,1.6,1.6.6,2.9,1.7,4,3.2,1.1,1.5,1.7,3.4,1.7,5.6,0,3.5-1.3,6.2-3.9,8-2.6,1.8-5.8,2.7-9.6,2.7-6.8,0-11.5-2.6-14-7.7l8.5-4.8c.9,2.6,2.7,3.8,5.5,3.8s3.5-.7,3.5-2-.6-1.2-1.7-1.6c-1.1-.4-2.4-.9-4-1.3-1.6-.4-3.1-1-4.7-1.6-1.6-.7-2.9-1.7-4-3.2-1.1-1.4-1.7-3.2-1.7-5.3,0-3.4,1.2-6,3.7-7.9,2.4-1.9,5.5-2.8,9.1-2.8s5.1.6,7.3,1.8c2.2,1.2,4,2.9,5.3,5.2l-8.3,4.5c-1-1.9-2.5-2.9-4.4-2.9s-2.7.6-2.7,1.8Z" />
            <path d="M63.7,131.2h-6.7v11.5c0,1.3.5,2.1,1.6,2.5s2.8.5,5.1.3v8.8c-6.2.7-10.5,0-12.9-1.8-2.4-1.8-3.6-5.1-3.6-9.8v-11.5h-5.2v-9.4h5.2v-6.2l9.8-2.9v9.1h6.7v9.4Z" />
            <path d="M92.1,121.8h9.8v32.5h-9.8v-3.1c-2.3,2.6-5.5,4-9.7,4s-8-1.7-11-5c-3-3.3-4.5-7.4-4.5-12.2s1.5-8.9,4.5-12.2c3-3.3,6.7-5,11-5s7.4,1.3,9.7,4v-3.1ZM78.8,143.9c1.4,1.4,3.3,2.1,5.6,2.1s4.2-.7,5.6-2.1c1.4-1.4,2.1-3.4,2.1-5.8s-.7-4.4-2.1-5.8c-1.4-1.4-3.3-2.1-5.6-2.1s-4.2.7-5.6,2.1c-1.4,1.4-2.1,3.4-2.1,5.8s.7,4.4,2.1,5.8Z" />
            <path d="M109,154.3v-47.4h9.8v47.4h-9.8Z" />
            <path d="M157.1,154.3h-11.1l-10.4-14.3v14.3h-9.8v-45.5h9.8v27.2l9.8-14.2h11.4l-11.8,16.2,12.2,16.2Z" />
          </g>
        </svg>
      </Link>
    </div>
  );
};

export default LetsTalkButton;
