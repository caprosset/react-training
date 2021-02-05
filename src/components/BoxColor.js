import React from 'react'

export function BoxColor({ r, g, b }) {
  const hex = rgbToHex(r, g, b);

  return (
    <div className="box-color" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
      <p>rgb({r}{g}{b})</p>
      <p>{hex}</p>
    </div>
  )
}

function componentToHex (color) {
  const hex = color.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex (r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}