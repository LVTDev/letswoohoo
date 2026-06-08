"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { homeProjectsDesktop } from "@/utils/clientsHomeDesktop";
import HomeProjectImage from "./HomeProjectImage";
const HomeProjectsHorizontal = () => {
  return (
    <div className="py-10">
      <Swiper
        modules={[Autoplay, A11y, Navigation]}
        navigation
        loop
        freeMode={{ enabled: true, sticky: false, momentum: true }}
        speed={1100}
        spaceBetween={0}
        grabCursor={true}
        scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="w-full"
        // slidesPerView={5}
        slidesPerView="auto"
        style={{ height: "500px" }}
      >
        {homeProjectsDesktop.map((proj) => (
          <SwiperSlide className="w-[300px]" key={proj.id}>
            <HomeProjectImage
              imageLink={proj.imageLink}
              alt={proj.alt}
              premio={proj.premio as "amco" | "muse" | "wina"}
              key={proj.id}
              // onClick={() => setSelectedProject(proj)}
              onClick={() => {}}
              videoLink={proj.videoLink}
              isImage={proj.isImage}
              isVideo={proj.isVideo}
              full={proj.full}
              hasLink={proj.hasLink}
              campana={proj.campana!}
              tags={proj.tags!}
              sizes={proj.sizes!}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeProjectsHorizontal;
