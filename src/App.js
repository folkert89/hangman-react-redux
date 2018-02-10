import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/inputfield.js'
import GuessesContainer from './components/guessescontainer.js'


const guesses = ['a', 'o', 'k', 'd']

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
        <InputField content="Hier komt een balk met invoervelden" />
        <GuessesContainer title='Guesses' guesses={guesses} />
      </div>
    );
  }
}

export default App;
