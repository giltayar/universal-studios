const React = require('react')
const ReactDOM = require('react-dom')
const helloWorld = require('./hello.jsx')
const rootFactory = require('./Root.jsx')
const {createStore} = require('./createStore.jsx')

const initialState = 0
const store = createStore(initialState)
const Root = rootFactory(store)

ReactDOM.render(<Root />, document.getElementById('root'))