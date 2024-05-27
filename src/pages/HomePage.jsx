import AboutMe from "../components/AboutMe";
import Contacto from "../components/Contacto";
import MisProyectos from "../components/MisProyectos";

const HomePage = () => {
  return (
    <>
      <main>
        <section id="aboutMe" className="min-h-screen">
          <AboutMe />
        </section>

        <section id="misProyectos">
          <MisProyectos />
        </section>

        <section id="contacto">
          <Contacto />
        </section>
      </main>
    </>
  );
};
export default HomePage;
