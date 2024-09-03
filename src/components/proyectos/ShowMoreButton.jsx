import { useState } from "react";
import { PROYECTOS } from "../../db/PROYECTOS";

const ShowMoreButton = ({ setProyectos, proyectos }) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
    if (proyectos.length <= 4) {
      setProyectos(PROYECTOS);
      return;
    }
    setProyectos(PROYECTOS.slice(0, 3));
  };

  return (
    <>
      {showAll ? (
        <button
          onClick={handleShowAll}
          className="text-white mt-8 lg:mt-14 text-base lg:text-2xl bg-primary px-7 lg:px-12  mx-auto rounded-lg py-3 transition-all hover:bg-opacity-80">
          Ocultar proyectos...
        </button>
      ) : (
        <button
          onClick={handleShowAll}
          className="text-white mt-8 lg:mt-14 text-base lg:text-2xl bg-primary px-7 lg:px-12 mx-auto rounded-lg py-3 transition-all hover:bg-opacity-80">
          Mostrar más...
        </button>
      )}
    </>
  );
};
export default ShowMoreButton;
