import { useState } from "react"
import { PROYECTOS } from "../../db/PROYECTOS"
import ProyectoCard from "./ProyectoCard"
import ShowMoreButton from "./ShowMoreButton";

const ProyectosList = () => {
  const [proyectos, setProyectos] = useState(PROYECTOS.slice(0,3));

  
// TODO: Refactorizar los botones a misproyectos, para que esto solo sea la list
  return (
    <>

    <section className="grid grid-cols-1 gap-10 w-[85%] lg:w-[100%] mx-auto">
        {proyectos.map((proyecto, index) => (
          <ProyectoCard key={index} proyecto={proyecto} id={index} />
          
        ))}
      </section>
        <ShowMoreButton setProyectos={setProyectos} proyectos={proyectos}/>
    </>
  )
}
export default ProyectosList