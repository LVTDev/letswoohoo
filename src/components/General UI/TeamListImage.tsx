import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

type Person = {
  _id: string;
  orderPosition: string;
  puesto: string;
  mainImage: { _type: string; alt: string };
  nombre: string;
  jefe?: boolean
};
const TeamListImage = ({ person }: { person: Person }) => {
  return (
    <div>
      {" "}
      <div key={person._id} className="flex flex-col items-center">
        <div className={`relative rounded-full w-[200px] h-[200px] mx-auto border-3  ${person.jefe === true ? "border-red-300" : "border-blue-300"}`} >
          <Image
            fill
            src={urlFor(person.mainImage).url()}
            alt={`${person.nombre} poster`}
            className="object-cover rounded-full transition duration-500"
          />
        </div>
        <p className="uppercase font-bold mt-3">{person.nombre}</p>
        <p className="text-center">{person.puesto}</p>
      </div>
    </div>
  );
};

export default TeamListImage;
