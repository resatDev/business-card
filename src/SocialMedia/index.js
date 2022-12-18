import React from 'react';
import { SOCIAL_MEDIAS } from '../constants';

const SocialMedia = () => {
  return (
    <div className='social-media'>
      {
        SOCIAL_MEDIAS.map(sm => {
          const { url, icon } = sm;

          return (
            <a href={url} target="_blank" rel="noreferrer">
              {icon}
            </a>
          );
        })
      }
    </div>
  )
}

export default SocialMedia;