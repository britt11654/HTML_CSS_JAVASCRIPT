// opdracht 1 en opdracht 2
let day = 'woensdag';
switch (day) {
    case 'maandag':
    case 'donderdag':
    case 'vrijdag':
        console.log('Vandaag eet ik falafel met salade.');
        break;
    case 'dinsdag':
    case 'woensdag':
        console.log('Vandaag eet ik spinazie.');
        break;
    case 'zaterdag':
    case 'zondag':
        console.log('Vandaag eet ik linzensoep.');
        break;
    case 'Kerst':
        console.log('Ik eet, ongeacht de dag, kalkoen');
        break;
    default:
        console.log('Vandaag eet ik blijkbaar niks');
        break;
}

// opdracht 3
let car = 'Audi'

if (car === 'Audi') {
    console.log('Great!');
} else if (car === 'Mercedes') {
    console.log('Bit Great!');
} else if (car === 'BMW') {
    console.log('Hmmm...');
} else if (car === 'Opel') {
    console.log('OK?');
} else {
    console.log('Not so great.');
}

// opdracht 4
let car2 = 'Porsche'

if (car2 === 'Audi' || car2 === 'Porsche') {
    console.log('Great!');
} else if (car2 === 'Mercedes') {
    console.log('Bit Great!');
} else if (car2 === 'BMW') {
    console.log('Hmmm...');
} else if (car2 === 'Opel') {
    console.log('OK?');
} else {
    console.log('Not so great.');
}

// opdracht 6
const job = 'teacher';

switch (job) {
    case 'developer':
        console.log('LIKE!');
        break;
    case 'teacher':
    case 'consultant':
        console.log('Nice...');
        break;
    default:
        console.log('I dont know');
        break;
}

// opdracht 7
const job2 = 'teacher';

switch (job2) {
    case 'developer':
    case 'retired':
        console.log('LIKE!');
        break;
    case 'teacher':
    case 'consultant':
        console.log('Nice...');
        break;
    default:
        console.log('I dont know');
        break;
}

// opdracht 8
const dag = 'maandag';

if (dag === 'maandag') {
    console.log('Ik eet patat');
} else {
    console.log('Ik eet pannenkoeken')
}

console.log(dag === 'maandag' ? 'Ik eet patat' : 'Ik eet pannenkoeken');

// opdracht 9
let car3 = 'Audi';

if (car3 === 'Audi') {
    console.log('Great!');
} else {
    console.log('Meh');
}

// opdracht 10
let sentence;

if (5 > 12) {
    sentence = 'Whieee';
} else {
    sentence = 'Whaaa';
}

console.log(sentence);

// opdracht 11
let sentence2 = false;

if (true) {
    sentence2 = console.log('Whieee');
}

// opdracht 12
