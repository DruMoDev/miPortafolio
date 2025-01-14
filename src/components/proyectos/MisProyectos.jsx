import { useTranslation } from "react-i18next";
import ProyectosList from "./ProyectosList";

const MisProyectos = () => {
  const { t } = useTranslation();
  return (
    <section id="misProyectos" className="flex flex-col lg:my-10 ">
      <h2 className="flex items-center gap-2 px-1 mb-10 text-center text-transparent lg:pb-5 bg-gradient-custom bg-clip-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#006aff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-terminal">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" x2="20" y1="19" y2="19" />
        </svg>

        {t("projects.title")}
      </h2>
      <ProyectosList />
    </section>
  );
};
export default MisProyectos;
