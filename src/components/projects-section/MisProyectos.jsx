import { useTranslation } from "react-i18next";
import ProyectosList from "./ProyectosList";

const MisProyectos = () => {
  const { t } = useTranslation();
  return (
    <section id="misProyectos" className="flex flex-col container">
      <h2 className="title--2">{t("projects.title")}</h2>
      <ProyectosList />
    </section>
  );
};
export default MisProyectos;
