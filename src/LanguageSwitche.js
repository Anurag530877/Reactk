import { useTranslation } from "react-i18next";
function LanguageSwitcher() {

  const {i18n} = useTranslation();
  


  return (
    <>
      <button
        className="btn btn-outline-success m-1 " onClick={() => i18n.changeLanguage("en")}
      >
        English
      </button>

      <button
        className="btn btn-outline-success m-1" onClick={() => i18n.changeLanguage("hi")}
      >
        हिंदी
      </button>
    </>
  );
}

export default LanguageSwitcher;