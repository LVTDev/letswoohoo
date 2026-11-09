"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function HorizontalInfoSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  //   const [active, setActive] = useState(false);

  useLayoutEffect(() => {
    const buildAnim = () => {
      gsap.context(() => {
        gsap.fromTo(
          sectionRef.current,
          {
            translateX: 0,
          },
          {
            translateX: "-130vw",
            ease: "none",
            duration: 10,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top top",
              end: "1600 -300",
              scrub: 2,
              pin: true,
            },
          },
        );
      });
    };

    const timeout = setTimeout(() => {
      buildAnim();
    }, 800);

    return () => {
      clearTimeout(timeout);
      //   ctx.revert();
    };
  }, []);

  return (
    <div className="scroll-section-outer  relative">
      <div ref={triggerRef} className="bg-black ">
        <div ref={sectionRef} className="scroll-section-inner ">
          <section className="h-[95vh] pt-[2vh] w-[200vw] flex justify-center flex-col  relative gap-[30px] my-auto bg-gradient-to-r from-[#FFBA03] via-[#FF1219] to-[#BD35A4] bg-clip-text text-transparent ">
            <p className="absolute left-20 top-20 text-white border px-3 py-2 rounded-full uppercase">Servicios</p>
            <div className="flex justify-around uppercase mb-10 lg:mb-0">
              <div
                tabIndex={0}
                className="flex flex-col  group  transition duration-300 ease-out"
              >
                <div className="flex items-center">
                  <p className="text-[3rem] lg:text-[6.5rem] font-extrabold group-hover:scale-[1.2] mr-8 transition">
                    CREATIVIDAD
                  </p>

                  <div className="flex flex-col items-center">
                    <div className="flex items-end leading-20">
                      <p className="text-[3rem]  lg:text-[10rem] font-extrabold group-hover:scale-[1.2] mr-20 transition">
                        MEDIOS
                      </p>
                      <p className="text-[3rem] lg:text-[7rem] font-extrabold group-hover:scale-[1.2] mr-8 transition">
                        BTL
                      </p>
                    </div>
                    <div className="flex  gap-10">
                      <p className="text-[3rem] lg:text-[5rem] font-extrabold group-hover:scale-[1.2] mr-8 transition">
                        DATA
                      </p>
                      <p className="text-[3rem] lg:text-[5rem] font-extrabold group-hover:scale-[1.2] mr-8 transition">
                        producción
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-20">
                  <p className="text-[1.3rem] lg:text-[10rem] leading-[1] font-extrabold">
                    ESTRATEGIA
                  </p>
                  <p className="text-[1.3rem] lg:text-[10rem] leading-[1] font-extrabold">
                    AUDIOVISUAL
                  </p>
                </div>
              </div>
              {/* <div
                tabIndex={0}
                className="flex  group   transition duration-300 ease-out items-center"
              >
                <div className="text-[1.3rem] lg:text-[2.8rem] leading-[1] font-extrabold">
                  segunda mejor <br /> agencia del <br /> norte del país
                  <p className="text-sm inline-flex justify-start align-top">
                    <span>*</span>{" "}
                  </p>
                </div>
              </div> */}
              {/* <div
                tabIndex={0}
                className="flex  group   transition duration-300 ease-out items-center"
              >
                <p className="text-[3rem] lg:text-[10rem] font-extrabold group-hover:scale-[1.2] mr-8 transition">
                  +40
                </p>
                <p className="text-[1.3rem] lg:text-[3.5rem] leading-[1] font-extrabold">
                  Clientes
                  <br /> satisfechos
                </p>
              </div>
            </div>
            <div tabIndex={0} className="flex justify-around uppercase ">
              <div className="flex  group   transition duration-300 ease-out items-center">
                <p className="text-[3rem] lg:text-[10rem] font-extrabold group-hover:scale-[1.2] mr-8 transition">
                  +90
                </p>
                <p className="text-[1.3rem] lg:text-[3.5rem] leading-[1] font-extrabold">
                  personas en
                  <br /> un equipo
                  <br /> multidisciplinario
                </p>
              </div>
              <div className="flex  group   transition duration-300 ease-out items-center">
                <p className="text-[3rem] lg:text-[10rem] font-extrabold group-hover:scale-[1.2] mr-8 transition">
                  #10
                </p>
                <p className="text-[1.3rem] lg:text-[3.5rem] leading-[1] font-extrabold">
                  mejor agencia <br /> independiente <br /> de mexico
                </p>
              </div> */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
