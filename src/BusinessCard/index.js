import React from 'react';

const BusinessCard = ({ texts }) => {
  const { INTRODUCTION } = texts;
  return (
    <div className='business-card-content'>
      <div className='img-container'>
      <img src="https://picsum.photos/200/200" alt="picsum" />
      <div className='checkmark'></div>
      </div>
      <p className='job-title'>Reşat Memiş
        <span>Front-end Developer</span>
      </p>
      <p className='introduction'>{INTRODUCTION}</p>
    </div>
  )
}

export default BusinessCard;