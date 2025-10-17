"use client";

import TeamListImage from "./TeamListImage";

type Person = {
  _id: string;
  orderPosition: string;
  puesto: string;
  mainImage: { _type: string; alt: string };
  nombre: string;
  departamento: string;
};

type Team = {
  teamList: Person[];
};

const TeamList = ({ teamList }: Team) => {
  return (
    <div className="">
      <div className="flex justify-center gap-40 mb-10">
        {teamList.map((person, i) => {
          if (!(person.departamento === "direccion")) return;
          return <TeamListImage key={i} person={person} />;
        })}
      </div>
      <div>
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">Cuentas</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamList.map((person, i) => {
            if (!(person.departamento === "cuentas")) return;
            return <TeamListImage key={i} person={person} />;
          })}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">Creativo</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamList.map((person, i) => {
            if (!(person.departamento === "creativo")) return;
            return <TeamListImage key={i} person={person} />;
          })}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">Comercial</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamList.map((person, i) => {
            if (!(person.departamento === "comercial")) return;
            return <TeamListImage key={i} person={person} />;
          })}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">Produccion</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamList.map((person, i) => {
            if (!(person.departamento === "produccion")) return;
            return <TeamListImage key={i} person={person} />;
          })}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">Operaciones</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamList.map((person, i) => {
            if (!(person.departamento === "operaciones")) return;
            return <TeamListImage key={i} person={person} />;
          })}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">Comunicacion Interna</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamList.map((person, i) => {
            if (!(person.departamento === "communicacion")) return;
            return <TeamListImage key={i} person={person} />;
          })}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">Recursos Humanos</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamList.map((person, i) => {
            if (!(person.departamento === "rh")) return;
            return <TeamListImage key={i} person={person} />;
          })}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">Finanzas</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamList.map((person, i) => {
            if (!(person.departamento === "finanzas")) return;
            return <TeamListImage key={i} person={person} />;
          })}
        </div>
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
