'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TeamListImage from "../General UI/TeamListImage";
// import { ArrowRight } from "react-feat

type Person = {
_id: string;
orderPosition: string;
puesto: string;
mainImage: { _type: string; alt: string };
nombre: string;
departamento: string;
puestoESP: string
};

type Team = {
teamList: Person[];
lang: string
};
const TeamListHomeSlider = ({ teamList, lang }: Team) => {
  return (
    <div className='py-8'>
      <Swiper
        modules={[Autoplay, A11y, Navigation]}
        navigation
        loop
        speed={1100}
        spaceBetween={70}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="w-full"
        slidesPerView={5}
        style={{ height: '500px' }}
      >
        <SwiperSlide >
          </SwiperSlide>
        <SwiperSlide >
          </SwiperSlide>
        {teamList.map((person, i) => (
          <SwiperSlide key={i} style={{ height: '500px', display: 'flex', flexDirection: 'column', justifyContent: i === 0 ? 'center' :  i % 2 === 0 ? 'flex-start' : 'flex-end' }}>
            
            <div style={i === 0 ? { borderRight: '4px solid #000' } : {}}>
                <TeamListImage  lang={lang} person={person} />
                </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamListHomeSlider




  


