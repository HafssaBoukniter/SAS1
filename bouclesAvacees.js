//challenge 1 
let n = parseInt(prompt("Entrez le nombre de la table souhaitée :"));
for (let i = 10; i >= 1; i--) {
    let resultat = n * i;
   console.log(`${n} * ${i} = ${resultat}`);
}
/*
//challenge 2
let num = parseInt(prompt("Entrez un  nombre des lignes :"));
for (let i = 1; i <= num; i++) {
  let ligne = "";
  for (let j = 1; j <= i; j++) {
    ligne += "*";
  }
  console.log(ligne);
}

//challenge 3
let nombre = parseInt(prompt("Entrez un nombre entier :"));
let estPremier = true;
for (let i = 1; i <= nombre; i++) {
  if (nombre % i === 0) {
    if (i !== 1 && i !== nombre) {
      estPremier = false;
      break;
    }
  }
}
if (estPremier) {
  console.log(`${nombre} est un nombre premier`);
} else {
  console.log(`${nombre} n'est pas un nombre premier`);
}

//challenge 6
let number = parseInt(prompt("Entrez un nombre entier :"));
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}
*/