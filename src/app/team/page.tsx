import OurCulture from "@/components/General UI/OurCulture";
import TeamList from "@/components/General UI/TeamList";
import { fetchSanity } from "@/utils/sanityFetch";
import React from "react";

const page = async () => {
  const teamList = await fetchSanity("equipo");
  return (
    <div className="pt-[40px] w-[90%] mx-auto font-albert">
      <TeamList teamList={teamList} />
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
