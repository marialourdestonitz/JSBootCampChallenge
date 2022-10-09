const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array[1991, 1992, 2022];

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';

const maria = ['firstName', 'Tonitz', 2037 - 1989, 'programmer', friends];
console.log(maria);
console.log(maria.length);

const calcAge = function (birhtYear) {
    return 2037 - birhtYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = (calcAge(years[0]));
const age2 = (calcAge(years[1]));
const age3 = (calcAge(years[years.length - 1]));

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


const friends1 = ['Maria', 'Daniel', 'Dahlia'];

//Add Element
const newLength = friends1.push('Jay');
console.log(friends1);
console.log(newLength);

friends1.unshift('Vianeze');
console.log(friends1);

//Remove Element
friends1.pop(); //last
const popped = friends1.pop();
console.log(popped);
console.log(friends1);

friends1.shift();
console.log(friends1);


console.log(friends1.indexOf('Daniel'));
console.log(friends1.indexOf('Oma'));

console.log(friends1.includes('Daniel'));
console.log(friends1.includes('Oma'));

if (friends1.includes('Daniel')) {
    console.log('You have friend called Daniel');
}

//Challenge 

const calcTip = function (bill) {
    return bill >= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}
const bill = [125, 555, 44];
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];

console.log(bill, tip, total);

//1. Understanding Problem
//-Array transformed to String, seperated by ...

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}°C ...${data1[1]}°C ...${data1[2]}°C`);

const printForecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}°C in ${i + 1}days...`;
        console.log('...' + str);
    }
};
printForecast(data1);
printForecast(data2);