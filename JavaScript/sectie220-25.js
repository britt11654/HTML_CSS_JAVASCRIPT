// opdracht 1
const x = 1;
const y = '1';
const z = 2;

x.toString();

let result = x + y;
result -= z;

console.log(result);

// opdracht 2
const xx = 1;
const yy = '1';
const zz = 2;

parseInt(yy);

let result2 = xx + yy;

result2 -= zz;

console.log(result2);

// opdracht 3
const xxx = 1;
const yyy = '1';
const zzz = 2;

let result3 = zzz + yyy;

parseInt(result3);

result3 -= xxx;

console.log(result3);

// opdracht 4
const xxxx = 1;
const yyyy = '1';
const zzzz = 2;

console.log(yyyy + zzzz + xxxx);

// opdracht 5
const xxxxx = 1;
const yyyyy = '2';
const zzzzz = 2;

parseInt(yyyyy);

let result4 = yyyyy * zzzzz;
result4.toString();
xxxxx.toString();

console.log(xxxxx + result4 + result4);

// opdracht 6
let weer = 'regen'

if (weer === 'regen') {
    console.log('Als het regent, neem ik een paraplu mee naar buiten.');
}

// opdracht 7
let weer2 = 'zon'

if (weer2 === 'regen') {
    console.log('Als het regent, neem ik een paraplu mee naar buiten.');
} else if (weer2 === 'zon') {
    console.log('Als de zon schijnt neem ik een zonnebril mee naar buiten.');
} else {
    console.log('Ik neem mijn goede humeur mee naar buiten');
}

// opdracht 8
let weer3 = 'zon'

if (weer3 === 'regen') {
    console.log('Als het regent, neem ik een paraplu mee naar buiten.');
} else if (weer3 === 'zon') {
    console.log('Als de zon schijnt neem ik een zonnebril mee naar buiten.');
}

// opdracht 9
let dag = 'zondag';

if (dag === 'maandag') {
    console.log('Ik ga kickboksen.');
} else if (dag === 'dinsdag') {
    console.log('Ik ga boksen.');
} else if (dag === 'donderdag' || dag === 'vrijdag') {
    console.log('Ik ga BJJen.')
} else {
    console.log('Vandaag haal ik patat en eet dit thuis op.')
}

// opdracht 10
let gemiddelde = (9.4 + 3.8 + 2.7 + 6.7 + 8.9) / 5;
console.log(gemiddelde);

// opdracht 11
let gemiddelde2 = (9.4 + 3.8 + 2.7 + 6.7 + 8.9 + 8.9) / 6;
console.log(gemiddelde2);

// opdracht 12
let gemiddelde3 = (7.7 + 7.6 + 7.3 + 5.8 + 6.9) / 5;
console.log(gemiddelde3);

// opdracht 13


// opdracht 14
let sofie = (9.4 + 3.8 + 2.7 + 6.7 + 8.9) / 5;
let sarah = (7.7 + 7.6 + 7.3 + 5.8 + 6.9) / 5;

if (sofie > sarah) {
    console.log('Sofie');
} else {
    console.log('Sarah');
}

// opdracht 15
let sofie2 = (9.4 + 3.8 + 2.7 + 6.7 + 8.9) / 5;
let sarah2 = (7.7 + 7.6 + 7.3 + 5.8 + 6.9) / 5;

if (sofie2 > sarah2) {
    console.log('Sofie');
    if (sofie2 >= 7) {
        console.log('Goed gedaan, hoger dan een 7!');
    }
} else {
    console.log('Sarah');
    if (sarah2 >= 7) {
        console.log('Goed gedaan, hoger dan een 7!');
    }
}

// opdracht 16
let leeftijd = 16;

if (leeftijd >= 18) {
    console.log('Whieee stufi!');
} else {
    console.log('Helaas geen studiefinanciering :(')
}

// opdracht 17
let leeftijd2 = 19;
let uitwonend = true;

if (leeftijd2 >= 18 && uitwonend === true) {
    console.log('Whieee veel stufi!');
} else if (leeftijd2 >= 18 && uitwonend === false) {
    console.log('Whieee stufi!')
} else {
    console.log('Helaas geen studiefinanciering :(')
}