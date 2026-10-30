import React from "react";
import LetsTalkForm from "../General UI/LetsTalkForm";
import { Facebook, Instagram, Linkedin, Youtube } from "react-feather";

const HomeContact = () => {
  return (
    <div className="bg-gray-300 md:flex">
      <div className="w-1/2">
        <LetsTalkForm lang="es" />
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
      <div className="w-1/2">
        <p className="text-lg">CREATIVE & advertising agency</p>
        <p className="text-lg font-medium">
          Río Rosas Sur 330 1er piso, <br />
          Del Valle, C. P. 66220, <br />
          San Pedro Garza Garcia, N.L., <br />
          +52 81 8461 0062
        </p>
      </div>
    </div>
  );
};

export default HomeContact;
