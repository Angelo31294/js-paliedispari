"use strict"
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = prompt("Scegli: pari o dispari!");
const userChoiceNum = Number(prompt("Scegli un numero da 1 a 5!"));
console.log(userChoiceNum)

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pcChoiceNum = console.log(getRndInteger (1, 5));

// Sommiamo i due numeri
const sum = userChoiceNum + pcChoiceNum;
console.log(sum)

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.