const express = require('express')
const app = express()
const port = 9000;

app.get('/', function (req, res) {
    res.send('Hello World First Express API')
})

app.get('/second', function (req, res) {
    res.send('Hello World Second Express API')
})

app.listen(port)

console.log(`server is listening on port ${port}`)
console.log(`api is accessible on http://localhost:${port}`)