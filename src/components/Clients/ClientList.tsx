import Image from "next/image";
import React from "react";

const ClientList = () => {
  const clientList = [
    {
      name: "Arca",
      image:
        "https://cdn.sanity.io/images/5egex671/production/7c8398a7fa8441dfb856227edc598cd317d7becc-501x500.png",
      id: 1,
    },
    {
      name: "FIC",
      image:
        "https://cdn.sanity.io/images/5egex671/production/bab7e3b38343c7111b2e4577940888e2eef64461-501x500.png",
      id: 2,
    },
    {
      name: "Top Golf",
      image:
        "https://cdn.sanity.io/images/5egex671/production/63692001dd7669597cf6a5285c4ec51fb533dabd-501x500.png",
      id: 3,
    },
    {
      name: "Afirme",
      image:
        "https://cdn.sanity.io/images/5egex671/production/7d26f3d008036f0f9858e18cc747d0fdba35ac61-500x500.png",
      id: 4,
    },
    {
      name: "Afirme Seguros",
      image:
        "https://cdn.sanity.io/images/5egex671/production/befc1748c04864aa28776ea7864bf7159db0a42c-501x501.png",
      id: 5,
    },
    {
      name: "Billu",
      image:
        "https://cdn.sanity.io/images/5egex671/production/e3ae89e9e4cd271d43039c7fa0a158321fd8d82c-501x500.png",
      id: 6,
    },
    {
      name: "Soriana",
      image:
        "https://cdn.sanity.io/images/5egex671/production/b46b5d0ae85cf10481748142aa9a520c6aea443f-500x501.png",
      id: 7,
    },
    {
      name: "Auna",
      image:
        "https://cdn.sanity.io/images/5egex671/production/992b926672d87d26aae476b59e0461bd3203843b-501x501.png",
      id: 8,
    },
    {
      name: "Villacero",
      image:
        "https://cdn.sanity.io/images/5egex671/production/f5b33f54c50e15fcc32f79ce300a2dba512dda07-501x501.png",
      id: 9,
    },
    {
      name: "Bokados",
      image:
        "https://cdn.sanity.io/images/5egex671/production/e374f9bb515f7ae69d70d599f4dc69e09b3b5b70-501x501.png",
      id: 10,
    },
    {
      name: "Dos Familias",
      image:
        "https://cdn.sanity.io/images/5egex671/production/6ef74be4beea6aabe3bef523fcace7f1f1382a7f-501x501.png",
      id: 11,
    },
    {
      name: "Midea",
      image:
        "https://cdn.sanity.io/images/5egex671/production/cddb95ab0e73fe7ac9cde2f01c483ff24ed26756-501x501.png",
      id: 12,
    },
    {
      name: "Tulip",
      image:
        "https://cdn.sanity.io/images/5egex671/production/b137be9949a2f83b8f1d5e53cebce229a2a2f48c-501x501.png",
      id: 13,
    },
    {
      name: "Barraca Producciones",
      image:
        "https://cdn.sanity.io/images/5egex671/production/4d3fd91ccc34fd7edcce421eff2e6889654c2afa-501x501.png",
      id: 14,
    },
    {
      name: "Naterra",
      image:
        "https://cdn.sanity.io/images/5egex671/production/102df00f3d24bf73a94e96f868392b59874a15fe-501x501.png",
      id: 15,
    },
    {
      name: "Refran",
      image:
        "https://cdn.sanity.io/images/5egex671/production/77ba4b09f4f4d422cc6c5348c15120dc05c2a5a9-501x501.png",
      id: 16,
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
      name: "Ballet Monterrey",
      image:
        "https://cdn.sanity.io/images/5egex671/production/bdde72b1b2340331d9ad8a394c7261b0a35586ef-501x501.png",
      id: 19,
    },
    {
      name: "Amare",
      image:
        "https://cdn.sanity.io/images/5egex671/production/5b5a958b95dd3b97704a786c424bfe574f84f666-501x501.png",
      id: 20,
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-[90vw] mx-auto">
      {clientList.map((client) => (
        <div key={client.id} className="">
          <Image src={client.image} height={300} width={300} alt={client.name}  />
        </div>
      ))}
    </div>
  );
};

export default ClientList;
