import {  useParams } from "react-router-dom";
import usePortafolio from "../hooks/usePortafolio";
import { useEffect } from "react";
import { proyectosContent } from "../db/proyectosContent";
import SingleProjectPageDesktop from "../components/SingleProjectPageDesktop";
import SingleProjectPageMobile from "../components/SingleProjectPageMobile";

const ProyectoPage = () => {
  const { id } = useParams();
  const { setIsDivVisible } = usePortafolio();
  useEffect(() => {
    setIsDivVisible("misProyectos");
    window.scrollTo(0, 0);
  }, []);

  const proyecto = proyectosContent[id];

  return (
    <>
      <SingleProjectPageMobile proyecto={proyecto} />
      <SingleProjectPageDesktop proyecto={proyecto} />
    </>
  );
};
export default ProyectoPage;
