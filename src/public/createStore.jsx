const {createStore, applyMiddleware} = require('redux')
const thunk = require('redux-thunk').default

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    case 'SET':
      return action.value
    default:
      return state
  }
}

exports.createStore = function(initialState) {
  const finalCreateStore = applyMiddleware(thunk)(createStore)
  
  return finalCreateStore(counterReducer, initialState)    
}
