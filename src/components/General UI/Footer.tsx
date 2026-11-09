import Link from "next/link";
import React from "react";
import {

  Mail,

} from "react-feather";

const Footer = () => {
  return (
    <footer className="pb-8 font-albert  w-[90%] mx-auto py-3">
      <div className="md:flex justify-between  items-center">
        <div>
          <p className="text-lg font-medium">
            Río Rosas Sur 330 1er piso, <br />
            Del Valle, C. P. 66220, <br />
            San Pedro Garza Garcia, N.L., <br />
            +52 81 8461 0062
          </p>
          <a href="mailto:hello@letswoohoo.com">
            <Mail className="inline mr-1" width={16} />
            HELLO@LETSWOOHOO.COM
          </a>
          
        </div>
    
        <div className="flex flex-col">
          <p>&copy; 2025 WOOHOO</p>
          <div className="block">
            <Link href={"/privacy-policy"}>PRIVACY NOTICE</Link>
          </div>
          <div className="block">
            <Link href="/terms-and-conditions">
              TERMS AND CONDITIONS OF USE
            </Link>
          </div>
          {/* <a href="https://www.facebook.com/letswoohoomx" target="_blank">
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
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
