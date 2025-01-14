import AboutMe from "../components/home-section/AboutMe";
import Contacto from "../components/Contacto";
import MisProyectos from "../components/proyectos/MisProyectos";

const LandingPage = () => {
  return (
    <main className="max-w-[1024px]">
      <AboutMe />
      <MisProyectos />
      <Contacto />
    </main>
  );
};
export default LandingPage;
