const express = require('express')
const app = express()
const path = require('path')
const serveIndex = require('serve-index');
const port = 3000

// access static files here like css, js and images
app.use('/public', express.static('public'))
app.use('/gators', express.static('public'))
app.use('/gators', serveIndex('public'))

// routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}`))