const ComingSoonVideoReel = ({}) => {
  return (
    // <div className="relative w-full pb-[75.25%] md:pb-[45.25%] max-h-[55vh] flex justify-center">
    <div className="relative w-screen h-screen">
      <video
        data-testid="video"
        className="w-full  h-full absolute top-0 left-0 object-contain object-center md:block hidden"
        width="80%"
        height="1000%"
        muted={true}
        autoPlay={true}
        loop
        playsInline
      >
        <source
          src={
            "https://cdn.sanity.io/files/5egex671/production/7146bab3203e9049258e58390ce7414b970946b1.mp4"
          }
          type="video/mp4"
        />
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
        <source
          src={
            "https://cdn.sanity.io/files/5egex671/production/38838214249f3e57653ee620538bd640d6af3b12.mp4"
          }
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default ComingSoonVideoReel;
