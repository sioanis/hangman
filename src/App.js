import React, { Component } from 'react';
import './App.css';
import Hangman from './ui/hangman/main.js';
import Layout from './ui/layout/main.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hangman: false,
      layout: false
    }
  }
  backBtn() {
    this.setState({
      hangman: false,
      layout: false
    })
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
