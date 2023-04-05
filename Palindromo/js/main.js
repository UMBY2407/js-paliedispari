//----------------------------------- PROGRAMMA PRINCIPALE -----------------------------------//

let arrayString = [];
let reverseArrayString = [];
let word = prompt("Scrivere una parola per vedere se è palindroma:");
word = isUserInputaString(word);
let result = palindromeString(word);
console.log(result);


//------------------------------------ FUNZIONI --------------------------------------------//

function isUserInputaString (stringa) {
    while(!isNaN(stringa)){
        stringa = prompt("Non hai digitato una parola! Reinseriscila:");
    }
    return stringa;
}


function palindromeString(stringa){
    arrayString = stringa.split("");
    reverseArrayString = stringa.split("");
    reverseArrayString = reverseArrayString.reverse();
    let userString = arrayString.toString();
    let reverseUserString = reverseArrayString.toString();
    if(userString == reverseUserString){
        return "La parola è palindroma!";
    }
    return "La parola non è palindroma!";
}