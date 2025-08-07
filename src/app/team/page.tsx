import TeamList from "@/components/General UI/TeamList";
import { fetchSanity } from "@/utils/sanityFetch";
import { ArrowRightIcon } from "@sanity/icons";
import React from "react";

const page = async () => {
  const teamList = await fetchSanity("equipo");
  return (
    <div className="pt-[80px] w-[90%] mx-auto font-albert">
      <TeamList teamList={teamList} />
      <div className="h-1 bg-gray-600 w-full my-10" />
      <div>
        <p className="uppercase text-4xl font-extrabold tracking-widest">our culture</p>
        <div>
          <div className="flex gap-3 justify-between my-4">
            <img
              className="w-1/3"
              src="https://cdn.sanity.io/images/5egex671/production/676488691f5b9e05241c859e9e0d2eb483b8c129-476x476.png"
              alt="equipo LVT"
            />
            <img
              className="w-1/3"
              src="https://cdn.sanity.io/images/5egex671/production/09304705fef63876a33255b02832840d1f9a99e7-476x476.png"
              alt="equipo LVT"
            />
            <img
              className="w-1/3"
              src="https://cdn.sanity.io/images/5egex671/production/0fe357b56875813b396a641796ee6f02ac90cdba-476x476.png"
              alt="equipo LVT"
            />
          </div>
        </div>
        <div className="h-1 bg-gray-600 w-full my-10" />
        <div>
          <p className="uppercase text-4xl font-extrabold tracking-widest mb-5">join our <br /> team</p>
          <p className="flex items-center text-lg font-medium">
            <span className="inline mr-3">
              <ArrowRightIcon className="inline" />
            </span>
            hello@letswoohoo.com
          </p>
        </div>
        <div className="h-1 bg-gray-600 w-full my-10" />
      </div>
    </div>
  );
};

export default page;
