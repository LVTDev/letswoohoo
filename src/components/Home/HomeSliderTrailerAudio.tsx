"use client";
import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "react-feather";
// import TrailerSlide from "./TrailerSlider";
import TrailerSlideAudio from "./TrailerSlideAudio";

const HomeSliderTrailerAudio = () => {
  const slides = slidesEn;

  const swiperRef = useRef<SwiperType | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mobileRef = useRef<HTMLVideoElement | null>(null);

  return (
    <Swiper
      id="home-trailer-slider"
      modules={[Autoplay, A11y, Navigation, Pagination]}
      navigation
      // direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      loop
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: false,
      // }}
      className="w-full"
      slidesPerView={1}
      onSlideChange={() => {
        if (videoRef.current) {
          videoRef.current.pause();

          // videoRef.current.currentTime = 0;
        }
        if (mobileRef.current) {
          mobileRef.current.pause();
        }
      }}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide, i) => (
        <SwiperSlide className="" key={i}>
          <div className={` h-[85vh] bg-cover relative`}>
            <div className="relative  h-[85vh]">
              <div>
                <Image
                  src={slide.slideBG}
                  alt={`bg Poster`}
                  //   className={`${i === 1 ? 'object-cover' : 'object-contain' } hidden md:block`}
                  className={"object-contain  lg:object-cover hidden md:block"}
                  fill
                />
                <Image
                  src={slide.mobileBG || slide.slideBG}
                  alt={`bg Poster`}
                  className="object-cover md:hidden"
                  fill
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <SwiperSlide

      // onMouseEnter={() => {
      //   // Stop autoplay while user is hovering the video slide
      //   swiperRef.current?.autoplay.stop();
      //   videoRef.current?.play();
      // }}
      // onMouseLeave={() => {
      //   // Resume autoplay when they leave
      //   swiperRef.current?.autoplay.start();
      // }}
      >
        <TrailerSlideAudio
          urlVertical="https://o5qiahlghji2exja.public.blob.vercel-storage.com/TELEFERICO%20V6_BAJA4.mp4"
          src={
            "https://o5qiahlghji2exja.public.blob.vercel-storage.com/TELEFERICO%20V6_BAJA1.mp4"
          }
          swiperRef={swiperRef}
          videoRef={videoRef}
          mobileRef={mobileRef}
        />
      </SwiperSlide>
    </Swiper>
  );
};

type Slides = {
  slideBG: string;
  slideTitle?: string;
  textTop?: string; // Add the ? here
  textBottom?: string | React.ReactNode;
  link?: string;
  mobileBG?: string;
  laurel1?: string;
  laurel2?: string;
  laurel3?: string;
};
const slidesEn: Slides[] = [
  {
    slideBG:
      "https://o5qiahlghji2exja.public.blob.vercel-storage.com/WEB%20BANNER-RETRABAJO2.jpg",
    mobileBG:
      "https://o5qiahlghji2exja.public.blob.vercel-storage.com/BANNER%20MOBIL.jpg",
  },
  {
    slideBG:
      "https://o5qiahlghji2exja.public.blob.vercel-storage.com/1920x1080_2.jpg",

    mobileBG:
      "https://o5qiahlghji2exja.public.blob.vercel-storage.com/1080x1920.jpg",
  },
];

export default HomeSliderTrailerAudio;
