"use client";
import React, { useEffect, useState } from "react";

interface VideoSlideProps {
  src: string;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  urlVertical?: string;
}

function useIsMobile(breakpoint = 768) {
  // undefined until mounted, to avoid hydration mismatch
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

const TrailerSlideAudio = ({ src, urlVertical, videoRef }: VideoSlideProps) => {
  const isMobile = useIsMobile();

  // Don't render anything until we know which source to use
  if (urlVertical && isMobile === undefined) {
    return <div className="relative min-h-screen" />;
  }

  const activeSrc = urlVertical && isMobile ? urlVertical : src;

  return (
    <div className="relative min-h-screen">
      <video
        key={activeSrc} // remount when source changes (e.g. rotate/resize)
        ref={videoRef}
        data-testid="video"
        className="absolute top-0 left-1/2 h-[85vh] w-full -translate-x-1/2 object-cover object-center"
        src={activeSrc}
        muted
        autoPlay
        controls
        loop
        playsInline
      />
    </div>
  );
};

export default TrailerSlideAudio;