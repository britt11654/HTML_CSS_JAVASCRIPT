// opdracht 1, 2, 3 en 4
const arrayOne = ['Konijn', 'Koe', 'Vos', 'Das', 'Beer'];

console.log(arrayOne[1]);
console.log(arrayOne[4]);
console.log(`Dier 1: ${arrayOne[1]} Dier 2: ${arrayOne[2]}`);
console.log(`Dier 1: ${arrayOne[1]}`);
console.log(`Dier 2: ${arrayOne[2]}`);
console.log('Lengte array: ' + arrayOne.length);

// opdracht 5 en 6
const arrayTwo = ['Duif', 'Mus', 'Ekster', 'Kraai', 'Papegaai'];

arrayTwo.push('Kip');
console.log(arrayTwo);
arrayTwo.splice(1, 1, 'Herder');
console.log(arrayTwo);
