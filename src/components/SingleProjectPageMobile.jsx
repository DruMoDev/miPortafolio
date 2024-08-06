import { Link } from "react-router-dom";

const SingleProjectPageMobile = ({ proyecto }) => {
  const { titulo, descripcion, img, url, tecnologias, gitUrl, extra } =
    proyecto;

  return (
    <main className="lg:hidden flex container mx-auto flex-col items-center min-h-screen justify-center">
      <h1 className="text-4xl font-bold text-center mb-6">{titulo}</h1>

      <img className="rounded-lg mb-6" src={img} alt={titulo} />
      {extra && (
        <div className=" text-sm flex gap-2 mb-6">
          <svg
            viewBox="0 0 901.291 1000"
            fill="currentColor"
            height="2.5em"
            width="2.5em"
            className="text-red-500">
            <path d="M884.625 616c13.333 10.667 18.667 21.667 16 33-2.667 11.333-12 19-28 23l-78 22c-16 4-29.333 13.333-40 28-10.667 14.667-15.333 30.667-14 48l4 82c1.333 16-3.333 27.333-14 34-10.667 6.667-23.333 6.667-38 0l-86-44c-14.667-8-30.333-9.333-47-4s-28.333 15.333-35 30l-46 88c-8 14.667-17.667 22.333-29 23-11.333.667-22.333-5.667-33-19l-50-78c-22.667-32-52-38.667-88-20l-122 70c-14.667 9.333-25.333 11.333-32 6-6.667-5.333-7.333-16-2-32l54-164c5.333-16 4-30.667-4-44-8-13.333-20-20.667-36-22l-106-12c-16-2.667-25.667-8.667-29-18-3.333-9.333 1.667-19.333 15-30l86-76c13.333-10.667 20-24.333 20-41s-6.667-30.333-20-41l-86-76c-13.333-10.667-18.667-21.667-16-33 2.667-11.333 12-19 28-23l78-22c16-4 29.667-13.333 41-28 11.333-14.667 16.333-30.667 15-48l-6-82c0-17.333 5-29.333 15-36 10-6.667 22.333-6.667 37 0l80 38c16 6.667 32.333 7.333 49 2s29-15.333 37-30l46-80c8-14.667 18-21.667 30-21 12 .667 22 8.333 30 23l50 86c8 14.667 19.667 24.333 35 29 15.333 4.667 30.333 2.333 45-7l136-84c14.667-9.333 24.667-11.333 30-6 5.333 5.333 5.333 16 0 32l-60 170c-6.667 14.667-6 28.333 2 41 8 12.667 20.667 19.667 38 21l114 12c17.333 1.333 27.333 6.667 30 16 2.667 9.333-2.667 19.333-16 30l-86 76c-12 10.667-18 24.333-18 41s6 30.333 18 41l86 76m-384 92V604h-100v104h100m0-160V288h-100v260h100" />
          </svg>
          <p className="font-semibold italic">
            Extra:{" "}
            <span
              className="text-secondary text-pretty"
              dangerouslySetInnerHTML={{ __html: extra }}
            />
          </p>
        </div>
      )}

      <h3 className="text-lg font-semibold text-center mb-3">
        Tecnologías utilizadas:
      </h3>
      <ul className="flex flex-wrap gap-2 place-content-center mb-6">
        {tecnologias.map((tecnologia, index) => (
          <li
            key={index}
            className="bg-slate-500 text-white font-semibold text-sm py-2 px-2 rounded-lg">
            {tecnologia}
          </li>
        ))}
      </ul>

      <p className="text-md mb-6 text-secondary text-pretty">{descripcion}</p>

      <div className="flex items-center justify-between w-full">
        <Link
          className="bg-black border-primary border  text-primary  py-2 px-4 rounded-lg font-bold hover:bg-primary hover:text-white hover:border-white transition duration-300"
          to={url}
          target="_blank"
          rel="noopener noreferrer">
          Visitar proyecto
        </Link>
        {gitUrl && (
          <Link
            className="bg-black hover:text-black border border-white font-bold hover:border-secondary hover:bg-white text-white py-2 px-4 rounded-lg hover:bg-secondary-dark transition duration-300"
            to={gitUrl}
            target="_blank"
            rel="noopener noreferrer">
            Ver código en GitHub
          </Link>
        )}
      </div>
    </main>
  );
};
export default SingleProjectPageMobile;
