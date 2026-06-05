import Clientes from "@/components/Home/Clientes";
import ContactHome from "@/components/Home/ContactHome";
import HomeProjectsHorizontal from "@/components/Home/HomeProjectsHorizontal";
import HomeSlider from "@/components/Home/HomeSlider";
import QuienesSomos from "@/components/Home/QuienesSomos";
import Servicios from "@/components/Home/Servicios";
import TeamListHome from "@/components/Home/TeamListHome";
// import HomeProjects from "@/components/Home/HomeProjects";
// import HomeProjectsMobile from "@/components/Home/HomeProjectsMobile";

export default function Home() {
  return (
    <div className="">
      <HomeSlider lang="en" />
      <QuienesSomos />
      <Servicios />
      <Clientes />
      <HomeProjectsHorizontal />
      <TeamListHome  lang="en" />
      <ContactHome lang="en"/>
    </div>
  );
}
