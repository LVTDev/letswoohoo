import HomeVideoReel from "@/components/General UI/HomeVideoReel";
import HomeProjects from "@/components/Home/HomeProjects";
import HomeProjectsMobile from "@/components/Home/HomeProjectsMobile";

export default function Home() {
  return (
    <div className="">
      <HomeVideoReel
        url={
          "https://cdn.sanity.io/files/5egex671/production/4bb4aea80b9af4f95ceddc9697f9da96f8b00672.mp4"
        }
      />
      <HomeProjects />
      <HomeProjectsMobile />
    </div>
  );
}
