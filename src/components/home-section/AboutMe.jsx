import { useTranslation } from "react-i18next";
import CarouselPrueba from "../CarouselPrueba";
import Gravity, { MatterBody } from "../fancy/gravity";
import carrouselCardDetails from "../../db/carrouselCardDetails";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section
      id="aboutMe"
      className="flex flex-col items-center min-h-screen mx-auto justify-center gap-y-5">
      <h1 className="font-semibold text-center">
        {t("aboutMe.title-1")}
        <span className="px-1 bg-animated-gift">{t("aboutMe.title-2")}</span>
        {t("aboutMe.title-3")}
      </h1>

      <div className="py-3 lg:py-2 px-4 mt-10 rounded-full bg-slate-500/[0.08] max-w-[80%]">
        <p className="px-2 tracking-tight text-center bg-animated-gift w-fit">
          {t("aboutMe.subtitle")}
        </p>
      </div>

      {/* <div className=" lg:mt-36">
        <CarouselPrueba />
      </div> */}

      <div className="w-full h-[300px] flex flex-col relative">
        <Gravity
          gravity={{ x: 0, y: 1 }}
          className="w-full h-full z-10">
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
                className="w-16 h-16"
              />
            </MatterBody>
          ))}
        </Gravity>
      </div>
    </section>
  );
};

export default AboutMe;
