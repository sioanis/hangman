import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'word'.split(''),
      guesses: 5
    };
  }
  onKeyUp(e, letter, index) {
    if (this.state.guesses) {
      if (e.key === letter) {
        this.setState({
          index: this.state.word.slice(0,index+1)
        })
      } else {
        const guesses = this.state.guesses - 1;
        if (!guesses) {
          alert('You lose!');
        }
        this.setState({ guesses })
      }
    }
  }
  render() {
    return (
      <div className="app">
        <header>Hangman</header>
        <section>
          {
            this.state.word.map((letter, index) => {
              const reveal = this.state.index && this.state.index[index];
              return <input key={index} maxLength="1" value={reveal ? letter : ''}></input>;
            })
          }
          <p>Remaining guesses: {this.state.guesses}</p>
          <button onClick={e => this.onKeyUp(e, letter, index)}>SUBMIT</button>
        </section>
        <svg width={400} height={400} xmlns="http://www.w3.org/2000/svg" className="hangman">
          <g id="head" display="none" style={{display: 'inline'}}>
            <title>head</title>
            <ellipse fill="#fcf9f9" stroke="#000000" stroke-width={5} cx={160} cy={77} id="svg_1" rx={25} ry={26} />
          </g>
          <g id="torso" display="none" style={{display: 'inline'}}>
            <title>torso</title>
            <line fill="none" stroke="#000000" stroke-width={5} stroke-linejoin="null" stroke-linecap="null" x1={157} y1={100} x2={157} y2={190} id="svg_9" />
          </g>
          <g id="rightarm" display="none" style={{display: 'inline'}}>
            <title>rightarm</title>
            <line fill="none" stroke="#000000" stroke-width={3} stroke-linejoin="null" stroke-linecap="null" x1={158} y1={130} x2={204} y2={107} id="svg_13" />
          </g>
          <g id="leftarm" display="none" style={{display: 'inline'}}>
            <title>leftarm</title>
            <line stroke-width={3} id="svg_32" y2={108} x2={113} y1={129} x1={157} stroke-linecap="null" stroke-linejoin="null" stroke="#000000" fill="none" />
          </g>
          <g id="leftleg" display="none" style={{display: 'inline'}}>
            <title>leftleg</title>
            <line fill="none" stroke="#000000" stroke-width={3} stroke-linejoin="null" stroke-linecap="null" x1={156} y1={188} x2={109} y2={229} id="svg_14" />
          </g>
          <g id="rightleg" display="none" style={{display: 'inline'}}>
            <title>rightleg</title>
            <line fill="none" stroke="#000000" stroke-width={3} stroke-linejoin="null" stroke-linecap="null" x1={157} y1={187} x2={189} y2={233} id="svg_16" />
          </g>
        </svg>
        <footer>Made by Sue.</footer>
      </div>
    );
  }
}

export default App;
