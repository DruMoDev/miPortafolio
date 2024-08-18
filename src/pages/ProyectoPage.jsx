import { useParams } from "react-router-dom";
import usePortafolio from "../hooks/usePortafolio";
import { useEffect } from "react";
import { PROYECTOS } from "../db/PROYECTOS";
import SingleProjectPage from "../components/proyectos/SingleProjectPage";

const ProyectoPage = () => {
  const { id } = useParams();
  const { setIsDivVisible } = usePortafolio();
  useEffect(() => {
    setIsDivVisible("misProyectos");
    window.scrollTo(0, 0);
  }, []);

  const proyecto = PROYECTOS[id];

  return <SingleProjectPage proyecto={proyecto} />;
};
export default ProyectoPage;
