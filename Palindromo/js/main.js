//----------------------------------- PROGRAMMA PRINCIPALE -----------------------------------//

let word = prompt("Scrivere una parola per vedere se è palindroma:");
let arrayString = [];
let reverseArrayString = [];
let result = palindromeString(word);
console.log(result);


//------------------------------------ FUNZIONI --------------------------------------------//

function palindromeString(stringa){
    arrayString = stringa.split("");
    reverseArrayString = stringa.split("");
    reverseArrayString = reverseArrayString.reverse();
        console.log(arrayString + " " + reverseArrayString);
    if(arrayString == reverseArrayString){
        return "La parola è palindroma!";
    }
    return "La parola non è palindroma!";
}