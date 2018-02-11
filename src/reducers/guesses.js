// import { ADD_GUESS } from '../actions/add_guess'
//
// const guesses = ['a', 'o', 'k', 'd']
//
// export default (state = guesses, { type, payload } = {}) => {
//   switch(type) {
//     case ADD_GUESS :
//       return [Object.assign({}, payload)].concat(state)
//     default :
//       return state
//   }
// }


const guesses = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GUESS':
      return [
        ...state,
        [action.text]

      ]
    default:
      return state
  }
}

export default guesses
