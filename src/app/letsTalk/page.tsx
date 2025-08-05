import LetsTalkForm from "@/components/General UI/LetsTalkForm";
import React from "react";

const page = () => {
  return (
    <div className="pt-20">
      <h1 className="hidden">Contact us</h1>
      <div className="flex">
        <div className="w-1/2">
          <p>
            Contact <br /> Details
          </p>
          <p>
            Río Rosas Sur 330 1er piso, <br />
            Del Valle, C. P. 66220, <br />
            San Pedro Garza Garcia, N.L., <br />
            +52 81 8461 0062
          </p>
          <p>hello@letswoohoo.com</p>
        </div>
        <LetsTalkForm />
      </div>
      <div>
        <p>where to find us</p>
        <div></div>
      </div>
    </div>
  );
};

export default page;
