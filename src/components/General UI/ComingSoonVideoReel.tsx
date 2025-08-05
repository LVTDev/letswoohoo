"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ComingSoonVideoReel = ({}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showImage, setShowImage] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  const videos = [
    "https://cdn.sanity.io/files/5egex671/production/4bb4aea80b9af4f95ceddc9697f9da96f8b00672.mp4",
  ];

  // const videosStory = [
  //   "https://cdn.sanity.io/files/5egex671/production/4bb4aea80b9af4f95ceddc9697f9da96f8b00672.mp4",
  // ];

  const desktopImage =
    "https://cdn.sanity.io/images/5egex671/production/ee57ccd70923fbf39be2539f29551228eb5b95e9-1921x1080.png";
  const mobileImage =
    "https://cdn.sanity.io/images/5egex671/production/3f62ff8951796badb017c3ba4f87c6baaa3c9499-1081x1921.png";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);
  const enableAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      videoRef.current.play().catch(console.error);
      setAudioEnabled(true);
    }
  };

  return (
    <div className="relative w-screen h-screen">
      {!showImage ? (
        <>
          {/* Desktop Video */}
          <video
            ref={videoRef}
            className="w-full h-full absolute top-0 left-0 object-contain object-center hidden md:block"
            autoPlay
            muted // <- REQUIRED for autoplay to work initially
            loop
            playsInline
          >
            <source src={videos[0]} type="video/mp4" />
          </video>

          {/* Mobile Video */}
          <video
            className="w-full h-full absolute top-0 left-0 object-contain md:hidden"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videos[0]} type="video/mp4" />
          </video>

          {/* Button to enable audio */}
          {!audioEnabled && (
            <button
              onClick={enableAudio}
              className="absolute z-10 bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded shadow-md"
            >
              🔊 Audio
            </button>
          )}
        </>
      ) : (
        <>
    
          <div className="absolute top-0 left-0 w-full h-full hidden md:block">
            <Image
              src={desktopImage}
              alt="Coming Soon Desktop"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Mobile Image */}
          <div className="absolute top-0 left-0 w-full h-full md:hidden">
            <Image
              src={mobileImage}
              alt="Coming Soon Mobile"
              fill
              className="object-contain"
              priority
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ComingSoonVideoReel;
