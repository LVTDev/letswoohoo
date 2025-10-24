import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-10 font-albert">
      <div className="md:flex w-[90vw] gap-10 mx-auto">
        <div className="md:w-3/5">
          <h1 className="text-center text-3xl font-bold">Marketing Women 2025</h1>
          <p className="pt-3">
            Con más de 20 años en la industria creativa y una década al frente
            de la transformaciónde Grupo LVT en WOOHOO (2014), la CEO ha hecho
            del rebranding una palanca decrecimiento y de la tecnología una
            ventaja competitiva. “El cambio de nombre aWOOHOO responde a la
            visión que tenemos de una agencia del mañana… con eloptimismo como
            esencia para compartir valores y sentimientos”.
          </p>
          <p className="font-bold text-lg pt-6">Rebranding con propósito: del nombre a la narrativa de valor</p>
          <p className="pt-3">
            Originaria de Monterrey, WOOHOO es hoy el resultado de una
            trayectoria que combinarigor estratégico y curiosidad creativa. La
            líder se formó en Emerson College (Boston) ySt. Edward’s University
            (Austin), un binomio académico que se refleja en su capacidadpara
            conectar marca, negocio y cultura. Bajo su dirección, la agencia
            ejecutó unrebranding que no solo actualiza la identidad visual, sino
            que redefine la promesa devalor con foco en sostenibilidad de marca,
            expansión y consistencia.
          </p>
          <p className="text-sm italic pt-3">
            “La IA ha sido clave para agilizar procesos de investigación,
            análisis de insightsy desarrollo de estrategias de comunicación”.
          </p>
        </div>
        <div className="md:w-2/5">
          <div className="rounded-lg overflow-hidden">
            <Image
              alt="Denisse Chapa"
              width={1920 / 3}
              height={1080 / 3}
              src={
                "https://cdn.sanity.io/images/5egex671/production/191baeefeba33e7868ff5e5bfee1f79777978f11-1920x1080.png"
              }
            />
          </div>
          <div>
            <p className="text-sm italic pt-3">
              “Se necesita lograr un equilibrio entre satisfacer las necesidades
              del cliente yal mismo tiempo alinearlas con nuestra filosofía de
              trabajo y creatividad.”
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90vw] mx-auto">
        <p className="pt-3">
          Para la CEO, el cambio fue un punto de inflexión: mejoró la percepción
          de clientesexistentes, abrió conversaciones con nuevos mercados y
          ordenó internamente losprocesos alrededor de una visión común. La
          apuesta no se queda en el logo: se traduceen una narrativa que
          prioriza la empatía con las audiencias y la construcción derelaciones
          de largo plazo. Su filosofía de trabajo subraya que las ideas
          creativas —inclusolas más disruptivas— deben anclarse a objetivos
          concretos y métricas claras. “Se necesita lograr un equilibrio entre
          satisfacer las necesidades del cliente y al mismo tiempoalinearlas con
          nuestra filosofía de trabajo y creatividad”, sostiene.
        </p>
        <p className="pt-3">
          Ese equilibrio se gestiona con comunicación abierta y una pedagogía
          hacia el clienteque ayuda a entender alcances reales, rutas de
          experimentación y criterios de éxito. Elresultado: relaciones más
          armónicas y campañas con impacto tangible.
        </p>
        <p className="font-bold pt-6 text-lg">Tecnología que acelera, cultura que sostiene</p>
        <p className="pt-3">
          En el último año, WOOHOO profesionalizó su stack de herramientas para
          potenciardecisiones estratégicas y elevar la productividad. La IA se
          integró en investigación,análisis de insights y diseño de estrategias
          de comunicación; Midjourney y Sunopermiten prototipar conceptos
          visuales y sonoros con agilidad; mientras queplataformas como COR y
          Emplify ofrecen visibilidad de tiempos, recursos y desempeño.“La IA ha
          sido clave para agilizar procesos de investigación, análisis de
          insights ydesarrollo de estrategias de comunicación”, resume la CEO.
        </p>
        <p className="pt-3">
          Pero la ventaja tecnológica se vuelve realmente diferencial porque
          descansa en unacultura interna sólida que funciona como el verdadero
          motor del crecimiento. Elliderazgo de la ejecutiva prioriza de manera
          constante el sentido humano: cercanía conlas personas, motivación
          permanente y empoderamiento auténtico de los equipos. Bajoesa lógica,
          no se trata solo de adoptar herramientas digitales, sino de crear un
          entornodonde cada miembro se sienta escuchado y capaz de aportar
          valor. Se fomenta laparticipación activa de todo el equipo en las
          decisiones estratégicas y operativas, secelebran las distintas
          perspectivas que enriquecen el trabajo colectivo y se defiende
          unambiente abierto, donde las ideas fluyen sin fricción ni jerarquías
          rígidas.
        </p>
        <p className="text-sm italic pt-3">
          “Se necesita lograr un equilibrio entre satisfacer las necesidades del
          cliente yal mismo tiempo alinearlas con nuestra filosofía de trabajo y
          creatividad.”
        </p>
        <p className="pt-3">
          Esa combinación —optimismo como identidad, tecnología como acelerador
          y culturacomo ancla— convierte a WOOHOO en un caso ejemplar de
          liderazgo femenino quelogra crear valor de marca de forma sostenible y
          medible en el tiempo. Se trata de unaestrategia donde cada decisión
          responde a un propósito claro y donde la visión empresarial está
          acompañada por una gestión humana que inspira. Como guiñopersonal, la
          ejecutiva reconoce en la lectura un espacio de claridad y de pausa en
          mediode la intensidad diaria. Su libro favorito es “La conquista de la
          felicidad”, de BertrandRussell, una referencia filosófica que refuerza
          su búsqueda de propósito, balance ybienestar integral. Esa elección
          revela cómo el pensamiento crítico y la reflexión tambiénforman parte
          de su manera de liderar.
        </p>
      </div>
    </div>
  );
};

export default page;
