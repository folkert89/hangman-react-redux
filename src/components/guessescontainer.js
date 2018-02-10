import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './inputfield.css'


class GuessesContainer extends PureComponent {
  static propTypes = {
    guesses: PropTypes.array.isRequired,
  }

  renderGuesses(recipe, index) {
    return  <li key={index}>{recipe}</li>
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ol className="Guesses">{ this.props.guesses.map(this.renderGuesses) }</ol>
      </div>
    )
  }
}

export default GuessesContainer
