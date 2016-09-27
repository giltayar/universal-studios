const express = require('express')

const app = express()

app.use('/index.html', express.static(__dirname + '/src/public/index.html'));
app.use('/bundle.js', express.static(__dirname + '/lib/public/bundle.js'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening...')
})
