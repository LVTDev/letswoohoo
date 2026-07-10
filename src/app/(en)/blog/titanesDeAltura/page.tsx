import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-10 font-albert">
      <div className="md:flex w-[90vw] gap-10 mx-auto">
        <div className="md:w-3/5">
          <h1 className="text-center text-3xl font-bold">
            Titanes de Altura 2026
          </h1>
          <p className="pt-3">
            Denisse Chapa Tijerina es CEO de WOOHOO y una líder regiomontana con
            más de 20 años de experiencia en mercadotecnia, comunicación, imagen
            corporativa y publicidad. Su trayectoria incluye posiciones
            directivas en los sectores financiero, industrial, logístico y de
            consumo, donde ha liderado estrategias de marca, comunicación
            corporativa, branding, campañas 360°, marketing digital y
            construcción de reputación.
          </p>

          <p className="pt-3">
            En 2014 cofundó Grupo LVT, hoy WOOHOO, empresa con presencia en
            México y Estados Unidos. En 2025 encabezó la evolución de marca
            hacia WOOHOO, consolidando una visión de compañía creativa,
            estratégica, colaborativa y orientada a resultados de negocio. De
            forma paralela, es productora de cine, delegada de CANACINE en Nuevo
            León y Coordinadora Nacional de Delegaciones Estatales de CANACINE.
          </p>
          <h2 className="font-bold text-lg pt-6">Elegir con claridad</h2>
          {/* <p className="text-sm italic pt-3">
            “La IA ha sido clave para agilizar procesos de investigación,
            análisis de insightsy desarrollo de estrategias de comunicación”.
          </p> */}
        </div>
        <div className="md:w-2/5">
          <div className="rounded-lg overflow-hidden">
            <Image
              alt="Denisse Chapa"
              width={1000 / 3}
              height={1000 / 3}
              className="mx-auto rounded-lg"
              src={
                "https://cdn.sanity.io/images/5egex671/production/138174582e626275bba7b8a1dfd0c233f60641b6-1000x1000.png"
              }
            />
          </div>
          <div>
            <p className="text-sm  pt-3">
              <span className="italic">
                “Ante cualquier crisis, limitación o cambio de reglas en el
                juego, elimina las quejas”
              </span>
              , Denisse Chapa, CEO en WOOHOO
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90vw] mx-auto">
        <p className="pt-3">
          Una de las decisiones más importantes en su carrera ha sido aprender a
          decir que no a tiempo y con argumentos estratégicos. Para Denisse,
          dirigir una agencia implica resistir la tentación de aceptar cualquier
          cuenta solo por crecer en volumen. Por ello, cada proyecto debe
          responder a tres filtros: visión, reto creativo y sentido real de
          negocio.
        </p>
        <p className="pt-3">
          Esa claridad ha sido clave para construir reputación y valor.
          Considera que crecer de forma inteligente no significa aceptar todo lo
          que llega, sino elegir con coherencia. Si un proyecto compromete la
          salud operativa o el bienestar del equipo, no representa una buena
          decisión. Su visión parte de entender que el posicionamiento no se
          logra por acumulación de logos, sino por consistencia, foco y
          capacidad de ejecución.
        </p>

        <p className="font-bold pt-6 text-lg">Liderar con estructura</p>
        <p className="pt-3">
          Su manera de entender el liderazgo ha evolucionado junto con la
          industria. Comenzó en una época más analógica, marcada por procesos
          lineales y medios tradicionales; hoy apuesta por un liderazgo más
          consciente, horizontal y colaborativo, donde la estructura, la cultura
          interna y la sostenibilidad del negocio son fundamentales.
        </p>
        <p className="pt-3">
          Para Denisse, el liderazgo debe combinar visión estratégica,
          adaptación y propósito. También exige empatía ejecutiva: entender no
          solo la creatividad de una idea, sino el impacto financiero, operativo
          y humano que vive el cliente. Considera que la sensibilidad humana
          seguirá siendo un diferenciador imposible de sustituir.
        </p>

        <p className="pt-3">
          Fuera del trabajo encuentra equilibrio en las conversaciones sin
          agenda, el café con su equipo y las cenas familiares lejos del
          celular. Esos espacios le permiten tomar distancia, observar la vida
          real y regresar con mayor claridad creativa y estratégica.
        </p>
      </div>
    </div>
  );
};

export default page;
