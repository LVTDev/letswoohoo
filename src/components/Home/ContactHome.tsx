'use client'
import React from "react";
import LetsTalkForm from "../General UI/LetsTalkForm";
// import Map from "../General UI/Map";
import CalendlyForm from "../General UI/CalendlyForm";
import { Mail } from "react-feather";
import dynamic from "next/dynamic";


const Map = dynamic(() => import("@/components/General UI/Map"), {
    ssr: false,
});
const ContactHome = ({ lang }: { lang: string }) => {
    
  return (
    <div className="w-3/4 mx-auto">
      <LetsTalkForm lang="en" />

      <div className="md:flex mt-8">
        <div>
          <div className="md:w-1/2 ">
            <h2 className="font-bold text-4xl tracking-widest uppercase mb-6">
              Contact <br /> Details
            </h2>
            <p className="text-lg font-medium">
              Río Rosas Sur 330 1er piso, <br />
              Del Valle, C. P. 66220, <br />
              San Pedro Garza Garcia, N.L., <br />
              +52 81 8461 0062
            </p>
            <div className="text-2xl font-medium my-8 flex items-center ">
              <div>
                <Mail className="inline mr-1 text-[#a501fc]" width={22} />
              </div>
              hello@letswoohoo.com
            </div>
          </div>
        </div>
        <div className="md:w-1/2 ">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            exercitationem aut similique, fugiat tempore sequi deleniti, fuga
            tenetur quisquam beatae unde eligendi quae enim necessitatibus
            doloribus ipsum explicabo sapiente! Ullam!
          </p>
        </div>
      </div>

      <div className="md:flex">
        <div>
          <p className="font-bold text-4xl tracking-widest uppercase">
            where to <br /> find us
          </p>
          <Map />
        </div>
        <div>
          <CalendlyForm />
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
