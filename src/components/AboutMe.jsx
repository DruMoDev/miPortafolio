import CarouselPrueba from "./CarouselPrueba";

const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="flex flex-col items-center flex-grow justify-center mt-28 lg:mt-44 w-[85%] mx-auto lg:w-full">
      <h1 className="tracking-tighter text-center lg:text-8xl text-4xl font-bold">
        Desarrollador <span className="text-primary">Web</span>
        <br></br> Front-End
      </h1>

      <p className="lg:leading-10 leading-7 lg:text-2xl text-base mt-20 text-secondary text-center font-semibold">
        Soy <span className="text-primary">Roger Morera</span>, un autodidacta
        especializado en <span className="text-primary">Front-end</span>,
        expandiendo mis habilidades hacia el desarrollo{" "}
        <span className="text-primary">Full-stack</span>, con proyectos que
        podréis ver a continuación.
      </p>

      <p className="my-10 text-secondary text-center text-xs lg:hidden">
        Estas son las <span className="text-primary">tecnologias</span> con las
        que he trabajado
      </p>
      <div className=" lg:mt-36">
        <CarouselPrueba />
      </div>
    </section>
  );
};
export default AboutMe;
