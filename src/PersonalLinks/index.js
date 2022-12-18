import React from 'react';
import { PERSONAL_LINKS } from '../constants';

const PersonalLinks = () => {
  const handleClick = url => () => {
    window.open(url, "_blank");
  };

  return (
    <div className='personal-links'>
      {
        PERSONAL_LINKS.map(pl => {
          const {url, title} = pl;
          return (
            <button className='pl-button' type="button" onClick={handleClick(url)}>{title}</button>
          );
        })
      }
    </div>
  )
}

export default PersonalLinks;