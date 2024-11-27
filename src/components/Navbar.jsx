import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import usePortafolio from "../hooks/usePortafolio";

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const { isDivVisible, setIsDivVisible } = usePortafolio();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

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
      const aboutmeDiv = document.getElementById("aboutMe");
      const proyectosDiv = document.getElementById("misProyectos");
      const contactoDiv = document.getElementById("contacto");

      const aboutmeRect = aboutmeDiv.getBoundingClientRect();
      const proyectosRect = proyectosDiv.getBoundingClientRect();
      const contactoRect = contactoDiv.getBoundingClientRect();

      if (aboutmeRect.bottom > 100) {
        setIsDivVisible("aboutMe");
      } else if (aboutmeRect.bottom <= 100 && proyectosRect.bottom > 300) {
        setIsDivVisible("misProyectos");
      } else if (proyectosRect.bottom <= 300 && contactoRect.bottom > 100) {
        setIsDivVisible("contacto");
      }
    };
    window.addEventListener("scroll", handleScroll);

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
      <nav className="flex justify-around max-w-[1000px] px-10 container mx-auto  items-center py-5  font-bold">
        <Link
          className={` py-1 my-auto rounded transition-all duration-300 text-center justify-center flex ${
            isDivVisible === "aboutMe"
              ? "text-primary hover:text-primary hover:underline underline-offset-8"
              : "hover:underline underline-offset-8"
          }`}
          to="/#aboutMe">
          {t("navbar.aboutMe")}
        </Link>

        <Link
          className={`rounded py-1 my-auto transition-all duration-300 lg:w-[100px] w-[70px] text-center ${
            isDivVisible === "misProyectos"
              ? "text-primary hover:text-primary hover:underline underline-offset-8"
              : "hover:underline underline-offset-8"
          }`}
          to="/#misProyectos">
          {t("navbar.projects")}
        </Link>

        <Link
          className={`py-1 my-auto rounded transition-all duration-300 lg:w-[100px] w-[70px] text-center ${
            isDivVisible === "contacto"
              ? "text-primary hover:text-primary hover:underline underline-offset-8"
              : " hover:underline underline-offset-8"
          }`}
          to="/#contacto">
          {t("navbar.contact")}
        </Link>

        <a
          download={"Roger-Morera-CV-ES.pdf"}
          href="Roger-Morera-CV-ES.pdf"
          className="bg-quaternary rounded px-2 md:px-5 lg:px-10 text-primary py-0.5 my-auto border-primary border-2 font-bold hover:bg-primary hover:text-quaternary transition-all duration-300 hover:border-quaternary">
          {t("navbar.cv")}
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
