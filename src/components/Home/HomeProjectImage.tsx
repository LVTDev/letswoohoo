"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

type ImageProps = {
  imageLink?: string;
  alt: string;
  full?: string;
  premio?: "amco" | "muse" | "wina";
  videoLink?: string;
  hasLink?: string;
  isImage?: boolean;
  isVideo?: boolean;
  campana?: string;
  tags?: string[];
  sizes: string;
  clientName?: string;
  onClick: () => void;
  popupContent: React.ReactElement;
};

const HomeProjectImage = ({
  imageLink,
  alt,
  full,
  onClick,
  videoLink,
  isImage,
  isVideo,
  hasLink,
  // campana,
  // tags,
  sizes,
  popupContent,
}: ImageProps) => {
  gsap.registerPlugin(useGSAP);

  const mainRef = useRef<null | HTMLDivElement>(null);
  const campanaRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const hovertl = gsap.timeline({ paused: true });

  const isInteractive = Boolean(hasLink || popupContent);

  useGSAP(() => {
    if (!mainRef.current) return;
    hovertl
      .to(campanaRef.current, {
        y: "16px",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      })
      .to(tagsRef.current, {
        y: "-16px",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.2,
      });

    const onHoverEnter = () => hovertl.play();
    const onHoverLeave = () => hovertl.reverse();

    mainRef.current.addEventListener("mouseenter", onHoverEnter);
    mainRef.current.addEventListener("mouseleave", onHoverLeave);
  });

  if (isImage && imageLink && imageLink.length > 0) {
    const imageElement = (
      <div
        onClick={onClick}
        ref={mainRef}
        className={`group relative rounded-lg overflow-hidden ${
          isInteractive ? "cursor-pointer" : "cursor-default"
        } ${full === "full" && "col-span-3 h-[200px] md:h-[84vh]"} ${
          full === "wide" && "col-span-2 h-auto"
        } ${full === "thin" && "col-span-1 aspect-square"}`}
      >
        <div className="relative w-full h-full">
          <Image
            src={imageLink}
            alt={alt}
            fill
            className={`object-cover object-center transition-transform duration-300 ${
              isInteractive ? "group-hover:scale-105" : ""
            }`}
            sizes={sizes}
          />
        </div>

        {(popupContent || hasLink) && (
          <div
            className="absolute inset-0 flex flex-col justify-end p-4
             bg-gradient-to-t from-black/80 via-black/20 to-transparent
             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p className="text-white/80 text-xs text-center font-bold">
              Click para ver más
            </p>
          </div>
        )}
      </div>
    );
    return hasLink ? (
      <Link className="cursor-pointer" href={hasLink}>
        {imageElement}
      </Link>
    ) : (
      imageElement
    );
  }

  if (isVideo)
    return (
      <div
        onClick={onClick}
        ref={mainRef}
        className={`group relative col-span-3 max-h-[80vh] md:min-h-[400px] rounded-lg overflow-hidden ${
          isInteractive ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <video
          data-testid="video"
          width="100%"
          height="1000%"
          muted={true}
          autoPlay={true}
          loop
          playsInline
        >
          <source src={videoLink} type="video/mp4" />
        </video>
        {isInteractive && (
          <div
            className="absolute inset-0 flex flex-col justify-end p-4
   bg-gradient-to-t from-black/80 via-black/20 to-transparent
   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p className="text-white/80 text-xs text-center font-bold">
              Click para ver más
            </p>
          </div>
        )}
        {/* {campana && (
          <div
            ref={campanaRef}
            className="absolute z-10 top-2 left-2 opacity-0 -translate-y-4 bg-[#ffffff7a] backdrop-blur-lg text-black px-2 py-1 rounded-full text-sm md:text-base"
          >
            {campana}
          </div>
        )} */}
        {/* {tags && tags.length > 0 && (
          <div className="absolute z-10 flex gap-3 w-auto bottom-2 left-2">
            {tags.map((tag, i) => (
              <p
                ref={(el) => {
                  tagsRef.current[i] = el;
                }}
                className="bg-[#ffffff7a] opacity-0 translate-y-4 backdrop-blur-lg text-black px-2 py-1 rounded-full text-sm md:text-base"
                key={i}
              >
                {tag}
              </p>
            ))}
          </div>
        )} */}
      </div>
    );

  return null;
};

export default HomeProjectImage;
