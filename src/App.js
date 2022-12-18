import { useState } from "react";
import BusinessCard from "./BusinessCard";
import LanguageSwitch from "./LanguageSwitch";
import PersonalLinks from "./PersonalLinks";
import SocialMedia from "./SocialMedia";
import { getBrowserLanguage, getTranslatedTexts } from "./utils";

const App = () => {
  const [language, setLanguage] = useState(getBrowserLanguage());

  const texts = getTranslatedTexts(language);

  const handleLanguageSwitch = newLanguage => {
    setLanguage(newLanguage);
  }

  return (
    <div className="business-card">
      <LanguageSwitch language={language} onLanguageChange={handleLanguageSwitch} />
      <BusinessCard texts={texts} />
      <SocialMedia />
      <PersonalLinks />
    </div>
  );
}

export default App;
