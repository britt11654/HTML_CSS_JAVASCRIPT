// opdracht 1, 2, 3, 4, 5, 6, 7 en 8
const objectOne = {
    firstName: 'Henk',
    lastName: 'de Vries',
    age: 2021 - 1988,
    job: 'teacher',
    friends: ['Koe', 'Vos'],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
};

// opdracht 1
console.log(`My job is being a ${objectOne.job}`);

// opdracht 2
console.log(`My job is being a ${objectOne.job} and I am ${objectOne.age} years old`);

// opdracht 3
console.log(`My friends are ${objectOne.friends[0]} and ${objectOne.friends[1]}`);

// opdracht 4
console.log(objectOne.lastName.length);

// opdracht 5
const objectTwo = {
    firstName: 'Piet',
    lastName: 'Janssens',
    job: 'Fighter',
    getJobAndName: function () {
        return `My name is ${this.firstName} ${this.lastName} and I am a ${this.job}`
    }
};
console.log(objectTwo['getJobAndName']);