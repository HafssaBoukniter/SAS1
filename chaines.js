const prompt = require('prompt-sync')();

//ex1
// let text =
// `The quick
// brown fox
// jumps over
// the lazy dog`;

// console.log(text.split(""));

//ex2
// let text2 = "Hello";
// console.log(text2.at(1));

//ex3
// let x = "youcode";
// console.log(x[0].toUpperCase() + x.slice(1,x.length+1));

// let s = "";
// for(let i=1; i < x.length;i++){
//     s+=x[i];
// }
// console.log(x[0].toUpperCase() + s);

//ex4
// function isPalindrome(text){
//     // let chaine = text.split('').reverse().join('');
//     // if(text == chaine){
//     //     return true;
//     // }else{
//     //     return false;
//     // }
//     let chaine = text.split('').reverse();
//     for(let i = 0;i < text.length;i++){
//         for(let j = text.length;j < text.length;i--){
//             if(text[i] == chaine[j]){
//                 return true;
//                 break;
//             }else{
//                 return false;
//             }
//         }
//     }
// }

// function isPalindrome(text) {
//     for (let i = 0; i < text.length / 2; i++) {
//         if (text[i] !== text[text.length - 1 - i]) {
//             return false;
//         }else{
//             return true;
//         }
//     }
// }

// function isPalindrome(text){
//     let leng = text.length;
//     if(leng % 2==0){
//         let len = text.length / 2;
//         let x = text.slice(0,len);
//         let y = text.slice(len);
//         let inv = y.split("").reverse().join("");
//         if(x == inv){
//             return true;
//         }else{
//             return false;
//         }
//     }else{
//         let len = Math.floor(text.length / 2);
//         let x = text.slice(0,len-1);
//         let y = text.slice(len+1);
//         let inv = y.split("").reverse().join("");
//         if(x == inv){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// let textP = prompt("Entrez une chaine :")
// if(isPalindrome(textP.trim())){
//     console.log(`La chaine ${textP} est palindrome`);
// }else{
//     console.log(`La chaine ${textP} pas un palindrome`);
// }

//ex5
let name1 = prompt("Entrez le 1er nom :");
let name2 = prompt("Entrez le 2eme nom :");

function isAnagramme(name1,name2){
    if(name1.length == name2.length){
        let tab1 = name1.split("");
        let tab2 = name2.split("");

        let tabSort1 = tab1.sort().join();
        let tabSort2 = tab2.sort().join();

        if(tabSort1 == tabSort2){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

if(isAnagramme(name1,name2)){
    console.log(`${name1} is anagramme de ${name2}`);
}else{
    console.log("n'est pas anagramme");
}


/*
//challenge 1
let texte = prompt("Entrer un text :");

console.log(`Vous avez tapé : ${texte}`);

//challenge 2
let texte1 = prompt("Entrer un texte :");
let compteur = 0;
// for(let caractere of texte1){
//     compteur++;

// }
let i = 0;
while(texte1[i] !== undefined){
    compteur++;
    i++;
}

console.log(`La longueur de ${texte1} est de ${compteur} caractères`);

//challenge 3
let chaine1 = prompt("Entrez le premier chaine :");
let chaine2 = prompt("Entrez la dexieme chaine :");

console.log(chaine1.concat(" ", chaine2));

//challenge 4
let chaine3 = prompt("Entrez le premier chaine :");
let chaine4 = prompt("Entrez la dexieme chaine :");

if(chaine3 == chaine4){
    console.log(`Les chaines ${chaine3} et ${chaine4} sont égales.`);
}else{
    console.log(`Les chaines ${chaine3} et ${chaine4} sont different.`);
}

//challenge 5
let chaine = prompt("Entrez une chaine :");
function inverce(text){
    return text.split("").reverse().join("");
}

console.log(`l'inverse de ${chaine} est ${inverce(chaine)}`);

//challenge 6
//matchAll
let text = prompt("Entrez une chaine :");
let car = prompt("Entrez un character :");

let res = [...text.matchAll(car)];

if(res){
    console.log(`Le caractère est affiche ${res.length} fois dans la chaine ${text}`);
}else{
    console.log(`La chaine ${text} ne contient pas ${car}`);
}

//challenge 7
let chaineMin = prompt("Entez une chaine miniscule :");

console.log(chaineMin.toUpperCase());

//challenge 8 
let chaineMaj = prompt("Entez une chaine miniscule :");

console.log(chaineMin.toLowerCase());

//challenge 9
let chaineEspace = prompt("Entrez une chaine :");
function removeSpace(text){
    let space = text.split(" ");
    return space.join("");
}

console.log(`La chaine ${removeSpace(chaineEspace)} et ${chaineEspace} avant supprimation`);

//challenge 10
let chainePrincipale = prompt("Entrez une chaine :");
let sousChaine = prompt("Entrez une sous-chaine :");
let tr =chainePrincipale.indexOf(sousChaine);

if(tr != -1){
    console.log(`La sous-chaîne ${sousChaine} est présente dans la chaîne principale ${chainePrincipale}`);
}else{
    console.log(`Aucun sous-chaîne ${sousChaine} dans la chaine principale ${chainePrincipale}`);
}
*/