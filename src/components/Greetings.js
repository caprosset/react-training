import React from 'react'

export function Greetings({ lang, children }) {
  return (
    <div className="greeting">
      <p>{greet(lang)} {children}</p>
    </div>
  )
}

function greet(lang) {
  let greeting;
  switch(lang) {
    case "de":
      greeting = "Hallo";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    default:
      greeting = "Hello";
  }
  return greeting;
}