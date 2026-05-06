import HomeVideoReel from "@/components/General UI/HomeVideoReel";
import Services from "@/components/services/Services";
// import HomeProjects from "@/components/Home/HomeProjects";
// import HomeProjectsMobile from "@/components/Home/HomeProjectsMobile";

export default function Home() {
  return (
    <div className="">
      <div className="h-0 opacity-0">
        <h1>Where ideas becooome echoooos</h1>
        <h2> We are a creative and audiovisual production agency in Monterrey</h2>
        <p>
          We are a creative and audiovisual production agency in Monterrey,
          Mexico, that turns stories, brands, and campaigns into movement.
        </p>
        <p>At Woohoo, every idea vibrates, multiplies, and leaves a mark.</p>
      </div>
      <div className="bg-black">
        <HomeVideoReel
          url={
            "https://cdn.sanity.io/files/5egex671/production/76b959f4aab3c47ee922e5a68fd61783b10b3b96.mp4"
          }
          urlVertical="https://cdn.sanity.io/files/5egex671/production/806d4c48e992d4a6c46bb240ac9fd170accc82f7.mp4"
        />
      </div>
      <div>
        <p className="text-4xl font-extrabold tracking-widest uppercase text-center mt-10 font-albert">What we do</p>
        <Services />
      </div>
      {/* <HomeProjects /> */}
      {/* <HomeProjectsMobile /> */}
    </div>
  );
}
