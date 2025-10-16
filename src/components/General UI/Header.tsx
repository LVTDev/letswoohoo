"use client";
import Link from "next/link";
// import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import WoohooSvgWhite from "./WoohooSvgWhite";
// import { usePathname } from "next/navigation";
import AnimatedHeaderLinks from "./AnimatedHeaderLinks";

const Header = () => {
  // const pathname = usePathname();
  // const container = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  // useGSAP(() => {
  //   if (pathname !== "/") return;
  //   ScrollTrigger.create({
  //     trigger: document.body,
  //     start: "top top",
  //     end: "max",
  //     onUpdate: (self) => {
  //       if (self.progress > 0.2) {
  //         gsap.to(container.current, {
  //           background: "#2b2f35f2",
  //         });
  //       } else {
  //         gsap.to(container.current, {
  //           background: "#2b2f3579",
  //         });
  //       }
  //     },
  //   });
  // }, [pathname]);
  return (
    <header
      className={`fixed top-0 left-0  w-screen font-albert z-1000   text-white`}
    >
      {" "}
      <div
        className={`justify-between items-center w-full bg-[#2b2f35c4]  ${"flex"} py-2 px-4 md:px-12 text-xs`}
      >
        <div className="w-10 md:w-16">
          <Link href="/">
            <WoohooSvgWhite fill="white" />
          </Link>
        </div>
        {/* <div className="flex uppercase gap-8 w-1/2 justify-between font-bold">
          <Link href={"/clients"}>Clients</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/team"}>Our Team</Link>
          <Link href={"/blog"}>Blog</Link>
          <div>
            <a href="https://barracaproducciones.mx/">
              <div className="w-14">
                <BarracaSvgWhite />
              </div>
            </a>
          </div>
        </div> */}
        <AnimatedHeaderLinks />
      </div>
    </header>
    // <header
    //   className={`fixed top-0 left-1/2 -translate-x-1/2 w-screen font-albert z-50   text-white`}
    // >
    //   <div
    //     ref={container}
    //     className={`justify-between items-center bg-transparent  ${
    //       pathname === "/" ? "flex" : "hidden"
    //     } py-4 px-4 md:px-12 text-xs`}
    //   >
    //     <div className="w-10">
    //       <Link href="/">
    //         <WoohooSvgWhite fill="white" />
    //       </Link>
    //     </div>
    //     {/* <div className="flex uppercase gap-8 w-1/2 justify-between font-bold">
    //       <Link href={"/clients"}>Clients</Link>
    //       <Link href={"/services"}>Services</Link>
    //       <Link href={"/team"}>Our Team</Link>
    //       <Link href={"/blog"}>Blog</Link>
    //       <div>
    //         <a href="https://barracaproducciones.mx/">
    //           <div className="w-14">
    //             <BarracaSvgWhite />
    //           </div>
    //         </a>
    //       </div>
    //     </div> */}
    //     <AnimatedHeaderLinks />
    //   </div>
    //   <div
    //     className={`justify-between items-center bg-[#2b2f35]  ${
    //       pathname === "/" ? "hidden" : "flex"
    //     } py-4 px-4 md:px-12 text-xs`}
    //   >
    //     <div className="w-10">
    //       <Link href="/">
    //         <WoohooSvgWhite fill="white" />
    //       </Link>
    //     </div>
    //     {/* <div className="flex uppercase gap-8 w-1/2 justify-between font-bold">
    //       <Link href={"/clients"}>Clients</Link>
    //       <Link href={"/services"}>Services</Link>
    //       <Link href={"/team"}>Our Team</Link>
    //       <Link href={"/blog"}>Blog</Link>
    //       <div>
    //         <a href="https://barracaproducciones.mx/">
    //           <div className="w-14">
    //             <BarracaSvgWhite />
    //           </div>
    //         </a>
    //       </div>
    //     </div> */}
    //     <AnimatedHeaderLinks />
    //   </div>
    // </header>
  );
};

export default Header;
