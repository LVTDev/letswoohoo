"use client";
import React, { useEffect } from "react";
import { Swiper as SwiperType } from "swiper";

interface VideoSlideProps {
  src: string;
  swiperRef: React.RefObject<SwiperType | null>;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  urlVertical?: string;
}

const TrailerSlideAudio = ({
  src,
  swiperRef,
  videoRef,
  urlVertical,
}: VideoSlideProps) => {
  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);
  return (
    <div
      className="relative min-h-screen"
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
    >
      {urlVertical ? (
        <>
          <video
            ref={videoRef}
            data-testid="video"
            className="w-full h-full md:hidden block absolute top-0 left-1/2 -translate-x-1/2 object-cover object-center"
            width="100%"
            height="100%"
            muted
            autoPlay
            controls
            loop
            playsInline
          >
            <source src={urlVertical} type="video/mp4" />
          </video>
          <video
            ref={videoRef}
            data-testid="video"
            className="w-full h-full hidden md:block absolute top-0 left-1/2 -translate-x-1/2 object-cover object-center"
            width="100%"
            height="100%"
            muted
            autoPlay
            controls
            loop
            playsInline
          >
            <source src={src} type="video/mp4" />
          </video>
        </>
      ) : (
        <video
          ref={videoRef}
          data-testid="video"
          className="w-full h-full  absolute top-0 left-1/2 -translate-x-1/2 object-cover object-center"
          width="100%"
          height="100%"
          muted
          autoPlay
          controls
          loop
          playsInline
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default TrailerSlideAudio;
