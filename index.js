/*
JS EXERCISES

        21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete the email property from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string from the previous array
        26) Create an array with 100 random numbers in it
        27) Write a function to get the maximum and minimum values from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays as parameters and returns the longest one
        30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

*/

// Exercises 1
let x = "John"
let y = "Doe"
// console.log(x + " <> " + y)

// Exercises 2
let myDetails = {
    name: "Muhsin",
    surname: "Bokijonov",
    email: "mbm.uzg@gmail.com"
}

// Exercises 3
let deleteEmail = delete myDetails.email
// console.log(deleteEmail)


// Exercises 4
let arr = ["one","two","three","four","five","six","seven","eight","nine","ten",]

// Exercises 5
console.log(arr)

// Exercises 6

function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
}
let output6 = randomArray(100, 200)
console.log(output6)



// Exercises 7
const getMinAndMaxValues = function(){
    let maxValue = Math.max.apply(null, output6)
    let minValue = Math.min.apply(null, output6)
    console.log("Max value: " + maxValue)
    console.log("Min value: " + minValue)
}
let output7 = getMinAndMaxValues()
console.log(output7)

// Exercises 8
let arr8 = [];
for(let i = 0; i < 10; i++){
     let current = [];
     for(let j = 0; j < 10; j++)
          current.push(Math.floor(Math.random() * 10));
     arr8.push(current);
}
console.log(arr8)