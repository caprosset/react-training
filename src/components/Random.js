import React, { Component } from 'react';

export class Random extends Component {
  // constructor(props) {
  //   super(props);
  // }

  randomNumber() {
    const { min, max } = this.props; 
    return Math.floor(Math.random() * (max - min) + min);
  }

  render() {
    return (
      <div className="random-number">
        <p>Random value between {this.props.min} and {this.props.max} {`=>`} {this.randomNumber()}</p>
      </div>
    )
  }
}

// export function Random({ min, max }) {
//   return (
//     <div className="random-number">
//       <p>Random value between {min} and {max} => { Math.floor(Math.random() * (max - min) + min) }</p>
//     </div>
//   )
// }
