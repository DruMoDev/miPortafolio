import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProyectoCard from "./ProyectoCard";
import ShowMoreButton from "./ShowMoreButton";

const ProyectosList = () => {
  const { t } = useTranslation();
  const [proyectos, setProyectos] = useState(
    t("projectsContent", { returnObjects: true }).slice(0, 3)
  );
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    if (showAll) {
      setProyectos(t("projectsContent", { returnObjects: true }).slice(0, 3));
      setShowAll(!showAll);
      return;
    }
    setProyectos(t("projectsContent", { returnObjects: true }));
    setShowAll(!showAll);
  };

  return (
    <>
      <section className="grid grid-cols-1 gap-10 w-[85%] lg:w-[100%] mx-auto">
        {proyectos?.map((proyecto, index) => (
          <ProyectoCard key={index} proyecto={proyecto} id={index} />
        ))}
      </section>
      <ShowMoreButton handleShowMore={handleShowMore} showAll={showAll} />
    </>
  );
};

export default ProyectosList;
