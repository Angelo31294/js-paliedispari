"use strict"
// Chiedere all’utente di inserire una parola
const word = prompt("inserisci una parola palindroma");

// Creare una funzione per capire se la parola inserita è palindroma
function inArray(word) {

    for (let i = 0; i < word.length / 2 ; i++){
        
        if (word[word.length - 1 - i] !== word[i]){
            return false;
        }
    
        return true;
    }
};

const value = inArray(word);
console.log(value);