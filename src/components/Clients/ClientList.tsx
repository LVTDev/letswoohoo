"use client";
import Image from "next/image";
import React, { useState } from "react";

type Client = {
  name: string;
  image: string;
  id: number;
  popupContent?: React.JSX.Element;
};
const ClientList = ({numberToRender}:{numberToRender?: number}) => {
  const [selectedClient, setSelectedClient] = useState<null | Client>(null);

  const handleClose = () => setSelectedClient(null);

  return (
    <div className="w-[90vw] mx-auto font-albert">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {listOfClients.map((client, i) => {
          if(numberToRender && i >= numberToRender) return
          return (
          // <button
          //   key={client.id}
          //   type="button"
          //   onClick={() => client.popupContent && setSelectedClient(client)}
          //   className={`relative flex justify-center items-center rounded-lg overflow-hidden aspect-square ${
          //     client.popupContent ? "cursor-pointer" : "cursor-default"
          //   }`}
          //   aria-haspopup={!!client.popupContent}
          // >
          //   <Image
          //     src={client.image}
          //     fill
          //     alt={client.name}
          //     className="object-contain"
          //   />
          // </button>
          <button
            key={client.id}
            type="button"
            onClick={() => client.popupContent && setSelectedClient(client)}
            className={`group relative flex justify-center items-center rounded-lg overflow-hidden aspect-square ${
              client.popupContent ? "cursor-pointer" : "cursor-default"
            }`}
            aria-haspopup={!!client.popupContent}
          >
            <Image
              src={client.image}
              fill
              alt={client.name}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {client.popupContent && (
              <div
                className="absolute inset-0 flex flex-col justify-end p-4 
                 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <p className="text-white font-semibold text-sm">
                  {client.name}
                </p>
                <p className="text-white/80 text-xs mt-1">Click para ver más</p>
              </div>
            )}
          </button>
        )})}
      </div>

      {selectedClient && (
        <div
          className="fixed inset-0 z-1200 flex items-center justify-center bg-black/70 p-4"
          onClick={handleClose}
        >
          <div
            className="relative bg-white rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute cursor-pointer p-3 top-4 right-4 text-2xl leading-none text-gray-500 hover:text-black"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="flex items-center gap-4 mb-4">
              <Image
                src={selectedClient.image}
                height={80}
                width={80}
                alt={selectedClient.name}
                className="rounded"
              />
              <h2 className="text-xl font-semibold">{selectedClient.name}</h2>
            </div>

            <div className="text-gray-700 space-y-3">
              {selectedClient.popupContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientList;
export const listOfClients = [
  {
    name: "Auna",
    image:
      "https://cdn.sanity.io/images/5egex671/production/992b926672d87d26aae476b59e0461bd3203843b-501x501.png",
    id: 3,
    popupContent: (
      <div>
        <p>
          Una campaña encabezada por un manifiesto que exalta ese sentimiento
          único de los mexicanos por procurar el bienestar de los demás, en
          situaciones críticas. Una sociedad reflejada en un audiovisual, para
          posicionar la llegada de AUNA a México, a través del lanzamiento de su
          seguro ONCOSALUD, fue nuestra primera acción con la marca.
          <br />
          La expansión de este partnership se dio con campañas de salud
          preventiva en redes sociales, OOH y medios tradicionales, cimentando
          la presencia de AUNA como referente en temas de atención médica
          privada y de seguros en México.
        </p>
        <p className="mt-2 flex flex-wrap gap-2">
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Advertising design
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Campaign development
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Corporate videos
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Digital Marketing
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Market Analysis and Research
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Film and video production
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Media
          </span>
        </p>
      </div>
    ),
  },

  {
    name: "ficmonterrey",
    image:
      "https://cdn.sanity.io/images/5egex671/production/bab7e3b38343c7111b2e4577940888e2eef64461-501x500.png",
    id: 2,
    popupContent: (
      <div>
        <p>
          Uno de los festivales más importantes de cine en el país, requería una
          identidad capaz de vivir dentro y fuera de la pantalla.
        </p>
        <p className="mt-2 ">
          Replanteamos desde su universo visual y su comunicación, hasta las
          experiencias, un cineminuto y la producción de distintos eventos,
          expandiendo el festival después de cada función.
        </p>
      </div>
    ),
  },
  {
    name: "Arca",
    image:
      "https://cdn.sanity.io/images/5egex671/production/7c8398a7fa8441dfb856227edc598cd317d7becc-501x500.png",
    id: 1,
    popupContent: (
      <div>
        <p>
          Esta importante embotelladora requería un equipo con la capacidad de
          regionalizar y mantener los estándares internacionales de las campañas
          de sus marcas más importantes. Objetivo cumplido. Es así que comenzó
          también la creación y desarrollo de experiencias en activaciones BTL
          de importantes marcas y productos tanto nacionales como
          internacionales, que incluían el uso de tecnología inmersiva,
          volviendo cada acción una memoria en la vida de los usuarios.
        </p>
        <p className="mt-2 flex flex-wrap gap-2">
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Activations
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Film and Video Production
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Audio Production
          </span>
        </p>
      </div>
    ),
  },
  {
    name: "Naterra",
    image:
      "https://cdn.sanity.io/images/5egex671/production/102df00f3d24bf73a94e96f868392b59874a15fe-501x501.png",
    id: 8,
  },

  {
    name: "Soriana",
    popupContent: (
      <div>
        <p>
          “Sorianeros” Uno de los grupos más importantes de México, buscaba
          tener una de las redes de colaboradores más leales, felices y
          comprometidas. Una campaña de comunicación interna en redes sociales,
          dirigida exclusivamente a colaboradores para generar comunidad, fue la
          propuesta de WooHoo. Contenido en el que las personas trabajadoras son
          las protagonistas, quienes invitan a más gente a conocer a Soriana,
          sus propuestas, dinámicas, iniciativas, su día a día y también, los
          momentos de convivencia. Una manera de conocer al equipo incluso, en
          otros estados del país, sintiéndose orgullosos de ser
          #SorianerosDeCorazón.
        </p>
        <p className="mt-2 flex flex-wrap gap-2">
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Digital Marketing
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Advertising Design
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Internal Communication
          </span>
        </p>
      </div>
    ),
    image:
      "https://cdn.sanity.io/images/5egex671/production/b46b5d0ae85cf10481748142aa9a520c6aea443f-500x501.png",
    id: 5,
  },
  {
    name: "Midea",
    image:
      "https://cdn.sanity.io/images/5egex671/production/cddb95ab0e73fe7ac9cde2f01c483ff24ed26756-501x501.png",
    popupContent: (
      <div>
        <p>
          Posicionar una marca de electrodomésticos a nivel nacional. El reto
          creativo: la adaptación estratégica de materiales OOH, con mensajes
          que mostraban la funcionalidad de cada producto, localizaciones
          específicas y reforzamiento con una campaña de menciones en medios
          audiovisuales. La presencia de MIDEA se amplificó en el país ¿la
          siguiente etapa? La producción de un showroom que convirtió a la marca
          en una experiencia.
        </p>
        <p className="mt-2 flex flex-wrap gap-2">
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Media
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            PR
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Film and Video Production
          </span>
        </p>
      </div>
    ),
    id: 6,
  },

  {
    name: "Cleber",
    image:
      "https://cdn.sanity.io/images/5egex671/production/ca92282ec9e5c9dcccee1ea9131399a1f2fc0146-501x500.webp",
    id: 24,
    popupContent: (
      <div>
        <p>
          La creatividad para una campaña de contenido en redes sociales, fue la
          clave para posicionar a CLEBER como grupo automotriz multimarca líder
          en la región. Y es que 20 años de historia debían comunicarse para su
          posicionamiento. Nuevos retos se sumaron a nuestra historia y dieron
          paso a la generación de experiencias de marca estratégicas y al
          lanzamiento de alguna de sus SUV insignia.
        </p>
        <p className="mt-2 flex flex-wrap gap-2">
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Activations
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Advertising design
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Campaign Development
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Digital Marketing
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            Publicity
          </span>
          <span className="italic font-medium py-1 px-4 border rounded-2xl whitespace-nowrap">
            BTL
          </span>
        </p>
      </div>
    ),
  },
  {
    name: "Como comí",
    image:
      "https://cdn.sanity.io/images/5egex671/production/b4c934907d5eb3ead27aec73c511f0872b2da4fa-2084x2084.png",
    id: 21,
  },

  {
    name: "Ballet Monterrey",
    image:
      "https://cdn.sanity.io/images/5egex671/production/bdde72b1b2340331d9ad8a394c7261b0a35586ef-501x501.png",
    id: 19,
  },
  {
    name: "Barraca Producciones",
    image:
      "https://cdn.sanity.io/images/5egex671/production/4d3fd91ccc34fd7edcce421eff2e6889654c2afa-501x501.png",
    id: 10,
  },
  {
    name: "Billu",
    image:
      "https://cdn.sanity.io/images/5egex671/production/e3ae89e9e4cd271d43039c7fa0a158321fd8d82c-501x500.png",
    id: 11,
  },
  {
    name: "Afirme",
    image:
      "https://cdn.sanity.io/images/5egex671/production/7d26f3d008036f0f9858e18cc747d0fdba35ac61-500x500.png",
    id: 4,
  },
  {
    name: "Bokados",
    image:
      "https://cdn.sanity.io/images/5egex671/production/e374f9bb515f7ae69d70d599f4dc69e09b3b5b70-501x501.png",
    id: 14,
  },

  {
    name: "Villacero",
    image:
      "https://cdn.sanity.io/images/5egex671/production/f5b33f54c50e15fcc32f79ce300a2dba512dda07-501x501.png",
    id: 13,
  },

  {
    name: "Top Golf",
    image:
      "https://cdn.sanity.io/images/5egex671/production/63692001dd7669597cf6a5285c4ec51fb533dabd-501x500.png",
    id: 12,
  },
  {
    name: "Players",
    image:
      "https://cdn.sanity.io/images/5egex671/production/a69cc020758144056dfa8b90495c1226fe9585a5-2084x2084.png",
    id: 22,
  },
  {
    name: "Dos Familias",
    image:
      "https://cdn.sanity.io/images/5egex671/production/6ef74be4beea6aabe3bef523fcace7f1f1382a7f-501x501.png",
    id: 15,
  },
  // {
  //   name: "Refran",
  //   image:
  //     "https://cdn.sanity.io/images/5egex671/production/77ba4b09f4f4d422cc6c5348c15120dc05c2a5a9-501x501.png",
  //   id: 16,
  // },
  {
    name: "Tulip",
    image:
      "https://cdn.sanity.io/images/5egex671/production/b137be9949a2f83b8f1d5e53cebce229a2a2f48c-501x501.png",
    id: 9,
  },
  {
    name: "Fuerza regia",
    image:
      "https://cdn.sanity.io/images/5egex671/production/b9b90902544df56836b81e6c0be5189352038a21-501x501.png",
    id: 17,
  },
  {
    name: "Credito Sí",
    image:
      "https://cdn.sanity.io/images/5egex671/production/9e09aad66bf13b2f85d1d2bea3e0d4ceb1fc4547-501x501.png",
    id: 18,
  },
  {
    name: "Afirme Seguros",
    image:
      "https://cdn.sanity.io/images/5egex671/production/befc1748c04864aa28776ea7864bf7159db0a42c-501x501.png",
    id: 7,
  },
  {
    name: "Amare",
    image:
      "https://cdn.sanity.io/images/5egex671/production/5b5a958b95dd3b97704a786c424bfe574f84f666-501x501.png",
    id: 20,
  },
];
