import React from "react";
import ServiciosText from "./ServiciosText";
import ServiciosDropdown from "./ServiciosDropdown";

const Servicios = () => {
  return (
    <div className="md:flex">
      <div className="md:w-1/2">
        <ServiciosText />
      </div>
      <div className="md:w-1/2">
        <ServiciosDropdown />
      </div>
    </div>
  );
};

export default Servicios;
