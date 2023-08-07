// // Document Object Model

// // console.log("Connected");

// let heading = document.getElementById('heading1')
// let headingText = heading.innerText
// console.log(heading);
// console.log(headingText);
// // heading.innerText = "theyyy"

// // heading.innerHTML = "theyyy"
// console.log(heading.innerText);
// console.log(heading.innerHTML);


// heading.style.color = 'red'
// // heading.style.fontSize = '30px'
// heading.style.backgroundColor = "grey"

// let circle = document.getElementById('circle')
// circle.style.height = '100px'
// circle.style.width = '100px'
// circle.style.backgroundColor = 'gray'
// circle.style.borderRadius = '50%'

// // // a = a + b
// // // a += b
// // circle.innerHTML += "<h1>something</h1>"

// // let smallHeadings = document.getElementsByTagName('h2')
// // console.log(smallHeadings);

// // console.log(smallHeadings[0]);
// // smallHeadings[0].style.backgroundColor = 'blue'


// // let highlight = document.getElementsByClassName('highlight')
// // console.log(highlight);

// // highlight[1].style.backgroundColor = 'orange'


// // let button = document.getElementsByTagName('button')[0]
// // console.log(button);

// // button.addEventListener('click', displayAlert)

// // function displayAlert(){
// //     alert("You have clicked the button")
// //     circle.style.backgroundColor = 'orange'
// // }

// // let btn1 = document.getElementsByClassName('signal')[0]
// // btn1.addEventListener('click', changeColorRed)

// // function changeColorRed(){
// //     circle.style.backgroundColor = 'red'
// // }

// // let btn2 = document.getElementsByClassName('signal')[1]
// // btn2.addEventListener('click', changeColorGreen)

// // function changeColorGreen(){
// //     circle.style.backgroundColor = 'green'
// // }

// // let btn3 = document.getElementsByClassName('signal')[2]
// // btn3.addEventListener('click', () => {
// //     circle.style.backgroundColor = 'yellow'
// // })

// // function changeColorYellow(){
// // }


// // let colors = ['red', 'green', 'yellow']

// // let buttons = document.getElementsByClassName('signal')

// // for (let i = 0; i < 3; i++) {
// //     buttons[i].addEventListener('click', () => {
// //         circle.style.backgroundColor = colors[i]
// //     })
// // }

// // let userInput = document.getElementById('input1')
// // console.log(userInput);

// // let sendBtn = document.getElementById('send')

// // sendBtn.addEventListener('click', () => {
// //     console.log(userInput.value);
// //     alert(userInput.value)
// // })



// // Addition program
// // let number1 = document.getElementById('input1')
// // let number2 = document.getElementById('input2')


// // let addBtn = document.getElementById('addition')

// // addBtn.addEventListener('click', () => {
// //     let num1 = parseInt(number1.value)
// //     let num2 = parseInt(number2.value)
// //     alert(num1 + num2);
// // })


// let elements = document.querySelectorAll('#input1, #input2, #addition')
// console.log(elements[2].innerHTML);

// let element1 = document.querySelectorAll('#h3')
// console.log(element1);

// let elements = document.getElementsByTagName('h3')
// console.log(elements);

let userObject = {
    'name': 'Lovely Sharma',
    'age': 22,
    'email': 'lovely@gmail.com',
    'password': 'lovely@123'
}

let email = document.getElementById('email')
let password = document.getElementById('password')

let loginBtn = document.getElementById('login')
let showBtn = document.getElementById('showPass')

showBtn.addEventListener('click', () => {
    password.type = 'text'
    showBtn.innerText= 'Hide password'
})

loginBtn.addEventListener('click', () => {
    if ((userObject.email === email.value) && (userObject.password === password.value)) {
        alert('Login successful');
    }
})