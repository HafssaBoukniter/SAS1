const prompt = require('prompt-sync')();
/*
//challenge 1
let personne = {
    nom: "Boukniter",
    prenom: "Hafssa",
    age: 24
};

console.log(`Informations de la personne :
    Nom : ${personne.nom}
    Prénom : ${personne.prenom}
    Âge : ${personne.age} ans`);

//challenge 2
let etudiant = {
    nom: "Boukniter",
    prenom: "Hafssa",
    notes: [14, 16, 12, 18, 15]
};

console.log(`Etudiant : ${etudiant.nom} ${etudiant.prenom}`);

console.log(`Liste des notes : ${etudiant.notes.join(", ")}`);

let somme = 0;
for(let note of etudiant.notes){
    somme += 0;
}
let moyenne = somme / etudiant.notes.length;

console.log(`Moyenne : ${moyenne}`);

//challenge 3
const rectangle ={
    longueur : 12,
    largeur : 8
};

let air = rectangle.longueur * rectangle.largeur;

console.log(`L'aire du rectangle est ${air}`);

//challenge 4
const point ={
    x : 3,
    y : 2
};

point.x = 4;
point.y = 1;

console.log(`Les coordonnes d'un point dans un plan est (${point.x},${point.y})`);

//challenge 5
// const livre ={
//     titre : ,
//     auteur : ,
//     annee : ,
//     info : function(){
//         return this.titre + " " + this.auteur + " " + ;
//     }
// };

function creeObjet(titre,auteur,annee){
    const livre ={
        titre,
        auteur,
        annee
    };

    return "Le titre de livre : " +livre.titre + " ,l'auteur " + livre.auteur + " et l'anne " + livre.annee;
};

let titre = prompt("Saisir le titre de Livre : ");
let auteur = prompt("Saisir l'auteur de Livre : ");
let annee = prompt("Saisir l'annee de Livre : ");

//console.log(creeObjet("Jean. Psychologie de l'orientation","Guichard",2006));
console.log(creeObjet(titre,auteur,annee));
*/

//menu inside menu 
//menu
//|__Home
//   |__Welcome
//   |__About us 
//   |__Contact
//|__Products
//   |__New Arrivals
//   |__Best Sellers
//   |__Categories
//|__Services
//   |__Consulting
//   |__Support
//   |__FAQ

const menu = {
    home : {
        welcome : "Welcome",
        aboutUs : "About-us",
        contact : "Contact",
    },

    products : {
        newArrivals : "new Arrivals",
        bestSellers : "Best Sellers",
        categories : "Categories",
    },

    services : {
        consulting : "Consulting",
        support : "Support",
        faq : "FAQ",
    },
};

let choix;
do{
    choix = Number(prompt(`    Menu    
    1-Home 
    2-Products
    3-Services 
    `));

    switch(choix){
        case 1 : let home =prompt(`    Home    
        1-Welcome 
        2-About-us
        3-Contact 
        #-Back
        `);
            switch(home){
                case '1' : console.log(menu.home.welcome);
                break;
                case '2' : console.log(menu.home.aboutUs);
                break;
                case '3' : console.log(menu.home.contact);
                break;
                case '#' : 
                break;
            }
        break;
        case 2 : let produits =prompt(`    Products    
        1-New arrivals 
        2-Best sellers
        3-Categories 
        #-Back
        `);
            switch(produits){
                case '1' : console.log(menu.products.newArrivals);
                break;
                case '2' : console.log(menu.products.bestSellers);
                break;
                case '3' : console.log(menu.products.categories);
                break;
                case '#' : 
                break;
            }
        break;
        case 3 : let services =prompt(`    Products    
        1-Consulting
        2-Support
        3-FAQ
        #-Back
        `);
            switch(services){
                case '1' : console.log(menu.services.consulting);
                break;
                case '2' : console.log(menu.services.support);
                break;
                case '3' : console.log(menu.services.faq);
                break;
                case '#' : 
                break;
            }
        break;
    };
}while(choix !== 4);


