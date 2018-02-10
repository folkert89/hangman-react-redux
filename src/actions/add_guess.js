// export const ADD_GUESS = 'ADD_GUESS'
//
// export default (newGuess) => {
//   return {
//     type: ADD_GUESS,
//     payload: newGuess
//   }
// }
export const addGuess = text => {
  return {
    type: 'ADD_GUESS',
    text
  }
}
