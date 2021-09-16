// function getFactorial(number) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// const myFactorial = getFactorial(6);
// console.log(myFactorial);
// my pracktice
function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

function comeFactorial(number) {
    let lesfactorial = 1;
    let i = number;
    while (i >= 1) {
        lesfactorial = lesfactorial * i;
        i--;
    }
    return lesfactorial;
}

const Parameter = 8;
const totalParameter = comeFactorial(Parameter);
console.log(totalParameter);



function infinity(price) {
    let infinityMusic = 1;
    let i = 1;
    while (i <= 5) {
        infinityMusic = infinityMusic * i;
        i++;
    }
    return infinityMusic;
}
const infiMusic = 6;
const music = infinity(infiMusic);
console.log(music);
// const myFactorial = getFactorial(6);
// console.log(myFactorial);

// for loop reverse

// function getFactorial2(number) {
//     let factorial = 1;
//     for (let i = number; i >= 1; i--) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// const myFactorial = getFactorial2(6);
// console.log(myFactorial);