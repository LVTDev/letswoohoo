import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="hidden font-albert">Our Culture</h1>
      <div className="mb-6">
        <h3 className="text-3xl text-center my-4 font-albert">Posada 2025</h3>
        <Link href="/our-culture/posada" className={` relative rounded-lg overflow-hidden`}>
          <img
            className=""
            src={
              "https://cdn.sanity.io/images/5egex671/production/b06a0f785aa803e11a2002347f692cc49c44108e-2880x1920.jpg"
            }
            alt="Posada equipo LVT"
          />
        </Link>
      </div>
      <div>
        <h3 className="text-3xl text-center my-4 font-albert">
          Hablemos de Cáncer de Mama
        </h3>
        <Link href="/our-culture/cancerMama"className={` relative rounded-lg overflow-hidden`}>
          <img
            className=""
            src={
              "https://cdn.sanity.io/images/5egex671/production/5cb1bcd8d260b28eae46c5929a87f6cef07219b4-3412x1920.jpg"
            }
            alt="Posada equipo LVT"
          />
        </Link>
      </div>
    </div>
  );
};

export default page;
