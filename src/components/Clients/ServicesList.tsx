import React from 'react'
import GradientButton from '../General UI/GradientButton'

const ServicesList = () => {
  return (
          <div className="grid gap-3 my-4 grid-cols-2 lg:grid-cols-3 items-center justify-center font-albert">
            <GradientButton href={"/servicios"}>Audiovisual</GradientButton>
            <GradientButton href={"/servicios"}>Creatividad</GradientButton>
            <GradientButton href={"/servicios"}>Digital</GradientButton>
            <GradientButton href={"/servicios"}>Experencias</GradientButton>
            <GradientButton href={"/servicios"}>Medios</GradientButton>
            <GradientButton href={"/servicios"}>Mercadotecnia</GradientButton>
            {/* <Link className="border rounder py-1 px-3 uppercase font-bold rounded-full w-max"></Link> */}
          </div>
  )
}

export default ServicesList