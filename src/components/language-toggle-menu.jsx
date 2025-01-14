import i18n from "../i18next";

export default function LanguageToggleMenu({ setIsLanguageMenuOpen }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="absolute top-10 left-0 bg-secondary rounded-lg shadow-lg">
      <button
        className="text-tertiary hover:text-primary transition-all duration-300 w-full  px-5 py-1 flex gap-1 items-center justify-center border-b"
        onClick={() => {
          setIsLanguageMenuOpen(false);
          changeLanguage("es");
        }}>
        <img
          src="/flags/spain-flag-icon.png"
          alt="Spain Flag"
          className="size-4"
        />
        Español
      </button>
      <button
        className="text-tertiary hover:text-primary transition-all duration-300 w-full  px-5 py-1 flex gap-1 items-center justify-center"
        onClick={() => {
          setIsLanguageMenuOpen(false);
          changeLanguage("en");
        }}>
        <img
          src="/flags/english-flag-icon.png"
          alt="Spain Flag"
          className="size-4"
        />
        English
      </button>
    </div>
  );
}
