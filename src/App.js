import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuessesContainer from './components/guessescontainer.js'
import AddGuess from './components/add_guess'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hangman Game</h1>
        </header>
        <p className="App-intro">
        </p>
        <AddGuess />
        <GuessesContainer title='Guesses' />
      </div>
    );
  }
}

export default App;
