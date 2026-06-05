"use client";

import ClientList from "../Clients/ClientList";

const Clientes = () => {
  return (
    <div >
      <p className="text-center font-albert text-3xl uppercase font-bold">Nuestros Clientes</p>
      <div>
        <ClientList />
      </div>
    </div>
  );
};

export default Clientes;
