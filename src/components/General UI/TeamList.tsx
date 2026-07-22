"use client";

import TeamListImage from "./TeamListImage";

type Person = {
  _id: string;
  orderPosition: string;
  puesto: string;
  mainImage: { _type: string; alt: string };
  nombre: string;
  departamento: string;
  puestoESP: string;
};

type Team = {
  teamList: Person[];
  lang: string;
};

const TeamList = ({ teamList, lang }: Team) => {
  return (
    <div className="">
      <div className="md:flex  justify-center gap-40 mb-10">
        {teamList.map((person, i) => {
          if (!(person.departamento === "direccion")) return;
          return <TeamListImage lang={lang} key={i} person={person} />;
        })}
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamList.map((person, i) => {
            if (!(person.departamento === "cuentas")) return;
            return <TeamListImage lang={lang} key={i} person={person} />;
          })}
          {teamList.map((person, i) => {
            if (!(person.departamento === "creativo")) return;
            return <TeamListImage lang={lang} key={i} person={person} />;
          })}
          {teamList.map((person, i) => {
            if (!(person.departamento === "estrategia")) return;
            return <TeamListImage lang={lang} key={i} person={person} />;
          })}
          {teamList.map((person, i) => {
            if (!(person.departamento === "comercial")) return;
            return <TeamListImage lang={lang} key={i} person={person} />;
          })}
          {teamList.map((person, i) => {
            if (!(person.departamento === "produccion")) return;
            return <TeamListImage lang={lang} key={i} person={person} />;
          })}
          {teamList.map((person, i) => {
            if (!(person.departamento === "operaciones")) return;
            return <TeamListImage lang={lang} key={i} person={person} />;
          })}
          {teamList.map((person, i) => {
            if (!(person.departamento === "communicacion")) return;
            return <TeamListImage lang={lang} key={i} person={person} />;
          })}
          {teamList.map((person, i) => {
            if (!(person.departamento === "rh")) return;
            return <TeamListImage lang={lang} key={i} person={person} />;
          })}
          {teamList.map((person, i) => {
            if (!(person.departamento === "finanzas")) return;
            return <TeamListImage lang={lang} key={i} person={person} />;
          })}
          {teamList.map((person, i) => {
            if (!(person.departamento === "administrativo")) return;
            return <TeamListImage lang={lang} key={i} person={person} />;
          })}
        </div>
      </div>
      {/* <div className="mt-10">
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">Creative</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    
        </div>
      </div>
      <div className="mt-10">
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">Strategy</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
     
        </div>
      </div>
      <div className="mt-10">
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">Commercial</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
     
        </div>
      </div>
      <div className="mt-10">
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">AudioVisual</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
     
        </div>
      </div>
      <div className="mt-10">
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">Operations/Experiences</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      
        </div>
      </div>
      <div className="mt-10">
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">Internal Communication</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
   
        </div>
      </div>
      <div className="mt-10">
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">Human Resources</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        </div>
      </div>
      <div id='finanzas' className="mt-10">
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">Accounting</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        </div>
      </div>
      <div className="mt-10">
        <p className="text-4xl font-extrabold tracking-widest mb-8 text-center">Administrative</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    
        </div>
      </div> */}
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
