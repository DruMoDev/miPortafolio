import { useTranslation } from "react-i18next";

const ShowMoreButton = ({ handleShowMore, showAll }) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={handleShowMore}
      className="mt-8 lg:mt-14  mx-auto btn btn--primary">
      {showAll ? t("projects.hideButton") : t("projects.showButton")}
    </button>
  );
};
export default ShowMoreButton;
