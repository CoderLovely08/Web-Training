const express = require('express')

const app = express()

app.get('/', function (request, response) {
    // response.send("<h1> WElcome</h1>");
    console.log(__dirname);
    response.sendFile(__dirname+'/index.html')
})

app.get('/pizza', function (request, response) {
    response.send('Pizza - 100Rs')
})

app.get('/nitin', function(req, res) {
    res.sendFile(__dirname+'/nitin.html')
})



app.listen(3000, function () {
    console.log("Server is running on port 3000");
})

/**
 * mkdir express
 * cd express
 * express$ mkdir hello
 * express$ cd hello
 * express/hello$ 
 * express/hello$ npm init -y
 * 
 * 
 */