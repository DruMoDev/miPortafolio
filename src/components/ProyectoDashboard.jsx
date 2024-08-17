import { Link } from "react-router-dom";
import iconsMap from "../assets/iconsMap";

const ProyectoDashboard = ({ proyecto, id }) => {
  const { titulo, descripcion, img, url, tecnologias, gitUrl } = proyecto;

  return (
    <article className="rounded-lg shadow bg-[#1a1b1e]">
      <Link to={`/proyecto/${id}`}>
        <img
          className="rounded-t-lg w-full object-cover"
          src={img}
          alt={`Imagen del proyecto ${titulo}`}
        />
      </Link>
      <div className="flex flex-col px-4 py-4 gap-3 lg:gap-5 lg:px-10 lg:py-8">
        <h2 className="text-xl font-bold tracking-tighter overflow-hidden line-clamp-1 text-white lg:text-4xl">
          {titulo}
        </h2>

        <p className="text-sm lg:text-xl text-[#6e6e77] overflow-hidden line-clamp-2 text-pretty">
          {descripcion}
        </p>

        <div className="flex flex-col lg:flex-row gap-4  lg:justify-between lg:mt-4">

    
        <div className="flex gap-4 lg:gap-7 flex-wrap">
          {tecnologias.map((tecnologia) => {
            const IconComponent = iconsMap[tecnologia.icon];
            return (
              <div key={tecnologia.name}>
                {IconComponent && <IconComponent className="size-4 lg:size-8 text-white " />}
              </div>
            );
          })}
        </div>

        <div className="flex gap-2 lg:gap-5">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to={url}
            className=" bg-primary px-5 py-2 rounded-lg flex gap-1  items-center border border-transparent hover:bg-opacity-85 lg:px-10 transition-all">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 lg:size-7"
              stroke="#000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.07"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                  stroke="#ffffff"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>{" "}
                <path
                  d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                  stroke="#ffffff"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>{" "}
              </g>
            </svg>
            <p className="font-semibold lg:text-xl">Demo</p>
          </Link>

          <Link
            className="bg-transparent border-white border px-5 py-2 rounded-lg flex gap-1  items-center lg:px-10 hover:bg-opacity-10 hover:bg-white transition-all"
            to={gitUrl}
            target="_blank"
            rel="noopener noreferrer">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 lg:size-6">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z"
                  fill="#ffffff"></path>{" "}
                <path
                  d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z"
                  fill="#ffffff"></path>{" "}
              </g>
            </svg>
            <p className="font-semibold lg:text-xl">GitHub</p>
          </Link>
        </div>
        </div>
      </div>
    </article>
  );
};

export default ProyectoDashboard;
