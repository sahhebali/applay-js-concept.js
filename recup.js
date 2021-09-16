// variable 
var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;

var todays = '21/08/2021'; /*my-pracktice*/
var tomorrow = '22/08/2021';

// array
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajit');
partners.pop();

/*my pracktice*/
var frindsName = ['me', 'hamid', 'saimon', 'insan', 'milo',];
var frindsGroup = frindsName.length;
var frindCircle = frindsName.indexOf('hamid')
frindsName.push('amanullha');
frindsName.pop();
// conditionals
if (bookPrice < 120) {
    console.log('I will buy this book')
}
else {
    console.log('Mama, kichu discount den na, apni na mama!');
}
/* amar pracktice*/
if (mobilePrice > 9000) {
    console.log('tahole mobole nibo');
}
else {
    console.log('jodi 9000 er besi hoy tobe discount chiabo');
}

// loop
var i = 0;
while (i <= 17) {
    // do some work
    i++;
}

for (var i = 0; i <= 17; i++) {

}
/*my pracktice*/
var biskut = 10;
while (bikut >= 10) {
    i++;
}
for (var biskut = 10; biskut > 10; biskut++) {

}

// function

function isMoonUp(time) {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return false;
}
var moonStatus = isMoonUp(21);
/* my prcktice*/
function appleRate(apple) {
    if (apple >= 150 && apple <= 200) {
        return true;
    }
    return false;
}
appleRate(200);



// let const

// value of variable could change
let price = 27;
price = 29;
price = 31;

/* my practic */
let agePrice = 7;
agePrice = 30;

// value of the variable will not change
const myName = 'lal e lal mr. Helal';
console.log(myName);
myName = 22;
/*my practice */
const myName = 'Md saheb Ali';
console.log(myName);
myName = 'Md sabiyar';