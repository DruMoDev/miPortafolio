import { Link } from "react-router-dom";
import iconsMap from "../../assets/iconsMap.jsx";

// TODO: CORREGIR ESTE COMPONENTE CSS a full
const SingleProjectPage = ({ proyecto }) => {
  const {
    titulo,
    descripcion,
    img,
    url,
    tecnologias,
    gitUrl,
    extra,
    aprendizajes,
  } = proyecto;
  return (
    <div className="container mx-auto flex-grow">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <img
                src={img}
                width="1200"
                height="600"
                alt="Project Hero"
                className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-col items-start space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                {titulo}
              </h1>
              <p className="text-muted-foreground md:text-xl">{descripcion}</p>
              <div className="space-x-4">
                <Link
                  href={url}
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#006AFF] px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#006AFF]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Live Site
                </Link>
                <Link
                  href={gitUrl}
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  GitHub
                </Link>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  viewBox="0 0 901.291 1000"
                  fill="currentColor"
                  height="1.5em"
                  width="1.5em"
                  className="text-red-500">
                  <path d="M884.625 616c13.333 10.667 18.667 21.667 16 33-2.667 11.333-12 19-28 23l-78 22c-16 4-29.333 13.333-40 28-10.667 14.667-15.333 30.667-14 48l4 82c1.333 16-3.333 27.333-14 34-10.667 6.667-23.333 6.667-38 0l-86-44c-14.667-8-30.333-9.333-47-4s-28.333 15.333-35 30l-46 88c-8 14.667-17.667 22.333-29 23-11.333.667-22.333-5.667-33-19l-50-78c-22.667-32-52-38.667-88-20l-122 70c-14.667 9.333-25.333 11.333-32 6-6.667-5.333-7.333-16-2-32l54-164c5.333-16 4-30.667-4-44-8-13.333-20-20.667-36-22l-106-12c-16-2.667-25.667-8.667-29-18-3.333-9.333 1.667-19.333 15-30l86-76c13.333-10.667 20-24.333 20-41s-6.667-30.333-20-41l-86-76c-13.333-10.667-18.667-21.667-16-33 2.667-11.333 12-19 28-23l78-22c16-4 29.667-13.333 41-28 11.333-14.667 16.333-30.667 15-48l-6-82c0-17.333 5-29.333 15-36 10-6.667 22.333-6.667 37 0l80 38c16 6.667 32.333 7.333 49 2s29-15.333 37-30l46-80c8-14.667 18-21.667 30-21 12 .667 22 8.333 30 23l50 86c8 14.667 19.667 24.333 35 29 15.333 4.667 30.333 2.333 45-7l136-84c14.667-9.333 24.667-11.333 30-6 5.333 5.333 5.333 16 0 32l-60 170c-6.667 14.667-6 28.333 2 41 8 12.667 20.667 19.667 38 21l114 12c17.333 1.333 27.333 6.667 30 16 2.667 9.333-2.667 19.333-16 30l-86 76c-12 10.667-18 24.333-18 41s6 30.333 18 41l86 76m-384 92V604h-100v104h100m0-160V288h-100v260h100" />
                </svg>
                <p
                  className="text-muted-foreground text-sm"
                  dangerouslySetInnerHTML={{ __html: extra }}></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                Tecnologías Utilizadas{" "}
              </h2>

              <div className="mt-4 grid grid-cols-2 gap-4 ">
              {tecnologias.map((tecnologia, index) => {
                  const Icono = iconsMap[tecnologia.icon];
                  return (
                    <div key={index} className="flex items-center gap-2">
                      {Icono ? <Icono size={24} /> : <span>Icono no disponible</span>}
                      <span>{tecnologia.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                Lo que aprendí
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>{aprendizajes}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SingleProjectPage;
