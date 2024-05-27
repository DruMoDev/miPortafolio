import { Link, useParams } from "react-router-dom";
import usePortafolio from "../hooks/usePortafolio";

const ProyectoPage = () => {
  const { id } = useParams();
  const { proyectosState } = usePortafolio();

  const { titulo, descripcion, img, url, tecnologias, gitUrl, extra } =
    proyectosState.find((proyecto) => proyecto.id.toString() === id.toString());

  return (
    <>
      <main className="container mx-auto pt-20 min-h-screen flex flex-col items-center lg:hidden">
        <h1 className="text-4xl font-bold text-center mb-6">{titulo}</h1>

        <img className="rounded-lg mb-6" src={img} alt={titulo} />
        <h3 className="text-lg font-semibold text-center mb-3">
          Tecnologías utilizadas:
        </h3>
        <ul className="flex flex-wrap gap-2 place-content-center mb-6">
          {tecnologias.map((tecnologia, index) => (
            <li
              key={index}
              className="bg-primary text-white font-semibold text-sm py-2 px-2 rounded-lg">
              {tecnologia}
            </li>
          ))}
        </ul>

        <p className="text-md mb-6 text-secondary text-pretty">{descripcion}</p>

        <div className="flex items-center justify-between w-full">
          <Link
            className=" bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-300"
            to={url}
            target="_blank"
            rel="noopener noreferrer">
            Visitar proyecto
          </Link>
          {gitUrl && (
            <Link
              className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary-dark transition duration-300"
              to={gitUrl}
              target="_blank"
              rel="noopener noreferrer">
              Ver código en GitHub
            </Link>
          )}
        </div>
      </main>

      <main className="container mx-auto pt-32 min-h-screen  flex-col items-center hidden lg:flex">
        <h1 className=" font-bold text-center mb-20 text-7xl">{titulo}</h1>
        <div className="flex gap-20 justify-center">
          <img className="rounded-lg w-[600px]" src={img} alt={titulo} />

          <div className="flex flex-col justify-between">
            <div className="flex gap-10  justify-between mt-10">
              <Link
                className=" bg-quinary border-primary border  text-primary font-bold text-xl text-center py-2 px-4 rounded-lg hover:bg-primary hover:text-white hover:border-white transition duration-300"
                to={url}
                target="_blank"
                rel="noopener noreferrer">
                Visitar proyecto
              </Link>
              {gitUrl && (
                <Link
                  className="bg-quinary hover:text-quinary border border-white font-bold hover:border-secondary hover:bg-white text-white text-center text-xl py-2 px-4 rounded-lg  transition duration-300"
                  to={gitUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  Ver código en GitHub
                </Link>
              )}
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-3">
                Tecnologías utilizadas:
              </h3>
              <ul className="flex flex-wrap gap-2">
                {tecnologias.map((tecnologia, index) => (
                  <li
                    key={index}
                    className="bg-primary text-white font-semibold text-md py-2 px-2 rounded-lg">
                    {tecnologia}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {extra && (
          <div className="mt-10 text-xl w-[1100px]">
            <p className="font-semibold italic">
              Extra:{" "}
              <span
                className="text-secondary text-pretty"
                dangerouslySetInnerHTML={{ __html: extra }}
              />
            </p>
          </div>
        )}

        <p className="text-2xl w-[1100px] mt-5 text-secondary text-pretty">
          {descripcion}
        </p>
      </main>
    </>
  );
};
export default ProyectoPage;
