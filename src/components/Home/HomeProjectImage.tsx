// import Image from "next/image";
import Image from "next/image";
import React from "react";

type ImageProps = {
  imageLink?: string;
  alt: string;
  full?: string;
  premio?: "amco" | "muse" | "wina";
  videoLink?: string;
  isImage?: boolean;
  isVideo?: boolean;
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
}: ImageProps) => {
  if (isImage && imageLink && imageLink.length > 0)
    return (
      <div
        onClick={onClick}
        className={`relative cursor-pointer   rounded-lg overflow-hidden ${full === "full" && "col-span-3 h-[80vh]"} ${full === "wide" && "col-span-2  h-auto"} ${full === "thin" && "col-span-1 aspect-square"}`}
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
        <div className="relative w-full h-full ">
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
      </div>
    );

  if (isVideo)
    return (
      <div className="relative col-span-3 max-h-[80vh] min-h-[400px] rounded-lg overflow-hidden">
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
      </div>
    );
  //     normal: " aspect-square",
  // half: "col-span-1 aspect-square",
  // large: " aspect-[2.05]",
  // tall: "col-span-1 row-span-2 "
};

export default HomeProjectImage;
