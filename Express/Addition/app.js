const express = require('express')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let fileName = __dirname + '/index.html'
    res.sendFile(fileName)
})


app.get('/add', (req, res) => {
    console.log("I am inside /add route");
    console.log(req.query);
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let addition = num1 + num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;
    let subtraction = num1 - num2;

    let result = `
    Addition = ${addition} 
    Subtraction = ${subtraction}
    Multiplication = ${multiplication}
    Division = ${division}
    `

    let resultObject = {
        sum: addition
    }
    console.log(resultObject);
    res.render('result', { name: 'lovely' })
})

app.get('/login', (req, res) => {
    console.log("I am inside GET /login route");
    console.log(req.query);
    let userEmail = (req.query.userEmail);
    let userPassword = (req.query.userPassword);
    // let result = num1 + num2;

    console.log(userEmail, userPassword);
    res.send('Login succesful ')
})


app.get('/profile', (req, res) => {
    let students = [
        { name: 'Lovely', age: 21 },
        { name: 'sahil', age: 22 },
        { name: 'nitin', age: 19 }
    ]

    res.render('profile', { studentList: students })
})

// app.post('/login', (req, res) => {
//     console.log("I am inside POST /login route");
//     console.log(req);
//     let userEmail = (req.query.userEmail);
//     let userPassword = (req.query.userPassword);
//     // let result = num1 + num2;

//     console.log(userEmail, userPassword);
//     res.send('Login succesful ')
// })

app.listen(3000, () => {
    console.log('Server started on port 3000!');
})