"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
// import { ArrowRight } from "react-feather";
// import VideoSlide from "./VideoSlide";

const HomeSlider = ({ lang }: { lang: string }) => {
  console.log(lang);
  const slides = slidesEn;
  //   if (lang === "es") slides = slidesE;
  //   else slides = slidesEn;
  return (
    <Swiper
      modules={[Autoplay, A11y, Navigation]}
      navigation
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="w-full"
      slidesPerView={1}
      //   onSlideChange={() => {
      //     if (currentIndex > 13) setCurrentIndex(0);
      //     else setCurrentIndex((prev) => prev + 1);
      //     console.log("slide change");
      //   }}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      {/* <SwiperSlide>
        <VideoSlide url="https://cdn.sanity.io/files/yj63f9tw/production/1191d176a7972c9c0101827435421f272e6621e9.mp4" />
      </SwiperSlide> */}
      {slides.map((slide, i) => (
        <SwiperSlide className="" key={i}>
          <div className={` h-[95h] bg-cover relative`}>
            <div className="relative  h-[95vh]">
              <div>
                <Image
                  src={slide.slideBG}
                  alt={`bg Poster`}
                  className="object-cover hidden md:block"
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
      "https://o5qiahlghji2exja.public.blob.vercel-storage.com/BANNER%20WEB.jpg",
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

export default HomeSlider;
