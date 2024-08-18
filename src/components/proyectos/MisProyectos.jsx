import ProyectosList from "./ProyectosList";

const MisProyectos = () => {
  return (
    <section id="misProyectos" className="flex flex-col  lg:mb-10 mt-24 lg:mt-36">
      <div className="flex items-center justify-center lg:justify-start gap-2 lg:gap-5 mb-12 lg:mb-24">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#006aff"
          className="size-9 text-primary lg:size-28">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M9.916 20.95l-.97-.241 4.138-16.66.97.242zm7.438-2.596l5.853-5.854-5.853-5.854-.707.707 5.146 5.147-5.146 5.146zM6.646 6.647L.792 12.5l5.854 5.854.707-.707L2.207 12.5l5.147-5.146z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </g>
        </svg>
        <h2
          className="lg:text-9xl text-4xl  font-extrabold  tracking-tighter pr-1 pb-2 lg:pb-5
        bg-gradient-custom text-transparent bg-clip-text">
          Proyectos
        </h2>
      </div>
      <ProyectosList />
    </section>
  );
};
export default MisProyectos;
