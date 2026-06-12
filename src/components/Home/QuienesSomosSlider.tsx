"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
// import { ArrowRight } from "react-feather";


const QuienesSomosSlider = () => {
   return (
    <Swiper
      modules={[Autoplay, A11y, Navigation]}
      navigation
      loop
      autoplay={{
        delay: 3000,
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
      {slides.map((slide, i) => (
        <SwiperSlide className="" key={i}>
          <div className={` h-[400px] bg-cover relative rounded-lg overflow-hidden`}>
            <div className="relative  h-[400px]">
              <div>
                <Image
                  src={slide.link}
                  alt={`bg Poster`}
                  //   className={`${i === 1 ? 'object-cover' : 'object-contain' } hidden md:block`}
                  className={"object-contain  lg:object-cover rounded-lg"}
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

export default QuienesSomosSlider;


  //   if (lang === "es") slides = slidesE;
  //   else slides = slides  En;
 
type Slides = {
  link: string;
};
const slides: Slides[] = [
  {
    link: "https://cdn.sanity.io/images/5egex671/production/fa42d8f731096a0adea72ee94a22b148c7c36d19-1920x1920.jpg",
  },
  {
    link: "https://cdn.sanity.io/images/5egex671/production/95c2425c3be17ac7db1a4966e0eaa1cbfda5f494-1920x1920.jpg",
  },
  {
    link: "https://cdn.sanity.io/images/5egex671/production/4a47fb4b34f9ff23cacbcdd18f44de167eea28e7-1920x1920.jpg",
  },
  {
    link: "https://cdn.sanity.io/images/5egex671/production/5ed9f005682b1fc50c4056a49372d7ff957864b7-1920x1920.jpg",
  },
  {
    link: "https://cdn.sanity.io/images/5egex671/production/4c351437a86e3d9507051e82417bce9484a8b7d4-2880x1920.jpg",
  },
  {
    link: "https://cdn.sanity.io/images/5egex671/production/bf5e90e53582db737ef6b23664ecd9f48aa3bb83-1920x1920.jpg",
  },
  {
    link: "https://cdn.sanity.io/images/5egex671/production/2abed7bfd60527bddf0f1bd7d75d38ed719e7a28-1920x1920.jpg",
  },
];
