let heading = document.querySelector('h1')
console.log(heading);
// heading.style.fontSize = '12px'
// heading.style.color = 'red'
console.log(heading.innerHTML);
console.log(heading.innerText);

function changeColor() {
    console.log("hi");
    this.style.color = 'red'
}

let count = 0;
// heading.addEventListener('click', () => {
//     console.log(`I have been clicked ${++count} times`, );
// })

heading.addEventListener('hover', changeColor)


function performClick(event){
    console.log("i have been clicked", this);
    event.style.color = 'red'
    // this.innerHTML = "done"
}


let formData = document.getElementById('myform')
console.log(formData);
