'use strict';
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//Function declarations

// function calcAge1(birhtYear) {
//     return 2037 - birhtYear;
// }

// const age1 = calcAge1(1991);

// //Functions expression
// const calcAge2 = function (birhtYear) {
//     return 2037 - birhtYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// //Arrow Function
// const calcAge3 = birhtYear => 2037 - birhtYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birhtYear, firstName) => {
//     const age = 2037 - birhtYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearUntilRetirement(1991, 'Maria'));

//Functions Calling other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${apples} piece of apples and ${oranges} pipces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));


//Chalenge No.1

const calcAverage = (a, b, c) => (a + b + c) / 3;


let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas} Koalas)`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins} Dolphins)`)
    }
    else {
        console.log('No team Wins...')
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



