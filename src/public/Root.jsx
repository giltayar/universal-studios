const React = require('react')
const {Provider} = require('react-redux')
const Counter = require('./counter.jsx')

module.exports = store => props => <Provider store={store}><Counter /></Provider>
