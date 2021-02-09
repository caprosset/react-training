import React from 'react';

export function Greetings({ lang, children }) {
  const greeting = {
    en: "Hello",
    fr: "Bonjour",
    de: "Hallo"
  }
  const greet = greeting[lang];

  return (
    <div className="greeting">
      <p>{`${greet} children`}</p>
      {/* <p>{greet} {children}</p> */}
      {/* <p>{greet + children}</p> */}
    </div>
  )
}

// export function Greetings({ lang, children }) {
//   return (
//     <div className="greeting">
//       <p>{greet(lang)} {children}</p>
//     </div>
//   )
// }

// function greet(lang) {
//   let greeting;
//   switch(lang) {
//     case "de":
//       greeting = "Hallo";
//       break;
//     case "fr":
//       greeting = "Bonjour";
//       break;
//     default:
//       greeting = "Hello";
//   }
//   return greeting;
// }