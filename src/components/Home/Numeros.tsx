import React from "react";

const Numeros = () => {
  return (
    <div className="bg-gray-300 py-8 my-1">
      <div className="text-center text-5xl uppercase mb-6">En Números</div>
      <div className="flex justify-between w-3/4 mx-auto">
        <p className="text-2xl"><span className="text-[#BD35A4] block text-5xl font-extrabold">+11</span> años</p>
        <p className="text-2xl"> <span className="text-[#BD35A4] block text-5xl font-extrabold">+100</span> marcas</p>
        <p className="text-2xl"><span className="text-[#BD35A4] block text-5xl font-extrabold">+10</span> premios</p>
        <p className="text-2xl"><span className="text-[#BD35A4] block text-5xl font-extrabold">+30</span> equipo</p>
      </div>
    </div>
  );
};

export default Numeros;
