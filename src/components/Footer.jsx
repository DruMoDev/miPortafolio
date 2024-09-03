import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-quinary text-white z-50 w-screen ">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row items-center justify-between container">
        <span className="text-sm xl:text-base  sm:text-center dark:text-gray-400">
          © {new Date().getFullYear().toString()} Roger Morera | Todos los
          Derechos Reservados.
        </span>
        <ul className="flex flex-wrap items-center justify-center text-center gap-3 mt-3 text-sm xl:text-base font-medium  dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/#aboutMe" className="hover:text-primary transition-all">
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/#misProyectos"
              className="hover:text-primary transition-all">
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/#contacto" className="hover:text-primary transition-all">
              Contacto
            </Link>
          </li>
          <li>
            <a href="https://www.instagram.com/drumulberry" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="xl:w-7 w-6 h-full text-white hover:text-primary transition-all">
                <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/DruMoDev" target="_blank">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="xl:w-6 w-5 h-full text-white hover:text-primary transition-all">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/roger-morera/" target="_blank">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                className="xl:w-7 w-6 h-full text-white hover:text-primary transition-all pb-1">
                <path
                  fill="currentColor"
                  d="M6 6h2.767v1.418h.04C9.192 6.727 10.134 6 11.539 6 14.46 6 15 7.818 15 10.183V15h-2.885v-4.27c0-1.018-.021-2.329-1.5-2.329-1.502 0-1.732 1.109-1.732 2.255V15H6V6zM1 6h3v9H1V6zM4 3.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 014 3.5z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
