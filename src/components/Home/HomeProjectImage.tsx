// import Image from "next/image";
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
  campana: string;
  tags: string[];
  onClick: () => void;
};
// const premioLinks = {
//   muse: "https://cdn.sanity.io/images/5egex671/production/11bef979b16c33138314dc46011cb442a51ca379-173x201.png",
//   amco: "https://cdn.sanity.io/images/5egex671/production/b5cf8babf84c5ff7f5d6db74db9c10aa1e4f816f-172x201.png",
//   wina: "https://cdn.sanity.io/images/5egex671/production/cea75aea900778d0d714599f5f6682fc32f7dd14-173x201.png",
// };
const HomeProjectImage = ({
  imageLink,
  alt,
  full,
  // premio,
  onClick,
  videoLink,
  isImage,
  isVideo,
  hasLink,
  campana,
  tags,
}: ImageProps) => {
  gsap.registerPlugin(useGSAP);
  const contRef = useRef<null | HTMLDivElement>(null);
  const mainRef = useRef<null | HTMLDivElement>(null);
  const campanaRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const tl = gsap.timeline({ paused: true });
  const hovertl = gsap.timeline({ paused: true });
  useGSAP(() => {
    if (contRef.current) {
      tl.to(contRef.current, {
        scale: 1.1,
        rotate: 2,
        duration: 0.8,
        ease: "elastic.out",
      });
      // Add hover events
      const onEnter = () => tl.play();
      const onLeave = () => tl.reverse();
      if (hasLink) {
        contRef.current.addEventListener("mouseenter", onEnter);
        contRef.current.addEventListener("mouseleave", onLeave);
      }
    }

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
        className={`relative   rounded-lg overflow-hidden ${full === "full" && "col-span-3 h-[200px] md:h-[84vh]"} ${full === "wide" && "col-span-2  h-auto"} ${full === "thin" && "col-span-1 aspect-square"}`}
      >
        {/* <img src={imageLink} alt={alt} className=""  /> */}
        {/* {premio && (
          <div className="absolute right-3 top-0 w-10 h-10">
            <Image
              width={40}
              height={40}
              src={premioLinks[premio]}
              alt={`${premio} award`}
            />
          </div>
        )} */}
        <div ref={contRef} className="relative w-full h-full ">
          {" "}
          {/* fixed height for uniform display */}
          <Image
            src={imageLink}
            alt={alt}
            fill
            className="object-cover object-center" // crop while keeping aspect ratio
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {campana && (
          <div
            ref={campanaRef}
            className="absolute top-2 left-2 opacity-0 -translate-y-4 bg-[#ffffff7a] backdrop-blur-lg text-black px-2 py-1 rounded-full text-sm md:text-base"
          >
            {campana}
          </div>
        )}
        {tags && tags.length > 0 && (
          <div className="absolute flex gap-3 w-auto bottom-2 left-2">
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
        )}
      </div>
    );
    return hasLink ? <Link href={hasLink}>{imageElement}</Link> : imageElement;
  }

  if (isVideo)
    return (
      <div
        ref={mainRef}
        className="relative col-span-3 max-h-[80vh] md:min-h-[400px] rounded-lg overflow-hidden"
      >
        <video
          data-testid="video"
          // className="w-full   h-full absolute top-0 left-1/2 -translate-x-1/2 object-cover object-center md:block hidden"
          width="100%"
          height="1000%"
          muted={true}
          autoPlay={true}
          loop
          playsInline
        >
          <source src={videoLink} type="video/mp4" />
        </video>
        {campana && (
          <div
            ref={campanaRef}
            className="absolute z-100 top-2 left-2 opacity-0 -translate-y-4 bg-[#ffffff7a] backdrop-blur-lg text-black px-2 py-1 rounded-full text-sm md:text-base"
          >
            {campana}
          </div>
        )}
        {tags && tags.length > 0 && (
          <div className="absolute z-100 flex gap-3 w-auto bottom-2 left-2">
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
        )}
      </div>
    );
  //     normal: " aspect-square",
  // half: "col-span-1 aspect-square",
  // large: " aspect-[2.05]",
  // tall: "col-span-1 row-span-2 "
};

export default HomeProjectImage;
