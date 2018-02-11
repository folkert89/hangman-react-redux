import React from 'react'
import { connect } from 'react-redux'
import { addGuess } from '../actions/add_guess.js'

let AddGuess = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          } else if (input.value.length>1){
            alert('Please give only one value')
            input.value = ''
            return
          } else if (!/^[a-zA-Z]/.test(input.value)) {
            alert('Please give only an alphabetic value')
            input.value = ''
            return
          } else {
            dispatch(addGuess(input.value.toLowerCase()))
            input.value = ''
          }
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Guess
        </button>
      </form>
    </div>
  )
}
AddGuess = connect()(AddGuess)

export default AddGuess
