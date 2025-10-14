import HomeVideoReel from "@/components/General UI/HomeVideoReel";
import HomeProjects from "@/components/Home/HomeProjects";
import HomeProjectsMobile from "@/components/Home/HomeProjectsMobile";

export default function Home() {
  return (
    <div className="">
      <HomeVideoReel
        url={
          "https://cdn.sanity.io/files/5egex671/production/d9c17e1bb5023c98774f97b3aa1f4a651b417fa8.mp4"
        }
        urlVertical="https://cdn.sanity.io/files/5egex671/production/09ab9c880911675931d8bd223663d23d4dea448c.mp4"
      />
      <HomeProjects />
      <HomeProjectsMobile />
    </div>
  );
}
