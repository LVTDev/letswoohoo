// import HomeVideoReel from "@/components/General UI/HomeVideoReel";
'use client'
import ClientList from "@/components/Clients/ClientList";
import NoticiasDisplay from "@/components/Clients/NoticiasDisplay";
import ServicesList from "@/components/Clients/ServicesList";
import CalendlyForm from "@/components/General UI/CalendlyForm";
// import HomeSlider from "@/components/Home/HomeSlider";
import HomeSliderTrailerAudio from "@/components/Home/HomeSliderTrailerAudio";
import dynamic from "next/dynamic";
// import HomeProjectsMobile from "@/components/Home/HomeProjectsMobile";
const Map = dynamic(() => import("@/components/General UI/Map"), {
  ssr: false,
});
export default function Inicio() {
  return (
    <div className="font-albert">
      <div className="h-0 opacity-0">
        <h1>Donde las ideas se vuelven ecoooo</h1>
        <h2> Agencia de publicidad y producción audiovisual</h2>
        <p>
          Agencia de publicidad y producción audiovisual en Monterrey que crea
          campañas, contenidos y experiencias que resuenaaaan.
        </p>
        <p>En Woohoo, cada idea vibra, se multiplica y deja huella.</p>
      </div>

      {/* <HomeSlider lang="es" /> */}

      <HomeSliderTrailerAudio />

      <div className="w-3/4 mx-auto my-10">
        <ServicesList />
      </div>
      <p className="text-lg lg:text-3xl font-bold text-center my-8 bg-gradient-to-r from-[#EE340C]  to-[#CA1261] bg-clip-text text-transparent ">
        Si recuerdas cómo te hizo sentir, fue una buena historia. 
      </p>
      <ClientList numberToRender={8} />
      <div className="my-10 w-4/5 mx-auto">
        <NoticiasDisplay />
      </div>
      {/* <HomeProjects /> */}
      {/* <HomeProjectsMobile /> */}

       <div className="mt-10 pt-8 ">
        <h2 className="text-3xl text-center font-extrabold mb-8 bg-gradient-to-r from-[#F38605]  to-[#EF240D] bg-clip-text text-transparent ">
          LET&apos;S WOOHOO
        </h2>
        <div className="lg:flex w-[90%] mx-auto">
          <div>
            <div className="mb-8 pt-6 justify-around  border-b border-gray pb-6">
              <div className="md:w-1/4 md:flex justify-between gap-15">
                <div>
                  <p className="font-bold text-2xl tracking-widest uppercase mb-1">
                    Comercial
                  </p>
                  <div className="md:flex justify-between">
                    <div>
                      <p className=" font-medium mb-1 flex items-center">
                        Juan Pablo Gutierrez{" "}
                      </p>
                      <p className="italic mb-6"> juanpablo@letswoohoo.com</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="mt-5 md:mt-0">
                <p className="font-bold text-2xl tracking-widest uppercase mb-1">
                  Producción
                </p>
                <div>
                  <p className="font-medium flex items-center"><Aperture className="inline-block  mr-1" width={16}/>Nancy Monsivais</p>
                  <p className="italic">
                    <Mail className="inline mr-1" width={18} />
                    nancy@letswoohoo.com
                  </p>
                </div>
              </div> */}
              <CalendlyForm />
            </div>
          </div>
          <div className="lg:w-2/3">
            <p className="font-bold text-right mb-10">
              Río Rosas Sur 330 1er piso, <br />
              Del Valle, C. P. 66220,
              <br />
              San Pedro Garza Garcia, N.L.,
              <br />
              +52 81 8461 0062
            </p>
            <div className="lg:w-[90%] ml-5">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
