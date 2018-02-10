const guesses = ['a', 'o', 'k', 'd']

export default (state = guesses, { type, payload } = {}) => {
  switch(type) {
    case 'ADD_GUESS' :
      return state.concat([ payload ])
    default :
      return state
  }
}
