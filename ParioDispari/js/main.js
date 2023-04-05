//--------------------------- PROGRAMMA PRINCIPALE ------------------------//
alert("Benvenuto/a al gioco 'Pari o Dispari'! Prima devi scommettere se il risultato sarà pari o dispari. Quindi scegli un numero da 1 a 5, che verrà poi sommato al numero scelto dalla CPU, se la somma tra i due numeri sarà uguale a alla tua scommessa, allora avrai vinto!")

let userChoice = prompt("Pari o dispari?");
userChoice = userChoiceValidator(userChoice);

let userNumber = prompt("Scegli un numero");
userNumber = userInputValidator(userNumber);

let cpuNumber = cpuRandomNumberGenerator();
    console.log(cpuNumber);

let winner = matchWinner(userNumber, cpuNumber, userChoice);
    console.log(winner);


//--------------------------- FUNZIONI -------------------------------------//

function userChoiceValidator (stringa) {
    while (stringa != "pari" && stringa != "dispari"){
        stringa = prompt("La tua scelta non è corretta... Riprova!");
    }
        console.log(stringa);
    return stringa;
}


function userInputValidator (numero) {
    while(isNaN(numero) || 1 > numero || numero > 5){
        numero = prompt("Il tuo numero non è corretto!! Riprova!");
    }
    numero = parseInt(numero);
        console.log(numero);
    return numero;
}

function cpuRandomNumberGenerator(){
    return Math.floor(Math.random() * 5) + 1;
}

function matchWinner(numero1, numero2, stringa) {
    let winner;
    let somma = numero1 + numero2;
        console.log(somma);
    if(somma % 2 == 0){
        if(stringa == "pari"){
            winner = "Hai Vinto!";
            return winner;
        } else {
            winner = "Hai perso :(";
            return winner;
        }
    }else {
        if(stringa == "dispari"){
            winner = "Hai Vinto!";
            return winner;
        } else {
            winner = "Hai perso :(";
            return winner;
        }
    }
}