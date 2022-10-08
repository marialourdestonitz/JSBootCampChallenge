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
    console.log(`-------Starting Exercice ${exercice}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`------Lifting weight repetion ${rep} `);
    }
}
