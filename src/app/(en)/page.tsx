import HomeVideoReel from "@/components/General UI/HomeVideoReel";
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
    <div className="font-albert">
      <HomeSlider lang="en" />
      <QuienesSomos />
      <div className="w-3/4  mx-auto rounded-lg">
        <HomeVideoReel
          urlVertical="https://o5qiahlghji2exja.public.blob.vercel-storage.com/TELEFERICO%20V6_BAJA4.mp4"
          url={
            "https://o5qiahlghji2exja.public.blob.vercel-storage.com/TELEFERICO%20V6_BAJA1.mp4"
          }
        />
      </div>
      <Servicios />
      <Clientes />
      <HomeProjectsHorizontal />
      <TeamListHome lang="en" />
      <ContactHome />
    </div>
  );
}
