
// this code is taken from youtube channale >Web Dev Simplified

// function--------------------------------------------------------
// type a function
function sum(a, b) {    // type a function
    return a + b
}
let sum2 = (a, b) => {  // type a function
    return a + b
}
let sum = (a, b) => a + b;  // type a function

// type a function
// type b function
function ipositive1(number) {    // type b function
    return number >= 0
}

let ipositive2 = (number) => {    // type b function
    return number >= 0
}
let ipositive3 = number => number >= 0   // type b function


// type b function
// type c function
function randomNumber() {   // type c function
    return Math.random
}
let randomNumber1 = () => { // type c function
    return Math.random
}
let randomNumber3 = () => Math.random   // type c function

// type c function
// type d function
document.addEventListener('click', function () {     // type d function
    console.log('click')
})

document.addEventListener1('click', () => {     // type d function 
    console.log('click')
})
window.addEventListener('click', () => console.log('hello world'))  // type d function
// type d function
