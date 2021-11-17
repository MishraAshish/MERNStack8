//creating centralized space for 
const express = require('express') //importing the express class or module
const app = express() // instantiating express application

const port = 9000;

app.get('/', function (req, res) {
    res.send('Hello World First Express API')
})

app.get('/api', function (req, res) {
    //passing data using query string : key value pairs that are typed after "?"
    //http://localhost:9000/api?name=padmaja&session=mernstack
    let qsObbj = req.query; //query string object as a request
    res.json(qsObbj)  
})

//seding data in route param
app.get('/getinfo/:productid/details', function (req, res) {    
    //http://localhost:9000/getinfo/29/details
    let routeParam = req.params["productid"]; //readin value coming in as request route
    routeParam == 25 ? 
    res.send("Awsome Product") 
    :
    res.send("Product is not available") 
})

app.get('/second', function (req, res) {
    res.send('Hello World Second Express API')
})

// app.get('/new.js', function (req, res) {
//     res.sendFile(__dirname+"//public//index.html")
// })

//star or wildcard operartor : we muct put it at last
app.get('*', function (req, res) {
    res.sendFile(__dirname+"//public//index.html")
})

app.listen(port)

console.log(`server is listening on port ${port}`)
console.log(`api is accessible on http://localhost:${port}`)