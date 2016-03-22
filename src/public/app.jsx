const React = require('react')
const ReactDOM = require('react-dom')
const helloWorld = require('./hello.jsx')
const rootFactory = require('./Root.jsx')
const {createStore} = require('./createStore.jsx')
const doRefreshFactory = require('./refresher')

const initialState = window.__INITIAL_STATE__
const store = createStore(initialState)
const Root = rootFactory(store, doRefreshFactory('localhost:3000'))

ReactDOM.render(<Root />, document.getElementById('root'))