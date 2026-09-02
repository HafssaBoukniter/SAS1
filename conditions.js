const prompt = require('prompt-sync')();
/*
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
let month = prompt("Saisir le mois :");
let jours;
let houres;
let minutes;
let secondes;

switch(month){
    case 'january':
    case 'march':
    case 'may' :
    case'july':
    case 'august':
    case 'october' :
    case'december' : 
        jours = 31;
        houres = jours*24;
        minutes=houres*60;
        secondes=minutes*60;
        console.log(`le mois ${month} = ${jours} jours = ${houres} h = ${minutes} m =${secondes} s`);
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november' : 
        jours = 30;
        houres = jours*24;
        minutes=houres*60;
        secondes=minutes*60;
        console.log(`le mois ${month} = ${jours} jours = ${houres} h = ${minutes} m =${secondes} s`);
        break;
    case 'february' :
        jours = 28;
        houres = jours*24;
        minutes=houres*60;
        minutes=secondes*60;
        console.log(`le mois ${month} = ${jours} jours = ${houres} h = ${minutes} m =${secondes} s`);
        break;
    default :
        console.log(`error`);
}

//challenge 6
let numb = parseInt(prompt("Saisir un nombre :"));
if(numb > 0){
    console.log(`Le nombre ${numb}est positif`);
}else if(numb < 0){
    console.log(`Le nombre ${numb}est négatif`);
}else{
    console.log(`le nombre ${numb} est égal à zéro.`);
}

//challenge 7
//charCodeAt()
let alphabet = prompt("Saisir un caractère :");
let code = alphabet.charCodeAt(0);
if(code >= 97 && code <= 122){
    console.log(`Le caractère ${alphabet} donné est un alphabet miniscule et sa valeur ASCII ${code}`);
}else{
    console.log(`Le caractère ${alphabet} donné est un alphabet majuscule et sa valeur ASCII ${code}`);
}

//challenge 8
let moyenne = prompt("Saisir votre moyenne :");
if(moyenne >= 10 && moyenne < 12){
    console.log(`votre montion est passable`);
}else if(moyenne >= 12 && moyenne < 14){
    console.log(`votre montion est assez bien`);
}else if(moyenne >= 14 && moyenne < 16){
    console.log(`votre montion est bien`);
}else if(moyenne >= 16){
    console.log(`votre montion est trés bien`);
}else{
    console.log(`Votre moyenne est recalé`);
}

//challenge 9
let alphabet1 = prompt("Saisir un caractère :");

if(typeof alphabet1 === 'string' && alphabet1.length === 1){
    let code = alphabet1.charCodeAt(0);
    if(code >= 97 && code <= 122){
        console.log(`Le caractère ${alphabet1} donné est un alphabet miniscule`);
    }else{
        console.log(`Le caractère ${alphabet1} donné est un alphabet majuscule `);
    }
}else{
    console.log(`Le caractère ${alphabet1} donné pas un alphabet `);
}

//challenge 10
let date = prompt("Saisir une date au format DD/MM/YYYY :");
console.log(date);
let dateSplit =date.split("/");
console.log(dateSplit);
switch(Number(dateSplit[1])){
    case 1 : 
        dateSplit[1] = "January";
        break;
    case 2 : 
        dateSplit[1] = "February";
        break;
    case 3 : 
        dateSplit[1] = "March";
        break;
    case 4 : 
        dateSplit[1] = "April";
        break;
    case 5 : 
        dateSplit[1] = "May";
        break;
    case 6 : 
        dateSplit[1] = "June";
        break;
    case 7 : 
        dateSplit[1] = "July";
        break;
    case 8 : 
        dateSplit[1] = "August";
        break;
    case 9 : 
        dateSplit[1] = "September";
        break;
    case 10 : 
        dateSplit[1] = "October";
        break;
    case 11 : 
        dateSplit[1] = "November";
        break;
    case 12  : 
        dateSplit[1] = "December";
        break;
    default : 
        console.log("Error");
}

date = dateSplit.join('-');
console.log(`votre date selectionee est ${date}`);
*/
//challenge 11
let jours = "";


//challenge 12


