import { useState } from "react";
import BusinessCard from "./BusinessCard";
import LanguageSwitch from "./LanguageSwitch";
import SocialMedia from "./SocialMedia";
import { getBrowserLanguage, getTranslatedTexts } from "./utils";

const App = () => {
  const [language, setLanguage] = useState(getBrowserLanguage());

  const texts = getTranslatedTexts(language);

  const handleLanguageSwitch = newLanguage => {
    setLanguage(newLanguage);
  }

  return (
    <div className="App">
      <LanguageSwitch language={language} onLanguageChange={handleLanguageSwitch} />
      <BusinessCard texts={texts} />
      <SocialMedia />
    </div>
  );
}

export default App;
