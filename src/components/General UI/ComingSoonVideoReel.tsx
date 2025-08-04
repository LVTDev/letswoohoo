"use client";
import { useEffect, useRef, useState } from "react";

const ComingSoonVideoReel = ({}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const videos = [
    "https://cdn.sanity.io/files/5egex671/production/4bb4aea80b9af4f95ceddc9697f9da96f8b00672.mp4",
    "https://cdn.sanity.io/files/5egex671/production/7146bab3203e9049258e58390ce7414b970946b1.mp4",
  ];

  const videosStory = [
    "https://cdn.sanity.io/files/5egex671/production/4bb4aea80b9af4f95ceddc9697f9da96f8b00672.mp4",
    "https://cdn.sanity.io/files/5egex671/production/38838214249f3e57653ee620538bd640d6af3b12.mp4",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoIndex(1); // Switch to second video after 30 seconds
    }, 30000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  useEffect(() => {
    // When videoIndex changes, load and play the new video
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.load();
      videoElement.play().catch((e) => console.error("Play error:", e));
    }
  }, [videoIndex]);

  return (
    // <div className="relative w-full pb-[75.25%] md:pb-[45.25%] max-h-[55vh] flex justify-center">
    <div className="relative w-screen h-screen">
      <video
        data-testid="video"
        className="w-full  h-full absolute top-0 left-0 object-contain object-center md:block hidden"
        width="80%"
        height="1000%"
        muted={true}
        autoPlay={true}
        loop
        playsInline
        ref={videoRef}
      >
        <source src={videos[videoIndex]} type="video/mp4" />
      </video>
      <video
        data-testid="video"
        className="w-full  h-full absolute top-0 left-0 object-contain md:hidden"
        width="100%"
        height="80%"
        muted={true}
        autoPlay={true}
        loop
        playsInline
      >
        <source src={videosStory[videoIndex]} type="video/mp4" />
      </video>
    </div>
  );
};

export default ComingSoonVideoReel;
