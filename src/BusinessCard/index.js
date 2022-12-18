import React from 'react';

const BusinessCard = ({ texts }) => {
  const { INTRODUCTION } = texts;
  return (
    <div className="business-card">
      <img src="https://picsum.photos.com/200" alt="picsum" />
      <p>{INTRODUCTION}</p>
      <div>
        Social Media Part
      </div>
    </div>
  )
}

export default BusinessCard;