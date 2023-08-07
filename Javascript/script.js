// // // // Madlibs
// // // let char1 = prompt("Enter character 1")
// // // let char2 = prompt("Enter character 2")
// // let char3 = prompt("Enter character 3")
// // // console.log("Roses are " + char1);
// // // console.log(char2 + " is blue");
// // console.log(`I love ${char3} and something`);
// // // console.log("Roses are " + char1);

// // // Global variable
// // let a = 20
// // // let a = 10
// // console.log(a);
// // function printThankYou(){
// //     // Local variable
// //     let a = 10
// //     a= a+1
// //     console.log(a);
// //     console.log("Thank you");
// // }
// // console.log(a);

// // printThankYou()
// // // printThankYou()
// // // printThankYou()

// // let myFun = 10
// let a = myFun()
// // let message  = myFun2()
// // console.log(myFun2()); // console.log(5)
// let newVAlue = myFun();
// // console.log(printHi());

// // Syntax for normal functions
// /**
//  * function functionName(){
//  *     function body
//  * }
//  */


// // Syntax for parameterized functions
// /**
//  * function functionName(param1, .... param n){
//  *     function body
//  * }
//  * 
//  * Types of params
//  * 1. Formal
//  * 2. Actual
//  */




// function myFun() {
//     return 2;
// }

// // function myFun2(){
// //     let a = 10
// //     // return a+3
// //     a = a + 10
// //     console.log(a);
// //     return a
// // }

// // function printHi(){
// //     console.log("hi");
// // }

// /**
//  * public void addNum(){
//  *    body of function
//  * }
//  * 
//  * public int addNum(){
//  *    body of function
//  * }
//  */


// // addNumbers(10,20);
// // addNumbers(100);
// // addNumbers();
// // addNumbers("Love","ly");

// // function addNumbers(num1 = 0, num2 = 0){
// //     console.log(num1, num2);
// //     let c = num1 +  num2 ;
// //     console.log(c);
// // }

// function printNnumbers(num) {
//     /**
//      * for loop syntax
//      * for(initialization, condition, updation){
//      *     body of the loop
//      * }
//      * 
//      * i = i + 1
//      * i+=2
//      */

//     for (let i = 1; i <= num; i += 1) {
//         console.log(i);
//     }
// }


// function findMax(num1, num2) {
//     let max;
//     if (num1 > num2) {
//         console.log("Number 1 is greater: " + num1);
//         // return num1;
//         max = num1
//     } else {
//         console.log("Number 2 is greater: " + num2);
//         // return num2;
//         max = num2
//     }
//     return max
// }


// // Q1.
// // printNnumbers(10);
// // 1 2 3 4 5 6 7 8 9 10

// // Q2.
// // let max = findMax(2,3)
// // console.log(max);
// // Maximum is 3

// // Q3. 
// let factorial = findFactorial(4)
// // console.log(factorial);
// // 5! = 5 x 4 x 3 x 2 x 1
// // Factorial is 120
// /**
//  * fact = 1
//  * 
//  * fact = fact * i; 
//  */

// function findFactorial(num) {
//     let fact = 1
//     for (let i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     // for(let i = num; i>1; i--){
//     //     fact = fact * i;
//     // }

//     return fact
// }

// /**
//  * 
//  */


// // Arrays

// // Declaration of array (Homogeneous)
// let marks = [95, 90, 85, 93, 92]

// // empty array
// let arr = []

// // Hetrogeneous array
// let items = [2, "Lovely", true, 2.5, 'c']

// // Accessing an element
// // console.log("Accessing 2nd element",marks[2]);

// // Use length property of array to find total number of elements in array
// // console.log("Length of array is: ",marks.length);

// for (let i = marks.length - 1; i >= 0; i--) {
//     // console.log("Index: ",i,marks[i]);
// }
// // console.log(marks[0]);


// // In linear order
// // console.log("Linear Order");
// for (let i = 0; i < items.length; i++) {
//     // console.log(items[i]);
// }
// // In reverse order
// // console.log("Reverse Order");
// for (let i = items.length - 1; i > -1; i--) {
//     // console.log(items[i]);
// }
// // Address calculation
// // baseAddress + index*size

// // Sum of array elements
// // let sum = 0;
// // for(let i =0; i< marks.length; i++){
// //     sum = sum+marks[i];
// // }




// // 02/08/2023
// // let marks = [95, 90, 85, 93, 92]

// // console.log(marks);
// marks[2] = 88
// // console.log(JSON.stringify(marks));

// // Adds an element at the end of the array
// marks.push(99)
// marks.push(88)
// // console.log(JSON.stringify(marks));

// // pop()- removes an element from the end of the array
// marks.pop()
// // marks.pop()
// // marks.pop()

// // console.log(JSON.stringify(marks));

// // adds an element at the beginning of the array
// marks.unshift(12)

// marks.shift()

// marks.splice(0, 0, 30)
// marks.push(88)
// // console.log(JSON.stringify(marks));
// // console.log(marks.indexOf(88, 8))

// let sentence = "My name-is-Lovely-and-i-love-cold-coffee"


// // console.log(sentence.split("o"));


// function linearSearch(target) {
//     return index || -1
// }


// // int vrushali[] = {1,2,3,4,5}
// let array = [12, 13, 14, 15, 16];


// function linearSearch(target) {
//     for (let i = 0; i < array.length; i++) {
//         // console.log("Searching at index:", i, "\ncurrent value is: ", array[i]);
//         if (array[i] == target) {
//             // console.log("Match found at index", i);
//             return i
//         }
//     }
//     return -1
// }

// // console.log("Search for 120",linearSearch(120));
// // console.log("Search for 13",linearSearch(13));



// // Objects in JS

// // let obj = {
// //     "name": "Lovely",
// //     "age": 22,
// //     "mobile number": "8766418907",
// //     "CGPA": 8.97,
// //     "hobbies": ["skating", "singing", "cooking"]
// // }

// let myobj = {
//     1: "hi",
//     2: "bye"
// }




// // console.log(obj.name);
// // console.log(obj.age);
// // console.log(obj["mobile number"]);
// // console.log(obj.hobbies[2]);


// // let myarray = 
// // for (let i = 0; i < obj.hobbies.length; i++) {
// //     const element = obj.hobbies[i];
// //     console.log(element);
// // }



// // advance loops

// // 1) For in
// let studentRecord = {
//     "name": "Lovely",
//     "age": 22,
//     "mobile number": "8766418907",
//     "CGPA": 8.97,
//     "hobbies": ["skating", "singing", "cooking"],
//     "address": {
//         "Apartment_name": "Vinayak Apt",
//         "Locality": "Tukum",
//         "City": "Chandrapur"
//     }
// }



// console.log(studentRecord);
// studentRecord.age = 23
// studentRecord.friends = "Om"
// // console.log(studentRecord);
// console.log(studentRecord);


// delete studentRecord["mobile number"]
// console.log(studentRecord);

// for (let i in studentRecord) {
//     // console.log("Key:",i);
//     // console.log("Value:",studentRecord[i]);
// }


// // console.log(studentRecord["address"]["Apartment_name"]);
// // console.log(studentRecord["address"]["City"]);

// // For of loop 
// // iteration - rounds or loops
// // iterable - array is iterable item
// // iterator - a variable which counts the round
// // let numbers = [1,2,3,4,5,6,7]
// // for(let current of numbers){
// //     console.log(current);
// // }

// // arrayName[3]

let a = 10
console.log(a);