// import events, {titles} from "@/app/our-culture/eventos";

import events, { titles } from "@/app/(en)/our-culture/eventos";

const OurCulture = ({ event }: { event: keyof typeof events }) => {
  
  return (
    <div className="font-albert">
      <div>
        <h1 className="text-center text-3xl  my-5">{titles[event]}</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 w-[80%] gap-y-3  md:w-[65%] mx-auto">
          {events[event].map((event, i) => (
            <div
              className={`${event.size === "large" && "col-span-2 "} relative rounded-lg overflow-hidden`}
              key={i}
            >
              <img className="" src={event.link} alt="Posada equipo LVT" />
              {/* <div className="absolute bg-[#caeb0c] px-2 py-1 left-3 bottom-3 font-bold rounded text-sm md:text-base">
                Posada
              </div>
              <div className="absolute bg-[#caeb0c] px-2 py-1 right-3 bottom-3 font-bold rounded text-sm md:text-base">
                Dec 2025
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCulture;
