import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="hidden font-albert">Our Culture</h1>
      <div></div>
      <div className="mb-6">
        <h3 className="text-3xl text-center my-4 font-albert">
          Posada 2025 
        </h3>
        <Link
          href="/cultura/posada"
          className={` relative rounded-lg overflow-hidden`}
        >
          <img
            className="rounded-lg"
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
        <Link
          href="/cultura/cancerMama"
          className={` relative rounded-lg overflow-hidden`}
        >
          <img
             className="rounded-lg"
            src={
              "https://cdn.sanity.io/images/5egex671/production/3d91044d8bf93260b4af243227d06995c81c19e6-3413x1920.jpg"
            }
            alt="Evento Cancer de Mama"
          />
        </Link>
      </div>
    </div>
  );
};

export default page;
