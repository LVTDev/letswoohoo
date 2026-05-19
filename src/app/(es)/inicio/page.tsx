// import HomeVideoReel from "@/components/General UI/HomeVideoReel";
import HomeProjects from "@/components/Home/HomeProjects";
// import HomeSlider from "@/components/Home/HomeSlider";
import HomeSliderTrailerAudio from "@/components/Home/HomeSliderTrailerAudio";
// import HomeProjectsMobile from "@/components/Home/HomeProjectsMobile";

export default function Inicio() {
  return (
    <div className="">
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
      
      <HomeSliderTrailerAudio/>


      {/* Home Video reel commented out */}
      {/* <div className="bg-black">
        <HomeVideoReel
          url={
            // "https://cdn.sanity.io/files/5egex671/production/76b959f4aab3c47ee922e5a68fd61783b10b3b96.mp4" NON COMPRESSED LINK
            // "https://cdn.sanity.io/files/5egex671/production/37b86742beab67a4a0225310385d95295b3334a8.mp4"
            "https://o5qiahlghji2exja.public.blob.vercel-storage.com/Credenciales%20Woohoo%202025%20WEB%20V2%20BAJA_compressed.mp4"
          }
          // urlVertical="https://cdn.sanity.io/files/5egex671/production/806d4c48e992d4a6c46bb240ac9fd170accc82f7.mp4" NON COMPRESSED LINK
          // urlVertical="https://cdn.sanity.io/files/5egex671/production/10a372dc36bec3805bbff83c85deb21a85895bae.mp4"
          urlVertical="https://o5qiahlghji2exja.public.blob.vercel-storage.com/Credenciales%20Woohoo%202025%20WEB%20Vertical%20V1%20BAJA_compressed.mp4"
        />
      </div> */}
      <HomeProjects />
      {/* <HomeProjectsMobile /> */}
    </div>
  );
}
