import Image from "next/image";
import React from "react";

type ImageProps = {
  imageLink: string;
  size: "normal" | "large" | "tall" | "half";
  alt: string;
  full?: boolean;
  premio?: "amco" | "muse" | "wina";
};
 const premioLinks = {
    muse: "https://cdn.sanity.io/images/5egex671/production/11bef979b16c33138314dc46011cb442a51ca379-173x201.png",
    amco: "https://cdn.sanity.io/images/5egex671/production/b5cf8babf84c5ff7f5d6db74db9c10aa1e4f816f-172x201.png",
    wina: "https://cdn.sanity.io/images/5egex671/production/cea75aea900778d0d714599f5f6682fc32f7dd14-173x201.png"
 }
const HomeProjectImage = ({ imageLink, size, alt, full, premio }: ImageProps) => {
  return (
    <div
      className={`${size === "half" && "w-1/2 aspect-square"} ${size === "normal" && "w-1/3 aspect-square"} ${size === "large" && "w-2/3 aspect-video"} ${size === "tall" && "aspect-[1/2]"} relative ${full && "w-full"}`}
    >
      <Image src={imageLink} alt={alt} fill />
      {premio && (
        <div className="absolute right-3 top-0 w-10 h-10">
          <Image width={40} height={40} src={premioLinks[premio]} alt={`${premio} award`} />
        </div>
      )}
    </div>
  );
};

export default HomeProjectImage;
