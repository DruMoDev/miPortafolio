import iconsMap from "../../assets/iconsMap";

const Card = ({ proyecto, id }) => {
    const { titulo, descripcion, img, url, tecnologias, gitUrl } = proyecto;

  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img src={img} alt="Card Image" className="w-full h-48 object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
      </div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h2 className="text-xl font-bold">{titulo}</h2>
        <p className="text-sm">{descripcion}</p>
        <div className="mt-2">
          {tecnologias.map((tecnologia) => {
            const IconComponent = iconsMap[tecnologia.icon];
            return (
              <div key={tecnologia.name}>
                {IconComponent && <IconComponent className="size-4 lg:size-8 text-white " />}
              </div>
            );
          })}
        </div>
        <div className="mt-4">
          <a href={url} className="text-sm underline text-blue-300 mr-4">Enlace 1</a>
          <a href={gitUrl} className="text-sm underline text-blue-300">Enlace 2</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
