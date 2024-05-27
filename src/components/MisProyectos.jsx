import Proyecto from "./Proyecto";
import usePortafolio from "../hooks/usePortafolio";

const MisProyectos = () => {
  const { proyectosState } = usePortafolio();

  return (
    <div
      className="flex flex-col items-center  pb-20 pt-20 lg:pt-28">
      <div className="container">
        <div className="flex items-center gap-4 lg:gap-5 mb-12 lg:mb-24">
          <svg
            className="size-5 text-primary lg:size-7"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16">
            <path
              stroke="currentCobaselor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
            />
          </svg>
          <h2
            className="  lg:text-6xl text-3xl  font-extrabold  tracking-widest 
        bg-gradient-custom text-transparent bg-clip-text p-1.5">
            Proyectos
          </h2>
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
          {proyectosState.map((proyecto) => (
            <Proyecto key={proyecto.titulo} proyecto={proyecto} />
          ))}
        </section>
      </div>
    </div>
  );
};
export default MisProyectos;
