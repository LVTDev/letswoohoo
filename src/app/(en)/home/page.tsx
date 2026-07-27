// import HomeVideoReel from "@/components/General UI/HomeVideoReel";
import HomeProjects from "@/components/Home/HomeProjects";
// import HomeSlider from "@/components/Home/HomeSlider";
import HomeSliderTrailerAudio from "@/components/Home/HomeSliderTrailerAudio";
// import HomeProjectsMobile from "@/components/Home/HomeProjectsMobile";

export default function Home() {
  return (
    <div className="">
      <div className="h-0 opacity-0">
        <h1>Where ideas becooome echoooos</h1>
        <h2>
          {" "}
          We are a creative and audiovisual production agency in Monterrey
        </h2>
        <p>
          We are a creative and audiovisual production agency in Monterrey,
          Mexico, that turns stories, brands, and campaigns into movement.
        </p>
        <p>At Woohoo, every idea vibrates, multiplies, and leaves a mark.</p>
      </div>

      {/* Home slider with video */}

      {/* <HomeSlider lang="en" /> */}
      <HomeSliderTrailerAudio/>

      {/* Home Video Reel COmmented out */}

      {/* <div className="bg-black">
        <HomeVideoReel
          url={
            "https://o5qiahlghji2exja.public.blob.vercel-storage.com/Credenciales%20Woohoo%202025%20WEB%20V2%20BAJA_compressed.mp4"
            // "https://cdn.sanity.io/files/5egex671/production/76b959f4aab3c47ee922e5a68fd61783b10b3b96.mp4"
          }
          // urlVertical="https://cdn.sanity.io/files/5egex671/production/806d4c48e992d4a6c46bb240ac9fd170accc82f7.mp4"
          urlVertical="https://o5qiahlghji2exja.public.blob.vercel-storage.com/Credenciales%20Woohoo%202025%20WEB%20Vertical%20V1%20BAJA_compressed.mp4"
        />
      </div> */}
      <HomeProjects />
      {/* <HomeProjectsMobile /> */}
    </div>
  );
}
