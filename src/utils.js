import { LANGUAGES } from "./constants";
import { TEXTS } from "./texts"

export const getTranslatedTexts = language => {
  return TEXTS[language];
}

export const getBrowserLanguage = () => {
  switch (navigator.language || navigator.userLanguage) {
    case "tr-TR":
      return LANGUAGES.TURKISH;
    default:
      return LANGUAGES.ENGLISH;
  }
}