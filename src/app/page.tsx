import HomeVideoReel from "@/components/General UI/HomeVideoReel";
import HomeProjects from "@/components/Home/HomeProjects";
// import HomeProjectsMobile from "@/components/Home/HomeProjectsMobile";

export default function Home() {
  return (
    <div className="">
      <HomeVideoReel
        url={
          "https://cdn.sanity.io/files/5egex671/production/76b959f4aab3c47ee922e5a68fd61783b10b3b96.mp4"
        }
        urlVertical="https://cdn.sanity.io/files/5egex671/production/09ab9c880911675931d8bd223663d23d4dea448c.mp4"
      />
      <HomeProjects />
      {/* <HomeProjectsMobile /> */}
    </div>
  );
}
