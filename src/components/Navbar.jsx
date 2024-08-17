import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import usePortafolio from "../hooks/usePortafolio";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isDivVisible, setIsDivVisible } = usePortafolio();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hash = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: `${"smooth" && "auto"}` });
        setIsDivVisible(hash.hash.slice(1));
      }
    }
  }, [hash]);

  useEffect(() => {
    const handleScroll = () => {
      // Obtiene la información del rectángulo del div objetivo
      const aboutmeDiv = document.getElementById("aboutMe");
      const proyectosDiv = document.getElementById("misProyectos");
      const contactoDiv = document.getElementById("contacto");

      const aboutmeRect = aboutmeDiv.getBoundingClientRect();
      const proyectosRect = proyectosDiv.getBoundingClientRect();
      const contactoRect = contactoDiv.getBoundingClientRect();

      // Comprueba si el rectángulo está dentro de la ventana visible

      if (aboutmeRect.bottom > 100) {
        setIsDivVisible("aboutMe");
      } else if (aboutmeRect.bottom <= 100 && proyectosRect.bottom > 300) {
        setIsDivVisible("misProyectos");
      } else if (proyectosRect.bottom <= 300 && contactoRect.bottom > 100) {
        setIsDivVisible("contacto");
      }
    };
    // Agrega el evento de scroll al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Elimina el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 ${
        scrolled
          ? "bg-quinary border-black border-b"
          : "bg-transparent border-b border-transparent "
      } transition-background-color duration-300 ease-in-out `}>
      <nav className="flex justify-between lg:max-w-[1024px] container mx-auto  items-center  py-5 text-secondary text-xs  px-10 lg:px-0 lg:text-lg">
        <Link
          className={`hover:text-primary py-1 my-auto rounded transition-all duration-300 lg:w-[100px] w-[70px]  text-center justify-center flex ${
            isDivVisible === "aboutMe"
              ? "text-white font-bold bg-primary hover:text-white"
              : "text-secondary"
          }`}
          to="/#aboutMe">
          About Me
        </Link>
        <Link
          className={`hover:text-primary rounded py-1 my-auto transition-all duration-300 lg:w-[100px] w-[70px] text-center ${
            isDivVisible === "misProyectos"
              ? "text-white font-bold bg-primary hover:text-white"
              : "text-secondary"
          }`}
          to="/#misProyectos">
          Proyectos
        </Link>
        <Link
          className={`hover:text-primary py-1 my-auto rounded transition-all duration-300 lg:w-[100px] w-[70px] text-center ${
            isDivVisible === "contacto"
              ? "text-white font-bold bg-primary hover:text-white"
              : "text-secondary"
          }`}
          to="/#contacto">
          Contacto
        </Link>
        <a
          download={"Roger-Morera-CV-ES.pdf"}
          href="/src/db/Roger-Morera-CV-ES.pdf" // Replace with the actual path to your PDF document
          className="bg-quaternary rounded px-2 md:px-5 lg:px-10 text-primary py-0.5 my-auto border-primary border-2 font-bold hover:bg-primary hover:text-quaternary transition-all duration-300 hover:border-quaternary">
          CV
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
