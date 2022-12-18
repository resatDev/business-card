import React from 'react';
import { LANGUAGES } from '../constants';

const LanguageSwitch = ({ language, onLanguageChange }) => {
  const handleLanguageChange = (language) => () => {
    onLanguageChange(language)
  };

  return (
    <div className='language-switch'>
      <button className={`ln-button${language === LANGUAGES.TURKISH ? ' active' : ''}`} type="button" onClick={handleLanguageChange(LANGUAGES.TURKISH)}>TR</button>
      <button className={`ln-button${language === LANGUAGES.ENGLISH ? ' active' : ''}`} type="button" onClick={handleLanguageChange(LANGUAGES.ENGLISH)}>EN</button>
    </div>
  )
}

export default LanguageSwitch;