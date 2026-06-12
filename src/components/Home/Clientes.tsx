"use client";

import ClientList from "../Clients/ClientList";

const Clientes = () => {
  return (
    <div className="my-8">
      <p className="text-center font-albert text-3xl uppercase font-bold">Nuestros Clientes</p>
      <div>
        <ClientList />
      </div>
    </div>
  );
};

export default Clientes;
