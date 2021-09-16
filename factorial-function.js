// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

// function getFactorial(number) {
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// var firstFactorial = getFactorial(7);
// console.log('factorial of 7 is ', firstFactorial);

// var secondFactorial = getFactorial(9);
// console.log('Factorial of 9 is ', secondFactorial);

function factrorial(number) {
    let factor = 1;
    for (var i = 1; i <= number; i++) {
        factor = factor * i;

    }
    return factor;
}
const functionParameter = 7;
const myFactorial = factrorial(functionParameter);
console.log(myFactorial);