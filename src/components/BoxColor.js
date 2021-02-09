import React from 'react'

export function BoxColor({ r, g, b }) {
  return (
    <div className="box-color" style={styles(r,g,b)}>
      <p>rgb({r}{g}{b})</p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  )
}

const styles = (r, g, b) => ({
  backgroundColor: `rgb(${r}, ${g}, ${b})`
})

const componentToHex = (color) => {
  const hex = color.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}