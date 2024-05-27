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
      className={`w-full fixed z-50 ${
        scrolled
          ? "bg-quinary border-black border"
          : "bg-transparent border border-transparent "
      } transition-background-color duration-300 ease-in-out `}>
      <div className="container mx-auto flex items-center justify-between py-5 text-secondary text-xs md:text-lg ">
        <Link
          className="text-primary font-mono font-bold lg:text-3xl md:text-2xl cursor-pointer"
          to="#aboutMe">
          RM
        </Link>

        <nav className="flex justify-between lg:gap-20 gap-1">
          <Link
            className={`hover:text-primary hover:font-bold rounded transition-all duration-300 lg:w-[100px] w-[70px]  text-center ${
              isDivVisible === "aboutMe"
                ? "text-white font-bold bg-primary"
                : "text-secondary"
            }`}
            to="/#aboutMe">
            About Me
          </Link>
          <Link
            className={`hover:text-primary hover:font-bold rounded transition-all duration-300 lg:w-[100px] w-[70px] text-center ${
              isDivVisible === "misProyectos"
                ? "text-white font-bold bg-primary"
                : "text-secondary"
            }`}
            to="/#misProyectos">
            Proyectos
          </Link>
          <Link
            className={`hover:text-primary hover:font-bold rounded transition-all duration-300 lg:w-[100px] w-[70px] text-center ${
              isDivVisible === "contacto"
                ? "text-white font-bold bg-primary"
                : "text-secondary"
            }`}
            to="#contacto">
            Contacto
          </Link>
          <a
            download={"Roger_Morera_CV.pdf"}
            href="/Roger_Morera_CV.pdf"
            className="bg-quaternary rounded px-2 md:px-5 lg:px-10 text-primary  border-primary border-2 font-bold hover:bg-primary hover:text-quaternary transition-all duration-300 hover:border-quaternary">
            CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
