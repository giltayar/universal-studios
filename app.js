const express = require('express')
const ReactDomServer = require('react-dom/server')
const helloWorld = require('./src/public/hello.jsx')

const app = express()

app.use('/index.html', (req, res) => res.send(`
<html>
    <body>
        <div id="root">
            ${ReactDomServer.renderToString(helloWorld)}
        </div>
        <script src="bundle.js"></script>
    </body>
 </html>
`))

app.use('/bundle.js', express.static(__dirname + '/lib/public/bundle.js'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening...')
})
