"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type Person = {
  _id: string;
  orderPosition: string;
  puesto: string;
  mainImage: { _type: string; alt: string;}
  nombre: string;
};

type Team = {
  teamList: Person[];
};

const TeamList = ({ teamList }: Team) => {
  const [hoveredPerson, setHoveredPerson] = useState<Person | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Automatically cycle through teamList when not hovering
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovering, teamList.length]);

  const handleMouseEnter = (person: Person) => {
    setIsHovering(true);
    setHoveredPerson(person);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoveredPerson(null);
  };

  const displayedPerson = hoveredPerson || teamList[currentIndex];

  return (
    <div className="flex justify-around">
      <div className="gap-4">
        {teamList.map((person) => (
          <div
            key={person._id}
            onMouseEnter={() => handleMouseEnter(person)}
            onMouseLeave={handleMouseLeave}
            className={`${displayedPerson === person && "bg-[#caeb0c]"}`}
          >
            <p>
              <span>{person.nombre}</span>, {person.puesto}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        {displayedPerson && (
          <div className="relative w-[200px] h-[300px] mx-auto md:h-[350px] md:w-[250px]">
            <Image
              fill
              src={urlFor(displayedPerson.mainImage).url()}
              alt={`${displayedPerson.nombre} poster`}
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamList;