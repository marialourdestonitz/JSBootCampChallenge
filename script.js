'use strict';
// /* 
// Chalenge #1
// */
// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// /* 
// Chalenge #2
// */
// const massMark = 95;
// const heightMark = 1.95;

// const massJohn = 92;
// const heightJohn = 1.62;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is Higher than Jhon's (${BMIJohn})`)
// } else {
//     console.log(`John's BMI (${BMIJohn}) is Higher than Mark's! (${BMIMark})`)
// }

/*
Logical Operator
*/
const hasDriverLicence = true;
const hasGoodVision = true;

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);

// if (hasDriverLicence && hasGoodVision) {
//     console.log("Sarah is able to drive!")
// } else {
//     console.log("Someone lese should drive!")
// }
const isTired = true;
console.log(hasDriverLicence && hasGoodVision && isTired);

if (hasDriverLicence && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!")
} else {
    console.log("Someone else should drive!")
}


//Chalenge#3
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphin's Win the Trophy!")
}
else if (scoreKoalas > scoreDolphins) {
    console.log("Koala's Win the Trophy!")
}
else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both Win the Trophy!")
}
else {
    console.log("No one Wins!")
}

//Switch Statement

const day = 'monday';
switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding course');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Records videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid date')
}

/* 
Chalenge #3
*/
const bill = 275;
const tip = bill >= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tipp was ${tip}, and the total value ${bill + tip}`);




