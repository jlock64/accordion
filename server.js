const express = require('express')
const app = express()
const path = require('path')
const port = 3000

// access static files here like css, js and images
app.use('/public', express.static('public'));

// routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}`))