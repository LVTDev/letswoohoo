import React from "react";
import Image from "next/image";
import { listOfClients } from "../Clients/ClientList";

const HorizontalInfiniteClients = () => {
  return (
    <div className="py-20 scroll relative flex w-full overflow-hidden  bg-gradient-to-r from-[#FFBA03] via-[#FF1219] to-[#BD35A4]">
      <div className="whitespace-nowrap div">
        {listOfClients.map((image, index) => (
          <div
            key={index}
            className="inline-flex w-[100px] h-[100px] mx-8  duration-500"
          >
            <Image
              key={index}
              src={image.image}
              alt={`Client image-${index}`}
              width={100}
              height={100}
            />
          </div>
        ))}
        {listOfClients.map((image, index) => (
          <div
            key={index}
            className="inline-flex !w-[100px] h-[100px] mx-8  duration-500"
          >
            <Image
              key={index}
              src={image.image}
              alt={`Client image-${index}`}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalInfiniteClients;
