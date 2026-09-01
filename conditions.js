const prompt = require('prompt-sync')();

//challenge 1
let nombre = parseInt(prompt("Entrez un nombre entier :"));
if (nombre % 2 === 0) {
    console.log(`Le nombre ${nombre} est pair.`);
} else {
    console.log(`Le nombre ${nombre} est impair.`);
}

//challenge 2
let lettre = prompt("Entrez une lettre :").toLowerCase();
switch (lettre) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'y':
        console.log(`La lettre "${lettre}" est une voyelle.`);
        break;
    default:
        console.log(`La lettre "${lettre}" est une consonne (ou un autre caractère).`);
}

//challenge 3
let v1 = parseInt(prompt("Saisir 1er valeur entier :"));
let v2 = parseInt(prompt("Entrez 2eme valeur entier :"));
let somme;
if(v1 === v2){
    somme = 3 * (v1 + v2);
}else{
    somme = v1 + v2;
}

console.log(`La somme de deux valeurs entières données est :${somme}`);

//challenge 4
let a = parseInt(prompt("Saisir la valeur de  a:"));
let b = parseInt(prompt("Saisir la valeur de  b:"));
let c = parseInt(prompt("Saisir la valeur de  c:"));

let delta = b**2 - 4*(a*c);
if(delta > 0){
    console.log(`L'équation admet une solution réelle double :
        x1 = (-${b} + ${Math.sqrt(delta)}) / (2*${a})
        x2 = (-${b} - ${Math.sqrt(delta)}) / (2*${a})`);

}else if(delta = 0){
    console.log(` L'équation admet deux solutions réelles distinctes:
        x1 = (-${b}/ (2*${a})`);
}else{
    console.log(`l'équation n'a pas de solution réelle`);
}

//challenge 5


