/***** 1.---variable---*****/
var todaysPractic = '1hr';
// console.log(todaysPractic);

var todaysprackticeRightNow = 5;
let todaysLearn = 3;
const todaysStudy = 2;

// console.log(todaysprackticeRightNow, todaysLearn, todaysStudy);

/****-2.-array, find index in array , push, pop, shift, unshift--****/
var myFamily = ['Mother', 'Father', 'Me', 'Brouthers ', 'Sister'];

var meIndex = myFamily.indexOf('Me');/*je kono ektar index er position */
// console.log(meIndex);tyu
myFamily.push('small');/*array er moddhe notun eliment dhokano */

myFamily.pop();/*array er moddhe theke last eliment ber kore dewya  */
myFamily.pop();
myFamily.shift()/*array er moddhe theke fast eliment out kora  */
myFamily.shift()
myFamily.unshift('rohim');/*array er modhe sobprothe eliment add hobe */

myFamily[2] = 'big';/*kono ekta eliment ache setake change kora */

myFamily.length;/* total array er moddhe koita eliment ache ta ber kora */

// console.log(myFamily.length);
// console.log(myFamily);





var myEge = 25;       /*var  */
let myName = 'Md saheb'; /*let  */
const mustDie = true; /*const */
// console.log(mustDie);

/***3. ---besic while loop --besic for loop---******/
var i = 0;
while (i <= 10) {
    // console.log(i);
    i++
}

for (var i = 0; i <= 5; i++) {
    // console.log(i)
}
/*condition */
// var laptopPrice = 30000;
// var myBudget = 20000;
// if (laptopPrice < myBudget) {
//     console.log('laptop nibo');
// }
// else {
//     console.log('laptop nibo na');
// }



// var chikenRice = 150;
// var myMony = 200;
// if (chikenRice < myMony) {
//     console.log('chiken riice khabo');
// }
// else {
//     console.log('dal vat kahbo');
// }


/*fonction */
// function sahebAge(age) {
//     console.log('bortoman age');

//     return age;
// }
// const mdSaheb = 25;
// sahebAge(mdSaheb);
// console.log(mdSaheb);


// function bringSingara(taka) {
//     console.log('singara er jonno dise ', taka);
//     console.log('Mama singara den');
//     var singaraPrice = 10;
//     var singaraQuantity = taka / singaraPrice;
//     return singaraQuantity;
// }

// var money = 90;
// var singara = bringSingara(money);
// console.log('Ai nen singara ', singara);


// function havelsFanPrice(taka) {
//     console.log('fan kenar jonno taka diyeche', taka);
//     console.log('ei nen apanar fan');
//     var fanPerpiceRate = 1000;
//     var fanQuantity = taka / fanPerpiceRate;
//     return fanQuantity;
// }
// let fanPrice = 3000;
// var fan = havelsFanPrice(fanPrice);
// console.log(fan);

/***3. ---home work---******/
/*---1 inch to feet */
// var inchToFeet = 2456;
// var inches = 12;
// var totalFeet = inchToFeet / inches;
// console.log(totalFeet);

function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;

}
var dadaInches = 108;
var feet = inchToFeet(dadaInches);
// console.log('dadar ray bole kotha', feet);

var dadiInches = 48;
var feet = inchToFeet(dadiInches);


var naniInches = 96;
var feet = inchToFeet(naniInches);


var nanaInches = 72;
var feet = inchToFeet(nanaInches);


/*---2 leep year */

// function isLeapYear(year) {
//     if (year % 4 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const myYear = 2100;
// const isMyYearLeapYear = isLeapYear(myYear);
// console.log('Is my year leap year', isMyYearLeapYear);

// const yourYear = 2224;
// const isYourYearLeapYear = isLeapYear(yourYear);
// console.log('is your year leap year', isYourYearLeapYear);

function leepYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}

const myLeepYear = 2564;
const thisLeepYear = leepYear(myLeepYear);
// console.log('this leep year is true', thisLeepYear);


/*---3 odd & even ki vabe check korte hoy */

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myEven = 2024;
const thisEven = isEven(myEven);
// console.log(thisEven);

function isOdd(number) {
    if (number % 2 == 1) {
        return true;
    }
    return false;
}
const myOdd = 2215;
const thisOdd = isOdd(myOdd);
// console.log('this is odd number', thisOdd);

/*---4 factorial  a ta while & for loop diye ki kore  */
// 1!=1
// 2!=2 X 1
// 3!=3X 2X 1
// 4!=4X 3X 2x 1
var i = 1;
var factorial = 1;
while (i <= 5) {
    console.log(i);
    factorial = factorial * i;
    i++
}
// console.log(factorial);


var factorial = 1;
for (var i = 1; i <= 5; i++) {
    factorial = factorial * i;

}
console.log(factorial);