import React from "react";

const Numeros = () => {
  return (
    <div className="py-20 ">
      <div className="bg-white text-black">
      {/* <div className="bg-gradient-to-r from-[#FFBA03] via-[#FF1219] to-[#BD35A4] bg-clip-text text-transparent"> */}

      <div className="text-center text-2xl lg:text-5xl uppercase mb-6">En Números</div>
      <div className="flex gap-2 justify-between w-[90%] lg:w-3/4 mx-auto">
        <p className="text-2xl"><span className=" block text-2xl lg:text-5xl font-extrabold">+11</span> años</p>
        <p className="text-2xl"> <span className=" block text-2xl lg:text-5xl font-extrabold">+100</span> marcas</p>
        <p className="text-2xl"><span className=" block text-2xl lg:text-5xl font-extrabold">+10</span> premios</p>
        <p className="text-2xl"><span className=" block text-2xl lg:text-5xl font-extrabold">+30</span> equipo</p>
      </div>
      </div>
    </div>
  );
};

export default Numeros;
