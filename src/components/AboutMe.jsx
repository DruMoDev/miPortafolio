import { useTranslation } from "react-i18next";
import CarouselPrueba from "./CarouselPrueba";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section
      id="aboutMe"
      className="flex flex-col items-center justify-center h-screen mx-auto">
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

      <div className=" lg:mt-36">
        <CarouselPrueba />
      </div>
    </section>
  );
};

export default AboutMe;
