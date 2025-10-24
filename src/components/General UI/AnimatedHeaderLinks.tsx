"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const items = [
  { label: "Clients", id: "firstSection", link: "/clients" },
  { label: "Services", id: "secondSection", link: "/services" },
  { label: "Our Team", id: "thirdSection", link: "/team" },
  { label: "Contact", id: "fourthSection", link: "/letsTalk" },
];

const AnimatedHeaderLinks = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { contextSafe } = useGSAP({ scope: containerRef });

  useEffect(() => {
    const onHoverAnimation = contextSafe(() => {
      const links = gsap.utils.toArray("li a") as HTMLAnchorElement[];
      links.forEach((link) => {
        const linkTL = gsap.timeline({
          defaults: { ease: "power4.inOut", duration: 0.6 },
        });

        const headingstart = link.querySelector(".primary");
        const headingend = link.querySelector(".secondary");
  

        linkTL
          .to(headingstart, { yPercent: -100 })
          .to(
            headingend,
            {
              yPercent: -100,
            },
            "<"
          )
          .to(
            headingend,
            {
              color: "#caeb0c",
            },
            "<.2"
          );

        linkTL.pause();

        link.addEventListener("mouseenter", () => {
          linkTL.play();
        });
        link.addEventListener("mouseleave", () => {
          linkTL.reverse();
        });
      });
    });
    onHoverAnimation();
  }, []);

  return (
    <div ref={containerRef}>
      <ul className="flex uppercase md:gap-8 gap-2 w-1/2 justify-between items-center font-bold">
        {items.map(({ label, id, link }) => (
          <li key={id} className="">
            <Link href={link}>
              <div
                className={`overflow-hidden md:h-4 h-3 w-max relative ${id} heading-container text-[8px] md:text-sm`}
              >
                <p className="primary">{label}</p>
                <p className="secondary">{label}</p>
              </div>
            </Link>
          </li>
        ))}
        <div>
          <a href="https://barracaproducciones.mx/">
            <div className="w-14">
              <Image alt="logo woohoo audiovisual"  src={"/woohoo audivisual.png"} width={100} height={100}/>
              {/* <BarracaSvgWhite /> */}
            </div>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default AnimatedHeaderLinks;
