import { useState } from "react";
import BusinessCard from "./BusinessCard";
import { LANGUAGES } from "./constants";
import LanguageSwitch from "./LanguageSwitch";
import { getTranslatedTexts } from "./utils";

const App = () => {
  const [language, setLanguage] = useState(LANGUAGES.TURKISH);

  const texts = getTranslatedTexts(language);

  const handleLanguageSwitch = newLanguage => {
    setLanguage(newLanguage);
  }

  return (
    <div className="App">
      <LanguageSwitch language={language} onLanguageChange={handleLanguageSwitch} />
      <BusinessCard texts={texts} />
    </div>
  );
}

export default App;
