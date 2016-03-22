const fetch = require('isomorphic-fetch')

module.exports = (host) => () =>
  (dispatch) => {
    return fetch(`http://${host}/data`)
      .then(response => response.text())
      .then(value => dispatch({type: 'SET', value: parseInt(value, 10)}))
  }
