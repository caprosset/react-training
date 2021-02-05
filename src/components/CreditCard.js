import React from 'react';

export function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  const divStyle = {
    backgroundColor: bgColor,
    color: color
  }
  const imgUrl = getGreeting(type);
  const creditNumber = getCreditNum(number);

  return (
    <div className='credit-container' style={divStyle}>
      <div>
          <img src={imgUrl} className='credit-logo'/>
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

function getGreeting(type) {
  switch (type) {
    case 'Visa':
      return './img/visa.png';
    case 'Master Card':
      return './img/master-card.svg';
  }
}

function getCreditNum(number) {
  const lastFour = number.slice(-4);
  return `●●●● ●●●● ●●●● ${lastFour}`;
}

function getTwoDigits(number) {
  return number.length === 1 ? "0" + number : number;
}