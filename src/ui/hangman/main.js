import React, { Component } from 'react';
import './hangman.css';
import Body from './body.js';

class Hangman extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: null,
      guess: 6
    };
  }
  onSubmit() {
    let win = 0;
    let letterFound = false
    if (this.refs.guess.value) {
      this.state.word.forEach((letter, index) => {
        const i = this.refs[index.toString()];
        if (this.refs.guess.value === letter) {
          i.value = letter;
          letterFound = true;
          win++;
        }
      }, this)
      if (!letterFound) {
        const guess = Math.max(this.state.guess - 1,0);
        if (!guess) {
          alert('You lose!');
          this.refs.guess.disabled = true;
        }
        this.setState({ guess })
      }
      this.refs.guess.value = '';
    }
    if (win === this.state.word.length) {
      alert('You win!')
    }
  }
  render() {
    return (
      <div>
        {!this.state.word ?
          <section>
            <input ref='word' className='intro' placeholder='Enter a word.'></input>
            <button onClick={() => this.setState({ word: this.refs.word.value && this.refs.word.value.split('') })}>Submit</button>
          </section> :
          <section>
            {
              this.state.word.map((letter, index) => {
                return <input disabled={true} ref={index} key={index} maxLength="1"></input>
              })
            }
            <p>Remaining guesses: {this.state.guess}</p>
            <input className='letter' maxLength="1" ref='guess'></input>
            <p>Enter a letter.</p>
            <button onClick={() => this.onSubmit()}>Submit</button>
            <button onClick={() => this.props.back()}>Back to Menu</button>
          </section>
        }
        <Body guess={this.state.guess}/>
      </div>
    );
  }
}

export default Hangman;
