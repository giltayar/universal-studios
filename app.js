const express = require('express')
const React = require('react')
const ReactDomServer = require('react-dom/server')
const rootFactory = require('./src/public/Root.jsx')
const {createStore} = require('./src/public/createStore.jsx')

const app = express()

app.use('/index.html', (req, res) => {
  const initialState = 0
  const store = createStore(initialState)
  const Root = rootFactory(store)
  
  res.send(`
    <html>
      <body>
        <div id="root">${ReactDomServer.renderToString(<Root />)}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `)
})

app.use('/bundle.js', express.static(__dirname + '/lib/public/bundle.js'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening...')
})
