// Import required files
const express = require('express'); // Importing the Express framework
const bodyParser = require('body-parser'); // Middleware for parsing request body
const pg = require('pg'); // PostgreSQL library

const app = express(); // Creating an instance of Express
const PORT = 3000; // Setting the port for the server

// Creating a connection to the PostgreSQL database
const client = new pg.Client("postgres://mdqvkdxi:o98H7SMAaj_UO0qonJNby6FxyvaRK2bW@tiny.db.elephantsql.com/mdqvkdxi");
client.connect(); // Connecting to the database
console.log("Database connected!"); // Logging a message when connected

// Setting up the body parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Handling GET request to the root endpoint
app.get('/', function (req, res) {
    res.send("Welcome"); // Sending a response to the client
});

// Handling GET request to the '/register' endpoint
app.get('/register', function (req, res) {
    // Sending an HTML file as response
    res.sendFile(__dirname + '/index.html');
});

// Handling POST request to the '/register' endpoint
app.post('/register', function (req, res) {
    console.log("Form submitted!");
    console.log(req.body);

    let name = req.body.name; // Extracting 'name' from request body
    let email = req.body.email; // Extracting 'email' from request body
    let password = req.body.password; // Extracting 'password' from request body

    let insertQuery = `insert into userinfo values('${name}', '${email}', '${password}')`; // Constructing SQL query
    console.log(insertQuery);

    // Executing a query to insert data into the database
    client.query(insertQuery, (error) => {
        if (error) console.log("Query error", error);
        else {
            console.log("Data saved in db");
        }
    });

    res.send("Registration Successful"); // Sending a response back to the client
});

// Handling GET request to the '/getData' endpoint
app.get('/getData', (req, res) => {
    // Querying the database to get user info
    client.query("SELECT * FROM userinfo", (error, data) => {
        if (error) {
            console.log(error);
        } else {
            // Sending the email from the first row as response
            res.send(data.rows[0].email);
        }
    });
});

// Starting the server to listen on the specified port
app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}!`);
});
