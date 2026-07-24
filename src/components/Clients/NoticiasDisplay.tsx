import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NoticiasDisplay = () => {
  return (
    <div className='font-albert'>
         <h3 className="mb-4 font-extrabold uppeercase text-3xl">Noticias</h3>

      <div className="gap-3 flex flex-col lg:flex-row mb-4 md:mb-0">
        <Link
          href={"/blog/marketing-women"}
          className="md:flex gap-7  lg:mb-0 pb-8"
        >
          <div className="relative mb-4 md:mb-0 w-[200px] h-[200px]">
            <Image
              alt="Entrevista Dennise Chapa Imagen"
              src={
                "https://cdn.sanity.io/images/5egex671/production/a7f811fe9ea414bada5415b32a9055c7518242d1-1000x1000.png"
              }
              fill
            />
          </div>
          <div className="md:w-1/2 ">
            <p className="bg-black text-white uppercase text-center py-2 px-4 rounded-xl w-max font-bold">
              Marketing Women
            </p>
            <p className="text-sm my-3">
              &quot;Se necesita lograr un equilibrio enrtre satisfacer las
              necesidades del cliente y al mismo tiempo alinearlas con nuestra
              filosofia de trabajo y creatividad&quot;
            </p>
            <ul className=" text-sm">
              <li>Denisse Chapa, CEO en WOOHOO</li>
            </ul>
          </div>
        </Link>
        <Link
          href={"/blog/titanesDeAltura"}
          className="md:flex gap-7 pt-5 md:pt-0 mb-10 lg:mb-0"
        >
          <div className="relative mb-4 md:mb-0 w-[200px] h-[200px]">
            <Image
              alt="Entrevista Dennise Chapa Imagen"
              src={
                "https://cdn.sanity.io/images/5egex671/production/0a6581965a19fe85f70a12a936dfcc8d52866f5c-1000x1000.png"
              }
              fill
            />
          </div>
          <div className="md:w-1/2 ">
            <p className="bg-black text-white uppercase text-center py-2 px-4 rounded-xl w-max font-bold">
              Titanes de Altura 2026
            </p>
            <p className="text-sm my-3">
              &quot;Ante cualquier crisis, limitacion o cambio de reglas en el
              juego, elimina las quejas.&quot;
            </p>
            <ul className=" text-sm">
              <li>Denisse Chapa, CEO en WOOHOO</li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NoticiasDisplay