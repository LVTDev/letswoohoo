import OurCulture from "@/components/General UI/OurCulture";
import TeamList from "@/components/General UI/TeamList";
import { fetchSanity } from "@/utils/sanityFetch";
import React from "react";

const page = async () => {
  const teamList = await fetchSanity("equipo");
  return (
    <div className="pt-[40px] w-[90%] mx-auto font-albert">
      <div className="h-0 opacity-0">
        <h1 className="hidden">Hablemos de ideas que hacen ecooo</h1>
        <h2>
         ¿Tienes una marca lista para moverse, brillar o sonar más fuerte?
        </h2>
        <p>
         Estamos aquí para crear contigo.
        </p>
        <p>
         Escríbenos, visítanos o mándanos un “Let’s Woohoo” y hagamos que tus ideas se vuelvan ecoooo.
        </p>
      </div>
      <TeamList teamList={teamList} lang={"en"} />
      <div className="h-[1px] bg-gray-600 w-full my-10" />
      <div>
        <p className="uppercase text-4xl font-extrabold tracking-widest">
          our culture
        </p>
        <div>
          <OurCulture />
        </div>
      </div>
    </div>
  );
};

export default page;
