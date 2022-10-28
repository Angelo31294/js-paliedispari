"use strict"
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = prompt("Scegli: pari o dispari!");
const pari = (userChoice === "pari");
const dispari = (userChoice === "dispari");
const userChoiceNum = Number(prompt("Scegli un numero da 1 a 5!"));
console.log(userChoiceNum);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRndInteger(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pcChoiceNum = (getRndInteger (1, 5));
console.log(pcChoiceNum)

// Sommiamo i due numeri
const sum = userChoiceNum + pcChoiceNum;
console.log(sum)

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function isEvenorOdd(sum) {
    if(sum % 2 === 0){
        return true;
    }
    return false;
}
console.log(isEvenorOdd(sum))

// Dichiariamo chi ha vinto.
if(userChoiceNum === isEvenorOdd(sum) && userChoice === "pari"){
    console.log("Ha vinto l'utente");
} else if (userChoiceNum === isEvenorOdd(sum) && userChoice === "pari"){
    console.log("Ha vinto il Pc");
} else if (userChoiceNum === isEvenorOdd(sum) && userChoice === "dispari"){
    console.log("Ha vinto l'utente");
} else if (userChoiceNum === isEvenorOdd(sum) && userChoice === "dispari"){
    console.log("Ha vinto il Pc");
}