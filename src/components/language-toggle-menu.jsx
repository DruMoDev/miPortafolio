import i18n from "../i18next";

export default function LanguageToggleMenu() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const currentLanguage = i18n.language;

  return (
    <button
      className="z-50"
      onClick={() => {
        if (currentLanguage === "es") changeLanguage("en");
        else changeLanguage("es");
      }}>
      <img
        src={`/flags/${currentLanguage}-flag-icon.png`}
        alt={`${currentLanguage} Flag`}
        className="size-5"
      />
    </button>
  );
}
