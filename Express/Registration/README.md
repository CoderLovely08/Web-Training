# Registration Project

## Getting Strated

### 1. Project Setup

1. To initialize a new project type the following command

   ```bash
   npm init
   # or
   npm init -y
   ```

2. Install dependencies and packages

   ```bash
   npm install express
   # or
   npm i express
   ```

3. Create one backend file, let's say **app.js** with backend server starter code

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}!`);
});
```

4. Test the server: In order to test the server run the following command

```bash
node app.js
```

and visit the browser, type **localhost:3000** in the url bar and hit enter.

_Tip:_ In order to stop the server type **CTRL + C**

5. Basic setup code completed

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
  res.send("Welcome");
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}!`);
});
```


### 2. Creating UI
Create a file with name of your choice with basic form.
```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Registration</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <div class="container">
        <h1 class="text-center">Registration form</h1>
        <div class="d-flex justify-content-center">
            <form action="/register" method="post">
                <!-- Name input -->
                <label for="name">Name</label>
                <input type="text" id="name" name="name">
                <br>
                <!-- Email input -->
                <label for="email">Email</label>
                <input type="email" id="email" name="email">
                <br>
                <!-- Password input -->
                <label for="Password">Password</label>
                <input type="password" id="Password" name="password">
                <br>
                <!-- Submit -->
                <input type="submit" value="Register">
            </form>
        </div>
    </div>
</body>

</html>
```

### 3. Connecting to PostgreSQL

1. Install the `pg` package which allows you to interact with PostgreSQL:

```bash
npm install pg
```

2. In your **app.js** file, add the code to connect to the PostgreSQL database:

```javascript
const pg = require('pg');

// Creating a connection to the PostgreSQL database
const client = new pg.Client("postgres://mdqvkdxi:o98H7SMAaj_UO0qonJNby6FxyvaRK2bW@tiny.db.elephantsql.com/mdqvkdxi");
client.connect();
console.log("Database connected!");
```

### 4. Handling Form Submission

1. Update the `app.post('/register', ...)` route to handle the form submission:

```javascript
app.post('/register', function (req, res) {
    console.log("Form submitted!");
    console.log(req.body);

    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    let insertQuery = `INSERT INTO userinfo (name, email, password) VALUES ('${name}', '${email}', '${password}')`;

    client.query(insertQuery, (error) => {
        if (error) {
            console.log("Query error", error);
            res.send("Registration failed");
        } else {
            console.log("Data saved in db");
            res.send("Registration Successful");
        }
    });
});
```

### 5. Retrieve Data from Database

1. Add a new route to retrieve data from the database:

```javascript
app.get('/getData', (req, res) => {
    client.query("SELECT * FROM userinfo", (error, data) => {
        if (error) {
            console.log(error);
            res.send("Error fetching data");
        } else {
            res.send(data.rows);
        }
    });
});
```