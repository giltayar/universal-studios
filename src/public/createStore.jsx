const {createStore} = require('redux')

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    default:
      return state
  }
}

exports.createStore = function(initialState) {
  return createStore(counterReducer, initialState)    
}
