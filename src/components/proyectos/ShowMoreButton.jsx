import { useTranslation } from "react-i18next";

const ShowMoreButton = ({ handleShowMore, showAll }) => {
  const { t } = useTranslation();

  return (
    <>
      {showAll ? (
        <button
          onClick={handleShowMore}
          className="text-white mt-8 lg:mt-14 text-base lg:text-2xl bg-primary px-7 lg:px-12  mx-auto rounded-lg py-3 transition-all hover:bg-opacity-80">
          {t("projects.hideButton")}
        </button>
      ) : (
        <button
          onClick={handleShowMore}
          className="text-white mt-8 lg:mt-14 text-base lg:text-2xl bg-primary px-7 lg:px-12 mx-auto rounded-lg py-3 transition-all hover:bg-opacity-80">
          {t("projects.showButton")}
        </button>
      )}
    </>
  );
};
export default ShowMoreButton;
