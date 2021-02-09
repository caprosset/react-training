import React from 'react';

export function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  const divStyle = {
    backgroundColor: bgColor,
    color: color
  }
  const imgUrl = getImageUrl(type);
  const creditNumber = getCreditNum(number);

  return (
    <div className='credit-container' style={divStyle}>
      <div>
          <img src={imgUrl} className='credit-logo' alt="Credit card logo" />
      </div>
      <p className='creditNumber'>{creditNumber}</p>
      <div>
          <p>Expires {getTwoDigits(expirationMonth)}/{getTwoDigits(expirationYear)}</p>
          <p>{bank}</p>
      </div>
      <p>{owner}</p>
    </div>
  )
}

function getImageUrl(type) {
  switch (type) {
    case 'Visa':
      return './img/visa.png';
    case 'Master Card':
      return './img/master-card.svg';
    default:
      return './img/visa.png';
  }
}

function getCreditNum(number) {
  const lastFour = number.slice(-4);
  return `●●●● ●●●● ●●●● ${lastFour}`;
}

function getTwoDigits(number) {
  return number.length === 1 ? "0" + number : number;
}