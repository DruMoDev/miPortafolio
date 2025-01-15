import { useTranslation } from "react-i18next";
import CarouselPrueba from "../CarouselPrueba";
import Gravity, { MatterBody } from "../fancy/gravity";
import carrouselCardDetails from "../../db/carrouselCardDetails";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section
      id="aboutMe"
      className="flex flex-col items-center min-h-screen mx-auto justify-center gap-y-5 container">
      <h1 className="font-semibold text-center text-pretty">
        {t("aboutMe.title-1")}<br/>
        <span className="px-1 bg-animated-gift">{t("aboutMe.title-2")}</span>
        {t("aboutMe.title-3")}
      </h1>

      <div className="py-3 lg:py-2 mt-10 rounded-full md:bg-slate-500/[0.08] max-w-[80%] md:px-4">
        <p className="text-center bg-animated-gift w-fit md:px-2 md:py-1">
          {t("aboutMe.subtitle")}
        </p>
      </div>

      {/* <div className=" lg:mt-36">
        <CarouselPrueba />
      </div> */}

      <div className="w-1/2 md:w-3/5 h-[300px] flex flex-col relative">
        <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full z-10">
          {carrouselCardDetails.map((card, index) => (
            <MatterBody
              key={index}
              matterBodyOptions={{
                friction: 0.5,
                restitution: 0.2,
                density: 0.5,
              }}
              x={`${Math.random() * 80 + 10}%`}
              y={`${Math.random() * 80 + 10}%`}>
              <img
                src={card.imgUrl}
                alt={card.title}
                className="md:size-16 size-7"
              />
            </MatterBody>
          ))}
        </Gravity>
      </div>
    </section>
  );
};

export default AboutMe;
