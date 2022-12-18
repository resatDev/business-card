import { useState } from "react";
import BusinessCard from "./BusinessCard";
import { LANGUAGES } from "./constants";
import { getTranslatedTexts } from "./utils";

const App = () => {
  const [language, setLanguage] = useState(LANGUAGES.TURKISH);

  const texts = getTranslatedTexts(language);

  return (
    <div className="App">
      <BusinessCard texts={texts} />
    </div>
  );
}

export default App;
