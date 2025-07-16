import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between py-4 px-8 text-xs">
      <div>
        <Link href="/">
         <div className="">
              <Image
                width={40}
                height={30}
                src="/woohooLogo.png"
                alt="wooHoo Logo"
              />
            </div>
        </Link>
      </div>
      <div className="flex uppercase gap-8">
        <Link href={"/clients"}>Clients</Link>
        <Link href={"/services"}>Services</Link>
        <Link href={"/team"}>Our Team</Link>
        <Link href={"/blog"}>Blog</Link>
        <div>
          <a href="https://barracaproducciones.mx/">
            <div className="">
              <Image
                width={40}
                height={30}
                src="/barraca_logo.png"
                alt="Barraca Logo"
              />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
