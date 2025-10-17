import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "react-feather";

const Footer = () => {
  return (
    <footer className="pb-8 font-albert font-bold w-[90%] mx-auto">
      <div className="h-[1px] bg-gray-600 w-full my-6" />
      <div className="md:flex justify-around  ">
        <div>
          <p>&copy; 2025 WOOHOO</p>
          <p>AVISO DE PRIVACIDAD</p>
          <p>TÉRMINOS Y CONDICIONES DE USO</p>
        </div>
        <div>
          <p className="flex items-center"><Phone className="inline  mr-1" width={16} />+52 81 8461 0062</p>
          <p><Mail className="inline mr-1" width={16} />HELLO@LETSWOOHOO.COM</p>
        </div>
        <div className="flex flex-col">
          <a href="https://www.facebook.com/letswoohoomx" target="_blank">
            <Facebook className="inline" width={16} color="black" /> FACEBOOK
          </a>
          <a href="https://www.instagram.com/letswoohoomx/" target="_blank">
            <Instagram width={16} color="black" className="inline" /> INSTAGRAM
          </a>
          <a
            href="https://www.linkedin.com/company/letswoohoomx/"
            target="_blank"
          >
            <Linkedin width={16} color="black" className="inline" /> LINKEDIN
          </a>
          <a href="https://www.youtube.com/@letswoohoomx" target="_blank">
            <Youtube width={16} color="black" className="inline" /> YOUTUBE
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
