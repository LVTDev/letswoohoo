import React from "react";
import QuienesSomosSlider from "./QuienesSomosSlider";

const QuienesSomos = () => {
  return (
    <div className="md:w-4/5 mx-auto my-10 font-albert">
      <p className="text-center uppercase text-4xl py-8 font-bold">
        En Woohoo nos mueven las experiencias
      </p>
      <div className="md:flex items-center py-5">
        <div className="md:w-1/3">
          <QuienesSomosSlider />
        </div>
        <div className="md:w-2/3 px-10">
          <p className="text-3xl font-bold mb-4">¿QUIENES SOMOS?</p>
          <p>
            En Woohoo nos mueven las experiencias: aquellas historias que se
            vuelven memorables, virales… que despiertan algo en ti. Porque
            entendemos algo: que hoy ya nadie mira lo mismo que el otro, así que
            hay que lograr que te vean. Que te compartan. Que te recuerden. Que
            te vivan. Que te vuelvan a ver. Creamos experiencias y contamos
            historias que le pertenecerán al mundo
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
