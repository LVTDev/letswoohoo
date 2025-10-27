import HomeVideoReel from "@/components/General UI/HomeVideoReel";
import HomeProjects from "@/components/Home/HomeProjects";
// import HomeProjectsMobile from "@/components/Home/HomeProjectsMobile";

export default function Home() {
  return (
    <div className="">
      <div className="h-0 opacity-0">
        <h1>Donde las ideas se vuelven ecoooo</h1>
        <p>
          Agencia de publicidad y producción audiovisual en Monterrey que crea
          campañas, contenidos y experiencias que resuenaaaan.
        </p>
        <p>En Woohoo, cada idea vibra, se multiplica y deja huella.</p>
      </div>
      <div className="bg-black">
        <HomeVideoReel
          url={
            "https://cdn.sanity.io/files/5egex671/production/76b959f4aab3c47ee922e5a68fd61783b10b3b96.mp4"
          }
          urlVertical="https://cdn.sanity.io/files/5egex671/production/806d4c48e992d4a6c46bb240ac9fd170accc82f7.mp4"
        />
      </div>
      <HomeProjects />
      <p>TEST TEST Test Test</p>
      {/* <HomeProjectsMobile /> */}
    </div>
  );
}
