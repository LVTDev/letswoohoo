import ClientList from "@/components/Clients/ClientList";
import React from "react";

const page = () => {
  return (
    <div className="pt-[40px]">
      <div className="h-0 opacity-0">
        <h1>Las marcas que hacen ecooo con nosotros</h1>
        <h2>
          En Woohoo, cada cliente es una historia que vibra, evoluciona y se
          multiplica.
        </h2>
        <p>
          Trabajamos con marcas nacionales e internacionales que confían en
          nosotros para transformar ideas en campañas, experiencias y
          producciones que resuenan.
        </p>
        <p>
          Nos mueve la emoción de crear junto a quienes creen que las buenas
          ideas no se apagan… desteeellaaan.
        </p>
        <p>Gracias por inspirarnos a crear ideas que viiibran y resuenan.</p>
      </div>
      <ClientList />
    </div>
  );
};

export default page;
