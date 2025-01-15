import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProyectoCard from "./ProyectoCard";
import ShowMoreButton from "./ShowMoreButton";

const ProyectosList = () => {
  const { t } = useTranslation();
  const proyectos = t("projectsContent", { returnObjects: true });
  const [showAll, setShowAll] = useState(false);


  return (
    <>
      <section className="grid grid-cols-1 gap-10 w-[85%] lg:w-[100%] mx-auto">
        {proyectos.slice(0, showAll ? proyectos.length : 3).map((proyecto, index) => (
          <ProyectoCard key={index} proyecto={proyecto} id={index} />
        ))}
      </section>
      <ShowMoreButton
        handleShowMore={() => setShowAll(!showAll)}
        showAll={showAll}
      />
    </>
  );
};

export default ProyectosList;
