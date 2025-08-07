import { ArrowRightIcon } from "@sanity/icons";
import React from "react";

const Footer = () => {
  return (
    <footer className="pb-8 font-albert font-bold w-[90%] mx-auto">
      <div className="h-[1px] bg-gray-600 w-full my-6" />
      <div className="flex justify-around  ">
        <div>
          <p>&copy; 2025 WOOHOO</p>
          <p>AVISO DE PRIVACIDAD</p>
          <p>TÉRMINOS Y CONDICIONES DE USO</p>
        </div>
        <div>
          <p>+52 81 8461 0062</p>
          <p>HELLO@LETSWOOHOO.COM</p>
        </div>
        <div>
          <p>
            <ArrowRightIcon className="inline" /> FACEBOOK
          </p>
          <p>
            <ArrowRightIcon className="inline" /> INSTAGRAM
          </p>
          <p>
            <ArrowRightIcon className="inline" /> LINKEDIN
          </p>
          <p>
            <ArrowRightIcon className="inline" /> YOUTUBE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
