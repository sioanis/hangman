import React, { Component } from 'react';

class Body extends Component {
  render() {
    const stroke = "#000";
    const body = [
      { id: 'torso', strokeWidth: 5, x1: 157, y1:100, x2:157, y2:190 },
      { id: 'rightarm', strokeWidth: 3, x1: 158, y1:130, x2:204, y2:107 },
      { id: 'leftarm', strokeWidth: 3, x1: 157, y1:129, x2:113, y2:108 },
      { id: 'leftleg', strokeWidth: 3, x1: 156, y1:188, x2:109, y2:229 },
      { id: 'rightleg', strokeWidth: 3, x1: 157, y1:187, x2:189, y2:233 }
    ];
    let counter = 5;
    return (
      <svg width={400} height={400} xmlns="http://www.w3.org/2000/svg" className="hangman">
        <g id="head" style={{display: this.props.guess < 6 ? 'inline' : 'none'}}>
          <ellipse fill="#fcf9f9" stroke={stroke} strokeWidth={5} cx={160} cy={77} rx={25} ry={26} />
        </g>
        {body.map((parts, index) => {
            return <g key={index} id={parts.id} style={{display: this.props.guess < counter-- ? 'inline' : 'none'}}>
              <line stroke={stroke} strokeWidth={parts.strokeWidth} x1={parts.x1} y1={parts.y1} x2={parts.x2} y2={parts.y2} />
            </g>
        })}
      </svg>
    );
  }
}

export default Body;
