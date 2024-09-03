import { Link } from "react-router-dom";
import iconsMap from "../../assets/iconsMap";
import DemoIcon from "../../assets/icons/DemoIcon";
import GithubIcon from "../../assets/icons/GithubIcon";

const ProyectoCard = ({ proyecto }) => {
  const { titulo, descripcion, img, url, tecnologias, gitUrl } = proyecto;

  return (
    <article className="group rounded-lg shadow bg-[#1a1b1e] border-2 lg:w-[85%] mx-auto relative">
      <img
        className="rounded-t w-full object-cover group-hover:opacity-10 transition-all duration-300"
        src={img}
        alt={`Imagen del proyecto ${titulo}`}
      />

      <div className="flex flex-col px-4 py-4 gap-3 lg:gap-4 lg:px-10 lg:py-8 absolute bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h2 className="text-xl font-bold tracking-tighter overflow-hidden line-clamp-1 text-white lg:text-5xl gro">
          {titulo}
        </h2>

        <p className="text-sm lg:text-xl text-[#9696a2] overflow-hidden line-clamp-2 text-pretty">
          {descripcion}
        </p>

        <div className="flex flex-col lg:flex-col gap-3  lg:gap-5 lg:justify-between ">
          <div className="flex gap-4 lg:gap-7 flex-wrap">
            {tecnologias.map((tecnologia) => {
              const IconComponent = iconsMap[tecnologia.icon];
              return (
                <div key={tecnologia.name}>
                  {IconComponent && (
                    <IconComponent className="size-4 lg:size-8 text-white " />
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex gap-3 lg:gap-5">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={url}
              className="bg-primary px-5 py-2 rounded-lg flex gap-1  items-center border border-transparent hover:bg-opacity-80 lg:px-10 transition-all">
              <DemoIcon className="size-5 lg:size-7" />
              <p className="font-semibold lg:text-xl">Demo</p>
            </Link>

            <Link
              className="bg-transparent border-white border px-5 py-2 rounded-lg flex gap-1  items-center lg:px-10 hover:bg-opacity-10 hover:bg-white transition-all"
              to={gitUrl}
              target="_blank"
              rel="noopener noreferrer">
              <GithubIcon className="size-4 lg:size-6" />
              <p className="font-semibold lg:text-xl">GitHub</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProyectoCard;
