let fileSystem = require('fs');

console.log("Creating file...");
fileSystem.writeFileSync('Sanket.txt', "This is lovely's file", () => {
    console.log("File saved");
})


let superhero = require('superheroes')
let supervillain = require('supervillains')

for (let i = 0; i < 10; i++) {

    console.log(`${i+1}) ${superhero.random()} vs ${supervillain.random()}`);

}