import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Man from './hangman'

let secretWords = ["haribo", "oscaralho", "codaisseur", "trump", "feyenoord", "ireland"]
let hints = ["Dutch candy", "nickname of dude in our class", "the best coding school", "Fake news", "the best football club", "the country of dark beers"]
let indexWord = Math.floor(Math.random() * secretWords.length)
let secretWord = secretWords[indexWord]
let hint = hints[indexWord]


class GuessesContainer extends PureComponent {
  static propTypes = {
    guesses: PropTypes.array.isRequired,
  }

  wrongGuessCount(word, guesses){
      return guesses.filter(letter => (word.indexOf(letter)<0))
  }

  showGuess(word, guesses) {
    return word.split('').map(function(letter){
      if (guesses.join("").indexOf(letter)>=0){
        return letter
      } else {
        return "_"
      }
    }).join(" ")
  }
  onButtonClick(event){
    event.preventDefault()
    window.location.reload()
  }

  render() {

    const {guesses} = this.props

    if (secretWord===this.showGuess(secretWord, guesses).replace(/\s/g, '')){
        alert(`you are the winner!! you won the game in ${guesses.length} guesses`)

      }

    console.log(this)
    return (
      <div>
        <h3>Hint: {hint}</h3>
        <button onClick={this.onButtonClick}>New word</button>
        <h3>The word: {this.showGuess(secretWord, guesses)}</h3>
        <h3>Wrong guesses: {this.wrongGuessCount(secretWord, guesses)}</h3>
        <h3>You have {6-this.wrongGuessCount(secretWord, guesses).length} lives left</h3>
        <h3>Total guesses played: {guesses.length}</h3>
        <hr/>
        <Man />
      </div>
    )
  }
}

const mapStateToProps = ({ guesses }) => ({
  guesses,
})

export default connect(mapStateToProps)(GuessesContainer)
