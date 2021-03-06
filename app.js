const express = require('express')
const React = require('react')
const ReactDomServer = require('react-dom/server')
const rootFactory = require('./src/public/Root.jsx')
const {createStore} = require('./src/public/createStore.jsx')
const doRefreshFactory = require('./src/public/refresher')
const fs = require('fs')

const app = express()

app.use('/index.html', (req, res) => {
  const initialState = 0
  const store = createStore(initialState)
  const doRefresh = doRefreshFactory('localhost:3000')
  const Root = rootFactory(store, doRefresh)
  
    store.dispatch(doRefresh()).then(() => {
    res.send(`
      <html>
        <body>
          <div id="root">${ReactDomServer.renderToString(<Root />)}</div>
          <script>window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}</script>
          <script src="bundle.js"></script>
        </body>
      </html>
    `)
  })
})

app.use('/bundle.js', express.static(__dirname + '/lib/public/bundle.js'));

app.use('/save', (req, res) => {
  fs.writeFileSync('data.txt', req.query['value'].toString())
  
  res.end()
})

app.use('/data', (req, res) => {
  const data = parseInt(fs.readFileSync('data.txt', {encoding: 'UTF-8'}))
  
  res.json(data)
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening...')
})
