// import HomeVideoReel from "@/components/General UI/HomeVideoReel";
"use client";
import HorizontalInfoSection from "@/components/General UI/HorizontalInfoSection";
import Alliances from "@/components/Home/Alliances";
import HomeBubble from "@/components/Home/HomeBubble";
import HomeContact from "@/components/Home/HomeContact";
// import ClientList from "@/components/Clients/ClientList";
// import NoticiasDisplay from "@/components/Clients/NoticiasDisplay";
// import ServicesList from "@/components/Clients/ServicesList";
// import CalendlyForm from "@/components/General UI/CalendlyForm";
// import HomeSlider from "@/components/Home/HomeSlider";
import HomeSliderTrailerAudio from "@/components/Home/HomeSliderTrailerAudio";
import HomeText from "@/components/Home/HomeText";
import HorizontalInfiniteClients from "@/components/Home/HorizontalInfiniteClients";
import NosotrosSticky from "@/components/Home/NosotrosSticky";
import Numeros from "@/components/Home/Numeros";
import ProjectParallax from "@/components/Home/ProjectParallax";
import Services from "@/components/Home/Services";
// import dynamic from "next/dynamic";
// import HomeProjectsMobile from "@/components/Home/HomeProjectsMobile";
// const Map = dynamic(() => import("@/components/General UI/Map"), {
//   ssr: false,
// });
export default function Inicio() {
  return (
    <div className="font-gilroy relative">
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
      <HorizontalInfoSection />
      <NosotrosSticky/>
      <Numeros />
      <HorizontalInfiniteClients />
      {/* <HomeText /> */}
      {/* <ProjectParallax /> */}
      {/* <Services /> */}
      <Alliances />
      <HomeContact />
      {/* <div className="absolute top-1/2 right-3 z-30">
        <HomeBubble/>
      </div> */}
    </div>
  );
}
