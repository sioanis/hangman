import React, { Component } from 'react';
import './App.css';
import Hangman from './ui/hangman/main.js';
import Layout from './ui/layout/main.js';

const initialState = {
  hangman: false,
  layout: false
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }
  backBtn() {
    this.setState(initialState)
  }
  render() {
    return this.state.hangman ? <Hangman back={() => this.backBtn()}/> :
      this.state.layout ? <Layout back={() => this.backBtn()}/> :
        <div className="app">
          <button onClick={() => this.setState({hangman: true})}>Hangman</button>
          <button onClick={() => this.setState({layout: true})}>Layout</button>
        </div>;
  }
}

export default App;
