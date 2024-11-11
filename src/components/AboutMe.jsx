import { useTranslation } from "react-i18next";
import CarouselPrueba from "./CarouselPrueba";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section
      id="aboutMe"
      className="flex flex-col items-center flex-grow justify-center mt-28 lg:mt-44 w-[85%] mx-auto lg:w-full">
      <h1 className="tracking-tighter text-center lg:text-8xl text-4xl font-bold">
        {t("aboutMe.title-1")}
        <span className="bg-animated-gift">{t("aboutMe.title-2")}</span>
        {t("aboutMe.title-3")}
      </h1>

      <p className="lg:leading-10 leading-7 lg:text-2xl text-base mt-20 text-secondary text-center font-semibold">
        {t("aboutMe.description-1")}
        <span className="text-primary">{t("aboutMe.description-2")}</span>
        {t("aboutMe.description-3")}
        <span className="text-primary">{t("aboutMe.description-4")}</span>
        {t("aboutMe.description-5")}
        <span className="text-primary">{t("aboutMe.description-6")}</span>
        {t("aboutMe.description-7")}
      </p>

      <p className="my-10 text-secondary text-center text-xs lg:hidden">
        {t("aboutMe.technologies")}
      </p>

      <div className=" lg:mt-36">
        <CarouselPrueba />
      </div>
    </section>
  );
};

export default AboutMe;
