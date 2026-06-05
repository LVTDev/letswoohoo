import React from "react";
import QuienesSomosSlider from "./QuienesSomosSlider";

const QuienesSomos = () => {
  return (
    <div className="md:flex py-5">
      <div className="md:w-1/3">
        <QuienesSomosSlider />
      </div>
      <div className="md:w-2/3">
        <p>¿QUIENES SOMOS?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse optio
          repudiandae in mollitia quo non ducimus sit earum totam illum vel,
          ratione nisi tempore quas dolorem quos fuga iste libero pariatur est
          modi perspiciatis! Placeat suscipit officiis explicabo molestiae id
          omnis ea, magni facilis quam impedit deleniti, est dolores
          repellendus.
        </p>
      </div>
    </div>
  );
};

export default QuienesSomos;
