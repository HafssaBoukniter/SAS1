const prompt = require('prompt-sync')();

//challenge 1
let nombres = [34, 12, 5, 9, 42, 1];

for(let i = 0;i < nombres.length-1; i++){
    for(let j = 0;j < nombres.length-1; j++){
        if(nombres[j] > nombres[j+1]){
            let temp = nombres[j];
            nombres[j] = nombres[j + 1];
            nombres[j + 1] = temp;
        }
    }
}

console.log("Apres le tri :" + nombres.join(","));

//challenge 2
