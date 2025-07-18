import Image from "next/image";
import React from "react";

type ImageProps = {
  imageLink: string;
  size: "normal" | "large" | "tall" | "half";
  alt: string;
  full?: boolean;
  premio?: "amco" | "muse" | "wina";
  onClick: () => void;
};
const premioLinks = {
  muse: "https://cdn.sanity.io/images/5egex671/production/11bef979b16c33138314dc46011cb442a51ca379-173x201.png",
  amco: "https://cdn.sanity.io/images/5egex671/production/b5cf8babf84c5ff7f5d6db74db9c10aa1e4f816f-172x201.png",
  wina: "https://cdn.sanity.io/images/5egex671/production/cea75aea900778d0d714599f5f6682fc32f7dd14-173x201.png",
};
const HomeProjectImage = ({
  imageLink,
  size,
  alt,
  full,
  premio,
  onClick,
}: ImageProps) => {
  const sizeClasses = {
    normal: "col-span-1 aspect-square",
    half: "col-span-1 aspect-square",
    large: "col-span-2 aspect-[2.05]",
    tall: "col-span-1 row-span-2 aspect-[.49]", // Tall spans two rows
  };
  return (
    <div
    onClick={onClick}
      className={`relative w-full ${sizeClasses[size]} ${full ? "col-span-full" : ""}`}
    >
      <Image src={imageLink} alt={alt} fill style={{ objectFit: "fill" }} />
      {premio && (
        <div className="absolute right-3 top-0 w-10 h-10">
          <Image
            width={40}
            height={40}
            src={premioLinks[premio]}
            alt={`${premio} award`}
          />
        </div>
      )}
    </div>
  );
};

export default HomeProjectImage;
