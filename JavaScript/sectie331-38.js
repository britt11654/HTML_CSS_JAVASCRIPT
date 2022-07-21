// opdracht 1
function fiets() {
    console.log('Mijn eerste functie.');
}

fiets();

// opdracht 2
function fiets2() {
    return 'Mijn eerste functie';
}

let fiets3 = fiets2();
console.log(fiets3);

// opdracht 3
function add(num1, num2) {
    return num1 + num2;
}

// opdracht 4
function subtract(x, y) {
    return x - y;
}

// opdracht 5
function multiplication(a, b, c, d) {
    return a * b * c * d;
}

console.log(multiplication(4, 5, 6, 7));

let ans = multiplication(1, 2, 3, 4);
console.log(ans);

// opdracht 6
function biggest(a, b) {
    if (a > b) {
        return console.log(a);
    }
    return console.log(b);
}

biggest(5, 6);
biggest(7, 20);

// opdracht 7
function fiets4(name) {
    if (name === 'Herder') {
        return true;
    }
    return false;
}

// opdracht 8
function fiets5(getal) {
    if (getal >= 1000) {
        return true;
    }
    return false;
}

// opdracht 9



// opdracht 11
// function doMath(x, y) {
//     const numberOne = x * 3;
//     const numberTwo = y * 4;
//     return numberOne + numberTwo;
// }

function numOne(x) {
    return x * 3;
}

function numTwo(y) {
    return y * 4;
}

function result() {
    return numOne + numTwo;
}

numOne(3);
numTwo(2);
console.log(result());

// opdracht 12
function magStuderen(age, vooropleiding) {
    if (age >= 10 && vooropleiding === 'VWO' || vooropleiding === 'Havo' || vooropleiding === 'VMBO') {
        return true;
    }
    return false;
}

magStuderen(12, 'VWO');

