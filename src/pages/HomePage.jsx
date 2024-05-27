import AboutMe from "../components/AboutMe";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import MisProyectos from "../components/MisProyectos";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />

      <main>
        <section id="aboutMe">
          <AboutMe />
        </section>

        <section id="misProyectos">
          <MisProyectos />
        </section>

        <section id="contacto">
            <Contacto />
        </section>
      </main>

      <Footer />
    </>
  );
};
export default HomePage;
