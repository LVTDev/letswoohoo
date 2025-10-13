"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

type Person = {
  _id: string;
  orderPosition: string;
  puesto: string;
  mainImage: { _type: string; alt: string };
  nombre: string;
};

type Team = {
  teamList: Person[];
};

const TeamList = ({ teamList }: Team) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {teamList.map((person, i) => {
          if (i > 1) return;
          return (
            <div key={person._id} className="flex flex-col items-center">
              <div className="relative rounded-full w-[200px] h-[200px] mx-auto border-3 border-blue-300 ">
                <Image
                  fill
                  src={urlFor(person.mainImage).url()}
                  alt={`${person.nombre} poster`}
                  className="object-cover rounded-full transition duration-500"
                />
              </div>
              <p className="uppercase font-bold mt-3">{person.nombre}</p>
              <p className="">{person.puesto}</p>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamList.map((person, i) => {
          if (i < 2) return;
          return (
            <div key={person._id} className="flex flex-col items-center">
              <div className="relative rounded-full w-[200px] h-[200px] mx-auto border-3 border-blue-300 ">
                <Image
                  fill
                  src={urlFor(person.mainImage).url()}
                  alt={`${person.nombre} poster`}
                  className="object-cover rounded-full transition duration-500"
                />
              </div>
              <p className="uppercase font-bold mt-3">{person.nombre}</p>
              <p className="">{person.puesto}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamList;
// const TeamList = ({ teamList }: Team) => {
//   const [hoveredPerson, setHoveredPerson] = useState<Person | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);

//   // Automatically cycle through teamList when not hovering
//   useEffect(() => {
//     if (isHovering) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % teamList.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [isHovering, teamList.length]);

//   const handleMouseEnter = (person: Person) => {
//     setIsHovering(true);
//     setHoveredPerson(person);
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//     setHoveredPerson(null);
//   };

//   const displayedPerson = hoveredPerson || teamList[currentIndex];

//   return (
//     <div className="flex justify-around">
//       <div className="overflow-y-auto w-1/2 p-4 [&::-webkit-scrollbar]:hidden scrollbar-hide">
//         {teamList.map((person) => (
//           <div
//             key={person._id}
//             onMouseEnter={() => handleMouseEnter(person)}
//             onMouseLeave={handleMouseLeave}
//             className={`${displayedPerson === person && "bg-[#caeb0c]"} w-max`}
//           >
//             <p className="opacity-80">
//               <span className="font-medium opacity-100">{person.nombre}</span>, {person.puesto}
//             </p>
//           </div>
//         ))}
//       </div>

//       <div className="w-1/2 p-4 sticky top-0 self-start flex justify-center items-center">
//         {displayedPerson && (
//           <div className="relative w-[200px] h-[300px] mx-auto md:h-[350px] md:w-[250px]">
//             <Image
//               fill
//               src={urlFor(displayedPerson.mainImage).url()}
//               alt={`${displayedPerson.nombre} poster`}
//               className="object-cover"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TeamList;
