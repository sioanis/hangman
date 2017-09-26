import React, { Component } from 'react';
import './hangman.css';
import Body from './body.js';

class Hangman extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: 'word'.split(''),
      guess: 6
    };
  }
  onSubmit() {
    let win = 0;
    if (this.state.guess) {
      this.state.word.forEach((letter, index) => {
        const i = this.refs[index.toString()];
        if (!i.value) {
          return;
        }
        if (i.value === letter) {
          win++;
          i.disabled = true;
        } else {
          const guess = this.state.guess - 1;
          i.value = '';
          if (!guess) {
            alert('You lose!');
          }
          this.setState({ guess })
        }
      }, this)
    }
    if (win === this.state.word.length) {
      alert('You win!')
    }
  }
  render() {
    return (
      <div>
        <section>
          {
            this.state.word.map((letter, index) => {
              return <input ref={index} key={index} maxLength="1"></input>
            })
          }
          <button onClick={() => this.onSubmit()}>Sumbit</button>
          <p>Remaining guesses: {this.state.guess}</p>
          <button onClick={() => this.props.back()}>Back to Menu</button>
        </section>
        <Body guess={this.state.guess}/>
      </div>
    );
  }
}

export default Hangman;
