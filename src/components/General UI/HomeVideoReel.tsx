const HomeVideoReel = ({ url }: { url: string }) => {
  return (
    // <div className="relative w-full pb-[75.25%] md:pb-[45.25%] max-h-[55vh] flex justify-center">
    <div className="relative min-h-screen">
      <video
        data-testid="video"
        className="w-full   h-full absolute top-0 left-1/2 -translate-x-1/2 object-cover object-center md:block hidden"
        width="100%"
        height="1000%"
        muted={true}
        autoPlay={true}
        loop
        playsInline
      >
        <source src={url} type="video/mp4" />
      </video>
      <video
        data-testid="video"
        className="w-full  h-full absolute top-0 left-0 object-contain md:hidden"
        width="100%"
        height="80%"
        muted={true}
        autoPlay={true}
        loop
        playsInline
      >
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomeVideoReel;
