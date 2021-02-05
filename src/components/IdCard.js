import React from 'react';

export function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  console.log('birth :>> ', typeof birth, birth);
  return (
    <div className="id-card">
      <div className="id-card-picture">
        <img src={picture} alt="Contact profile picture" />
      </div>
      <div className="id-card-info">
        <p><span>First name:</span> {firstName}</p>
        <p><span>Last name:</span> {lastName}</p>
        <p><span>Gender:</span> {gender}</p>
        <p><span>Height:</span> {height}</p>
        <p><span>Birth:</span> {birth.toString()}</p>
      </div>
    </div>
  )
}
