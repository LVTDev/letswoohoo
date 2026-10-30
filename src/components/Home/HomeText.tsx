import React from "react";
import TypewriterText from "../General UI/TypewriterText";

const HomeText = () => {
  return (
    <div className="text-center min-h-[80vh]">
      <p className="w-3/5 mb-10 text-3xl mx-auto">
        Somos una agencia que cree que las ideas están en constante movimiento y
        que la creatividad es el motor de transformación que impulsa marcas,
        conecta personas y hacer crecer negocios. Integramos estrategia,
        creatividad, producción y diseño de experencias para convertir ideas en
        acciones que generan impacto y nuevas oportunidades.
      </p>
      {/* <p className="mt-5 text-[40px] uppercase font-bold">No solo creamos ideas.</p> */}
      <div className="mt-10">
          <TypewriterText
            cursor={"|"}
            textFront={"No solo creamos"}
            full={false}
            words={["ideas", "diseños", "campañas"]}
          />
      </div>
      <p className="uppercase text-3xl w-3/5 mx-auto">
        Las ponemos en movimiento para transformar negocios.
      </p>
    </div>
  );
};

export default HomeText;
