import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState("");

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
        element.scrollIntoView({ behavior: "smooth" });
        setIsDivVisible(hash.hash.slice(1));
      }
    }
  }, [hash]);

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
          to="/#aboutMe">
          RM
        </Link>

        <nav className="flex gap-5 lg:gap-20">
          <Link
            className={`hover:text-primary transition-all duration-300 ${
              isDivVisible === "aboutMe"
                ? "text-white font-bold"
                : "text-secondary"
            }`}
            to="/#aboutMe">
            About Me
          </Link>
          <Link
            className={`hover:text-primary transition-all duration-300 ${
              isDivVisible === "misProyectos"
                ? "text-white font-bold"
                : "text-secondary"
            }`}
            to="/#misProyectos">
            Proyectos
          </Link>
          <Link
            className={`hover:text-primary transition-all duration-300 ${
              isDivVisible === "contacto"
                ? "text-white font-bold"
                : "text-secondary"
            }`}
            to="/#contacto">
            Contacto
          </Link>
          <a
            download={"Roger_Morera_CV.pdf"}
            href="/Roger_Morera_CV.pdf"
            className="bg-primary rounded px-2 md:px-5 xl:px-10 text-black border border-black hover:bg-white hover:text-primary transition duration-300 hover:border-primary">
            CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
