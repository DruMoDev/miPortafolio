import CarouselPrueba from "./CarouselPrueba";

const AboutMe = () => {
  return (
    <div className="flex flex-col pt-44 items-center flex-grow">
      <div className=" container mx-auto">
        <h1 className="tracking-widest mx-auto text-center lg:text-7xl text-4xl md:text-5xl">
          Desarrollador <span className="text-primary">Web</span> Front End
        </h1>
        <p className="mx-8 lg:mx-40 lg:leading-10 leading-7 lg:text-2xl text-base mt-20 text-secondary text-center ">
          Soy <span className="text-primary">Roger Morera</span>, un apasionado
          autodidacta del mundo tecnológico, construyendo experiencias digitales
          con un <span className="text-primary">enfoque integral</span>, desde
          la concepción de ideas hasta su implementación y mejora continua.
        </p>

        <p className="w-5/6 lg:leading-10 leading-6 mx-auto lg:text-2xl mt-20 text-secondary text-center text-xs md:hidden">
          Estas son las <span className="text-primary">tecnologias</span> con
          las que he trabajado
        </p>
        <div className=" mx-auto lg:mx-52 md:mt-36 mt-2">
          <CarouselPrueba />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
