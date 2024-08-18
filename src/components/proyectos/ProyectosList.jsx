import { useState } from "react"
import { PROYECTOS } from "../../db/PROYECTOS"
import ProyectoCard from "./ProyectoCard"

const ProyectosList = () => {
  const [showAll, setShowAll] = useState(false);
  const [proyectos, setProyectos] = useState(PROYECTOS.slice(0,4));

  const handleShowAll = () => {
    setShowAll(!showAll)
    if(proyectos.length <= 4) {
      setProyectos(PROYECTOS)
return
    } 
    setProyectos(PROYECTOS.slice(0,4))
  }
// TODO: Refactorizar los botones a misproyectos, para que esto solo sea la list
  return (
    <section className="grid grid-cols-1 gap-10 w-[85%] lg:w-[100%] mx-auto">
        {proyectos.map((proyecto, index) => (
          <ProyectoCard key={index} proyecto={proyecto} id={index} />
        ))}

       {showAll ? (
        <button onClick={handleShowAll}>Ocultar proyectos...</button>
       ) : (
        <button onClick={handleShowAll} className="text-white text-2xl bg-primary w-1/4 mx-auto rounded-lg py-3 hover:-translate-y-1 transition-all hover:opacity-80">Mostrar más...</button>
       )} 
      </section>
  )
}
export default ProyectosList