import React from "react";

const page = () => {
  return (
    // <div className="relative w-full pb-[75.25%] md:pb-[45.25%] max-h-[55vh] flex justify-center">
    <div className="relative min-h-screen">
      <video
        data-testid="video"
        className="w-full   h-full absolute top-0 left-1/2 -translate-x-1/2 object-cover object-center md:block hidden"
        width="100%"
        height="1000%"
        controls
        autoPlay={true}
        loop
        playsInline
      >
        <source
          src={
            "https://cdn.sanity.io/files/5egex671/production/4bb4aea80b9af4f95ceddc9697f9da96f8b00672.mp4"
          }
          type="video/mp4"
        />
      </video>
      <video
        data-testid="video"
        className="w-full  h-full absolute top-0 left-0 object-contain md:hidden"
        width="100%"
        height="80%"
        controls
        autoPlay={true}
        loop
        playsInline
      >
        <source
          src={
            "https://cdn.sanity.io/files/5egex671/production/4bb4aea80b9af4f95ceddc9697f9da96f8b00672.mp4"
          }
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default page;
