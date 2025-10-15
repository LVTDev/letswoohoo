import OurCulture from "@/components/General UI/OurCulture";
import TeamList from "@/components/General UI/TeamList";
import { fetchSanity } from "@/utils/sanityFetch";
import { ArrowRightIcon } from "@sanity/icons";
import React from "react";

const page = async () => {
  const teamList = await fetchSanity("equipo");
  return (
    <div className="pt-[80px] w-[90%] mx-auto font-albert">
      <TeamList teamList={teamList} />
      <div className="h-[1px] bg-gray-600 w-full my-10" />
      <div>
        <p className="uppercase text-4xl font-extrabold tracking-widest">
          our culture
        </p>
        <div>
          <OurCulture />
        </div>
        <div className="h-[1px] bg-gray-600 w-full mt-10 mb-6" />
        <div>
          <p className="uppercase text-4xl font-extrabold tracking-widest mb-5">
            join our <br /> team
          </p>
          <p className="flex items-center text-lg font-medium">
            <span className="inline mr-3">
              <ArrowRightIcon className="inline" />
            </span>
            hello@letswoohoo.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
