import React from 'react'

export function Random({ min, max }) {
  return (
    <div className="random-number">
      <p>Random value between {min} and {max} => { Math.floor(Math.random() * (max - min) + min) }</p>
    </div>
  )
}
