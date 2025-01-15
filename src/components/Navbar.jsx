import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import usePortafolio from "../hooks/usePortafolio";
import LanguageToggleMenu from "./language-toggle-menu";
import i18n from "../i18next";
import { Menu } from "lucide-react";

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const { isDivVisible, setIsDivVisible } = usePortafolio();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const NAVBAR_LINKS = [
    { id: "aboutMe", text: t("navbar.aboutMe") },
    { id: "misProyectos", text: t("navbar.projects") },
    { id: "contacto", text: t("navbar.contact") },
  ];

  return (
    <header
      className={`w-full fixed pr-3 md:pr-0 top-0 border-b transition-background-color duration-300 ease-in-out h-14 md:h-20 z-[9999] ${
        scrolled
          ? "bg-quinary border-black"
          : "bg-transparent border-transparent"
      }`}>
      <nav className="container flex flex-row-reverse items-center h-full gap-5 md:flex-row md:justify-center md:gap-14 uppercase">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-[9999]">
          <Menu className="size-6" />
        </button>
        <ul
          className={`absolute top-0  w-full h-screen z-50 flex flex-col pt-44 items-center gap-10 text-2xl bg-quinary transition-all duration-500 ease-in-out md:static md:h-full md:flex-row md:text-base md:pt-0  md:justify-center md:bg-transparent md:w-fit md:gap-14 ${
            isMobileMenuOpen ? "right-0" : "right-full"
          }`}>
          {NAVBAR_LINKS.map((link) => (
            <li
              key={link.id}
              className={`transition-all ease-in hover:text-primary ${
                isDivVisible === link.id
                  ? "font-bold scale-110 border-b"
                  : ""
              }`}>
              <Link to={`#${link.id}`}>{link.text}</Link>
            </li>
          ))}
          <a
            download={`Roger_Morera_CV_${i18n.language}.pdf`}
            href={`/cv/Roger_Morera_CV_${i18n.language}.pdf`}
            className="bg-primary/20 rounded-3xl px-5 text-primary py-2 font-bold hover:bg-primary/50 hover:text-white transition-all duration-300 hover:border-quaternary">
            {t("navbar.cv")}
          </a>
        </ul>
        <LanguageToggleMenu />
      </nav>
    </header>
  );
};

export default Navbar;
