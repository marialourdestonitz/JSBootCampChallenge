'use strict';

// const maria = {
//     firstName: 'Maria',
//     lastName: 'Tonitz',
//     birthYear: 1989,
//     job: 'programmer',
//     friends: ['Jenny', 'Janeth', 'Maveck'],
//     hasDriversLicense: true,

// calcAge: function (birthYear) {
//     return 2022 - birthYear;
// }

// calcAge: function () {
//     console.log(this);
//     return 2022 - this.birthYear;
// }

//     calcAge: function () {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} -year old ${this.job}, and has ${this.hasDriversLicense ? 'a' : 'no'} Driver's License.`;
//     }
// };

// console.log(maria.calcAge());

// console.log(maria.age);

// console.log(maria.getSummary());


// console.log(maria['calcAge'](1989));

// console.log(maria.lastName);

// const nameKey = 'Name';
// console.log(maria['first' + nameKey]);
// console.log(maria['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Maria? Choose between firstName, lastName, age, job and friends');
// console.log(maria[interestedIn]);

// if (maria[interestedIn]) {
//     console.log(maria[interestedIn]);
// } else {
//     console.log('Wrong Request! Choose between firstName, lastName, age, job and friends');
// }

// console.log(`${maria.firstName} has ${maria.friends.length} friends , and his best friend is ${maria.friends[0]}`);

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi);
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${john.bmi}) is higher than ${john.fullName}'s BMI`)
}
else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${mark.bmi}) is higher than ${mark.fullName}'s BMI`)
}