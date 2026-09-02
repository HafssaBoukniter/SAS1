const prompt = require('prompt-sync')();
/*
//challenge 1
let n = parseInt(prompt("Entrez le nombre pour la table de multiplication :"));

console.log(`Table de multiplication de ${n} :`);
for (let i = 1; i <= 10; i++) {
    let resultat = n * i;
    
    console.log(`${n} * ${i} = ${resultat}`);
}

//challenge 2
let num = parseInt(prompt("Entrez un entier positif pour la factorielle :"));

let factorielle = 1;
for (let i = 1; i <= num; i++) {
    factorielle *= i;
}
console.log(`${num}! = ${factorielle}`);

//challenge 3
let number = parseInt(prompt('Saisir un entier positif :'));

let somme = 0;
for(let i=0;i<number;i++){
    somme+=i;
}
console.log(`La somme ${number} est : ${somme}`);
*/
//challenge 4
let n1 = parseInt(prompt("Saisir un nombre positif :"))
let i = 1;
do{
    if(i%2==0){
        continue;
    }else{
        console.log(i);
        i++;
    }
}while(i);