import { Link } from "react-router-dom";
import Badge from "./Badge";

const Proyecto = ({ proyecto }) => {
  const { titulo, descripcion, img, url, id, tecnologias } = proyecto;

  return (
    <article className="border flex flex-col bg-black border-white lg:p-7 p-4 rounded-2xl w-full">
      <Link to={`/proyecto/${id}`}>
        <img
          className="mx-auto rounded-lg w-full"
          height={100}
          width={500}
          src={img}
          alt={`Imagen del proyecto ${titulo}`}
        />
      </Link>
      <Link
        to={`/proyecto/${id}`}
        className="lg:my-4 my-2 mt-7 lg:text-3xl text-xl lg:text-left  font-bold tracking-wide overflow-hidden line-clamp-1 text-white hover:text-primary hover:underline">
        {titulo}
      </Link>
      <p
        className="text-[#adadad] mb-3   overflow-hidden line-clamp-3 text-pretty"
        dangerouslySetInnerHTML={{ __html: descripcion }}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center flex-wrap gap-2 lg:gap-3">
          {tecnologias.map((tec) => (
            <Badge key={tec} className={"lg:px-1.5 px-1 lg:text-sm text-white bg-primary"}>
              {tec}
            </Badge>
          ))}
        </div>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={url}
          className=" hover:text-primary transition-all duration-300 px-1.5 place-self-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6">
            <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default Proyecto;
