import React from "react";
import LetsTalkForm from "../General UI/LetsTalkForm";
import { Facebook, Instagram, Linkedin, Youtube } from "react-feather";

const HomeContact = () => {
  return (
    <div className="bg-[#303030] md:flex justify-center py-10">
      <div className="w-1/2 flex flex-col items-center">
        <LetsTalkForm isHome={true} lang="es" />
        <div className="flex gap-4">
          <div className="bg-[#FFBA03] rounded-full w-10 h-10 flex items-center justify-center">
            <Facebook color="white" fill="white" />
          </div>
          <div className="bg-[#FFBA03] rounded-full w-10 h-10 flex items-center justify-center">
            <Instagram color="white" />
          </div>
          <div className="bg-[#FFBA03] rounded-full w-10 h-10 flex items-center justify-center">
            <Youtube color="white" />
          </div>
          <div className="bg-[#FFBA03] rounded-full w-10 h-10 flex items-center justify-center">
            <Linkedin color="white" fill="white" />
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default HomeContact;
