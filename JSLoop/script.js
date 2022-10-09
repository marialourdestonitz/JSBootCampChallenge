'use strict';

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

const maria = [
    'Maria',
    'Tonitz',
    2037 - 1989,
    'programmer',
    ['Jenny', 'Janeth', 'Veck'],
    true
];

const types = [];

// for (let i = 0; i < maria.length; i++) {
//     //Reading from maria's Array
//     console.log(maria[i], typeof maria[i]);

//Filling types array
// types[i] = typeof maria[i];
// types.push(typeof maria[i]);
// }

// console.log(types);

// const years = [1989, 1991, 1995, 2000];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2022 - years[i]);
// }

// console.log(ages);

//continue and break
console.log('___ONLY STRING___');
for (let i = 0; i < maria.length; i++) {
    if (typeof maria[i] !== 'string') continue;
    console.log(maria[i], typeof maria[i]);
}

console.log('___BREAK WITH NUMBERS___');
for (let i = 0; i < maria.length; i++) {
    if (typeof maria[i] == 'number') break;
    console.log(maria[i], typeof maria[i]);
}

//Looping Backwards
for (let i = maria.length - 1; i >= 0; i--) {
    console.log(maria[i]);
}

for (let exercice = 1; exercice < 4; exercice++) {
    console.log(`-------Starting Exercice------- ${exercice}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercice}:Lifting weight repetion ${rep} `);
    }
}

//WHILE Loop= more versatile than for loop>=for larger variety of situation-does not really need a counter

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`While:Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice == 6)
        console.log('Loop is about to END....');
}
//Chalenge
const calcTip = function (bill) {
    return bill >= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bill.length; i++) {
    const tip = calcTip(bill[i]);
    tips.push(tip);
    total.push(tip + bill[i]);
}
console.log(bill, tips, total);

//BonusChalenge
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum=sum+arr[i]
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([6, 5, 7]));
console.log(calcAverage(total));
console.log(calcAverage(tips));


